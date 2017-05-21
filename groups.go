package party

import (
	"bytes"
	"encoding/json"
)

type Group struct {
	Id   string `json:"id"`
	Name string
}

var createGroupMutation = `mutation CreateGroupForUser($userId: ID!, $name: String!) {
  createGroup(
    name: $name,
    memberships: {
      userId: $userId,
    }
  ) {
    id
  }
}`

func ListGroups(token string) ([]Group, error) {
	var data map[string]*json.RawMessage
	err := gql(token, `{
	  user {
	    memberships {
	      group {
	        id,
	        name
	      }
	    }
	  }
	}`, &data)
	if err != nil {
		return nil, err
	}

	var user map[string]*json.RawMessage
	err = json.Unmarshal(*data["user"], &user)
	if err != nil {
		return nil, err
	}

	var groupParts []map[string]Group
	err = json.Unmarshal(*user["memberships"], &groupParts)
	if err != nil {
		return nil, err
	}

	groups := make([]Group, len(groupParts))
	for _, g := range groupParts {
		groups = append(groups, g["group"])
	}

	return groups, err
}

func CreateGroup(token, userId, name string) (string, error) {
	query, err := queryWithVars(createGroupMutation, map[string]interface{}{
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
	err = json.Unmarshal(*data["createGroup"], &user)
	if err != nil {
		return "", err
	}

	var groupId string
	err = json.Unmarshal(*user["id"], &groupId)
	return groupId, err
}
