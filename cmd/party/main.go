package main

import (
	"fmt"
	"os"
	"strconv"

	pb "github.com/partycloud/party/proto"
	"google.golang.org/grpc"
)

func DCall(fn func(client pb.PCDaemonClient) error) error {
	conn, err := grpc.Dial("127.0.0.1:"+strconv.Itoa(Cfg.DaemonPort), grpc.WithInsecure())
	if err != nil {
		return err
	}
	defer conn.Close()
	client := pb.NewPCDaemonClient(conn)

	return fn(client)
}

func main() {
	if err := RootCmd.Execute(); err != nil {
		fmt.Println(err)
		os.Exit(1)
	}
}
