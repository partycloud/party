import { IAction } from '../actions/helpers';
import { Server } from '../actions/server';

export interface TState {
  servers: Server[];
}

const INITIAL_STATE = {
  servers: [],
}

export default function servers(state: TState = INITIAL_STATE, action: IAction) {
  return state;
}
