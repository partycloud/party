proto/party.pb.go: proto/party.proto
	protoc -I proto/ proto/party.proto --go_out=plugins=grpc:proto

build/Partycloud.app:
	mkdir -p build/Partycloud.app/Contents/MacOS
	mkdir -p build/Partycloud.app/Contents/Resources
	go build -o build/Partycloud.app/Contents/MacOS/main ./daemon
	cp resources/App.plist build/Partycloud.app/Contents/Info.plist
	cp resources/Icon.png* build/Partycloud.app/Contents/Resources/

clean:
	rm -rf build/Partycloud.app
