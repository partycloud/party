package main

import (
	"bytes"
	"flag"
	"fmt"
	"math"
	"net"
	"os"
	"time"

	"golang.org/x/net/context"

	"github.com/boltdb/bolt"
	"github.com/golang/protobuf/proto"
	pb "github.com/partycloud/party/proto"
	"google.golang.org/grpc"
	"google.golang.org/grpc/grpclog"
)

var (
	defaultDBPath = os.Getenv("HOME") + "/.party/server.db"
	dbPath        = flag.String("db", defaultDBPath, "The db path. Defaults to "+defaultDBPath)
	port          = flag.Int("port", 10000, "The server port")
	bucket        = []byte("SERVERS")
)

type PCServer struct {
	db *bolt.DB
}

func (s *PCServer) CreateServer(ctx context.Context, req *pb.CreateServerRequest) (*pb.CreateServerResponse, error) {
	srv := pb.Server{
		GuildId: req.GuildId,
		Name:    req.Name,
		Image:   req.Image,
	}

	err := s.db.Update(func(tx *bolt.Tx) error {
		b, err := tx.CreateBucketIfNotExists(bucket)
		if err != nil {
			return err
		}
		id, err := b.NextSequence()
		if err != nil {
			return err
		}
		srv.Id = fmt.Sprintf("%020v", math.MaxUint64-id)

		val, err := proto.Marshal(&srv)
		if err != nil {
			return err
		}

		key := []byte(fmt.Sprintf("%s~%s", req.GuildId, srv.Id))
		return b.Put(key, val)
	})
	if err != nil {
		return nil, err
	}

	return &pb.CreateServerResponse{
		Id: srv.Id,
	}, nil

}

func (s *PCServer) ListServers(ctx context.Context, req *pb.ListServersRequest) (*pb.ListServersResponse, error) {
	var err error

	servers := make([]*pb.Server, 0)
	err = s.db.View(func(tx *bolt.Tx) error {
		for _, gid := range req.GuildId {
			b := tx.Bucket(bucket)
			if b == nil {
				return nil
			}
			c := b.Cursor()

			prefix := []byte(gid)
			for k, v := c.Seek(prefix); k != nil && bytes.HasPrefix(k, prefix); k, v = c.Next() {
				var server pb.Server
				if err = proto.Unmarshal(v, &server); err != nil {
					return err
				}
				servers = append(servers, &server)
			}
		}
		return nil
	})
	if err != nil {
		return nil, err
	}

	return &pb.ListServersResponse{Servers: servers}, nil
}

func NewServer() (*PCServer, error) {
	db, err := bolt.Open(*dbPath, 0600, &bolt.Options{Timeout: 1 * time.Second})
	if err != nil {
		return nil, err
	}

	return &PCServer{
		db: db,
	}, nil
}

func main() {
	addr := fmt.Sprintf(":%d", *port)
	lis, err := net.Listen("tcp", addr)
	if err != nil {
		grpclog.Fatalf("failed to listen: %v", err)
		os.Exit(1)
	}
	srv, err := NewServer()
	if err != nil {
		grpclog.Fatalf("failed to start server: %v", err)
		os.Exit(1)
	}

	grpcSrv := grpc.NewServer()
	pb.RegisterPartycloudServer(grpcSrv, srv)

	fmt.Println("listen", addr)
	grpcSrv.Serve(lis)
}
