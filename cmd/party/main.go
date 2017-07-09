package main

import (
	"errors"
	"fmt"
	"os"
)

var (
	// ErrUsage is returned when a usage message was printed and the process
	// should simply exit with an error.
	ErrUsage = errors.New("usage")

	// ErrUnknownCommand is returned when a CLI command is not specified.
	ErrUnknownCommand = errors.New("unknown command")

	currentUserID string
)

type Cmd interface {
	Run(args ...string) error
	Usage() string
}

// Run executes the program.
// func (m *Main) Run(args ...string) error {
// 	// Require a command at the beginning.
// 	if len(args) == 0 || strings.HasPrefix(args[0], "-") || args[0] == "help" {
// 		fmt.Fprintln(os.Stderr, m.Usage())
// 		return ErrUsage
// 	}
//
// 	commands := map[string]Cmd{
// 		"info":    &InfoCommand{},
// 		"guilds":  &GuildsCommand{},
// 		"servers": &ServersCommand{},
// 	}
//
// 	var cmd Cmd
// 	if cmd = commands[args[0]]; cmd == nil {
// 		return ErrUnknownCommand
// 	}
//
// 	return cmd.Run(args[1:]...)
// }
//
// // Main represents the main program execution.
// type Main struct{}
//
// // Usage returns the help message.
// func (m *Main) Usage() string {
// 	return strings.TrimLeft(`
// cli for partycloud.
// Usage:
//     party command [arguments]
// The commands are:
//     guilds      manage guilds
//     servers     manage servers
//     info        info about the current user
//     help        print this screen
// Use "party [command] -h" for more information about a command.
// `, "\n")
// }
//
// // func main() {
// // 	// m := &Main{}
// // 	// if err := m.Run(os.Args[1:]...); err == ErrUsage {
// // 	// 	os.Exit(2)
// // 	// } else if err != nil {
// // 	// 	fmt.Println(err.Error())
// // 	// 	os.Exit(1)
// // 	// }
// //
// // 	app := cli.App("party", "Hey play some games")
// //
// // 	app.Command("servers s", "manage game servers", func(cmd *cli.Cmd) {
// // 		cmd.Command("start s", "start server", func(cmd *cli.Cmd) {
// // 			image := cmd.StringArg("IMAGE", "", "")
// // 			name := cmd.StringArg("NAME", "", "")
// //
// // 			cmd.Action = func() {
// // 				err := party.StartServer(*image, *name)
// // 				if err != nil {
// // 					panic(err)
// // 				}
// // 			}
// // 		})
// // 	})
// //
// // 	app.Run(os.Args)
// // }

func main() {
	if err := NewRootCmd().Execute(); err != nil {
		fmt.Println(err)
		os.Exit(1)
	}
}
