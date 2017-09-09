package main

import (
	"context"
	"fmt"

	"github.com/dustin/go-humanize"
	"github.com/gosuri/uitable"
	pb "github.com/partycloud/party/proto/daemon"
	"github.com/spf13/cobra"
)

var name string
var guild string
var image string
var dataFrom string

var serversCmd = &cobra.Command{
	Use:   "servers",
	Short: "Manage servers",
	RunE:  ListServers,
}

var createServerCmd = &cobra.Command{
	Use:   "create",
	Short: "Create a new server right meow",
	RunE:  CreateServer,
}

var startServerCmd = &cobra.Command{
	Use:   "start",
	Short: "Start server",
	RunE:  StartServer,
}

var stopServerCmd = &cobra.Command{
	Use:   "stop",
	Short: "Stop server",
	RunE:  StopServer,
}

var delServerCmd = &cobra.Command{
	Use:   "delete",
	Short: "Delete server",
	RunE:  DeleteServer,
}

func init() {
	RootCmd.AddCommand(serversCmd)

	serversCmd.AddCommand(createServerCmd)
	// createServerCmd.Flags().StringVarP(&guild, "guild", "g", "", "Name or ID of guild")
	createServerCmd.Flags().StringVarP(&name, "name", "n", "", "Server name")
	createServerCmd.Flags().StringVarP(&image, "image", "i", "", "Image name eg: partycloud/minecraft")
	createServerCmd.Flags().StringVarP(&dataFrom, "data-from", "d", "", "Bootstrap server with data from this directory")

	serversCmd.AddCommand(startServerCmd)
	serversCmd.AddCommand(stopServerCmd)
	serversCmd.AddCommand(delServerCmd)
}

func ListServers(cmd *cobra.Command, args []string) error {
	return DCall(func(client pb.DaemonClient) error {
		resp, err := client.ListServers(context.Background(), &pb.ListServersRequest{Page: 0, Limit: 100})
		if err != nil {
			return err
		}

		table := uitable.New()
		table.MaxColWidth = 50

		table.AddRow("ID", "NAME", "IMAGE", "STATUS", "HASH", "SIZE")
		for _, s := range resp.Servers {
			table.AddRow(
				s.Id,
				s.Name,
				s.Image,
				s.Status,
				fmt.Sprintf("%x", s.Fileset.Hash),
				humanize.Bytes(s.Fileset.Bytes),
			)
		}
		fmt.Println(table)
		return nil
	})
}

func CreateServer(cmd *cobra.Command, args []string) error {
	return DCall(func(client pb.DaemonClient) error {
		req := &pb.CreateServerRequest{
			Image:         image,
			Name:          name,
			ImportDataDir: dataFrom,
		}
		resp, err := client.CreateServer(context.Background(), req)
		if err != nil {
			return err
		}
		fmt.Println(resp)
		return nil
	})
}

func StartServer(cmd *cobra.Command, args []string) error {
	id := args[0]

	return DCall(func(client pb.DaemonClient) error {
		req := &pb.StartServerRequest{
			Id: id,
		}
		resp, err := client.StartServer(context.Background(), req)
		if err != nil {
			return err
		}
		fmt.Println(resp)
		return nil
	})
}

func StopServer(cmd *cobra.Command, args []string) error {
	id := args[0]

	return DCall(func(client pb.DaemonClient) error {
		req := &pb.StopServerRequest{
			Id: id,
		}
		resp, err := client.StopServer(context.Background(), req)
		if err != nil {
			return err
		}
		fmt.Println(resp)
		return nil
	})
}

func DeleteServer(cmd *cobra.Command, args []string) error {
	id := args[0]

	return DCall(func(client pb.DaemonClient) error {
		req := &pb.DeleteServerRequest{
			Id: id,
		}
		resp, err := client.DeleteServer(context.Background(), req)
		if err != nil {
			return err
		}
		fmt.Println(resp)
		return nil
	})
}
