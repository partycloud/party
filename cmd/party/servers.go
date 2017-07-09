package main

import (
	"github.com/spf13/cobra"
)

func NewServersCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "servers",
		Short: "Manage servers",
	}

	return cmd
}

// func run(cmd *cobra.Command, args []string) {
// 	// Parse flags.
// 	fs := flag.NewFlagSet("", flag.ContinueOnError)
// 	help := fs.Bool("h", false, "")
// 	if err := fs.Parse(args); err != nil {
// 		return err
// 	} else if *help {
// 		fmt.Fprintln(os.Stderr, cmd.Usage())
// 		return ErrUsage
// 	}
//
// 	name := fs.String("name", "", "")
// 	if err := fs.Parse(args); err != nil {
// 		return err
// 	}
//
// 	fmt.Println(*name, args[0])
//
// 	// Require a command at the beginning.
// 	if len(args) == 0 || strings.HasPrefix(args[0], "-") {
// 		fmt.Fprintln(os.Stderr, cmd.Usage())
// 		return ErrUsage
// 	}
//
// 	switch args[0] {
// 	case "start":
// 		if len(args) != 2 {
// 			fmt.Fprintln(os.Stderr, cmd.Usage())
// 			return ErrUsage
// 		}
// 		err := party.StartServer(args[1], *name)
// 		if err != nil {
// 			return err
// 		}
//
// 	default:
// 		return ErrUnknownCommand
// 	}
//
// 	return nil
// }
