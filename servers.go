package party

import (
	"context"
	"fmt"
	"io"
	"os"

	pb "github.com/partycloud/party/proto"
	"google.golang.org/grpc"

	"github.com/docker/docker/api/types"
	"github.com/docker/docker/client"
)

/*
Pull the image
Get a lock
Start container
Advertise
*/

var cli *client.Client

func ApiCall(cb func(pb.PCApiClient) error) error {
	conn, err := grpc.Dial("localhost:10000", grpc.WithInsecure())
	if err != nil {
		fmt.Println("hi")
		return err
	}
	defer conn.Close()

	client := pb.NewPCApiClient(conn)
	return cb(client)
}

// func ListServers(ctx context.Context) error {
// 	return ApiCall(func(client pb.PCApiClient) error {
// 		resp, err := client.ListServers(ctx, &pb.ListServersRequest{GuildId: []string{"partytown"}})
// 		if err != nil {
// 			return err
// 		}
//
// 		fmt.Println(resp)
// 		return nil
// 	})
// }

// func CreateServer(ctx context.Context, image, name, dataFrom string) error {
// 	return ApiCall(func(client pb.PartycloudClient) error {
// 		resp, err := client.CreateServer(ctx, &pb.CreateServerRequest{
// 			GuildId: "partytown",
// 			Image:   image,
// 			Name:    name,
// 		})
// 		if err != nil {
// 			return err
// 		}
//
// 		fmt.Println(resp)
// 		return nil
// 	})
// }

// func StartServer(ctx context.Context, image, name string) error {
// 	fmt.Println("TODO: ensure synced")
//
// 	pullImage(ctx, image)
//
// 	fmt.Println("Creating container", image, name)
// 	_, err := cli.ContainerCreate(ctx, &container.Config{
// 		Image: image,
// 	}, nil, nil, name)
// 	if err != nil {
// 		return err
// 	}
//
// 	fmt.Println("Starting container", name)
// 	return cli.ContainerStart(ctx, name, types.ContainerStartOptions{})
// }

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
