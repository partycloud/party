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

function updateServer(state: TState, server: Server.AsObject | undefined) {
  if (!server) {
    return state
  }
  let index = state.servers.findIndex(s => s.id === server.id)

  // construct a new server object, null values come through as empty strings :(
  const oldServer = state.servers[index]
  const newServer: Server.AsObject = oldServer ? {
    id: server.id,
    name: server.name || oldServer.name,
    image: server.image || oldServer.image,
    status: server.status || oldServer.status,
    fileset: server.fileset || oldServer.fileset,
    currentOwnerId: server.currentOwnerId || oldServer.currentOwnerId,
  } : server

  return {
    ...state,
    servers: [
      ...state.servers.slice(0, index),
      newServer,
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
    return updateServer(state, serverupdate.server)
  }
  return state
}
