#!/usr/bin/env bash

set -eou pipefail

make build/Partycloud.app
sh -c "
cd ./build/Partycloud.app/Contents/MacOS
./main --device-id C6D62701-74F3-4095-A32C-91A9BD730E4E --port 38387 --gossip-port 8987 --name dave1 --peers 10.147.17.200:8988 &
./main --device-id F093448D-F093-42C9-8966-8D6805F64B74 --port 38388 --gossip-port 8988 --name dave2 --peers 10.147.17.200:8989 &
./main --device-id BC44BBDE-C3B0-456B-8DFE-A2FDA90A581E --port 38389 --gossip-port 8989 --name dave3 --peers 10.147.17.200:8987 &
wait
"
