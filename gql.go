package party

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"io/ioutil"
	"net/http"
	"strconv"
	"strings"
)

var apiURL = "https://api.graph.cool/simple/v1/cj2xhxe1l2vix013366pafuds"

type GqlResult struct {
	Data   *json.RawMessage `json:"data"`
	Errors []GqlError       `json:"errors"`
}

type GqlError struct {
	Message string `json:"message"`
}

type GqlErrorResult struct {
	Messages []GqlError
}

func (e GqlErrorResult) Error() string {
	msgs := make([]string, len(e.Messages))
	for _, m := range e.Messages {
		msgs = append(msgs, m.Message)
	}
	return strings.Join(msgs, "\n")
}

func jsonPost(url string, requestBody io.Reader, token string) ([]byte, error) {
	req, err := http.NewRequest("POST", url, requestBody)
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", fmt.Sprintf("Bearer %s", token))

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		return nil, err
	}

	defer resp.Body.Close()
	return ioutil.ReadAll(resp.Body)
}

func queryToRequest(queryString string) string {
	return `{"query":` + strconv.QuoteToASCII(queryString) + `}`
}

func queryWithVars(query string, vars map[string]interface{}) ([]byte, error) {
	req := map[string]interface{}{
		"query":     query,
		"variables": vars,
	}
	return json.Marshal(req)
}

func gqlWithVars(token string, query string, vars map[string]interface{}, v interface{}) error {
	q, err := queryWithVars(query, vars)
	if err != nil {
		return err
	}
	result, err := jsonPost(apiURL, bytes.NewReader(q), token)
	if err != nil {
		return err
	}

	var gqlResult GqlResult
	err = json.Unmarshal(result, &gqlResult)
	if err != nil {
		return err
	}

	fmt.Println(string(result))

	if len(gqlResult.Errors) > 0 {
		return &GqlErrorResult{Messages: gqlResult.Errors}
	}

	return json.Unmarshal(*gqlResult.Data, v)
}

func gql(token string, query string, v interface{}) error {
	return gqlWithVars(token, query, map[string]interface{}{}, v)
}
