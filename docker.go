package party

import (
	"context"
	"fmt"
	"os"
	"time"

	"github.com/docker/docker/api/types"
	"github.com/docker/docker/api/types/container"
	"github.com/docker/docker/api/types/filters"
	"github.com/docker/docker/api/types/mount"
	"github.com/docker/docker/api/types/network"
	"github.com/docker/docker/client"
)

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
			Image:  image,
			Labels: map[string]string{"party": partyID},
		}
		hostCfg := &container.HostConfig{
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

		duration := time.Duration(60 * time.Second)
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
