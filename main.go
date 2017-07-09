package party

// import (
// 	"fmt"
//
// 	"github.com/andlabs/ui"
// 	"github.com/getlantern/systray"
// )
//
// var window *ui.Window
//
// var preferred = "8056c2e21c000001"
//
// var knownNetworks = map[string]string{
// 	"8056c2e21c000001": "Mostly Aussies",
// }
// var connectedNetworks []GuildNetwork
//
// func connectToGuild() {
// }
//
// func onReady() {
// 	fmt.Println("onReady")
// 	systray.SetTitle("⛅️")
// 	mConnected := systray.AddMenuItem("Guild: Disconnected", "")
// 	mConnected.Disable()
// 	mConnect := systray.AddMenuItem("Connect To Guild", "")
//
// 	connected := func(netid string) {
// 		if name, ok := knownNetworks[netid]; ok {
// 			mConnect.SetTitle("Disconnect From Guild")
// 			mConnected.SetTitle(fmt.Sprintf("Guild: %s", name))
// 		} else {
// 			panic(netid)
// 		}
// 	}
//
// 	disconnected := func() {
// 		mConnect.SetTitle("Connect To Guild")
// 		mConnected.SetTitle("Guild: Disconnected")
// 	}
//
// 	connectionUpdated := func() {
// 		if len(connectedNetworks) > 0 {
// 			net := connectedNetworks[0]
// 			connected(net.ID)
// 		} else {
// 			disconnected()
// 		}
// 	}
//
// 	checkconnection := func() {
// 		var err error
// 		connectedNetworks, err = ListGuildNetworks()
// 		if err != nil {
// 			panic(err)
// 		}
//
// 		connectionUpdated()
// 	}
//
// 	// toggleGuildMembership := func() {
// 	// 	var err error
// 	// 	netid := preferred
// 	// 	if len(connectedNetworks) == 0 {
// 	// 		err = JoinGuild(netid)
// 	// 	} else {
// 	// 		err = LeaveGuild(netid)
// 	// 	}
// 	// 	if err != nil {
// 	// 		panic(err)
// 	// 	}
// 	// 	checkconnection()
// 	// }
//
// 	go checkconnection()
//
// 	go func() {
// 		for {
// 			select {
// 			case <-mConnect.ClickedCh:
// 				connectToGuild()
// 			}
// 		}
//
// 	}()
// }
//
// func main() {
// 	err := ui.Main(func() {
// 		name := ui.NewEntry()
// 		button := ui.NewButton("Greet")
// 		greeting := ui.NewLabel("")
//
// 		window = ui.NewWindow("Hello", 600, 800, false)
//
// 		box := ui.NewVerticalBox()
// 		box.Append(ui.NewLabel("Enter your name:"), false)
// 		box.Append(name, false)
// 		box.Append(button, false)
// 		box.Append(greeting, false)
// 		window.SetChild(box)
//
// 		button.OnClicked(func(*ui.Button) {
// 			greeting.SetText("Hello, " + name.Text() + "!")
// 		})
//
// 		window.OnClosing(func(*ui.Window) bool {
// 			ui.Quit()
// 			return true
// 		})
// 		window.Show()
//
// 	})
// 	if err != nil {
// 		panic(err)
// 	}
//
// }
