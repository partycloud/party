all: proto/api/api.pb.go proto/daemon/daemon.pb.go proto/filesync/filesync.pb.go

proto/api/api.pb.go: proto/api.proto
	mkdir -p proto/api
	protoc -I proto/ proto/api.proto --go_out=plugins=grpc:proto/api

proto/daemon/daemon.pb.go: proto/daemon.proto
	mkdir -p proto/daemon
	protoc -I proto/ proto/daemon.proto --go_out=plugins=grpc:proto/daemon

proto/filesync/filesync.pb.go: proto/filesync.proto
	mkdir -p proto/filesync
	protoc -I proto/ proto/filesync.proto --go_out=plugins=grpc:proto/filesync

build/Partycloud.app: build/Partycloud.app/Contents/MacOS/main
	mkdir -p build/Partycloud.app/Contents/Resources
	cp resources/App.plist build/Partycloud.app/Contents/Info.plist
	cp resources/Icon.png* build/Partycloud.app/Contents/Resources/

build/Partycloud.app/Contents/MacOS/main: $(foreach dir, ., $(wildcard $(dir)/*.go))
	mkdir -p build/Partycloud.app/Contents/MacOS
	go build -o build/Partycloud.app/Contents/MacOS/main ./daemon

.PHONY: clean
clean:
	rm -rf build/Partycloud.app
	rm -rf proto/api
	rm -rf proto/daemon
	rm -rf proto/filesync
