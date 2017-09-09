import { bindActionCreators } from 'redux';
import { connect, Dispatch } from 'react-redux';
import { IState } from '../reducers';
import { Servers, Props } from '../components/Servers';
import * as React from 'react';
import * as ServersActions from '../actions/servers';

function mapStateToProps(state: IState): Partial<Props> {
  return {
    servers: state.servers.servers,
  };
}

function mapDispatchToProps(dispatch: Dispatch<IState>): Partial<Props> {
  return bindActionCreators(ServersActions as any, dispatch);
}

export default (connect(mapStateToProps, mapDispatchToProps)(Servers) as any as React.StatelessComponent<Props>);
