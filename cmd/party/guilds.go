package main

import (
	"context"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"time"

	pb "github.com/partycloud/party/proto"

	"github.com/gosuri/uitable"
	"github.com/spf13/cobra"
	"github.com/spf13/viper"
)

// GuildsCommand represents the "guilds" command execution.

var discordToken string

var listCmd = &cobra.Command{
	Use:   "guilds",
	Short: "Manage guilds",
	RunE:  List,
}

func init() {
	RootCmd.AddCommand(listCmd)
	listCmd.PersistentFlags().StringVar(&discordToken, "discord-token", "", "Bearer token for discord api")
	viper.BindPFlag("discord-token", listCmd.PersistentFlags().Lookup("discord-token"))
}

func List(*cobra.Command, []string) error {
	ctx := context.Background()
	return DCall(func(client pb.PCDaemonClient) error {
		resp, err := client.ListGuilds(ctx, &pb.ListGuildsRequest{Page: 0, Limit: 100})
		if err != nil {
			return err
		}

		if len(resp.Guilds) == 0 {
			fmt.Println("You're not in any guilds! You should totally start one")
			return nil
		}

		table := uitable.New()
		table.MaxColWidth = 50

		table.AddRow("ID", "NAME", "IP")
		for _, guild := range resp.Guilds {
			table.AddRow(guild.Id, guild.Name, guild.Ip)
		}
		fmt.Println(table)
		return nil
	})
	// url, err := getLoginUrl(ctx)
	// if err != nil {
	// 	return err
	// }
	// fmt.Println(url)
	//
	// reader := bufio.NewReader(os.Stdin)
	// fmt.Print("Enter token: ")
	// tok, err := reader.ReadString('\n')
	// if err != nil {
	// 	return err
	// }

}

func getLoginUrl(ctx context.Context) (string, error) {
	url := "http://localhost:10001/login"
	req, err := http.NewRequest("GET", url, nil)
	if err != nil {
		return "", err
	}

	ctx, cancel := context.WithTimeout(ctx, 5*time.Second)
	defer cancel()
	req = req.WithContext(ctx)
	resp, err := http.DefaultClient.Do(req)
	if err != nil {
		return "", err
	}

	defer resp.Body.Close()
	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		return "", err
	}

	var r = struct {
		Url string
	}{}

	err = json.Unmarshal(body, &r)
	return r.Url, nil
}
