package party

import (
	"context"
	"encoding/json"
	"fmt"
	"os/exec"
)

type GuildNetwork struct {
	ID string
}

func ListGuildNetworks(ctx context.Context) ([]GuildNetwork, error) {
	out, err := exec.CommandContext(ctx, "zerotier-cli", "-j", "listnetworks").Output()
	if err != nil {
		return nil, err
	}

	var nets []GuildNetwork
	err = json.Unmarshal(out, &nets)
	return nets, err
}

func JoinGuild(id string) error {
	fmt.Printf("Joining %s\n", id)
	return exec.Command("zerotier-cli", "join", id).Run()
}

func LeaveGuild(id string) error {
	fmt.Printf("Leaving %s\n", id)
	return exec.Command("zerotier-cli", "leave", id).Run()
}
