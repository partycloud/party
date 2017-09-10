import { IAction } from '../actions/helpers'
import { Server } from '../actions/server'
import {
  serversReceive,
  serverStartReceive,
} from '../actions/servers'


export interface TState {
  servers: ReadonlyArray<Server>
}

const INITIAL_STATE = {
  servers: [],
}

export default function servers(state: TState = INITIAL_STATE, action: IAction) {
  if (serversReceive.test(action)) {
    return {
      ...state,
      servers: action.payload,
    }
  }

  if (serverStartReceive.test(action)) {
    const server = action.payload.server
    if (!server) {
      return state
    }
    let index = state.servers.findIndex(s => s.id === server.id)
    return {
      ...state,
      servers: [
        ...state.servers.slice(0, index),
        server,
        ...state.servers.slice(index + 1)
      ],
    }
  }
  return state
}
