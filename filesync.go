package party

import (
	"context"
	"fmt"
	"net"

	"google.golang.org/grpc"
)

type Filesync struct {
}

func NewFileSync(ctx context.Context, dataPath string) *Filesync {
	// entries, err := ioutil.ReadDir(filepath.Join(dataPath, "servers"))
	// if err != nil {
	//   return err
	// }
	// for _, e := range entries {
	//   if e.IsDir() {
	//     fmt.Println(e.Name())
	//   }
	// }

	addr := "0.0.0.0:0"
	l, err := net.Listen("tcp", addr)
	if err != nil {
		panic(err)
	}
	defer l.Close()
	fmt.Println("Started filesync:", l.Addr())

	grpcSrv := grpc.NewServer()
	fmt.Println(grpcSrv.GetServiceInfo())

	return nil

}
