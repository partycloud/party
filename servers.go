package party

import (
	"context"
	"fmt"
	"io/ioutil"
	"path"
	"path/filepath"
	"strings"

	papi "github.com/partycloud/party/proto/api"
	pb "github.com/partycloud/party/proto/daemon"
	"github.com/spf13/afero"

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
	err = e.APICall(func(client papi.ApiClient) error {
		resp, err = client.CreateServer(ctx, &papi.CreateServerRequest{
			Image: req.Image,
			Name:  req.Name,
		})
		return err
	})
	if err != nil {
		return nil, err
	}

	srv, err := e.startServer(ctx, req.Image, req.Name, resp.Id)
	if err != nil {
		return nil, err
	}

	scan, err := srv.ScanFileset()
	if err != nil {
		return nil, err
	}

	return &pb.CreateServerResponse{
		Server: &pb.Server{
			Id:             req.Name,
			Image:          req.Image,
			Name:           req.Name,
			CurrentOwnerId: e.DeviceID,
			Fileset: &pb.Fileset{
				Bytes: scan.Bytes,
				Hash:  scan.Hash,
			},
		},
	}, nil
}

// StartServer create and starts a new game server
func (e *Environment) StartServer(ctx context.Context, req *pb.StartServerRequest) (*pb.StartServerResponse, error) {
	var resp *papi.GetServerResponse
	var err error
	err = e.APICall(func(client papi.ApiClient) error {
		fmt.Println("StartServer", req.Id)
		resp, err = client.GetServer(ctx, &papi.GetServerRequest{
			Id: req.Id,
		})
		return err
	})
	if err != nil {
		return nil, err
	}

	srv, err := e.startServer(ctx, resp.Server.Image, resp.Server.Name, resp.Server.Id)
	if err != nil {
		return nil, err
	}

	scan, err := srv.ScanFileset()
	if err != nil {
		return nil, err
	}

	return &pb.StartServerResponse{
		Server: &pb.Server{
			Id:             resp.Server.Id,
			Image:          resp.Server.Image,
			Name:           resp.Server.Name,
			CurrentOwnerId: e.DeviceID,
			Fileset: &pb.Fileset{
				Bytes: scan.Bytes,
				Hash:  scan.Hash,
			},
		},
	}, nil
}

// StopServer stops a game server
func (e *Environment) StopServer(ctx context.Context, req *pb.StopServerRequest) (*pb.StopServerResponse, error) {
	var resp *papi.GetServerResponse
	var err error
	err = e.APICall(func(client papi.ApiClient) error {
		resp, err = client.GetServer(ctx, &papi.GetServerRequest{
			Id: req.Id,
		})
		return err
	})
	if err != nil {
		return nil, err
	}

	srv, err := StopContainer(ctx, req.Id)
	if err != nil {
		return nil, err
	}

	scan, err := srv.ScanFileset()
	if err != nil {
		return nil, err
	}

	err = e.APICall(func(client papi.ApiClient) error {
		_, err = client.SetFileset(ctx, &papi.SetFilesetRequest{
			ServerId: req.Id,
			Fileset: &papi.Fileset{
				Bytes: scan.Bytes,
			},
		})
		return err
	})
	if err != nil {
		return nil, err
	}

	return &pb.StopServerResponse{}, nil
}

// ListServers calls the api and returns a list of persistent servers
func (e *Environment) ListServers(ctx context.Context, req *pb.ListServersRequest) (*pb.ListServersResponse, error) {
	var resp *papi.ListServersResponse
	err := e.APICall(func(client papi.ApiClient) error {
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

func (e *Environment) LocalFilesets() error {
	entries, err := ioutil.ReadDir(filepath.Join(e.DataPath, "servers"))
	if err != nil {
		return err
	}
	for _, e := range entries {
		if e.IsDir() {
			fmt.Println(e.Name())
		}
	}

	return nil
}

type ServerInstance struct {
	HostPath string
}

func (s *ServerInstance) ScanFileset() (*DirScan, error) {
	fs := afero.NewOsFs()
	h := NewHasher(fs)
	fmt.Println("Hashing", s.HostPath)
	return h.HashRecursive(s.HostPath)
}

func (e *Environment) startServer(ctx context.Context, image, name, serverID string) (*ServerInstance, error) {
	if err := PullImage(ctx, image); err != nil {
		return nil, err
	}

	hostPath := path.Join(e.DataPath, "servers", name)
	return CreateContainer(ctx, image, name, hostPath, serverID)
}
