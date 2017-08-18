proto/party/api.pb.go: proto/api.proto
	mkdir -p proto/api
	protoc -I proto/ proto/api.proto --go_out=plugins=grpc:proto/api

proto/party/daemon.pb.go: proto/daemon.proto
	mkdir -p proto/daemon
	protoc -I proto/ proto/daemon.proto --go_out=plugins=grpc:proto/daemon

build/Partycloud.app:
	mkdir -p build/Partycloud.app/Contents/MacOS
	mkdir -p build/Partycloud.app/Contents/Resources
	go build -o build/Partycloud.app/Contents/MacOS/main ./daemon
	cp resources/App.plist build/Partycloud.app/Contents/Info.plist
	cp resources/Icon.png* build/Partycloud.app/Contents/Resources/

clean:
	rm -rf build/Partycloud.app
