#!/usr/bin/env bash

set -eou pipefail

make build/Partycloud.app
sh -c "
cd ./build/Partycloud.app/Contents/MacOS
./main --device-id B8EEB515-BF37-4659-B733-663E57A4BA9E --port 38387 --gossip-port 8987 --name dave1 --peers 10.147.17.200:8988 &
./main --device-id 14ABA3C6-C63D-454E-80F2-CF9CFC6E50B7 --port 38388 --gossip-port 8988 --name dave2 --peers 10.147.17.200:8989 &
./main --device-id CC132B72-7A0A-4BDD-91DC-FBA0347B81F7 --port 38389 --gossip-port 8989 --name dave3 --peers 10.147.17.200:8987 &
wait
"
