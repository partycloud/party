package main

import (
	"errors"
	"flag"
	"fmt"
	"os"
	"strings"

	party "github.com/partycloud/tray"
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
func (m *Main) Run(args ...string) error {
	// Require a command at the beginning.
	if len(args) == 0 || strings.HasPrefix(args[0], "-") || args[0] == "help" {
		fmt.Fprintln(os.Stderr, m.Usage())
		return ErrUsage
	}

	commands := map[string]Cmd{
		"info":   &InfoCommand{},
		"groups": &GroupsCommand{},
	}

	var cmd Cmd
	if cmd = commands[args[0]]; cmd == nil {
		return ErrUnknownCommand
	}

	return cmd.Run(args[1:]...)
}

// GroupsCommand represents the "info" command execution.
type InfoCommand struct{}

// Usage prints "info" usage info.
func (cmd *InfoCommand) Usage() string {
	return strings.TrimLeft(`
Usage:
  pc info
`, "\n")
}

func (cmd *InfoCommand) Run(args ...string) error {
	// Parse flags.
	fs := flag.NewFlagSet("", flag.ContinueOnError)
	help := fs.Bool("h", false, "")
	if err := fs.Parse(args); err != nil {
		return err
	} else if *help {
		fmt.Fprintln(os.Stderr, cmd.Usage())
		return ErrUsage
	}

	currentUserID, err := party.GetUserId(os.Getenv("PC_TOKEN"))
	if err != nil {
		return err
	}
	fmt.Println(currentUserID)
	return nil
}

// GroupsCommand represents the "groups" command execution.
type GroupsCommand struct{}

// Usage prints "groups" usage info.
func (cmd *GroupsCommand) Usage() string {
	return strings.TrimLeft(`
Manage groups

Available Commands:
  list  List group memberships

Usage:
  pc groups SUBCOMAND [options]
`, "\n")
}

// Run executes the command.
func (cmd *GroupsCommand) Run(args ...string) error {
	// Parse flags.
	fs := flag.NewFlagSet("", flag.ContinueOnError)
	help := fs.Bool("h", false, "")
	if err := fs.Parse(args); err != nil {
		return err
	} else if *help {
		fmt.Fprintln(os.Stderr, cmd.Usage())
		return ErrUsage
	}

	// Require a command at the beginning.
	if len(args) == 0 || strings.HasPrefix(args[0], "-") {
		fmt.Fprintln(os.Stderr, cmd.Usage())
		return ErrUsage
	}

	userId := ""

	switch args[0] {
	case "create":
		if len(args) != 2 {
			fmt.Fprintln(os.Stderr, cmd.Usage())
			return ErrUsage
		}
		groupId, err := party.CreateGroup(os.Getenv("PC_TOKEN"), userId, args[1])
		if err != nil {
			return err
		}
		fmt.Println(groupId)

	case "list":
		groups, err := party.ListGroups(os.Getenv("PC_TOKEN"))
		if err != nil {
			return err
		}

		fmt.Println(groups)

	default:
		return ErrUnknownCommand
	}

	return nil
}

// Main represents the main program execution.
type Main struct{}

// Usage returns the help message.
func (m *Main) Usage() string {
	return strings.TrimLeft(`
cli for partycloud.
Usage:
    party command [arguments]
The commands are:
    groups      manage groups
    info        info about the current user
    help        print this screen
Use "pc [command] -h" for more information about a command.
`, "\n")
}

func main() {
	m := &Main{}
	if err := m.Run(os.Args[1:]...); err == ErrUsage {
		os.Exit(2)
	} else if err != nil {
		fmt.Println(err.Error())
		os.Exit(1)
	}
}
