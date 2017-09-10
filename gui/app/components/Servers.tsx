import { RouteComponentProps } from 'react-router';
import * as React from 'react';
import { Server } from "../pb/daemon_pb";


export interface Props extends RouteComponentProps<any> {
  fetchServers(): void,
  startServer(id: string): void,
  servers: ReadonlyArray<Server.AsObject>
}

export class Servers extends React.Component<Props> {
  componentDidMount() {
    this.props.fetchServers()
  }

  render() {
    const { servers, startServer } = this.props;
    return (
      <ul>
        {servers.map(s => 
          <li key={s.id}>
            {s.name}
            {s.status}
            {s.status === Server.Status.RUNNING && <a>[stop]</a>}
            {s.status === Server.Status.STOPPED && 
              <button onClick={() => startServer(s.id)}>[start]</button>
            }
          </li>
        )}
      </ul>
    );
  }
}

export default Servers;
