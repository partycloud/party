proto/party.pb.go:
	protoc -I proto/ proto/party.proto --go_out=plugins=grpc:proto
