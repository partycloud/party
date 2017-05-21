package party

import (
	"encoding/json"
	"fmt"
	"os/exec"
)

type GroupNetwork struct {
	ID string
}

func ListGroupNetworks() ([]GroupNetwork, error) {
	out, err := exec.Command("zerotier-cli", "-j", "listnetworks").Output()
	if err != nil {
		return nil, err
	}

	var nets []GroupNetwork
	err = json.Unmarshal(out, &nets)
	return nets, err
}

func JoinGroup(id string) error {
	fmt.Printf("Joining %s\n", id)
	return exec.Command("zerotier-cli", "join", id).Run()
}

func LeaveGroup(id string) error {
	fmt.Printf("Leaving %s\n", id)
	return exec.Command("zerotier-cli", "leave", id).Run()
}
