package party

import (
	pb "github.com/partycloud/party/proto/api"
	"google.golang.org/grpc"
)

// APICall wraps calls to the daemon
func APICall(fn func(client pb.ApiClient) error) error {
	addr := "0.0.0.0:3000"
	conn, err := grpc.Dial(addr, grpc.WithInsecure())
	if err != nil {
		return err
	}
	defer conn.Close()
	client := pb.NewApiClient(conn)

	return fn(client)
}
