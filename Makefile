build/Partycloud.app:
	mkdir -p build/Partycloud.app/Contents/MacOS
	mkdir -p build/Partycloud.app/Contents/Resources
	go build -o build/Partycloud.app/Contents/MacOS/tray .
	cp resources/App.plist build/Partycloud.app/Contents/Info.plist
	cp resources/Icon.png.icns build/Partycloud.app/Contents/Resources/Icon.icns

clean:
	rm -rf build/Partycloud.app
