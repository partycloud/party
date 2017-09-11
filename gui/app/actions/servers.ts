import * as api from '../api'
import { actionCreator, actionCreatorVoid } from './helpers'
import { Dispatch, Middleware, MiddlewareAPI } from 'redux'
import {
  Event,
  GetEventsRequest,
  ListServersRequest,
  Server,
  StartServerRequest,
  StartServerResponse,
  StopServerRequest,
  StopServerResponse,
} from "../pb/daemon_pb"
import { Daemon } from "../pb/daemon_pb_service";


export const serverStartReceive = actionCreator<StartServerResponse.AsObject>('SERVER_START_RECEIVE')
export const serverStartRequest = actionCreator<StartServerRequest.AsObject>('SERVER_START_REQUEST')
export const serverStopReceive = actionCreator<StopServerResponse.AsObject>('SERVER_STOP_RECEIVE')
export const serverStopRequest = actionCreator<StopServerRequest.AsObject>('SERVER_STOP_REQUEST')
export const serversReceive = actionCreator<Server.AsObject[]>('SERVERS_RECEIVE')
export const serversRequest = actionCreatorVoid('SERVERS_REQUEST')

export const eventStartStream = actionCreatorVoid('EVENT_START_STREAM')
export const eventReceive = actionCreator<Event.AsObject>('EVENT_RECEIVE')

export function startServer(id: string) {
  const request = new StartServerRequest();
  request.setId(id);

  return async (dispatch: Function) => {
    dispatch(serverStartRequest(request.toObject()))
    const resp = await api.apiCall(Daemon.StartServer, request)
    dispatch(serverStartReceive(resp.toObject()))   
  }
}

export function stopServer(id: string) {
  const request = new StopServerRequest();
  request.setId(id);

  return async (dispatch: Function) => {
    dispatch(serverStopRequest(request.toObject()))
    const resp = await api.apiCall(Daemon.StopServer, request)
    dispatch(serverStopReceive(resp.toObject()))   
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

export const eventStream: Middleware =
<S>({dispatch, getState}: MiddlewareAPI<S>) =>
  (next: Dispatch<S>) =>
    (action: any): any => {
        switch (action.type) {
            case 'EVENT_START_STREAM':
                api.apiStream(Daemon.Events, new GetEventsRequest(), (err, message) => {
                    if (message && !err) {
                        dispatch(eventReceive(message.toObject()))
                    }
                })
        }
        next(action)
    }
