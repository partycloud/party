package party

import (
	"fmt"
	"testing"

	"github.com/spf13/afero"
)

func Test_Hasher(t *testing.T) {
	var fs afero.Fs = afero.NewMemMapFs()
	fs.MkdirAll("src/a", 0755)
	afero.WriteFile(fs, "src/a/b", []byte("file b"), 0644)
	afero.WriteFile(fs, "src/c", []byte("file c"), 0644)

	h := NewHasher(fs)
	scan, err := h.HashRecursive("src")
	if err != nil {
		t.Fatal(err)
	}

	assertHash(t, scan.Hash, "e17983b18225868acff28ccdcb1dba0680b7448da077b090a2f83c6f5cc75b9b")
	assertEqual(t, scan.Bytes, 12)
}

func assertHash(t *testing.T, actual []byte, expected string) {
	if fmt.Sprintf("%x", actual) != expected {
		t.Errorf("Expected %s was %x", expected, actual)
	}
}

func assertEqual(t *testing.T, actual, expected uint64) {
	if actual != expected {
		t.Errorf("Expected %v was %v", expected, actual)
	}
}
