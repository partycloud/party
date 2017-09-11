import { RouteComponentProps } from 'react-router';
import * as React from 'react';
import { Server } from "../pb/daemon_pb";


export interface Props extends RouteComponentProps<any> {
  fetchServers(): void,
  eventStartStream(): void,
  startServer(id: string): void,
  stopServer(id: string): void,
  servers: ReadonlyArray<Server.AsObject>
}

function displayStatus(status: Server.Status): string {
  switch(status) {
    case Server.Status.STOPPED:
      return "stopped"
    case Server.Status.STARTING:
      return "starting"
    case Server.Status.RUNNING:
      return "running"
    case Server.Status.STOPPING:
      return "stopping"
  }
}

export class Servers extends React.Component<Props> {
  componentDidMount() {
    this.props.eventStartStream()
  }

  render() {
    const { servers, startServer, stopServer } = this.props;
    return (
      <ul>
        {servers.map(s => 
          <li key={s.id}>
            {s.name}
            {displayStatus(s.status)}
            {s.status === Server.Status.RUNNING &&
              <button onClick={() => stopServer(s.id)}>stop</button>
            }
            {s.status === Server.Status.STOPPED && 
              <button onClick={() => startServer(s.id)}>start</button>
            }
          </li>
        )}
      </ul>
    );
  }
}

export default Servers;
