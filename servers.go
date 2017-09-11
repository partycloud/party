package party

import (
	"context"
	"fmt"
	"io/ioutil"
	"os"
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
func (e *Environment) CreateServer(ctx context.Context, req *pb.CreateServerRequest) (resp *pb.CreateServerResponse, err error) {
	var apiResp *papi.CreateServerResponse
	err = e.APICall(func(client papi.ApiClient) error {
		apiResp, err = client.CreateServer(ctx, &papi.CreateServerRequest{
			Image: req.Image,
			Name:  req.Name,
		})
		return err
	})
	if err != nil {
		return
	}

	if err = e.prepareHostPath(apiResp.Id, req.ImportDataDir); err != nil {
		return
	}

	srv, err := e.startServer(ctx, req.Image, req.Name, apiResp.Id)
	if err != nil {
		return
	}

	scan, err := srv.ScanFileset()
	if err != nil {
		return
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

	e.Events <- NewEventServerStatusUpdate(resp.Server.Id, pb.Server_STARTING)

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
	e.Events <- NewEventServerStatusUpdate(req.Id, pb.Server_STOPPING)

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

	fmt.Println("notifying")
	e.Events <- NewEventFilesetUpdate(req.Id, scan)
	fmt.Println("notified")

	err = e.APICall(func(client papi.ApiClient) error {
		_, err = client.SetFileset(ctx, &papi.SetFilesetRequest{
			ServerId: req.Id,
			Fileset: &papi.Fileset{
				Hash:  scan.Hash,
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
		fmt.Println(resp)
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
			fileset.Bytes = s.Fileset.Bytes
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

// StopServer stops a game server
func (e *Environment) DeleteServer(ctx context.Context, req *pb.DeleteServerRequest) (*pb.DeleteServerResponse, error) {
	err := DeleteContainer(ctx, req.Id)
	if err != nil {
		return nil, err
	}

	err = e.APICall(func(client papi.ApiClient) error {
		_, err = client.DeleteServer(ctx, &papi.DeleteServerRequest{
			Id: req.Id,
		})
		return err
	})
	if err != nil {
		return nil, err
	}

	if err := os.RemoveAll(e.serverPath(req.Id)); err != nil {
		return nil, err
	}

	return &pb.DeleteServerResponse{}, nil
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

	return CreateContainer(ctx, image, name, e.serverPath(serverID), serverID)
}

func (e *Environment) prepareHostPath(serverId, importDir string) error {
	if importDir == "" {
		return nil
	}

	return CopyDir(importDir, e.serverPath(serverId))
}

func (e *Environment) serverPath(id string) string {
	return path.Join(e.DataPath, "servers", id)
}
