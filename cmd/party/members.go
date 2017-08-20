package main

import (
	"context"
	"fmt"

	pb "github.com/partycloud/party/proto/daemon"

	"github.com/gosuri/uitable"
	"github.com/spf13/cobra"
)

var listMembersCmd = &cobra.Command{
	Use:   "members",
	Short: "Manage yo peeps",
	RunE:  ListMembers,
}

func init() {
	RootCmd.AddCommand(listMembersCmd)
}

func ListMembers(*cobra.Command, []string) error {
	ctx := context.Background()
	return DCall(func(client pb.DaemonClient) error {
		resp, err := client.ListMembers(ctx, &pb.ListMembersRequest{Page: 0, Limit: 100})
		if err != nil {
			return err
		}

		if len(resp.Members) == 0 {
			fmt.Println("Nobody's online right now. Sigh")
			return nil
		}

		table := uitable.New()
		table.MaxColWidth = 50

		table.AddRow("ID", "NAME", "IP")
		for _, member := range resp.Members {
			table.AddRow(member.Id, member.Name, member.Ip)
		}
		fmt.Println(table)
		return nil
	})
}
