package main

import (
	"fmt"

	"github.com/getlantern/systray"
)

var preferred = "8056c2e21c000001"

var knownNetworks = map[string]string{
	"8056c2e21c000001": "Mostly Aussies",
}
var connectedNetworks []GroupNetwork

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
