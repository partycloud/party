package party

import (
	"context"
	"encoding/json"
	"fmt"
	"os/exec"
)

type Network struct {
	ID                string
	Name              string
	AssignedAddresses []string
}

func ListNetworks(ctx context.Context) ([]Network, error) {
	out, err := exec.CommandContext(ctx, "zerotier-cli", "-j", "listnetworks").Output()
	if err != nil {
		return nil, err
	}

	var nets []Network
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
