package party

import (
	"bytes"
	"context"
	"encoding/json"
)

type Guild struct {
	ID        string
	Name      string
	Connected bool
}

var createGuildMutation = `mutation CreateGuildForUser($userId: ID!, $name: String!) {
  createGuild(
    name: $name,
    memberships: {
      userId: $userId,
    }
  ) {
    id
  }
}`

func ListGuilds(ctx context.Context) ([]Guild, error) {
	ctx, cancel := context.WithCancel(ctx)
	defer cancel()

	// @TODO run in parallel
	nets, err := GetViewableNetworks(ctx)
	if err != nil {
		return nil, err
	}

	gnets, err := ListGuildNetworks(ctx)
	if err != nil {
		return nil, err
	}

	guilds := make([]Guild, len(nets))
	for i, net := range nets {
		var gnet *GuildNetwork

		for j := range gnets {
			if gnets[j].ID == net.ID {
				gnet = &gnets[j]
			}
		}
		guilds[i] = Guild{
			ID:        net.ID,
			Name:      net.Config.Name,
			Connected: gnet != nil,
		}
	}

	return guilds, err
}

func CreateGuild(token, userId, name string) (string, error) {
	query, err := queryWithVars(createGuildMutation, map[string]interface{}{
		"userId": userId,
		"name":   name,
	})
	if err != nil {
		return "", err
	}
	result, err := jsonPost(apiURL, bytes.NewReader(query), token)
	if err != nil {
		return "", err
	}

	var gqlResult GqlResult
	err = json.Unmarshal(result, &gqlResult)
	if err != nil {
		return "", err
	}

	if len(gqlResult.Errors) > 0 {
		return "", &GqlErrorResult{Messages: gqlResult.Errors}
	}

	var data map[string]*json.RawMessage
	err = json.Unmarshal(*gqlResult.Data, &data)
	if err != nil {
		return "", err
	}

	var user map[string]*json.RawMessage
	err = json.Unmarshal(*data["createGuild"], &user)
	if err != nil {
		return "", err
	}

	var guildId string
	err = json.Unmarshal(*user["id"], &guildId)
	return guildId, err
}
