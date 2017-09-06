package party

type Event interface {
}

type EventServerFilesetUpdate struct {
}

func (e *Environment) Pump(events <-chan Event) {
	for event := range events {
		switch ev := event.(type) {
		case *EventServerFilesetUpdate:
			e.MemberList.UpdateFileset(ev)
		}
	}
}
