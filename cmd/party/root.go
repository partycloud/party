package main

import (
	"fmt"
	"os"

	homedir "github.com/mitchellh/go-homedir"
	"github.com/spf13/cobra"
	"github.com/spf13/viper"
)

var cfgFile string

var RootCmd = &cobra.Command{
	Use:   "party",
	Short: "Hey play some games",
}

type Config struct {
	DaemonPort int
}

var Cfg Config

func init() {
	cobra.OnInitialize(initConfig)
	RootCmd.PersistentFlags().StringVar(&discordToken, "discord-token", "", "Bearer token for discord api")
	RootCmd.PersistentFlags().IntVar(&Cfg.DaemonPort, "daemon-port", 38387, "Port for local daemon")
}

func initConfig() {
	// Don't forget to read config either from cfgFile or from home directory!
	if cfgFile != "" {
		// Use config file from the flag.
		viper.SetConfigFile(cfgFile)
	} else {
		// Find home directory.
		home, err := homedir.Dir()
		if err != nil {
			fmt.Println(err)
			os.Exit(1)
		}

		viper.AddConfigPath(home)
		viper.SetConfigName(".party")
	}

	viper.ReadInConfig()
}
