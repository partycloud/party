package main

import (
	"context"
	"errors"
	"fmt"

	"github.com/gosuri/uitable"
	pb "github.com/partycloud/party/proto"
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

func init() {
	RootCmd.AddCommand(createServerCmd)
	createServerCmd.Flags().StringVarP(&guild, "guild", "g", "", "Name or ID of guild")
	createServerCmd.Flags().StringVarP(&name, "name", "n", "", "Server name")
	createServerCmd.Flags().StringVarP(&image, "image", "i", "", "Image name eg: partycloud/minecraft")
	createServerCmd.Flags().StringVarP(&dataFrom, "data-from", "d", "", "Bootstrap server with data from this directory")

	RootCmd.AddCommand(startServerCmd)
	startServerCmd.Flags().StringVarP(&guild, "guild", "g", "", "Name or ID of guild")
	startServerCmd.Flags().StringVarP(&name, "name", "n", "", "Server name")
	startServerCmd.Flags().StringVarP(&image, "image", "i", "", "Image name eg: partycloud/minecraft")
}

var createServerCmd = &cobra.Command{
	Use:   "create",
	Short: "Create a new server right meow",
	RunE:  CreateServer,
}

var startServerCmd = &cobra.Command{
	Use:   "start",
	Short: "Start up a guild server",
	RunE:  StartServer,
}

func ListServers(cmd *cobra.Command, args []string) error {
	return DCall(func(client pb.PCDaemonClient) error {
		resp, err := client.ListServers(context.Background(), &pb.ListServersRequest{Page: 0, Limit: 100})
		if err != nil {
			return err
		}

		table := uitable.New()
		table.MaxColWidth = 50

		table.AddRow("ID", "NAME", "IMAGE")
		for _, s := range resp.Servers {
			table.AddRow(s.Id, s.Name, s.Image)
		}
		fmt.Println(table)
		return nil
	})
}

func CreateServer(cmd *cobra.Command, args []string) error {
	return errors.New("Not implemented")
}

// @TODO this command shouldn't take image as an arg
func StartServer(cmd *cobra.Command, args []string) error {
	return errors.New("Not implemented")
}
