GO_APP=build/Partycloud.app
DESKTOP_DIST=desktop/ui/dist
DESKTOP_MAC_APP=$(DESKTOP_DIST)/mac/Partycloud.app

.PHONY: app clean
all: proto/api/api.pb.go proto/daemon/daemon.pb.go proto/filesync/filesync.pb.go desktop/ui/app/pb/daemon.d.ts

app: $(GO_APP)
	cd ./desktop/ui && npm run dist
	cd $(DESKTOP_MAC_APP)/Contents/MacOS && mv Partycloud ui
	cp $(GO_APP)/Contents/MacOS/main $(DESKTOP_MAC_APP)/Contents/MacOS/Partycloud
	cp resources/Icon.png* $(DESKTOP_MAC_APP)/Contents/Resources/


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
	mkdir -p $(GO_APP)/Contents/Resources
	cp resources/App.plist $(GO_APP)/Contents/Info.plist
	cp resources/Icon.png* $(GO_APP)/Contents/Resources/

build/Partycloud.app/Contents/MacOS/main: $(foreach dir, ., $(wildcard $(dir)/*.go))
	mkdir -p $(GO_APP)/Contents/MacOS
	go build -o $(GO_APP)/Contents/MacOS/main ./desktop

desktop/ui/app/pb/daemon.d.ts: proto/daemon.proto
	mkdir -p desktop/ui/app/pb
	protoc \
		--plugin=protoc-gen-ts=./desktop/ui/node_modules/.bin/protoc-gen-ts \
		--js_out=import_style=commonjs,binary:desktop/ui/app/pb \
		--ts_out=service=true:desktop/ui/app/pb \
		-I ./proto proto/daemon.proto

clean:
	rm -rf $(GO_APP)
	rm -rf $(DESKTOP_DIST)
	rm -rf proto/api
	rm -rf proto/daemon
	rm -rf proto/filesync
	rm -rf desktop/ui/app/pb
