import { combineReducers, Reducer } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import servers, { TState as TServersState } from './servers';

const rootReducer = combineReducers({
  servers,
  routing: routing as Reducer<any>
});

export interface IState {
  servers: TServersState;
}

export default rootReducer;
