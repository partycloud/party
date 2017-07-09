package main

import (
	"flag"
	"fmt"
	"os"
	"strings"

	party "github.com/partycloud/party"
)

// GuildsCommand represents the "info" command execution.
type InfoCommand struct{}

// Usage prints "info" usage info.
func (cmd *InfoCommand) Usage() string {
	return strings.TrimLeft(`
Usage:
  party info
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
