package party

import (
	"context"
	"net"

	pb "github.com/partycloud/party/proto/daemon"
)

func ConnectedGuild(ctx context.Context) (*pb.Guild, error) {
	resp, err := ListGuilds(ctx, &pb.ListGuildsRequest{})
	if err != nil {
		return nil, err
	}

	if len(resp.Guilds) < 1 {
		return nil, nil
	}
	return resp.Guilds[0], nil
}

func ListGuilds(ctx context.Context, req *pb.ListGuildsRequest) (*pb.ListGuildsResponse, error) {
	ctx, cancel := context.WithCancel(ctx)
	defer cancel()

	nets, err := ListNetworks(ctx)
	if err != nil {
		return nil, err
	}

	// discord, err := discordgo.New("Bearer " + strings.TrimSpace(discordToken))
	// if err != nil {
	// 	return nil, err
	// }

	// members, err := discord.GuildMembers("117506030904016898", "", 100)
	// if err != nil {
	// 	return nil, err
	// }
	// fmt.Println(members)
	//
	// discordGuilds, err := discord.UserGuilds(100, "", "")
	// if err != nil {
	// 	return nil, err
	// }
	// for _, g := range discordGuilds {
	// 	fmt.Println(g.ID, g.Name)
	// }

	guilds := make([]*pb.Guild, len(nets))
	for i, zt := range nets {
		if len(zt.AssignedAddresses) != 1 {
			return nil, err
		}
		ip, _, err := net.ParseCIDR(zt.AssignedAddresses[0])
		if err != nil {
			return nil, err
		}

		guilds[i] = &pb.Guild{
			Id:   zt.ID,
			Name: zt.Name,
			Ip:   ip.String(),
		}
	}
	// for i, net := range nets {
	// 	var gnet *GuildNetwork
	//
	// 	for j := range gnets {
	// 		if gnets[j].ID == net.ID {
	// 			gnet = &gnets[j]
	// 		}
	// 	}
	// 	guilds[i] = Guild{
	// 		ID:        net.ID,
	// 		Name:      net.Config.Name,
	// 		Connected: gnet != nil,
	// 	}
	// }

	return &pb.ListGuildsResponse{
		Guilds: guilds,
	}, nil
}

// func CreateGuild(token, userId, name string) (string, error) {
// 	query, err := queryWithVars(createGuildMutation, map[string]interface{}{
// 		"userId": userId,
// 		"name":   name,
// 	})
// 	if err != nil {
// 		return "", err
// 	}
// 	result, err := jsonPost(apiURL, bytes.NewReader(query), token)
// 	if err != nil {
// 		return "", err
// 	}
//
// 	var gqlResult GqlResult
// 	err = json.Unmarshal(result, &gqlResult)
// 	if err != nil {
// 		return "", err
// 	}
//
// 	if len(gqlResult.Errors) > 0 {
// 		return "", &GqlErrorResult{Messages: gqlResult.Errors}
// 	}
//
// 	var data map[string]*json.RawMessage
// 	err = json.Unmarshal(*gqlResult.Data, &data)
// 	if err != nil {
// 		return "", err
// 	}
//
// 	var user map[string]*json.RawMessage
// 	err = json.Unmarshal(*data["createGuild"], &user)
// 	if err != nil {
// 		return "", err
// 	}
//
// 	var guildId string
// 	err = json.Unmarshal(*user["id"], &guildId)
// 	return guildId, err
// }
