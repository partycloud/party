import * as api from '../api'
import { actionCreator, actionCreatorVoid } from './helpers'
import {
  ListServersRequest,
  Server,
  StartServerRequest,
  StartServerResponse,
} from "../pb/daemon_pb"
import { Daemon } from "../pb/daemon_pb_service";


export const serverStartReceive = actionCreator<StartServerResponse.AsObject>('SERVER_START_RECEIVE')
export const serverStartRequest = actionCreator<StartServerRequest.AsObject>('SERVER_START_REQUEST')
export const serversReceive = actionCreator<Server.AsObject[]>('SERVERS_RECEIVE')
export const serversRequest = actionCreatorVoid('SERVERS_REQUEST')

export function startServer(id: string) {
  return async (dispatch: Function) => {
    const request = new StartServerRequest();
    request.setId(id);

    dispatch(serverStartRequest(request.toObject()))
    const resp = await api.apiCall(Daemon.StartServer, request)
    dispatch(serverStartReceive(resp.toObject()))   
  }
}

export function fetchServers() {
  return async (dispatch: Function) => {
    dispatch(serversRequest())
    const request = new ListServersRequest()
    const resp = await api.fetchServers(request)
    dispatch(serversReceive(resp.toObject().serversList))
  };
}
