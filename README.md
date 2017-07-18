## CLI

```
party [resource] [command] [flags]
```

### Examples

```
# list guilds
party guilds

# connect to guild
party guilds connect --guild partytown

# list servers
party servers --guild partytown

# create server
party servers create --guild partytown --name skyblock --image partycloud/minecraft --data-from ~/servers/skyblock

# start er up
party servers start --guild partytown --name skyblock

```


## Bolt DB schema

```
[guild]~[server] => Server (protobuf)

eg:
g1234~s1234 => {
  Id: 1234,
  Name: "skyblock",
  Image: "partycloud/minecraft:8",
}
```

## Actors

party – daemon that runs on each players computer
party-gui – electron app that talks to daemon
api – api.partycloud.com server
