package main

import (
	"flag"
	"os"

	"golang.org/x/oauth2"

	"github.com/boltdb/bolt"
)

var (
	defaultDBPath = os.Getenv("HOME") + "/.party/server.db"
	dbPath        = flag.String("db", defaultDBPath, "The db path. Defaults to "+defaultDBPath)
	port          = flag.Int("port", 10000, "The server port")
	bucket        = []byte("SERVERS")

	READ_MESSAGES = 1024
	SEND_MESSAGES = 2048
	CONNECT       = 1048576
	SPEAK         = 2097152
)

var oauthConf *oauth2.Config

type PCServer struct {
	db *bolt.DB
}

// func (s *PCServer) CreateServer(ctx context.Context, req *pb.CreateServerRequest) (*pb.CreateServerResponse, error) {
// 	return nil, errors.New("Not implemented")
// 	srv := pb.Server{
// 		GuildId: req.GuildId,
// 		Name:    req.Name,
// 		Image:   req.Image,
// 	}
//
// 	err := s.db.Update(func(tx *bolt.Tx) error {
// 		b, err := tx.CreateBucketIfNotExists(bucket)
// 		if err != nil {
// 			return err
// 		}
// 		id, err := b.NextSequence()
// 		if err != nil {
// 			return err
// 		}
// 		srv.Id = fmt.Sprintf("%020v", math.MaxUint64-id)
//
// 		val, err := proto.Marshal(&srv)
// 		if err != nil {
// 			return err
// 		}
//
// 		key := []byte(fmt.Sprintf("%s~%s", req.GuildId, srv.Id))
// 		return b.Put(key, val)
// 	})
// 	if err != nil {
// 		return nil, err
// 	}
//
// 	return &pb.CreateServerResponse{
// 		Id: srv.Id,
// 	}, nil
//
// }
//
// func (s *PCServer) ListServers(ctx context.Context, req *pb.ListServersRequest) (*pb.ListServersResponse, error) {
// 	var err error
//
// 	servers := make([]*pb.Server, 0)
// 	err = s.db.View(func(tx *bolt.Tx) error {
// 		for _, gid := range req.GuildId {
// 			b := tx.Bucket(bucket)
// 			if b == nil {
// 				return nil
// 			}
// 			c := b.Cursor()
//
// 			prefix := []byte(gid)
// 			for k, v := c.Seek(prefix); k != nil && bytes.HasPrefix(k, prefix); k, v = c.Next() {
// 				var server pb.Server
// 				if err = proto.Unmarshal(v, &server); err != nil {
// 					return err
// 				}
// 				servers = append(servers, &server)
// 			}
// 		}
// 		return nil
// 	})
// 	if err != nil {
// 		return nil, err
// 	}
//
// 	return &pb.ListServersResponse{Servers: servers}, nil
// }
//
// func NewServer() (*PCServer, error) {
// 	db, err := bolt.Open(*dbPath, 0600, &bolt.Options{Timeout: 1 * time.Second})
// 	if err != nil {
// 		return nil, err
// 	}
//
// 	return &PCServer{
// 		db: db,
// 	}, nil
// }
//
// var letters = []rune("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ")
//
// func randSeq(n int) string {
// 	b := make([]rune, n)
// 	for i := range b {
// 		b[i] = letters[rand.Intn(len(letters))]
// 	}
// 	return string(b)
// }
//
// func server() {
// 	server := http.NewServeMux()
// 	server.HandleFunc("/login", handleLogin)
// 	server.HandleFunc("/callback", handleCallback)
// 	fmt.Println("listen 10001")
// 	http.ListenAndServe(":10001", server)
// }
//
// func handleLogin(w http.ResponseWriter, r *http.Request) {
// 	url := oauthConf.AuthCodeURL(randSeq(32), oauth2.AccessTypeOnline)
// 	perms := READ_MESSAGES | SEND_MESSAGES | CONNECT | SPEAK
//
// 	j, err := json.Marshal(map[string]string{
// 		"url": url + fmt.Sprintf("&permissions=%v", perms),
// 	})
// 	if err != nil {
// 		http.Error(w, err.Error(), 500)
// 		return
// 	}
//
// 	w.Write(j)
// }
//
// func handleCallback(w http.ResponseWriter, r *http.Request) {
// 	// @TODO validate state
// 	errorMsg := r.FormValue("error")
// 	if errorMsg != "" {
// 		http.Error(w, errorMsg, 500)
// 		return
// 	}
//
// 	token, err := oauthConf.Exchange(oauth2.NoContext, r.FormValue("code"))
// 	if err != nil {
// 		http.Error(w, err.Error(), 500)
// 		return
// 	}
//
// 	fmt.Println(token)
//
// 	fmt.Fprintf(w, token.AccessToken)
// }

func main() {
}

// 	addr := fmt.Sprintf(":%d", *port)
// 	lis, err := net.Listen("tcp", addr)
// 	if err != nil {
// 		grpclog.Fatalf("failed to listen: %v", err)
// 		os.Exit(1)
// 	}
// 	srv, err := NewServer()
// 	if err != nil {
// 		grpclog.Fatalf("failed to start server: %v", err)
// 		os.Exit(1)
// 	}
//
// 	grpcSrv := grpc.NewServer()
// 	pb.RegisterPartycloudServer(grpcSrv, srv)
//
// 	// Setup the OAuth2 Configuration
// 	endpoint := oauth2.Endpoint{
// 		AuthURL:  "https://discordapp.com/api/oauth2/authorize",
// 		TokenURL: "https://discordapp.com/api/oauth2/token",
// 	}
//
// 	oauthConf = &oauth2.Config{
// 		ClientID:     os.Getenv("DISCORD_CLIENT_ID"),
// 		ClientSecret: os.Getenv("DISCORD_CLIENT_SECRET"),
// 		Scopes:       []string{"guilds", "identify"},
// 		Endpoint:     endpoint,
// 		RedirectURL:  "http://localhost:10001/callback",
// 	}
//
// 	go server()
// 	fmt.Println("listen", addr)
// 	grpcSrv.Serve(lis)
// }
