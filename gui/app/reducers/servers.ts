import { IAction } from '../actions/helpers'
import {
  eventReceive,
  serversReceive,
} from '../actions/servers'
import {
  Server,
} from "../pb/daemon_pb"


export interface TState {
  servers: ReadonlyArray<Server.AsObject>
}

const INITIAL_STATE = {
  servers: [],
}

function replaceServer(state: TState, server: Server.AsObject | undefined) {
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

export default function servers(state: TState = INITIAL_STATE, action: IAction) {
  if (serversReceive.test(action)) {
    return {
      ...state,
      servers: action.payload,
    }
  }

  if (eventReceive.test(action)) {
    const { serverupdate } = action.payload
    if (!serverupdate) {
      return state
    }
    return replaceServer(state, serverupdate.server)
  }
  return state
}
