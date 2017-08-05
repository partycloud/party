package party

import (
	"context"
	"fmt"
	"io"
	"os"

	"github.com/docker/docker/api/types"
	"github.com/docker/docker/api/types/container"
	"github.com/docker/docker/api/types/mount"
	"github.com/docker/docker/api/types/network"
	"github.com/docker/docker/client"
)

func PullImage(ctx context.Context, image string) error {
	return withClient(func(cli *client.Client) error {
		fmt.Println("Pulling image", image)
		out, err := cli.ImagePull(ctx, image, types.ImagePullOptions{})
		if err != nil {
			return err
		}

		io.Copy(os.Stdout, out)

		return nil
	})
}

func CreateContainer(ctx context.Context, image, name, hostPath string) error {
	return withClient(func(cli *client.Client) error {
		fmt.Println("Creating container", image, name, hostPath)
		err := os.MkdirAll(hostPath, os.ModePerm)
		if err != nil {
			return err
		}
		containerCfg := &container.Config{
			Image: image,
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
		netCfg := &network.NetworkingConfig{}
		_, err = cli.ContainerCreate(ctx, containerCfg, hostCfg, netCfg, name)
		if err != nil {
			return err
		}

		fmt.Println("Starting container", name)
		return cli.ContainerStart(ctx, name, types.ContainerStartOptions{})
	})
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
