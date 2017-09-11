package party

import (
	pb "github.com/partycloud/party/proto/daemon"
)

// Environment stores the running environment
type Environment struct {
	DataPath   string
	MemberList *MemberList
	DeviceID   string

	Events chan *pb.Event
}
