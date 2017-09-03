package party

import (
	"bytes"
	"context"
	"encoding/json"
	"encoding/xml"
	"fmt"
	"io"
	"io/ioutil"
	"net/http"
	"os"
	"os/exec"
	"path"
	"time"

	"github.com/syncthing/syncthing/lib/config"
)

type FileSync struct {
	apiKey   string
	guiAddr  string
	home     string
	servers  string
	syncAddr string
}

func NewSyncthing(ctx context.Context, dataPath, syncAddr, guiAddr string) (*FileSync, error) {
	f := &FileSync{
		guiAddr:  guiAddr,
		home:     path.Join(dataPath, "syncthing"),
		servers:  path.Join(dataPath, "servers"),
		syncAddr: syncAddr,
	}

	cfg, err := f.genConfig(ctx)
	if err != nil {
		return nil, err
	}
	f.apiKey = cfg.GUI.APIKey

	if err = f.startSyncthing(ctx); err != nil {
		return nil, err
	}
	if err = f.clearFolders(ctx); err != nil {
		return nil, err
	}

	return f, nil
}

// Seed starts sending server to anyone interested
func (f *FileSync) Seed(ctx context.Context, name string) error {
	return f.addFolder(ctx, name)
}

func (f *FileSync) startSyncthing(ctx context.Context) error {
	cmd := exec.CommandContext(ctx,
		"syncthing",
		"-no-browser",
		// "-no-console",    // @TODO enable for windows
		"-paused",
		"-gui-address", f.guiAddr,
		"-home", f.home,
	)

	go func() {
		stdout, err := cmd.StdoutPipe()
		if err != nil {
			panic(err)
		}
		go io.Copy(os.Stdout, stdout)
		if err := cmd.Start(); err != nil {
			panic(err)
		}
		if err := cmd.Wait(); err != nil {
			panic(err)
		}
	}()

	fmt.Println("waiting for syncthing", f)

	// wait for the syncthing rest API to start up
	return pollUntilSuccessOrTimeout(ctx, func() error {
		_, err := f.getConfig(ctx)
		return err
	})
}

func (f *FileSync) genConfig(ctx context.Context) (cfg *config.Configuration, err error) {
	cfgFile := path.Join(f.home, "config.xml")
	if _, err = os.Stat(cfgFile); os.IsNotExist(err) {
		_, err = exec.CommandContext(ctx,
			"syncthing",
			"-generate", f.home,
		).CombinedOutput()
		if err != nil {
			return
		}
	}

	reader, err := os.Open(cfgFile)
	if err != nil {
		return
	}
	cfg = &config.Configuration{}
	if err = xml.NewDecoder(reader).Decode(cfg); err != nil {
		return
	}
	if err = reader.Close(); err != nil {
		return
	}

	cfg.Folders = make([]config.FolderConfiguration, 0)
	cfg.Options.ListenAddresses = []string{
		fmt.Sprintf("tcp://%s", f.syncAddr),
	}

	writer, err := os.OpenFile(cfgFile, os.O_WRONLY|os.O_TRUNC, 0600)
	if err != nil {
		return
	}
	defer writer.Close()

	err = cfg.WriteXML(writer)
	return
}

func (f *FileSync) clearFolders(ctx context.Context) error {
	cfg, err := f.getConfig(ctx)
	if err != nil {
		return err
	}
	cfg.Folders = make([]config.FolderConfiguration, 0)
	return f.setConfig(ctx, cfg)
}

func (f *FileSync) addFolder(ctx context.Context, name string) error {
	cfg, err := f.getConfig(ctx)
	if err != nil {
		return err
	}

	path := f.serverPath(name)

	found := false
	for _, f := range cfg.Folders {
		if f.Path == path {
			found = true
			break
		}
	}

	if !found {
		cfg.Folders = append(cfg.Folders, config.FolderConfiguration{
			ID:   name,
			Path: path,
		})
	}

	fmt.Println("folders", len(cfg.Folders))
	if len(cfg.Folders) > 0 {
		if err := f.resume(ctx); err != nil {
			return err
		}
	}

	return f.setConfig(ctx, cfg)
}

func (f *FileSync) getConfig(ctx context.Context) (*config.Configuration, error) {
	body, err := f.get(ctx, "system/config")
	if err != nil {
		return nil, err
	}

	fmt.Println(string(body))

	var cfg config.Configuration
	err = json.Unmarshal(body, &cfg)
	return &cfg, err
}

func (f *FileSync) setConfig(ctx context.Context, cfg *config.Configuration) error {
	body, err := json.Marshal(cfg)
	if err != nil {
		return err
	}
	_, err = f.post(ctx, "system/config", body)
	return err
}

func (f *FileSync) resume(ctx context.Context) error {
	_, err := f.post(ctx, "system/resume", nil)
	return err
}

func (f *FileSync) req(ctx context.Context, method, url string, reqBody io.Reader) ([]byte, error) {
	req, err := http.NewRequest(method, f.restURL(url), reqBody)
	req.Header.Add("X-API-Key", f.apiKey)
	if err != nil {
		return nil, err
	}
	resp, err := http.DefaultClient.Do(req)
	if err != nil {
		return nil, err
	}
	if resp.StatusCode != 200 {
		return nil, fmt.Errorf("GET %s %d", url, resp.StatusCode)
	}
	return ioutil.ReadAll(resp.Body)
}

func (f *FileSync) get(ctx context.Context, url string) ([]byte, error) {
	return f.req(ctx, "GET", url, nil)
}

func (f *FileSync) post(ctx context.Context, url string, body []byte) ([]byte, error) {
	return f.req(ctx, "POST", url, bytes.NewReader(body))
}

func (f *FileSync) restURL(url string) string {
	return "http://" + f.guiAddr + "/rest/" + url
}

func (f *FileSync) serverPath(name string) string {
	return path.Join(f.servers, name)
}

func pollUntilSuccessOrTimeout(ctx context.Context, cb func() error) (err error) {
	timeout := time.After(30 * time.Second)
	tick := time.Tick(100 * time.Millisecond)
	for {
		select {
		case <-timeout:
			return
		case <-ctx.Done():
			return
		case <-tick:
			err = cb()
			if err == nil {
				return
			}
		}
	}
}
