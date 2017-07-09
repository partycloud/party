package main

import (
	"context"
	"fmt"

	"github.com/gosuri/uitable"
	"github.com/partycloud/party"
	"github.com/spf13/cobra"
)

// GuildsCommand represents the "guilds" command execution.

func NewGuildsCmd() *cobra.Command {
	listCmd := &cobra.Command{
		Use:   "guilds",
		Short: "Manage guilds",
		RunE:  List,
	}

	// listCmd.AddCommand(cmds)

	return listCmd
}

func List(*cobra.Command, []string) error {
	guilds, err := party.ListGuilds(context.TODO())
	if err != nil {
		return err
	}

	if len(guilds) == 0 {
		fmt.Println("You're not in any guilds! You should totally start one")
		return nil
	}

	table := uitable.New()
	table.MaxColWidth = 50

	table.AddRow("ID", "NAME", "CONNECTED")
	for _, guild := range guilds {
		table.AddRow(guild.ID, guild.Name, guild.Connected)
	}
	fmt.Println(table)
	return nil
}
