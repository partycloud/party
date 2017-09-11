package party

import (
	pb "github.com/partycloud/party/proto/daemon"
)

func NewEventFilesetUpdate(id string, scan *DirScan) *pb.Event {
	return &pb.Event{
		Payload: &pb.Event_ServerUpdate{
			ServerUpdate: &pb.EventServerUpdate{
				Server: &pb.Server{
					Id: id,
					Fileset: &pb.Fileset{
						Bytes: scan.Bytes,
						Hash:  scan.Hash,
					},
				},
			},
		},
	}
}

func NewEventServerStatusUpdate(id string, status pb.Server_Status) *pb.Event {
	return &pb.Event{
		Payload: &pb.Event_ServerUpdate{
			ServerUpdate: &pb.EventServerUpdate{
				Server: &pb.Server{
					Id:     id,
					Status: status,
				},
			},
		},
	}
}

func (e *Environment) Pump(events <-chan *pb.Event) {
	// for event := range events {
	// 	switch ev := event.Payload.(type) {
	// 	case *pb.Event_ServerUpdate:
	// 		e.MemberList.UpdateFileset(ev.ServerUpdate)
	// 	}
	// }
}
