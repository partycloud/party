import * as ServersActions from '../actions/servers';
import { NewServer, Props } from '../components/NewServer';
import { IState } from '../reducers';
import { connect, Dispatch } from 'react-redux';
import * as React from 'react';
import { bindActionCreators } from 'redux';


function mapStateToProps(state: IState): Partial<Props> {
  return {
    
  };
}

function mapDispatchToProps(dispatch: Dispatch<IState>): Partial<Props> {
  return bindActionCreators(ServersActions as any, dispatch);
}

export default (connect(mapStateToProps, mapDispatchToProps)(NewServer) as any as React.StatelessComponent<Props>);
