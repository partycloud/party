package party

import (
	"crypto/sha256"
	"io"
	"os"
	"strings"

	"github.com/spf13/afero"
)

type Hasher struct {
	fs afero.Fs
}

type DirScan struct {
	Hash  []byte
	Bytes int64
}

func NewHasher(fs afero.Fs) *Hasher {
	return &Hasher{
		fs: fs,
	}
}

func (h *Hasher) HashRecursive(root string) (*DirScan, error) {
	scan := &DirScan{}
	dhash := sha256.New()
	err := afero.Walk(h.fs, root, func(path string, info os.FileInfo, err error) error {
		if info.IsDir() {
			return nil
		}
		f, err := h.fs.Open(path)
		if err != nil {
			return err
		}
		defer f.Close()
		scan.Bytes += info.Size()

		if _, err := io.Copy(dhash, strings.NewReader(path)); err != nil {
			return err
		}

		if _, err := io.Copy(dhash, f); err != nil {
			return err
		}
		return nil
	})
	if err != nil {
		return nil, err
	}
	scan.Hash = dhash.Sum(nil)

	return scan, nil
}
