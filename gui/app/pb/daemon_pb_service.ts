// package: daemon
// file: daemon.proto

import * as daemon_pb from "./daemon_pb";
export class Daemon {
  static serviceName = "daemon.Daemon";
}
export namespace Daemon {
  export class Events {
    static readonly methodName = "Events";
    static readonly service = Daemon;
    static readonly requestStream = true;
    static readonly responseStream = true;
    static readonly requestType = daemon_pb.Event;
    static readonly responseType = daemon_pb.Event;
  }
  export class CreateServer {
    static readonly methodName = "CreateServer";
    static readonly service = Daemon;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = daemon_pb.CreateServerRequest;
    static readonly responseType = daemon_pb.CreateServerResponse;
  }
  export class StartServer {
    static readonly methodName = "StartServer";
    static readonly service = Daemon;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = daemon_pb.StartServerRequest;
    static readonly responseType = daemon_pb.StartServerResponse;
  }
  export class StopServer {
    static readonly methodName = "StopServer";
    static readonly service = Daemon;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = daemon_pb.StopServerRequest;
    static readonly responseType = daemon_pb.StopServerResponse;
  }
  export class DeleteServer {
    static readonly methodName = "DeleteServer";
    static readonly service = Daemon;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = daemon_pb.DeleteServerRequest;
    static readonly responseType = daemon_pb.DeleteServerResponse;
  }
  export class ListServers {
    static readonly methodName = "ListServers";
    static readonly service = Daemon;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = daemon_pb.ListServersRequest;
    static readonly responseType = daemon_pb.ListServersResponse;
  }
  export class ListGuilds {
    static readonly methodName = "ListGuilds";
    static readonly service = Daemon;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = daemon_pb.ListGuildsRequest;
    static readonly responseType = daemon_pb.ListGuildsResponse;
  }
  export class ListMembers {
    static readonly methodName = "ListMembers";
    static readonly service = Daemon;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = daemon_pb.ListMembersRequest;
    static readonly responseType = daemon_pb.ListMembersResponse;
  }
}
