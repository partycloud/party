package party

import (
	"context"
	"fmt"
	"path"
	"strings"

	papi "github.com/partycloud/party/proto/api"
	pb "github.com/partycloud/party/proto/daemon"

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

// CreateServer create and starts a new game server
func (e *Environment) CreateServer(ctx context.Context, req *pb.CreateServerRequest) (*pb.CreateServerResponse, error) {
	var resp *papi.CreateServerResponse
	var err error
	err = APICall(func(client papi.ApiClient) error {
		resp, err = client.CreateServer(ctx, &papi.CreateServerRequest{
			Image: req.Image,
			Name:  req.Name,
		})
		return err
	})
	if err != nil {
		return nil, err
	}

	if err = e.startServer(ctx, req.Image, req.Name, resp.Id); err != nil {
		return nil, err
	}

	return &pb.CreateServerResponse{
		Server: &pb.Server{
			Id:    req.Name,
			Image: req.Image,
			Name:  req.Name,
			Fileset: &pb.Fileset{
				Hash: []byte("1234"),
			},
		},
	}, nil
}

// StartServer create and starts a new game server
func (e *Environment) StartServer(ctx context.Context, req *pb.StartServerRequest) (*pb.StartServerResponse, error) {
	var resp *papi.GetServerResponse
	var err error
	err = APICall(func(client papi.ApiClient) error {
		fmt.Println("StartServer", req.Id)
		resp, err = client.GetServer(ctx, &papi.GetServerRequest{
			Id: req.Id,
		})
		return err
	})
	if err != nil {
		return nil, err
	}
	srv := resp.Server

	if err = e.startServer(ctx, srv.Image, srv.Name, resp.Server.Id); err != nil {
		return nil, err
	}

	return &pb.StartServerResponse{
		Server: &pb.Server{
			Id:    srv.Id,
			Image: srv.Image,
			Name:  srv.Name,
			Fileset: &pb.Fileset{
				Hash: []byte("1234"),
			},
		},
	}, nil
}

// StopServer stops a game server
func (e *Environment) StopServer(ctx context.Context, req *pb.StopServerRequest) (*pb.StopServerResponse, error) {
	var resp *papi.GetServerResponse
	var err error
	err = APICall(func(client papi.ApiClient) error {
		resp, err = client.GetServer(ctx, &papi.GetServerRequest{
			Id: req.Id,
		})
		return err
	})
	if err != nil {
		return nil, err
	}

	if err = StopContainer(ctx, req.Id); err != nil {
		return nil, err
	}

	return &pb.StopServerResponse{}, nil
}

// ListServers calls the api and returns a list of persistent servers
func ListServers(ctx context.Context, req *pb.ListServersRequest) (*pb.ListServersResponse, error) {
	var resp *papi.ListServersResponse
	err := APICall(func(client papi.ApiClient) error {
		var err error
		resp, err = client.ListServers(ctx, &papi.ListServersRequest{})
		return err
	})
	if err != nil {
		return nil, err
	}

	containers, err := ListContainers(ctx)
	if err != nil {
		return nil, err
	}

	servers := make([]*pb.Server, len(resp.Servers))
	for i, s := range resp.Servers {
		var container *types.Container
		for _, c := range containers {
			if c.Labels["party"] == s.Id {
				container = &c
			}
		}

		status := pb.Server_STOPPED
		if container != nil {
			if strings.HasPrefix(container.Status, "Up") {
				status = pb.Server_RUNNING
			}
		}

		var fileset pb.Fileset
		if s.Fileset != nil {
			fileset.Hash = s.Fileset.Hash
		}
		servers[i] = &pb.Server{
			Id:      s.Id,
			Name:    s.Name,
			Image:   s.Image,
			Fileset: &fileset,
			Status:  status,
		}
	}

	return &pb.ListServersResponse{
		Servers: servers,
	}, nil
}

func (e *Environment) startServer(ctx context.Context, image, name, serverID string) error {
	if err := PullImage(ctx, image); err != nil {
		return err
	}

	hostPath := path.Join(e.DataPath, name)
	return CreateContainer(ctx, image, name, hostPath, serverID)
}
