import servers, { TState as TServersState } from './servers';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as form } from 'redux-form';
import { combineReducers, Reducer } from 'redux';


const rootReducer = combineReducers({
  servers,
  form,
  routing: routing as Reducer<any>
});

export interface IState {
  servers: TServersState;
}

export default rootReducer;
