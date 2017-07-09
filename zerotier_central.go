package party

import (
	"context"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"os"
	"time"
)

const base = "https://my.zerotier.com"

// Network represents a ZeroTier central network
type Network struct {
	ID     string
	Config NetworkConfig
}

type NetworkConfig struct {
	Name string
}

// GetViewableNetworks returns a list of ZeroTier central networks
func GetViewableNetworks(ctx context.Context) ([]Network, error) {
	var nets []Network
	err := callAPI(ctx, "/api/network", &nets)
	return nets, err
}

func callAPI(ctx context.Context, path string, v interface{}) error {
	req, err := http.NewRequest("GET", base+path, nil)
	if err != nil {
		return err
	}
	req.Header.Add("Authorization", fmt.Sprintf("bearer %s", os.Getenv("ZT_API_TOKEN")))

	ctx, cancel := context.WithTimeout(ctx, 5*time.Second)
	defer cancel()
	req = req.WithContext(ctx)
	resp, err := http.DefaultClient.Do(req)
	if err != nil {
		return err
	}

	defer resp.Body.Close()
	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		return err
	}

	return json.Unmarshal(body, &v)
}
