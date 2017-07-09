package party

import (
	"context"
	"fmt"
	"io"
	"os"

	"github.com/docker/docker/api/types"
	"github.com/docker/docker/api/types/container"
	"github.com/docker/docker/client"
)

/*
Pull the image
Get a lock
Start container
Advertise
*/

var cli *client.Client

func CreateServer(ctx context.Context, image, name, dataFrom string) error {
	pullImage(ctx, image)

	fmt.Println("Creating container", image, name)
	_, err := cli.ContainerCreate(ctx, &container.Config{
		Image: image,
	}, nil, nil, name)

	return err
}

func StartServer(ctx context.Context, image, name string) error {
	fmt.Println("TODO: ensure synced")

	pullImage(ctx, image)

	fmt.Println("Starting container", name)
	return cli.ContainerStart(ctx, name, types.ContainerStartOptions{})
}

func pullImage(ctx context.Context, image string) error {
	fmt.Println("Pulling image", image)
	var err error
	if cli == nil {
		cli, err = client.NewEnvClient()
		if err != nil {
			return err
		}
	}

	// Pull image
	out, err := cli.ImagePull(ctx, image, types.ImagePullOptions{})
	if err != nil {
		return err
	}

	io.Copy(os.Stdout, out)

	return nil
}
