import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Server } from '../actions/server'

export interface Props extends RouteComponentProps<any> {
  fetchServers(): void,
  servers: Server[]
}

export class Servers extends React.Component<Props> {
  componentDidMount() {
    this.props.fetchServers()
  }

  render() {
    const { servers } = this.props;
    return (
      <ul>
        {servers.map(s => <li>{s}</li>)}
      </ul>
    );
  }
}

export default Servers;
