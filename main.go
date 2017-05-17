package main

import (
	"bufio"
	"fmt"
	"log"
	"os/exec"
	"strings"

	"github.com/getlantern/systray"
)

var preferred = "8056c2e21c000001"

var knownNetworks = map[string]string{
	"8056c2e21c000001": "Mostly Aussies",
}
var connectedNetworks []GroupNetwork

type GroupNetwork struct {
	ID string
}

func ListGroupNetworks() ([]GroupNetwork, error) {
	cmd := exec.Command("zerotier-cli", "listnetworks")
	stdout, err := cmd.StdoutPipe()
	if err != nil {
		return nil, err
	}

	if err := cmd.Start(); err != nil {
		return nil, err
	}

	lines := bufio.NewScanner(stdout)
	lCount := -1
	groups := make([]GroupNetwork, 0)
	for lines.Scan() {
		lCount++
		// skip first line
		if lCount > 0 {
			// 3rd word is our guy
			id := strings.Split(lines.Text(), " ")[2]
			groups = append(groups, GroupNetwork{ID: id})
		}
	}
	if err := lines.Err(); err != nil {
		return nil, err
	}

	if err := cmd.Wait(); err != nil {
		log.Fatal(err)
	}

	return groups, nil
}

func JoinGroup(id string) error {
	fmt.Printf("Joining %s\n", id)
	return exec.Command("zerotier-cli", "join", id).Run()
}

func LeaveGroup(id string) error {
	fmt.Printf("Leaving %s\n", id)
	return exec.Command("zerotier-cli", "leave", id).Run()
}

func onReady() {
	systray.SetTitle("⛅️")
	mConnected := systray.AddMenuItem("Group: Disconnected", "")
	mConnected.Disable()
	mConnect := systray.AddMenuItem("Connect To Group", "")

	connected := func(netid string) {
		if name, ok := knownNetworks[netid]; ok {
			mConnect.SetTitle("Disconnect From Group")
			mConnected.SetTitle(fmt.Sprintf("Group: %s", name))
		} else {
			panic(netid)
		}
	}

	disconnected := func() {
		mConnect.SetTitle("Connect To Group")
		mConnected.SetTitle("Group: Disconnected")
	}

	connectionUpdated := func() {
		if len(connectedNetworks) > 0 {
			net := connectedNetworks[0]
			connected(net.ID)
		} else {
			disconnected()
		}
	}

	checkconnection := func() {
		var err error
		connectedNetworks, err = ListGroupNetworks()
		if err != nil {
			panic(err)
		}

		connectionUpdated()
	}

	go checkconnection()

	for {
		select {
		case <-mConnect.ClickedCh:
			go func() {
				var err error
				netid := preferred
				if len(connectedNetworks) == 0 {
					err = JoinGroup(netid)
				} else {
					err = LeaveGroup(netid)
				}
				if err != nil {
					panic(err)
				}
				checkconnection()
			}()
		}
	}
}

func main() {
	systray.Run(onReady)
}
