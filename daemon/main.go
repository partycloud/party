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
	"time"

	"golang.org/x/net/context"

	"github.com/hashicorp/memberlist"
	"github.com/partycloud/party"
	pb "github.com/partycloud/party/proto/daemon"
	"github.com/spf13/pflag"
	"github.com/spf13/viper"
	"google.golang.org/grpc"

	"github.com/shibukawa/configdir"
	"github.com/shurcooL/trayhost"
)

var cfgPath string
var cfg party.Config

func init() { runtime.LockOSThread() }

func main() {
	pflag.CommandLine.AddGoFlagSet(flag.CommandLine)
	configDirs := configdir.New("Partycloud", "Data")

	folders := configDirs.QueryFolders(configdir.Global)
	cfgPath = folders[0].Path
	cfg.DataPath = folders[0].Path
	fmt.Println("Data stored at", cfg.DataPath)
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
	go RunMemberList(ctx)

	trayhost.Initialize("Partycloud", iconData, menuItems)
	trayhost.EnterLoop()
}

type DServer struct{}

func (s *DServer) CreateServer(ctx context.Context, req *pb.CreateServerRequest) (*pb.CreateServerResponse, error) {
	return cfg.CreateServer(ctx, req)
}

func (s *DServer) StartServer(ctx context.Context, req *pb.StartServerRequest) (*pb.StartServerResponse, error) {
	return cfg.StartServer(ctx, req)
}

func (s *DServer) StopServer(ctx context.Context, req *pb.StopServerRequest) (*pb.StopServerResponse, error) {
	return cfg.StopServer(ctx, req)
}

func (s *DServer) ListServers(ctx context.Context, req *pb.ListServersRequest) (*pb.ListServersResponse, error) {
	return party.ListServers(ctx, req)
}

func (s *DServer) ListGuilds(ctx context.Context, req *pb.ListGuildsRequest) (*pb.ListGuildsResponse, error) {
	return party.ListGuilds(ctx, req)
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
		fmt.Println("recv", in.Type)
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

type MemberEventHandler struct {
}

func (h *MemberEventHandler) NotifyJoin(node *memberlist.Node) {
	fmt.Printf("Join: %s %s\n", node.Name, node.Address())
}

func (h *MemberEventHandler) NotifyLeave(node *memberlist.Node) {
	fmt.Printf("Leave: %s %s\n", node.Name, node.Address())
}

func (h *MemberEventHandler) NotifyUpdate(node *memberlist.Node) {
	fmt.Printf("Update: %s %s\n", node.Name, node.Address())
}

func RunMemberList(ctx context.Context) {
	guildId := ""

	guildCh := make(chan *pb.Guild)
	go func() {
		for {
			select {
			case <-ctx.Done():
				return
			case <-time.After(1 * time.Second):
				guild, err := party.ConnectedGuild(ctx)
				if err != nil {
					panic(err)
				}

				if guild != nil && guild.Id != guildId {
					// we changed guild
					guildId = guild.Id
					guildCh <- guild
				}
			}
		}
	}()

	for guild := range guildCh {
		fmt.Println("starting gossip", guild)

		cfg := memberlist.DefaultLANConfig()
		cfg.LogOutput = ioutil.Discard
		cfg.BindAddr = guild.Ip
		cfg.BindPort = viper.GetInt("gossip-port")
		cfg.Events = &MemberEventHandler{}
		cfg.Name = viper.GetString("name")

		list, err := memberlist.Create(cfg)
		if err != nil {
			panic("Failed to create memberlist: " + err.Error())
		}
		fmt.Println("gossip listening", cfg.BindPort)
		peers := viper.GetStringSlice("peers")
		fmt.Println("finding friends", peers)

		join := func() error {
			_, err := list.Join(peers)
			return err
		}
		for {
			err = join()
			if err == nil {
				break
			}
			time.Sleep(1 * time.Second)
		}

		<-ctx.Done()
		fmt.Println("stopping gossip")
	}
}
