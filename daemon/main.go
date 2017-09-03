package main

import (
	"flag"
	"fmt"
	"io"
	"io/ioutil"
	"log"
	"net"
	"os"
	"os/signal"
	"path"
	"path/filepath"
	"runtime"
	"strconv"
	"syscall"

	"golang.org/x/net/context"

	"github.com/partycloud/party"
	pb "github.com/partycloud/party/proto/daemon"
	"github.com/spf13/pflag"
	"github.com/spf13/viper"
	"google.golang.org/grpc"

	"github.com/shibukawa/configdir"
	"github.com/shurcooL/trayhost"
)

var cfgPath string
var env party.Environment

func init() { runtime.LockOSThread() }

func main() {
	pflag.CommandLine.AddGoFlagSet(flag.CommandLine)
	configDirs := configdir.New("Partycloud", "Data")

	folders := configDirs.QueryFolders(configdir.Global)
	cfgPath = folders[0].Path
	err := os.MkdirAll(cfgPath, os.ModeDir)
	if err != nil {
		panic(err)
	}

	viper.SetConfigName("config")
	viper.AddConfigPath(cfgPath)
	viper.AddConfigPath("$HOME/.party")
	viper.AddConfigPath(".")
	viper.ReadInConfig()

	pflag.Int("gossip-port", 7946, "")
	viper.BindPFlag("gossip-port", pflag.Lookup("gossip-port"))
	pflag.Int("sync-port", 8384, "")
	viper.BindPFlag("sync-port", pflag.Lookup("sync-port"))
	pflag.Int("sync-gui-port", 22000, "")
	viper.BindPFlag("sync-gui-port", pflag.Lookup("sync-gui-port"))

	pflag.String("device-id", "", "")
	viper.BindPFlag("device-id", pflag.Lookup("device-id"))
	pflag.String("name", "", "")
	viper.BindPFlag("name", pflag.Lookup("name"))

	pflag.StringSlice("peers", []string{}, "")
	viper.BindPFlag("peers", pflag.Lookup("peers"))

	pflag.Int("port", 38387, "")
	viper.BindPFlag("port", pflag.Lookup("port"))

	pflag.Parse()

	menuItems := []trayhost.MenuItem{
		{
			Title: "Open",
		},
		trayhost.SeparatorMenuItem(),
		{
			Title:   "Quit",
			Handler: trayhost.Exit,
		},
	}

	// @TODO make this work on windows
	ep, err := os.Executable()
	if err != nil {
		log.Fatalln("os.Executable:", err)
	}
	dir := filepath.Join(filepath.Dir(ep), "..", "Resources")
	err = os.Chdir(dir)
	if err != nil {
		log.Fatalln("os.Chdir:", err)
	}

	iconData, err := ioutil.ReadFile("Icon.png")
	if err != nil {
		panic(err)
	}

	sigchan := make(chan os.Signal, 1)
	signal.Notify(sigchan, syscall.SIGINT, syscall.SIGTERM)
	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()
	go func() {
		sig := <-sigchan
		fmt.Printf("Caught signal %v: terminating\n", sig)
		cancel()
		fmt.Println("stopping trayhost")
		trayhost.Exit()
	}()

	env.DataPath = path.Join(folders[0].Path, strconv.Itoa(viper.GetInt("port")))
	env.DeviceID = viper.GetString("device-id")

	go RunDaemon(ctx)
	go RunMemberList(ctx)
	go RunFilesync(ctx)

	trayhost.Initialize("Partycloud", iconData, menuItems)
	trayhost.EnterLoop()
}

type DServer struct{}

func (s *DServer) CreateServer(ctx context.Context, req *pb.CreateServerRequest) (*pb.CreateServerResponse, error) {
	return env.CreateServer(ctx, req)
}

func (s *DServer) StartServer(ctx context.Context, req *pb.StartServerRequest) (*pb.StartServerResponse, error) {
	return env.StartServer(ctx, req)
}

func (s *DServer) StopServer(ctx context.Context, req *pb.StopServerRequest) (*pb.StopServerResponse, error) {
	return env.StopServer(ctx, req)
}

func (s *DServer) ListServers(ctx context.Context, req *pb.ListServersRequest) (*pb.ListServersResponse, error) {
	return env.ListServers(ctx, req)
}

func (s *DServer) ListGuilds(ctx context.Context, req *pb.ListGuildsRequest) (*pb.ListGuildsResponse, error) {
	return party.ListGuilds(ctx, req)
}

func (s *DServer) ListMembers(ctx context.Context, req *pb.ListMembersRequest) (*pb.ListMembersResponse, error) {
	return env.ListMembers(ctx, req)
}

// Events sends updates to electron app
func (s *DServer) Events(stream pb.Daemon_EventsServer) error {
	for {
		in, err := stream.Recv()
		if err == io.EOF {
			return nil
		}
		if err != nil {
			return err
		}

		fmt.Println("recv", in)

		// if err = party.HandleEvent(in); err != nil {
		// 	return err
		// }

		stream.Send(&pb.Event{Type: "hi"})
	}
}

// RunDaemon starts local daemon process
func RunDaemon(ctx context.Context) {
	addr := "0.0.0.0:" + strconv.Itoa(viper.GetInt("port"))
	l, err := net.Listen("tcp", addr)
	if err != nil {
		panic(err)
	}
	defer l.Close()
	fmt.Println("Started grpc:", addr)

	grpcSrv := grpc.NewServer()
	srv := &DServer{}
	pb.RegisterDaemonServer(grpcSrv, srv)

	go grpcSrv.Serve(l)
	<-ctx.Done()
	os.Exit(0) // This shouldn't be required but trayhost isn't stopping
	fmt.Println("stopping daemon")
}

func RunMemberList(ctx context.Context) {
	env.MemberList = party.RunMemberList(ctx)
}

func RunFilesync(ctx context.Context) {
	fs := party.NewFileSync(ctx, env.DataPath)
	fmt.Println(fs)
	env.LocalFilesets()

	resp, err := env.ListServers(ctx, &pb.ListServersRequest{})
	if err != nil {
		panic(err)
	}

	serversStopped := true
	for _, s := range resp.Servers {
		if s.Status != pb.Server_STOPPED {
			serversStopped = false
		}
	}

	if serversStopped {
		for _, s := range resp.Servers {
			fmt.Println("no servers running, we should seed", s)
		}
	}
}
