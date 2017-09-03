package main

import (
	"flag"
	"fmt"
	"log"
	"net"
	"os"
	"strconv"

	"golang.org/x/net/context"

	"database/sql"

	"github.com/google/uuid"
	pb "github.com/partycloud/party/proto/api"
	"google.golang.org/grpc"

	_ "github.com/lib/pq"
)

// ServerRow is the sql row
type ServerRow struct {
	ID             string
	Name           string
	Image          string
	CurrentOwnerID string
	FilesetHash    []byte
	FilesetBytes   sql.NullInt64
}

// @TODO get this from auth header
const guildID = "C4F6DCBE-D855-4A19-BF49-8C8ECD0303CA"

var port = flag.Int("port", 3000, "listen port")

// API is the main grpc api
type API struct {
	db *sql.DB
}

// GetServer returns server for id
func (a *API) GetServer(ctx context.Context, req *pb.GetServerRequest) (*pb.GetServerResponse, error) {
	row := a.db.QueryRowContext(ctx,
		"SELECT id, name, image, current_owner_id, fileset_hash, fileset_bytes FROM servers where guild_id = $1 and id = $2", guildID, req.Id)

	srv, err := scanServer(row)
	if err != nil {
		return nil, err
	}

	return &pb.GetServerResponse{
		Server: srv,
	}, nil
}

// ListServers returns all servers for a guild
func (a *API) ListServers(ctx context.Context, req *pb.ListServersRequest) (*pb.ListServersResponse, error) {
	servers := make([]*pb.Server, 0)
	rows, err := a.db.QueryContext(ctx,
		"SELECT id, name, image, current_owner_id, fileset_hash, fileset_bytes FROM servers where guild_id = $1", guildID)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	for rows.Next() {
		srv, err := scanServer(rows)
		if err != nil {
			return nil, err
		}
		servers = append(servers, srv)
	}
	resp := &pb.ListServersResponse{
		Servers: servers,
	}

	return resp, nil
}

// CreateServer creates a new server with no fileset hash
func (a *API) CreateServer(ctx context.Context, req *pb.CreateServerRequest) (*pb.CreateServerResponse, error) {
	fmt.Println(req)
	id, err := uuid.NewRandom()
	if err != nil {
		return nil, err
	}
	row := a.db.QueryRowContext(ctx, `
    INSERT INTO servers (id, created_at, updated_at, guild_id, name, image)
      VALUES ($1, now(), now(), $2, $3, $4)
      RETURNING id`, id.String(), guildID, req.Name, req.Image)
	var returnID string
	err = row.Scan(&returnID)
	if err != nil {
		return nil, err
	}

	return &pb.CreateServerResponse{Id: returnID}, nil
}

// SetFileset updates the hash for a server. Only the current server owner can set the fileset
func (a *API) SetFileset(ctx context.Context, req *pb.SetFilesetRequest) (*pb.SetFilesetResponse, error) {
	row := a.db.QueryRowContext(ctx, `
    UPDATE servers
		SET fileset_hash=$1
		    fileset_bytes=$2
		WHERE guild_id=$4 AND server_id=$5 RETURNING id`,
		req.Fileset.Hash,
		req.Fileset.Bytes,
		guildID,
		req.ServerId)
	var returnID string
	err := row.Scan(&returnID)
	if err != nil {
		return nil, err
	}
	return &pb.SetFilesetResponse{}, nil
}

// CreateDevice creates a user
func (a *API) CreateDevice(ctx context.Context, req *pb.CreateDeviceRequest) (*pb.CreateDeviceResponse, error) {
	userID := uuid.New().String()
	_, err := a.db.ExecContext(ctx, `
    INSERT into devices (id, created_at) VALUES ($1, now())`, userID)
	if err != nil {
		return nil, err
	}
	return &pb.CreateDeviceResponse{
		Id: userID,
	}, nil
}

func main() {
	ctx := context.Background()
	addr := "0.0.0.0:" + strconv.Itoa(*port)
	l, err := net.Listen("tcp", addr)
	if err != nil {
		panic(err)
	}
	defer l.Close()
	fmt.Println("Started grpc:", addr)

	grpcSrv := grpc.NewServer()
	db, err := sql.Open("postgres", "postgres://localhost/partycloud_dev?sslmode=disable")
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	srv := &API{db: db}
	pb.RegisterApiServer(grpcSrv, srv)

	go grpcSrv.Serve(l)
	<-ctx.Done()
	os.Exit(0) // This shouldn't be required but trayhost isn't stopping
	fmt.Println("stopping daemon")
}

// MultiScanner is an interface for anything scanny
type MultiScanner interface {
	Scan(dest ...interface{}) error
}

func scanServer(row MultiScanner) (*pb.Server, error) {
	var serverRow ServerRow
	if err := row.Scan(&serverRow.ID, &serverRow.Name, &serverRow.Image, &serverRow.CurrentOwnerID, &serverRow.FilesetHash, &serverRow.FilesetBytes); err != nil {
		return nil, err
	}

	srv := &pb.Server{
		Id:             serverRow.ID,
		Image:          serverRow.Image,
		Name:           serverRow.Name,
		CurrentOwnerId: serverRow.CurrentOwnerID,
	}
	if serverRow.FilesetHash != nil {
		srv.Fileset = &pb.Fileset{
			Hash: serverRow.FilesetHash,
		}
		if err := serverRow.FilesetBytes.Scan(&srv.Fileset.Bytes); err != nil {
			return nil, err
		}
	}

	return srv, nil
}
