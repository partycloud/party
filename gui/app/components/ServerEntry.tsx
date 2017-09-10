import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Server } from "../pb/daemon_pb";

export interface Props extends RouteComponentProps<any> {
  startServer(): void,
  stopServer(): void,
  server: Server.AsObject
}

export class ServerEntry extends React.Component<Props> {
  render() {
    const { id, name, status } = this.props.server;
    return (
        <li key={id}>
        {name}
        {status}
        {status === Server.Status.RUNNING && <a>[stop]</a>}
        {status === Server.Status.STOPPED && <a>[start]</a>}
        </li>
    );
  }
}

export default ServerEntry;
