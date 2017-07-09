package main

import "github.com/spf13/cobra"

func NewRootCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "party",
		Short: "Hey play some gamez",
	}

	cmd.AddCommand(NewServersCmd())
	cmd.AddCommand(NewGuildsCmd())
	return cmd
}
