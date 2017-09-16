package party

import (
	"context"
	"fmt"
	"os"
	"time"

	pb "github.com/partycloud/party/proto/daemon"

	"github.com/docker/docker/api/types"
	"github.com/docker/docker/api/types/container"
	"github.com/docker/docker/api/types/filters"
	"github.com/docker/docker/api/types/mount"
	"github.com/docker/docker/api/types/network"
	"github.com/docker/docker/client"
)

// PumpDocker listens and posts interesting events
func (e *Environment) PumpDocker(ctx context.Context) error {
	return withClient(func(cli *client.Client) error {
		events, _ := cli.Events(ctx, types.EventsOptions{})

		for event := range events {
			if partyID, ok := event.Actor.Attributes["party"]; ok {
				switch event.Action {
				case "start":
					e.Events <- NewEventServerStatusUpdate(partyID, pb.Server_RUNNING)
				case "stop":
					e.Events <- NewEventServerStatusUpdate(partyID, pb.Server_STOPPED)
				}
				fmt.Println("action:", event.Action)
				fmt.Println("actor:", event.Actor)
				fmt.Println("status:", event.Status)
				fmt.Println("type:", event.Type)
			}
		}
		return nil
	})
}

// PullImage does what it says on the tin
func PullImage(ctx context.Context, image string) error {
	return withClient(func(cli *client.Client) error {
		_, err := cli.ImagePull(ctx, image, types.ImagePullOptions{})
		return err
	})
}

// CreateContainer makes a party container
func CreateContainer(ctx context.Context, image, name, hostPath, partyID string) (*ServerInstance, error) {
	var ct *types.Container
	err := withClient(func(cli *client.Client) error {
		err := os.MkdirAll(hostPath, os.ModePerm)
		if err != nil {
			return err
		}
		containerCfg := &container.Config{
			Image:     image,
			Labels:    map[string]string{"party": partyID},
			OpenStdin: true,
			Tty:       true,
		}
		hostCfg := &container.HostConfig{
			PublishAllPorts: true,
			Mounts: []mount.Mount{
				mount.Mount{
					Source: hostPath,
					Target: "/data",
					Type:   "bind",
				},
			},
		}

		ct, err = findContainer(ctx, cli, partyID)
		if err != nil {
			return err
		}
		if ct == nil {
			netCfg := &network.NetworkingConfig{}
			_, err = cli.ContainerCreate(ctx, containerCfg, hostCfg, netCfg, name)
			if err != nil {
				fmt.Printf("error ContainerCreate")
				return err
			}
		}

		fmt.Println("Starting container", name)
		return cli.ContainerStart(ctx, name, types.ContainerStartOptions{})
	})
	if err != nil {
		return nil, err
	}

	return &ServerInstance{
		HostPath: hostPath,
	}, nil
}

// ListContainers lists docker containers that we own
func ListContainers(ctx context.Context) (containers []types.Container, err error) {
	err = withClient(func(cli *client.Client) error {
		filters := filters.NewArgs()
		filters.Add("label", "party")

		containers, err = cli.ContainerList(ctx, types.ContainerListOptions{
			Filters: filters,
		})
		return err
	})
	return
}

// StopContainer does what it says on the tin
func StopContainer(ctx context.Context, partyID string) (*ServerInstance, error) {
	var container *types.Container
	err := withClient(func(cli *client.Client) error {
		var err error
		container, err = findContainer(ctx, cli, partyID)
		if err != nil {
			return err
		}
		if container == nil {
			return nil
		}

		duration := time.Duration(10 * time.Second)
		return cli.ContainerStop(ctx, container.ID, &duration)
	})
	if err != nil {
		return nil, err
	}
	var hostPath string
	for _, m := range container.Mounts {
		if m.Destination == "/data" {
			hostPath = m.Source
		}
	}
	return &ServerInstance{
		HostPath: hostPath,
	}, nil
}

// DeleteContainer stops and deletes the container
func DeleteContainer(ctx context.Context, partyID string) error {
	var container *types.Container
	return withClient(func(cli *client.Client) error {
		var err error
		container, err = findContainer(ctx, cli, partyID)
		if err != nil {
			return err
		}
		if container == nil {
			return nil
		}

		duration := time.Duration(60 * time.Second)
		if err = cli.ContainerStop(ctx, container.ID, &duration); err != nil {
			return err
		}

		return cli.ContainerRemove(ctx, container.ID, types.ContainerRemoveOptions{
			Force: true,
		})
	})
}

func findContainer(ctx context.Context, cli *client.Client, partyID string) (*types.Container, error) {
	filters := filters.NewArgs()
	filters.Add("label", "party="+partyID)
	containers, err := cli.ContainerList(ctx, types.ContainerListOptions{
		All:     true,
		Filters: filters,
	})
	if err != nil {
		return nil, err
	}
	if len(containers) > 0 {
		return &containers[0], nil
	}
	return nil, nil
}

func withClient(cb func(*client.Client) error) error {
	var err error
	if cli == nil {
		cli, err = client.NewEnvClient()
		if err != nil {
			return err
		}
	}
	defer cli.Close()

	return cb(cli)
}
