import { RouteComponentProps } from 'react-router';
import * as React from 'react';

export interface Props extends RouteComponentProps<any> {
  createServer(image: string, name: string, dataFrom: string): void,
}

export class NewServer extends React.Component<Props> {
  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <h1>Create a new server</h1>
        <form onSubmit={handleSubmit} >
          <label>Name</label>
        </form>
      </div>
    );
  }
}

export default NewServer;
