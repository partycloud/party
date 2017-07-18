package main

import (
	"errors"
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
	pb "github.com/partycloud/party/proto"
	"github.com/spf13/pflag"
	"github.com/spf13/viper"
	"google.golang.org/grpc"

	"github.com/shibukawa/configdir"
	"github.com/shurcooL/trayhost"
)

var cfgPath string

func init() { runtime.LockOSThread() }

func main() {
	pflag.CommandLine.AddGoFlagSet(flag.CommandLine)
	configDirs := configdir.New("Partycloud", "Tray")

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
	err = viper.ReadInConfig()
	if err != nil {
		panic(fmt.Errorf("fatal error config file: %s", err))
	}

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

func (s *DServer) ListServers(ctx context.Context, req *pb.ListServersRequest) (*pb.ListServersResponse, error) {
	return nil, errors.New("Not implemented")
}

func (s *DServer) ListGuilds(ctx context.Context, req *pb.ListGuildsRequest) (*pb.ListGuildsResponse, error) {
	return party.ListGuilds(ctx, req)
}

func (s *DServer) Events(stream pb.PCDaemon_EventsServer) error {
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

func RunDaemon(ctx context.Context) {
	l, err := net.Listen("tcp", "0.0.0.0:"+strconv.Itoa(viper.GetInt("port")))
	if err != nil {
		panic(err)
	}
	defer l.Close()

	grpcSrv := grpc.NewServer()
	srv := &DServer{}
	pb.RegisterPCDaemonServer(grpcSrv, srv)

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
	cfg := memberlist.DefaultLANConfig()
	cfg.LogOutput = ioutil.Discard
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
	defer list.Shutdown()
	defer list.Leave(1 * time.Second)

	<-ctx.Done()
	fmt.Println("stopping gossip")
}
