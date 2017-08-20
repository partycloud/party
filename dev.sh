#!/usr/bin/env bash

set -eou pipefail

make clean
make build/Partycloud.app
sh -c "
cd ./build/Partycloud.app/Contents/MacOS
./main --port 38387 --gossip-port 8987 --name dave1 --peers 10.147.17.200:8988 &
./main --port 38388 --gossip-port 8988 --name dave2 --peers 10.147.17.200:8989 &
./main --port 38389 --gossip-port 8989 --name dave3 --peers 10.147.17.200:8987 &
wait
"
