// package: daemon
// file: daemon.proto

import * as jspb from "google-protobuf";

export class GetEventsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEventsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetEventsRequest): GetEventsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetEventsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEventsRequest;
  static deserializeBinaryFromReader(message: GetEventsRequest, reader: jspb.BinaryReader): GetEventsRequest;
}

export namespace GetEventsRequest {
  export type AsObject = {
  }
}

export class Event extends jspb.Message {
  hasServerupdate(): boolean;
  clearServerupdate(): void;
  getServerupdate(): EventServerUpdate | undefined;
  setServerupdate(value?: EventServerUpdate): void;

  getPayloadCase(): Event.PayloadCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Event.AsObject;
  static toObject(includeInstance: boolean, msg: Event): Event.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Event, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Event;
  static deserializeBinaryFromReader(message: Event, reader: jspb.BinaryReader): Event;
}

export namespace Event {
  export type AsObject = {
    serverupdate?: EventServerUpdate.AsObject,
  }

  export enum PayloadCase {
    PAYLOAD_NOT_SET = 0,
    SERVERUPDATE = 1,
  }
}

export class EventServerUpdate extends jspb.Message {
  hasServer(): boolean;
  clearServer(): void;
  getServer(): Server | undefined;
  setServer(value?: Server): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventServerUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: EventServerUpdate): EventServerUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventServerUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventServerUpdate;
  static deserializeBinaryFromReader(message: EventServerUpdate, reader: jspb.BinaryReader): EventServerUpdate;
}

export namespace EventServerUpdate {
  export type AsObject = {
    server?: Server.AsObject,
  }
}

export class ListServersRequest extends jspb.Message {
  getPage(): number;
  setPage(value: number): void;

  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListServersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListServersRequest): ListServersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListServersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListServersRequest;
  static deserializeBinaryFromReader(message: ListServersRequest, reader: jspb.BinaryReader): ListServersRequest;
}

export namespace ListServersRequest {
  export type AsObject = {
    page: number,
    limit: number,
  }
}

export class ListServersResponse extends jspb.Message {
  clearServersList(): void;
  getServersList(): Array<Server>;
  setServersList(value: Array<Server>): void;
  addServers(value?: Server, index?: number): Server;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListServersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListServersResponse): ListServersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListServersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListServersResponse;
  static deserializeBinaryFromReader(message: ListServersResponse, reader: jspb.BinaryReader): ListServersResponse;
}

export namespace ListServersResponse {
  export type AsObject = {
    serversList: Array<Server.AsObject>,
  }
}

export class CreateServerRequest extends jspb.Message {
  getImage(): string;
  setImage(value: string): void;

  getName(): string;
  setName(value: string): void;

  getImportDataDir(): string;
  setImportDataDir(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateServerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateServerRequest): CreateServerRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateServerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateServerRequest;
  static deserializeBinaryFromReader(message: CreateServerRequest, reader: jspb.BinaryReader): CreateServerRequest;
}

export namespace CreateServerRequest {
  export type AsObject = {
    image: string,
    name: string,
    importDataDir: string,
  }
}

export class CreateServerResponse extends jspb.Message {
  hasServer(): boolean;
  clearServer(): void;
  getServer(): Server | undefined;
  setServer(value?: Server): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateServerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateServerResponse): CreateServerResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateServerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateServerResponse;
  static deserializeBinaryFromReader(message: CreateServerResponse, reader: jspb.BinaryReader): CreateServerResponse;
}

export namespace CreateServerResponse {
  export type AsObject = {
    server?: Server.AsObject,
  }
}

export class StartServerRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartServerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StartServerRequest): StartServerRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StartServerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartServerRequest;
  static deserializeBinaryFromReader(message: StartServerRequest, reader: jspb.BinaryReader): StartServerRequest;
}

export namespace StartServerRequest {
  export type AsObject = {
    id: string,
  }
}

export class StartServerResponse extends jspb.Message {
  hasServer(): boolean;
  clearServer(): void;
  getServer(): Server | undefined;
  setServer(value?: Server): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartServerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StartServerResponse): StartServerResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StartServerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartServerResponse;
  static deserializeBinaryFromReader(message: StartServerResponse, reader: jspb.BinaryReader): StartServerResponse;
}

export namespace StartServerResponse {
  export type AsObject = {
    server?: Server.AsObject,
  }
}

export class StopServerRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopServerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StopServerRequest): StopServerRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StopServerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopServerRequest;
  static deserializeBinaryFromReader(message: StopServerRequest, reader: jspb.BinaryReader): StopServerRequest;
}

export namespace StopServerRequest {
  export type AsObject = {
    id: string,
  }
}

export class StopServerResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopServerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StopServerResponse): StopServerResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StopServerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopServerResponse;
  static deserializeBinaryFromReader(message: StopServerResponse, reader: jspb.BinaryReader): StopServerResponse;
}

export namespace StopServerResponse {
  export type AsObject = {
  }
}

export class DeleteServerRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteServerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteServerRequest): DeleteServerRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteServerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteServerRequest;
  static deserializeBinaryFromReader(message: DeleteServerRequest, reader: jspb.BinaryReader): DeleteServerRequest;
}

export namespace DeleteServerRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeleteServerResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteServerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteServerResponse): DeleteServerResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteServerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteServerResponse;
  static deserializeBinaryFromReader(message: DeleteServerResponse, reader: jspb.BinaryReader): DeleteServerResponse;
}

export namespace DeleteServerResponse {
  export type AsObject = {
  }
}

export class Server extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getImage(): string;
  setImage(value: string): void;

  getCurrentOwnerId(): string;
  setCurrentOwnerId(value: string): void;

  hasFileset(): boolean;
  clearFileset(): void;
  getFileset(): Fileset | undefined;
  setFileset(value?: Fileset): void;

  getStatus(): Server.Status;
  setStatus(value: Server.Status): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Server.AsObject;
  static toObject(includeInstance: boolean, msg: Server): Server.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Server, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Server;
  static deserializeBinaryFromReader(message: Server, reader: jspb.BinaryReader): Server;
}

export namespace Server {
  export type AsObject = {
    id: string,
    name: string,
    image: string,
    currentOwnerId: string,
    fileset?: Fileset.AsObject,
    status: Server.Status,
  }

  export enum Status {
    STOPPED = 0,
    STARTING = 1,
    RUNNING = 2,
    STOPPING = 3,
  }
}

export class Fileset extends jspb.Message {
  getHash(): Uint8Array | string;
  getHash_asU8(): Uint8Array;
  getHash_asB64(): string;
  setHash(value: Uint8Array | string): void;

  getBytes(): number;
  setBytes(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Fileset.AsObject;
  static toObject(includeInstance: boolean, msg: Fileset): Fileset.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Fileset, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Fileset;
  static deserializeBinaryFromReader(message: Fileset, reader: jspb.BinaryReader): Fileset;
}

export namespace Fileset {
  export type AsObject = {
    hash: Uint8Array | string,
    bytes: number,
  }
}

export class Guild extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getConnected(): boolean;
  setConnected(value: boolean): void;

  getIp(): string;
  setIp(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Guild.AsObject;
  static toObject(includeInstance: boolean, msg: Guild): Guild.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Guild, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Guild;
  static deserializeBinaryFromReader(message: Guild, reader: jspb.BinaryReader): Guild;
}

export namespace Guild {
  export type AsObject = {
    id: string,
    name: string,
    connected: boolean,
    ip: string,
  }
}

export class ListGuildsRequest extends jspb.Message {
  getPage(): number;
  setPage(value: number): void;

  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListGuildsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListGuildsRequest): ListGuildsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListGuildsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListGuildsRequest;
  static deserializeBinaryFromReader(message: ListGuildsRequest, reader: jspb.BinaryReader): ListGuildsRequest;
}

export namespace ListGuildsRequest {
  export type AsObject = {
    page: number,
    limit: number,
  }
}

export class ListGuildsResponse extends jspb.Message {
  clearGuildsList(): void;
  getGuildsList(): Array<Guild>;
  setGuildsList(value: Array<Guild>): void;
  addGuilds(value?: Guild, index?: number): Guild;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListGuildsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListGuildsResponse): ListGuildsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListGuildsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListGuildsResponse;
  static deserializeBinaryFromReader(message: ListGuildsResponse, reader: jspb.BinaryReader): ListGuildsResponse;
}

export namespace ListGuildsResponse {
  export type AsObject = {
    guildsList: Array<Guild.AsObject>,
  }
}

export class Member extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getIp(): string;
  setIp(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Member.AsObject;
  static toObject(includeInstance: boolean, msg: Member): Member.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Member, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Member;
  static deserializeBinaryFromReader(message: Member, reader: jspb.BinaryReader): Member;
}

export namespace Member {
  export type AsObject = {
    id: string,
    name: string,
    ip: string,
  }
}

export class ListMembersRequest extends jspb.Message {
  getPage(): number;
  setPage(value: number): void;

  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListMembersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListMembersRequest): ListMembersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListMembersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListMembersRequest;
  static deserializeBinaryFromReader(message: ListMembersRequest, reader: jspb.BinaryReader): ListMembersRequest;
}

export namespace ListMembersRequest {
  export type AsObject = {
    page: number,
    limit: number,
  }
}

export class ListMembersResponse extends jspb.Message {
  clearMembersList(): void;
  getMembersList(): Array<Member>;
  setMembersList(value: Array<Member>): void;
  addMembers(value?: Member, index?: number): Member;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListMembersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListMembersResponse): ListMembersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListMembersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListMembersResponse;
  static deserializeBinaryFromReader(message: ListMembersResponse, reader: jspb.BinaryReader): ListMembersResponse;
}

export namespace ListMembersResponse {
  export type AsObject = {
    membersList: Array<Member.AsObject>,
  }
}

