package main

import (
	"context"

	"github.com/partycloud/party"
	"github.com/spf13/cobra"
)

var name string
var guild string
var image string
var dataFrom string

func NewServersCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "servers",
		Short: "Manage servers",
		RunE:  ListServers,
	}

	cmd.AddCommand(NewCreateServerCmd())
	cmd.AddCommand(NewStartServerCmd())

	return cmd
}

func NewCreateServerCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create",
		Short: "Create a new server right meow",
		RunE:  CreateServer,
	}

	cmd.Flags().StringVarP(&guild, "guild", "g", "", "Name or ID of guild")
	cmd.Flags().StringVarP(&name, "name", "n", "", "Server name")
	cmd.Flags().StringVarP(&image, "image", "i", "", "Image name eg: partycloud/minecraft")
	cmd.Flags().StringVarP(&dataFrom, "data-from", "d", "", "Bootstrap server with data from this directory")

	return cmd
}

func NewStartServerCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "start",
		Short: "Start up a guild server",
		RunE:  StartServer,
	}

	cmd.Flags().StringVarP(&guild, "guild", "g", "", "Name or ID of guild")
	cmd.Flags().StringVarP(&name, "name", "n", "", "Server name")
	cmd.Flags().StringVarP(&image, "image", "i", "", "Image name eg: partycloud/minecraft")

	return cmd
}

func ListServers(cmd *cobra.Command, args []string) error {
	return party.ListServers(context.TODO())
}

func CreateServer(cmd *cobra.Command, args []string) error {
	return party.CreateServer(context.TODO(), image, name, dataFrom)
}

// @TODO this command shouldn't take image as an arg
func StartServer(cmd *cobra.Command, args []string) error {
	return party.StartServer(context.TODO(), image, name)
}
