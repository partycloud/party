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
	env.DataPath = folders[0].Path
	fmt.Println("Data stored at", env.DataPath)
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

	go RunDaemon(ctx)
	go func() {
		env.MemberList = party.RunMemberList(ctx)
	}()

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
	return party.ListServers(ctx, req)
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
