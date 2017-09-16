#!/usr/bin/env bash

set -eou pipefail

rm -f build/Partycloud.app/Contents/MacOS/main
make build/Partycloud.app
sh -c "
cd ./build/Partycloud.app/Contents/MacOS
ls -la resources/icon.icns
./main --device-id C6D62701-74F3-4095-A32C-91A9BD730E4E --port 38387 --gossip-port 8987 --name rick --peers 10.147.17.200:8988 | sed 's/^/[rick]  /' &
./main --device-id F093448D-F093-42C9-8966-8D6805F64B74 --port 38388 --gossip-port 8988 --name morty --peers 10.147.17.200:8989 | sed 's/^/[morty] /' &
./main --device-id BC44BBDE-C3B0-456B-8DFE-A2FDA90A581E --port 38389 --gossip-port 8989 --name jerry --peers 10.147.17.200:8987 | sed 's/^/[jerry] /' &
wait
"
