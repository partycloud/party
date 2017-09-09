import * as $protobuf from "protobufjs";

/** Namespace daemon. */
export namespace daemon {

    /** Represents a Daemon */
    class Daemon extends $protobuf.rpc.Service {

        /**
         * Constructs a new Daemon service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new Daemon service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Daemon;

        /**
         * Calls Events.
         * @param request Event message or plain object
         * @param callback Node-style callback called with the error, if any, and Event
         */
        public events(request: daemon.IEvent, callback: daemon.Daemon.EventsCallback): void;

        /**
         * Calls Events.
         * @param request Event message or plain object
         * @returns Promise
         */
        public events(request: daemon.IEvent): Promise<daemon.Event>;

        /**
         * Calls CreateServer.
         * @param request CreateServerRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and CreateServerResponse
         */
        public createServer(request: daemon.ICreateServerRequest, callback: daemon.Daemon.CreateServerCallback): void;

        /**
         * Calls CreateServer.
         * @param request CreateServerRequest message or plain object
         * @returns Promise
         */
        public createServer(request: daemon.ICreateServerRequest): Promise<daemon.CreateServerResponse>;

        /**
         * Calls StartServer.
         * @param request StartServerRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and StartServerResponse
         */
        public startServer(request: daemon.IStartServerRequest, callback: daemon.Daemon.StartServerCallback): void;

        /**
         * Calls StartServer.
         * @param request StartServerRequest message or plain object
         * @returns Promise
         */
        public startServer(request: daemon.IStartServerRequest): Promise<daemon.StartServerResponse>;

        /**
         * Calls StopServer.
         * @param request StopServerRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and StopServerResponse
         */
        public stopServer(request: daemon.IStopServerRequest, callback: daemon.Daemon.StopServerCallback): void;

        /**
         * Calls StopServer.
         * @param request StopServerRequest message or plain object
         * @returns Promise
         */
        public stopServer(request: daemon.IStopServerRequest): Promise<daemon.StopServerResponse>;

        /**
         * Calls DeleteServer.
         * @param request DeleteServerRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and DeleteServerResponse
         */
        public deleteServer(request: daemon.IDeleteServerRequest, callback: daemon.Daemon.DeleteServerCallback): void;

        /**
         * Calls DeleteServer.
         * @param request DeleteServerRequest message or plain object
         * @returns Promise
         */
        public deleteServer(request: daemon.IDeleteServerRequest): Promise<daemon.DeleteServerResponse>;

        /**
         * Calls ListServers.
         * @param request ListServersRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and ListServersResponse
         */
        public listServers(request: daemon.IListServersRequest, callback: daemon.Daemon.ListServersCallback): void;

        /**
         * Calls ListServers.
         * @param request ListServersRequest message or plain object
         * @returns Promise
         */
        public listServers(request: daemon.IListServersRequest): Promise<daemon.ListServersResponse>;

        /**
         * Calls ListGuilds.
         * @param request ListGuildsRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and ListGuildsResponse
         */
        public listGuilds(request: daemon.IListGuildsRequest, callback: daemon.Daemon.ListGuildsCallback): void;

        /**
         * Calls ListGuilds.
         * @param request ListGuildsRequest message or plain object
         * @returns Promise
         */
        public listGuilds(request: daemon.IListGuildsRequest): Promise<daemon.ListGuildsResponse>;

        /**
         * Calls ListMembers.
         * @param request ListMembersRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and ListMembersResponse
         */
        public listMembers(request: daemon.IListMembersRequest, callback: daemon.Daemon.ListMembersCallback): void;

        /**
         * Calls ListMembers.
         * @param request ListMembersRequest message or plain object
         * @returns Promise
         */
        public listMembers(request: daemon.IListMembersRequest): Promise<daemon.ListMembersResponse>;
    }

    namespace Daemon {

        /**
         * Callback as used by {@link daemon.Daemon#events}.
         * @param error Error, if any
         * @param [response] Event
         */
        type EventsCallback = (error: (Error|null), response?: daemon.Event) => void;

        /**
         * Callback as used by {@link daemon.Daemon#createServer}.
         * @param error Error, if any
         * @param [response] CreateServerResponse
         */
        type CreateServerCallback = (error: (Error|null), response?: daemon.CreateServerResponse) => void;

        /**
         * Callback as used by {@link daemon.Daemon#startServer}.
         * @param error Error, if any
         * @param [response] StartServerResponse
         */
        type StartServerCallback = (error: (Error|null), response?: daemon.StartServerResponse) => void;

        /**
         * Callback as used by {@link daemon.Daemon#stopServer}.
         * @param error Error, if any
         * @param [response] StopServerResponse
         */
        type StopServerCallback = (error: (Error|null), response?: daemon.StopServerResponse) => void;

        /**
         * Callback as used by {@link daemon.Daemon#deleteServer}.
         * @param error Error, if any
         * @param [response] DeleteServerResponse
         */
        type DeleteServerCallback = (error: (Error|null), response?: daemon.DeleteServerResponse) => void;

        /**
         * Callback as used by {@link daemon.Daemon#listServers}.
         * @param error Error, if any
         * @param [response] ListServersResponse
         */
        type ListServersCallback = (error: (Error|null), response?: daemon.ListServersResponse) => void;

        /**
         * Callback as used by {@link daemon.Daemon#listGuilds}.
         * @param error Error, if any
         * @param [response] ListGuildsResponse
         */
        type ListGuildsCallback = (error: (Error|null), response?: daemon.ListGuildsResponse) => void;

        /**
         * Callback as used by {@link daemon.Daemon#listMembers}.
         * @param error Error, if any
         * @param [response] ListMembersResponse
         */
        type ListMembersCallback = (error: (Error|null), response?: daemon.ListMembersResponse) => void;
    }

    /** Properties of an Event. */
    interface IEvent {

        /** Event type */
        type?: string;
    }

    /** Represents an Event. */
    class Event {

        /**
         * Constructs a new Event.
         * @param [properties] Properties to set
         */
        constructor(properties?: daemon.IEvent);

        /** Event type. */
        public type: string;

        /**
         * Creates a new Event instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Event instance
         */
        public static create(properties?: daemon.IEvent): daemon.Event;

        /**
         * Encodes the specified Event message. Does not implicitly {@link daemon.Event.verify|verify} messages.
         * @param message Event message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: daemon.IEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Event message, length delimited. Does not implicitly {@link daemon.Event.verify|verify} messages.
         * @param message Event message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: daemon.IEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Event message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Event
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): daemon.Event;

        /**
         * Decodes an Event message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Event
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): daemon.Event;

        /**
         * Verifies an Event message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Event message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Event
         */
        public static fromObject(object: { [k: string]: any }): daemon.Event;

        /**
         * Creates a plain object from an Event message. Also converts values to other types if specified.
         * @param message Event
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: daemon.Event, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Event to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ListServersRequest. */
    interface IListServersRequest {

        /** ListServersRequest page */
        page?: number;

        /** ListServersRequest limit */
        limit?: number;
    }

    /** Represents a ListServersRequest. */
    class ListServersRequest {

        /**
         * Constructs a new ListServersRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: daemon.IListServersRequest);

        /** ListServersRequest page. */
        public page: number;

        /** ListServersRequest limit. */
        public limit: number;

        /**
         * Creates a new ListServersRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListServersRequest instance
         */
        public static create(properties?: daemon.IListServersRequest): daemon.ListServersRequest;

        /**
         * Encodes the specified ListServersRequest message. Does not implicitly {@link daemon.ListServersRequest.verify|verify} messages.
         * @param message ListServersRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: daemon.IListServersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListServersRequest message, length delimited. Does not implicitly {@link daemon.ListServersRequest.verify|verify} messages.
         * @param message ListServersRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: daemon.IListServersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListServersRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListServersRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): daemon.ListServersRequest;

        /**
         * Decodes a ListServersRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ListServersRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): daemon.ListServersRequest;

        /**
         * Verifies a ListServersRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListServersRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListServersRequest
         */
        public static fromObject(object: { [k: string]: any }): daemon.ListServersRequest;

        /**
         * Creates a plain object from a ListServersRequest message. Also converts values to other types if specified.
         * @param message ListServersRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: daemon.ListServersRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListServersRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ListServersResponse. */
    interface IListServersResponse {

        /** ListServersResponse servers */
        servers?: daemon.IServer[];
    }

    /** Represents a ListServersResponse. */
    class ListServersResponse {

        /**
         * Constructs a new ListServersResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: daemon.IListServersResponse);

        /** ListServersResponse servers. */
        public servers: daemon.IServer[];

        /**
         * Creates a new ListServersResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListServersResponse instance
         */
        public static create(properties?: daemon.IListServersResponse): daemon.ListServersResponse;

        /**
         * Encodes the specified ListServersResponse message. Does not implicitly {@link daemon.ListServersResponse.verify|verify} messages.
         * @param message ListServersResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: daemon.IListServersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListServersResponse message, length delimited. Does not implicitly {@link daemon.ListServersResponse.verify|verify} messages.
         * @param message ListServersResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: daemon.IListServersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListServersResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListServersResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): daemon.ListServersResponse;

        /**
         * Decodes a ListServersResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ListServersResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): daemon.ListServersResponse;

        /**
         * Verifies a ListServersResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListServersResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListServersResponse
         */
        public static fromObject(object: { [k: string]: any }): daemon.ListServersResponse;

        /**
         * Creates a plain object from a ListServersResponse message. Also converts values to other types if specified.
         * @param message ListServersResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: daemon.ListServersResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListServersResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CreateServerRequest. */
    interface ICreateServerRequest {

        /** CreateServerRequest image */
        image?: string;

        /** CreateServerRequest name */
        name?: string;

        /** CreateServerRequest importDataDir */
        importDataDir?: string;
    }

    /** Represents a CreateServerRequest. */
    class CreateServerRequest {

        /**
         * Constructs a new CreateServerRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: daemon.ICreateServerRequest);

        /** CreateServerRequest image. */
        public image: string;

        /** CreateServerRequest name. */
        public name: string;

        /** CreateServerRequest importDataDir. */
        public importDataDir: string;

        /**
         * Creates a new CreateServerRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateServerRequest instance
         */
        public static create(properties?: daemon.ICreateServerRequest): daemon.CreateServerRequest;

        /**
         * Encodes the specified CreateServerRequest message. Does not implicitly {@link daemon.CreateServerRequest.verify|verify} messages.
         * @param message CreateServerRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: daemon.ICreateServerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateServerRequest message, length delimited. Does not implicitly {@link daemon.CreateServerRequest.verify|verify} messages.
         * @param message CreateServerRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: daemon.ICreateServerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateServerRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateServerRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): daemon.CreateServerRequest;

        /**
         * Decodes a CreateServerRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateServerRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): daemon.CreateServerRequest;

        /**
         * Verifies a CreateServerRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateServerRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateServerRequest
         */
        public static fromObject(object: { [k: string]: any }): daemon.CreateServerRequest;

        /**
         * Creates a plain object from a CreateServerRequest message. Also converts values to other types if specified.
         * @param message CreateServerRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: daemon.CreateServerRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateServerRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CreateServerResponse. */
    interface ICreateServerResponse {

        /** CreateServerResponse server */
        server?: daemon.IServer;
    }

    /** Represents a CreateServerResponse. */
    class CreateServerResponse {

        /**
         * Constructs a new CreateServerResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: daemon.ICreateServerResponse);

        /** CreateServerResponse server. */
        public server?: (daemon.IServer|null);

        /**
         * Creates a new CreateServerResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateServerResponse instance
         */
        public static create(properties?: daemon.ICreateServerResponse): daemon.CreateServerResponse;

        /**
         * Encodes the specified CreateServerResponse message. Does not implicitly {@link daemon.CreateServerResponse.verify|verify} messages.
         * @param message CreateServerResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: daemon.ICreateServerResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateServerResponse message, length delimited. Does not implicitly {@link daemon.CreateServerResponse.verify|verify} messages.
         * @param message CreateServerResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: daemon.ICreateServerResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateServerResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateServerResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): daemon.CreateServerResponse;

        /**
         * Decodes a CreateServerResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateServerResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): daemon.CreateServerResponse;

        /**
         * Verifies a CreateServerResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateServerResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateServerResponse
         */
        public static fromObject(object: { [k: string]: any }): daemon.CreateServerResponse;

        /**
         * Creates a plain object from a CreateServerResponse message. Also converts values to other types if specified.
         * @param message CreateServerResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: daemon.CreateServerResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateServerResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a StartServerRequest. */
    interface IStartServerRequest {

        /** StartServerRequest id */
        id?: string;
    }

    /** Represents a StartServerRequest. */
    class StartServerRequest {

        /**
         * Constructs a new StartServerRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: daemon.IStartServerRequest);

        /** StartServerRequest id. */
        public id: string;

        /**
         * Creates a new StartServerRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StartServerRequest instance
         */
        public static create(properties?: daemon.IStartServerRequest): daemon.StartServerRequest;

        /**
         * Encodes the specified StartServerRequest message. Does not implicitly {@link daemon.StartServerRequest.verify|verify} messages.
         * @param message StartServerRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: daemon.IStartServerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StartServerRequest message, length delimited. Does not implicitly {@link daemon.StartServerRequest.verify|verify} messages.
         * @param message StartServerRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: daemon.IStartServerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StartServerRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StartServerRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): daemon.StartServerRequest;

        /**
         * Decodes a StartServerRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StartServerRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): daemon.StartServerRequest;

        /**
         * Verifies a StartServerRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StartServerRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StartServerRequest
         */
        public static fromObject(object: { [k: string]: any }): daemon.StartServerRequest;

        /**
         * Creates a plain object from a StartServerRequest message. Also converts values to other types if specified.
         * @param message StartServerRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: daemon.StartServerRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StartServerRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a StartServerResponse. */
    interface IStartServerResponse {

        /** StartServerResponse server */
        server?: daemon.IServer;
    }

    /** Represents a StartServerResponse. */
    class StartServerResponse {

        /**
         * Constructs a new StartServerResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: daemon.IStartServerResponse);

        /** StartServerResponse server. */
        public server?: (daemon.IServer|null);

        /**
         * Creates a new StartServerResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StartServerResponse instance
         */
        public static create(properties?: daemon.IStartServerResponse): daemon.StartServerResponse;

        /**
         * Encodes the specified StartServerResponse message. Does not implicitly {@link daemon.StartServerResponse.verify|verify} messages.
         * @param message StartServerResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: daemon.IStartServerResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StartServerResponse message, length delimited. Does not implicitly {@link daemon.StartServerResponse.verify|verify} messages.
         * @param message StartServerResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: daemon.IStartServerResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StartServerResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StartServerResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): daemon.StartServerResponse;

        /**
         * Decodes a StartServerResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StartServerResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): daemon.StartServerResponse;

        /**
         * Verifies a StartServerResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StartServerResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StartServerResponse
         */
        public static fromObject(object: { [k: string]: any }): daemon.StartServerResponse;

        /**
         * Creates a plain object from a StartServerResponse message. Also converts values to other types if specified.
         * @param message StartServerResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: daemon.StartServerResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StartServerResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a StopServerRequest. */
    interface IStopServerRequest {

        /** StopServerRequest id */
        id?: string;
    }

    /** Represents a StopServerRequest. */
    class StopServerRequest {

        /**
         * Constructs a new StopServerRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: daemon.IStopServerRequest);

        /** StopServerRequest id. */
        public id: string;

        /**
         * Creates a new StopServerRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StopServerRequest instance
         */
        public static create(properties?: daemon.IStopServerRequest): daemon.StopServerRequest;

        /**
         * Encodes the specified StopServerRequest message. Does not implicitly {@link daemon.StopServerRequest.verify|verify} messages.
         * @param message StopServerRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: daemon.IStopServerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StopServerRequest message, length delimited. Does not implicitly {@link daemon.StopServerRequest.verify|verify} messages.
         * @param message StopServerRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: daemon.IStopServerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StopServerRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StopServerRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): daemon.StopServerRequest;

        /**
         * Decodes a StopServerRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StopServerRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): daemon.StopServerRequest;

        /**
         * Verifies a StopServerRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StopServerRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StopServerRequest
         */
        public static fromObject(object: { [k: string]: any }): daemon.StopServerRequest;

        /**
         * Creates a plain object from a StopServerRequest message. Also converts values to other types if specified.
         * @param message StopServerRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: daemon.StopServerRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StopServerRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a StopServerResponse. */
    interface IStopServerResponse {
    }

    /** Represents a StopServerResponse. */
    class StopServerResponse {

        /**
         * Constructs a new StopServerResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: daemon.IStopServerResponse);

        /**
         * Creates a new StopServerResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StopServerResponse instance
         */
        public static create(properties?: daemon.IStopServerResponse): daemon.StopServerResponse;

        /**
         * Encodes the specified StopServerResponse message. Does not implicitly {@link daemon.StopServerResponse.verify|verify} messages.
         * @param message StopServerResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: daemon.IStopServerResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StopServerResponse message, length delimited. Does not implicitly {@link daemon.StopServerResponse.verify|verify} messages.
         * @param message StopServerResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: daemon.IStopServerResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StopServerResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StopServerResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): daemon.StopServerResponse;

        /**
         * Decodes a StopServerResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StopServerResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): daemon.StopServerResponse;

        /**
         * Verifies a StopServerResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StopServerResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StopServerResponse
         */
        public static fromObject(object: { [k: string]: any }): daemon.StopServerResponse;

        /**
         * Creates a plain object from a StopServerResponse message. Also converts values to other types if specified.
         * @param message StopServerResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: daemon.StopServerResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StopServerResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DeleteServerRequest. */
    interface IDeleteServerRequest {

        /** DeleteServerRequest id */
        id?: string;
    }

    /** Represents a DeleteServerRequest. */
    class DeleteServerRequest {

        /**
         * Constructs a new DeleteServerRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: daemon.IDeleteServerRequest);

        /** DeleteServerRequest id. */
        public id: string;

        /**
         * Creates a new DeleteServerRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeleteServerRequest instance
         */
        public static create(properties?: daemon.IDeleteServerRequest): daemon.DeleteServerRequest;

        /**
         * Encodes the specified DeleteServerRequest message. Does not implicitly {@link daemon.DeleteServerRequest.verify|verify} messages.
         * @param message DeleteServerRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: daemon.IDeleteServerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeleteServerRequest message, length delimited. Does not implicitly {@link daemon.DeleteServerRequest.verify|verify} messages.
         * @param message DeleteServerRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: daemon.IDeleteServerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeleteServerRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeleteServerRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): daemon.DeleteServerRequest;

        /**
         * Decodes a DeleteServerRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeleteServerRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): daemon.DeleteServerRequest;

        /**
         * Verifies a DeleteServerRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeleteServerRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeleteServerRequest
         */
        public static fromObject(object: { [k: string]: any }): daemon.DeleteServerRequest;

        /**
         * Creates a plain object from a DeleteServerRequest message. Also converts values to other types if specified.
         * @param message DeleteServerRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: daemon.DeleteServerRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeleteServerRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DeleteServerResponse. */
    interface IDeleteServerResponse {
    }

    /** Represents a DeleteServerResponse. */
    class DeleteServerResponse {

        /**
         * Constructs a new DeleteServerResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: daemon.IDeleteServerResponse);

        /**
         * Creates a new DeleteServerResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeleteServerResponse instance
         */
        public static create(properties?: daemon.IDeleteServerResponse): daemon.DeleteServerResponse;

        /**
         * Encodes the specified DeleteServerResponse message. Does not implicitly {@link daemon.DeleteServerResponse.verify|verify} messages.
         * @param message DeleteServerResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: daemon.IDeleteServerResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeleteServerResponse message, length delimited. Does not implicitly {@link daemon.DeleteServerResponse.verify|verify} messages.
         * @param message DeleteServerResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: daemon.IDeleteServerResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeleteServerResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeleteServerResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): daemon.DeleteServerResponse;

        /**
         * Decodes a DeleteServerResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeleteServerResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): daemon.DeleteServerResponse;

        /**
         * Verifies a DeleteServerResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeleteServerResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeleteServerResponse
         */
        public static fromObject(object: { [k: string]: any }): daemon.DeleteServerResponse;

        /**
         * Creates a plain object from a DeleteServerResponse message. Also converts values to other types if specified.
         * @param message DeleteServerResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: daemon.DeleteServerResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeleteServerResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Server. */
    interface IServer {

        /** Server id */
        id?: string;

        /** Server name */
        name?: string;

        /** Server image */
        image?: string;

        /** Server currentOwnerId */
        currentOwnerId?: string;

        /** Server fileset */
        fileset?: daemon.IFileset;

        /** Server status */
        status?: daemon.Server.Status;
    }

    /** Represents a Server. */
    class Server {

        /**
         * Constructs a new Server.
         * @param [properties] Properties to set
         */
        constructor(properties?: daemon.IServer);

        /** Server id. */
        public id: string;

        /** Server name. */
        public name: string;

        /** Server image. */
        public image: string;

        /** Server currentOwnerId. */
        public currentOwnerId: string;

        /** Server fileset. */
        public fileset?: (daemon.IFileset|null);

        /** Server status. */
        public status: daemon.Server.Status;

        /**
         * Creates a new Server instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Server instance
         */
        public static create(properties?: daemon.IServer): daemon.Server;

        /**
         * Encodes the specified Server message. Does not implicitly {@link daemon.Server.verify|verify} messages.
         * @param message Server message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: daemon.IServer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Server message, length delimited. Does not implicitly {@link daemon.Server.verify|verify} messages.
         * @param message Server message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: daemon.IServer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Server message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Server
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): daemon.Server;

        /**
         * Decodes a Server message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Server
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): daemon.Server;

        /**
         * Verifies a Server message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Server message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Server
         */
        public static fromObject(object: { [k: string]: any }): daemon.Server;

        /**
         * Creates a plain object from a Server message. Also converts values to other types if specified.
         * @param message Server
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: daemon.Server, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Server to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace Server {

        /** Status enum. */
        enum Status {
            STOPPED = 0,
            STARTING = 1,
            RUNNING = 2,
            STOPPING = 3
        }
    }

    /** Properties of a Fileset. */
    interface IFileset {

        /** Fileset hash */
        hash?: Uint8Array;

        /** Fileset bytes */
        bytes?: (number|Long);
    }

    /** Represents a Fileset. */
    class Fileset {

        /**
         * Constructs a new Fileset.
         * @param [properties] Properties to set
         */
        constructor(properties?: daemon.IFileset);

        /** Fileset hash. */
        public hash: Uint8Array;

        /** Fileset bytes. */
        public bytes: (number|Long);

        /**
         * Creates a new Fileset instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Fileset instance
         */
        public static create(properties?: daemon.IFileset): daemon.Fileset;

        /**
         * Encodes the specified Fileset message. Does not implicitly {@link daemon.Fileset.verify|verify} messages.
         * @param message Fileset message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: daemon.IFileset, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Fileset message, length delimited. Does not implicitly {@link daemon.Fileset.verify|verify} messages.
         * @param message Fileset message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: daemon.IFileset, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Fileset message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Fileset
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): daemon.Fileset;

        /**
         * Decodes a Fileset message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Fileset
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): daemon.Fileset;

        /**
         * Verifies a Fileset message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Fileset message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Fileset
         */
        public static fromObject(object: { [k: string]: any }): daemon.Fileset;

        /**
         * Creates a plain object from a Fileset message. Also converts values to other types if specified.
         * @param message Fileset
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: daemon.Fileset, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Fileset to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Guild. */
    interface IGuild {

        /** Guild id */
        id?: string;

        /** Guild name */
        name?: string;

        /** Guild connected */
        connected?: boolean;

        /** Guild ip */
        ip?: string;
    }

    /** Represents a Guild. */
    class Guild {

        /**
         * Constructs a new Guild.
         * @param [properties] Properties to set
         */
        constructor(properties?: daemon.IGuild);

        /** Guild id. */
        public id: string;

        /** Guild name. */
        public name: string;

        /** Guild connected. */
        public connected: boolean;

        /** Guild ip. */
        public ip: string;

        /**
         * Creates a new Guild instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Guild instance
         */
        public static create(properties?: daemon.IGuild): daemon.Guild;

        /**
         * Encodes the specified Guild message. Does not implicitly {@link daemon.Guild.verify|verify} messages.
         * @param message Guild message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: daemon.IGuild, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Guild message, length delimited. Does not implicitly {@link daemon.Guild.verify|verify} messages.
         * @param message Guild message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: daemon.IGuild, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Guild message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Guild
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): daemon.Guild;

        /**
         * Decodes a Guild message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Guild
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): daemon.Guild;

        /**
         * Verifies a Guild message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Guild message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Guild
         */
        public static fromObject(object: { [k: string]: any }): daemon.Guild;

        /**
         * Creates a plain object from a Guild message. Also converts values to other types if specified.
         * @param message Guild
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: daemon.Guild, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Guild to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ListGuildsRequest. */
    interface IListGuildsRequest {

        /** ListGuildsRequest page */
        page?: number;

        /** ListGuildsRequest limit */
        limit?: number;
    }

    /** Represents a ListGuildsRequest. */
    class ListGuildsRequest {

        /**
         * Constructs a new ListGuildsRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: daemon.IListGuildsRequest);

        /** ListGuildsRequest page. */
        public page: number;

        /** ListGuildsRequest limit. */
        public limit: number;

        /**
         * Creates a new ListGuildsRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListGuildsRequest instance
         */
        public static create(properties?: daemon.IListGuildsRequest): daemon.ListGuildsRequest;

        /**
         * Encodes the specified ListGuildsRequest message. Does not implicitly {@link daemon.ListGuildsRequest.verify|verify} messages.
         * @param message ListGuildsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: daemon.IListGuildsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListGuildsRequest message, length delimited. Does not implicitly {@link daemon.ListGuildsRequest.verify|verify} messages.
         * @param message ListGuildsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: daemon.IListGuildsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListGuildsRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListGuildsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): daemon.ListGuildsRequest;

        /**
         * Decodes a ListGuildsRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ListGuildsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): daemon.ListGuildsRequest;

        /**
         * Verifies a ListGuildsRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListGuildsRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListGuildsRequest
         */
        public static fromObject(object: { [k: string]: any }): daemon.ListGuildsRequest;

        /**
         * Creates a plain object from a ListGuildsRequest message. Also converts values to other types if specified.
         * @param message ListGuildsRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: daemon.ListGuildsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListGuildsRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ListGuildsResponse. */
    interface IListGuildsResponse {

        /** ListGuildsResponse guilds */
        guilds?: daemon.IGuild[];
    }

    /** Represents a ListGuildsResponse. */
    class ListGuildsResponse {

        /**
         * Constructs a new ListGuildsResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: daemon.IListGuildsResponse);

        /** ListGuildsResponse guilds. */
        public guilds: daemon.IGuild[];

        /**
         * Creates a new ListGuildsResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListGuildsResponse instance
         */
        public static create(properties?: daemon.IListGuildsResponse): daemon.ListGuildsResponse;

        /**
         * Encodes the specified ListGuildsResponse message. Does not implicitly {@link daemon.ListGuildsResponse.verify|verify} messages.
         * @param message ListGuildsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: daemon.IListGuildsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListGuildsResponse message, length delimited. Does not implicitly {@link daemon.ListGuildsResponse.verify|verify} messages.
         * @param message ListGuildsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: daemon.IListGuildsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListGuildsResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListGuildsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): daemon.ListGuildsResponse;

        /**
         * Decodes a ListGuildsResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ListGuildsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): daemon.ListGuildsResponse;

        /**
         * Verifies a ListGuildsResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListGuildsResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListGuildsResponse
         */
        public static fromObject(object: { [k: string]: any }): daemon.ListGuildsResponse;

        /**
         * Creates a plain object from a ListGuildsResponse message. Also converts values to other types if specified.
         * @param message ListGuildsResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: daemon.ListGuildsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListGuildsResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Member. */
    interface IMember {

        /** Member id */
        id?: string;

        /** Member name */
        name?: string;

        /** Member ip */
        ip?: string;
    }

    /** Represents a Member. */
    class Member {

        /**
         * Constructs a new Member.
         * @param [properties] Properties to set
         */
        constructor(properties?: daemon.IMember);

        /** Member id. */
        public id: string;

        /** Member name. */
        public name: string;

        /** Member ip. */
        public ip: string;

        /**
         * Creates a new Member instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Member instance
         */
        public static create(properties?: daemon.IMember): daemon.Member;

        /**
         * Encodes the specified Member message. Does not implicitly {@link daemon.Member.verify|verify} messages.
         * @param message Member message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: daemon.IMember, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Member message, length delimited. Does not implicitly {@link daemon.Member.verify|verify} messages.
         * @param message Member message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: daemon.IMember, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Member message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Member
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): daemon.Member;

        /**
         * Decodes a Member message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Member
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): daemon.Member;

        /**
         * Verifies a Member message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Member message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Member
         */
        public static fromObject(object: { [k: string]: any }): daemon.Member;

        /**
         * Creates a plain object from a Member message. Also converts values to other types if specified.
         * @param message Member
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: daemon.Member, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Member to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ListMembersRequest. */
    interface IListMembersRequest {

        /** ListMembersRequest page */
        page?: number;

        /** ListMembersRequest limit */
        limit?: number;
    }

    /** Represents a ListMembersRequest. */
    class ListMembersRequest {

        /**
         * Constructs a new ListMembersRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: daemon.IListMembersRequest);

        /** ListMembersRequest page. */
        public page: number;

        /** ListMembersRequest limit. */
        public limit: number;

        /**
         * Creates a new ListMembersRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListMembersRequest instance
         */
        public static create(properties?: daemon.IListMembersRequest): daemon.ListMembersRequest;

        /**
         * Encodes the specified ListMembersRequest message. Does not implicitly {@link daemon.ListMembersRequest.verify|verify} messages.
         * @param message ListMembersRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: daemon.IListMembersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListMembersRequest message, length delimited. Does not implicitly {@link daemon.ListMembersRequest.verify|verify} messages.
         * @param message ListMembersRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: daemon.IListMembersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListMembersRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListMembersRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): daemon.ListMembersRequest;

        /**
         * Decodes a ListMembersRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ListMembersRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): daemon.ListMembersRequest;

        /**
         * Verifies a ListMembersRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListMembersRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListMembersRequest
         */
        public static fromObject(object: { [k: string]: any }): daemon.ListMembersRequest;

        /**
         * Creates a plain object from a ListMembersRequest message. Also converts values to other types if specified.
         * @param message ListMembersRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: daemon.ListMembersRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListMembersRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ListMembersResponse. */
    interface IListMembersResponse {

        /** ListMembersResponse members */
        members?: daemon.IMember[];
    }

    /** Represents a ListMembersResponse. */
    class ListMembersResponse {

        /**
         * Constructs a new ListMembersResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: daemon.IListMembersResponse);

        /** ListMembersResponse members. */
        public members: daemon.IMember[];

        /**
         * Creates a new ListMembersResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListMembersResponse instance
         */
        public static create(properties?: daemon.IListMembersResponse): daemon.ListMembersResponse;

        /**
         * Encodes the specified ListMembersResponse message. Does not implicitly {@link daemon.ListMembersResponse.verify|verify} messages.
         * @param message ListMembersResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: daemon.IListMembersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListMembersResponse message, length delimited. Does not implicitly {@link daemon.ListMembersResponse.verify|verify} messages.
         * @param message ListMembersResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: daemon.IListMembersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListMembersResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListMembersResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): daemon.ListMembersResponse;

        /**
         * Decodes a ListMembersResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ListMembersResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): daemon.ListMembersResponse;

        /**
         * Verifies a ListMembersResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListMembersResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListMembersResponse
         */
        public static fromObject(object: { [k: string]: any }): daemon.ListMembersResponse;

        /**
         * Creates a plain object from a ListMembersResponse message. Also converts values to other types if specified.
         * @param message ListMembersResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: daemon.ListMembersResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListMembersResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
