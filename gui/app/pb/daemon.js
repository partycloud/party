/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.daemon = (function() {

    /**
     * Namespace daemon.
     * @exports daemon
     * @namespace
     */
    var daemon = {};

    daemon.Daemon = (function() {

        /**
         * Constructs a new Daemon service.
         * @memberof daemon
         * @classdesc Represents a Daemon
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Daemon(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (Daemon.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Daemon;

        /**
         * Creates new Daemon service using the specified rpc implementation.
         * @function create
         * @memberof daemon.Daemon
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Daemon} RPC service. Useful where requests and/or responses are streamed.
         */
        Daemon.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link daemon.Daemon#events}.
         * @memberof daemon.Daemon
         * @typedef EventsCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {daemon.Event} [response] Event
         */

        /**
         * Calls Events.
         * @function .events
         * @memberof daemon.Daemon
         * @instance
         * @param {daemon.IEvent} request Event message or plain object
         * @param {daemon.Daemon.EventsCallback} callback Node-style callback called with the error, if any, and Event
         * @returns {undefined}
         * @variation 1
         */
        Daemon.prototype.events = function events(request, callback) {
            return this.rpcCall(events, $root.daemon.Event, $root.daemon.Event, request, callback);
        };

        /**
         * Calls Events.
         * @function events
         * @memberof daemon.Daemon
         * @instance
         * @param {daemon.IEvent} request Event message or plain object
         * @returns {Promise<daemon.Event>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link daemon.Daemon#createServer}.
         * @memberof daemon.Daemon
         * @typedef CreateServerCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {daemon.CreateServerResponse} [response] CreateServerResponse
         */

        /**
         * Calls CreateServer.
         * @function .createServer
         * @memberof daemon.Daemon
         * @instance
         * @param {daemon.ICreateServerRequest} request CreateServerRequest message or plain object
         * @param {daemon.Daemon.CreateServerCallback} callback Node-style callback called with the error, if any, and CreateServerResponse
         * @returns {undefined}
         * @variation 1
         */
        Daemon.prototype.createServer = function createServer(request, callback) {
            return this.rpcCall(createServer, $root.daemon.CreateServerRequest, $root.daemon.CreateServerResponse, request, callback);
        };

        /**
         * Calls CreateServer.
         * @function createServer
         * @memberof daemon.Daemon
         * @instance
         * @param {daemon.ICreateServerRequest} request CreateServerRequest message or plain object
         * @returns {Promise<daemon.CreateServerResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link daemon.Daemon#startServer}.
         * @memberof daemon.Daemon
         * @typedef StartServerCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {daemon.StartServerResponse} [response] StartServerResponse
         */

        /**
         * Calls StartServer.
         * @function .startServer
         * @memberof daemon.Daemon
         * @instance
         * @param {daemon.IStartServerRequest} request StartServerRequest message or plain object
         * @param {daemon.Daemon.StartServerCallback} callback Node-style callback called with the error, if any, and StartServerResponse
         * @returns {undefined}
         * @variation 1
         */
        Daemon.prototype.startServer = function startServer(request, callback) {
            return this.rpcCall(startServer, $root.daemon.StartServerRequest, $root.daemon.StartServerResponse, request, callback);
        };

        /**
         * Calls StartServer.
         * @function startServer
         * @memberof daemon.Daemon
         * @instance
         * @param {daemon.IStartServerRequest} request StartServerRequest message or plain object
         * @returns {Promise<daemon.StartServerResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link daemon.Daemon#stopServer}.
         * @memberof daemon.Daemon
         * @typedef StopServerCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {daemon.StopServerResponse} [response] StopServerResponse
         */

        /**
         * Calls StopServer.
         * @function .stopServer
         * @memberof daemon.Daemon
         * @instance
         * @param {daemon.IStopServerRequest} request StopServerRequest message or plain object
         * @param {daemon.Daemon.StopServerCallback} callback Node-style callback called with the error, if any, and StopServerResponse
         * @returns {undefined}
         * @variation 1
         */
        Daemon.prototype.stopServer = function stopServer(request, callback) {
            return this.rpcCall(stopServer, $root.daemon.StopServerRequest, $root.daemon.StopServerResponse, request, callback);
        };

        /**
         * Calls StopServer.
         * @function stopServer
         * @memberof daemon.Daemon
         * @instance
         * @param {daemon.IStopServerRequest} request StopServerRequest message or plain object
         * @returns {Promise<daemon.StopServerResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link daemon.Daemon#deleteServer}.
         * @memberof daemon.Daemon
         * @typedef DeleteServerCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {daemon.DeleteServerResponse} [response] DeleteServerResponse
         */

        /**
         * Calls DeleteServer.
         * @function .deleteServer
         * @memberof daemon.Daemon
         * @instance
         * @param {daemon.IDeleteServerRequest} request DeleteServerRequest message or plain object
         * @param {daemon.Daemon.DeleteServerCallback} callback Node-style callback called with the error, if any, and DeleteServerResponse
         * @returns {undefined}
         * @variation 1
         */
        Daemon.prototype.deleteServer = function deleteServer(request, callback) {
            return this.rpcCall(deleteServer, $root.daemon.DeleteServerRequest, $root.daemon.DeleteServerResponse, request, callback);
        };

        /**
         * Calls DeleteServer.
         * @function deleteServer
         * @memberof daemon.Daemon
         * @instance
         * @param {daemon.IDeleteServerRequest} request DeleteServerRequest message or plain object
         * @returns {Promise<daemon.DeleteServerResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link daemon.Daemon#listServers}.
         * @memberof daemon.Daemon
         * @typedef ListServersCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {daemon.ListServersResponse} [response] ListServersResponse
         */

        /**
         * Calls ListServers.
         * @function .listServers
         * @memberof daemon.Daemon
         * @instance
         * @param {daemon.IListServersRequest} request ListServersRequest message or plain object
         * @param {daemon.Daemon.ListServersCallback} callback Node-style callback called with the error, if any, and ListServersResponse
         * @returns {undefined}
         * @variation 1
         */
        Daemon.prototype.listServers = function listServers(request, callback) {
            return this.rpcCall(listServers, $root.daemon.ListServersRequest, $root.daemon.ListServersResponse, request, callback);
        };

        /**
         * Calls ListServers.
         * @function listServers
         * @memberof daemon.Daemon
         * @instance
         * @param {daemon.IListServersRequest} request ListServersRequest message or plain object
         * @returns {Promise<daemon.ListServersResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link daemon.Daemon#listGuilds}.
         * @memberof daemon.Daemon
         * @typedef ListGuildsCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {daemon.ListGuildsResponse} [response] ListGuildsResponse
         */

        /**
         * Calls ListGuilds.
         * @function .listGuilds
         * @memberof daemon.Daemon
         * @instance
         * @param {daemon.IListGuildsRequest} request ListGuildsRequest message or plain object
         * @param {daemon.Daemon.ListGuildsCallback} callback Node-style callback called with the error, if any, and ListGuildsResponse
         * @returns {undefined}
         * @variation 1
         */
        Daemon.prototype.listGuilds = function listGuilds(request, callback) {
            return this.rpcCall(listGuilds, $root.daemon.ListGuildsRequest, $root.daemon.ListGuildsResponse, request, callback);
        };

        /**
         * Calls ListGuilds.
         * @function listGuilds
         * @memberof daemon.Daemon
         * @instance
         * @param {daemon.IListGuildsRequest} request ListGuildsRequest message or plain object
         * @returns {Promise<daemon.ListGuildsResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link daemon.Daemon#listMembers}.
         * @memberof daemon.Daemon
         * @typedef ListMembersCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {daemon.ListMembersResponse} [response] ListMembersResponse
         */

        /**
         * Calls ListMembers.
         * @function .listMembers
         * @memberof daemon.Daemon
         * @instance
         * @param {daemon.IListMembersRequest} request ListMembersRequest message or plain object
         * @param {daemon.Daemon.ListMembersCallback} callback Node-style callback called with the error, if any, and ListMembersResponse
         * @returns {undefined}
         * @variation 1
         */
        Daemon.prototype.listMembers = function listMembers(request, callback) {
            return this.rpcCall(listMembers, $root.daemon.ListMembersRequest, $root.daemon.ListMembersResponse, request, callback);
        };

        /**
         * Calls ListMembers.
         * @function listMembers
         * @memberof daemon.Daemon
         * @instance
         * @param {daemon.IListMembersRequest} request ListMembersRequest message or plain object
         * @returns {Promise<daemon.ListMembersResponse>} Promise
         * @variation 2
         */

        return Daemon;
    })();

    daemon.Event = (function() {

        /**
         * Properties of an Event.
         * @memberof daemon
         * @interface IEvent
         * @property {string} [type] Event type
         */

        /**
         * Constructs a new Event.
         * @memberof daemon
         * @classdesc Represents an Event.
         * @constructor
         * @param {daemon.IEvent=} [properties] Properties to set
         */
        function Event(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Event type.
         * @member {string}type
         * @memberof daemon.Event
         * @instance
         */
        Event.prototype.type = "";

        /**
         * Creates a new Event instance using the specified properties.
         * @function create
         * @memberof daemon.Event
         * @static
         * @param {daemon.IEvent=} [properties] Properties to set
         * @returns {daemon.Event} Event instance
         */
        Event.create = function create(properties) {
            return new Event(properties);
        };

        /**
         * Encodes the specified Event message. Does not implicitly {@link daemon.Event.verify|verify} messages.
         * @function encode
         * @memberof daemon.Event
         * @static
         * @param {daemon.IEvent} message Event message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Event.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.type);
            return writer;
        };

        /**
         * Encodes the specified Event message, length delimited. Does not implicitly {@link daemon.Event.verify|verify} messages.
         * @function encodeDelimited
         * @memberof daemon.Event
         * @static
         * @param {daemon.IEvent} message Event message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Event.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Event message from the specified reader or buffer.
         * @function decode
         * @memberof daemon.Event
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {daemon.Event} Event
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Event.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.daemon.Event();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Event message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof daemon.Event
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {daemon.Event} Event
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Event.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Event message.
         * @function verify
         * @memberof daemon.Event
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Event.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isString(message.type))
                    return "type: string expected";
            return null;
        };

        /**
         * Creates an Event message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof daemon.Event
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {daemon.Event} Event
         */
        Event.fromObject = function fromObject(object) {
            if (object instanceof $root.daemon.Event)
                return object;
            var message = new $root.daemon.Event();
            if (object.type != null)
                message.type = String(object.type);
            return message;
        };

        /**
         * Creates a plain object from an Event message. Also converts values to other types if specified.
         * @function toObject
         * @memberof daemon.Event
         * @static
         * @param {daemon.Event} message Event
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Event.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.type = "";
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            return object;
        };

        /**
         * Converts this Event to JSON.
         * @function toJSON
         * @memberof daemon.Event
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Event.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Event;
    })();

    daemon.ListServersRequest = (function() {

        /**
         * Properties of a ListServersRequest.
         * @memberof daemon
         * @interface IListServersRequest
         * @property {number} [page] ListServersRequest page
         * @property {number} [limit] ListServersRequest limit
         */

        /**
         * Constructs a new ListServersRequest.
         * @memberof daemon
         * @classdesc Represents a ListServersRequest.
         * @constructor
         * @param {daemon.IListServersRequest=} [properties] Properties to set
         */
        function ListServersRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ListServersRequest page.
         * @member {number}page
         * @memberof daemon.ListServersRequest
         * @instance
         */
        ListServersRequest.prototype.page = 0;

        /**
         * ListServersRequest limit.
         * @member {number}limit
         * @memberof daemon.ListServersRequest
         * @instance
         */
        ListServersRequest.prototype.limit = 0;

        /**
         * Creates a new ListServersRequest instance using the specified properties.
         * @function create
         * @memberof daemon.ListServersRequest
         * @static
         * @param {daemon.IListServersRequest=} [properties] Properties to set
         * @returns {daemon.ListServersRequest} ListServersRequest instance
         */
        ListServersRequest.create = function create(properties) {
            return new ListServersRequest(properties);
        };

        /**
         * Encodes the specified ListServersRequest message. Does not implicitly {@link daemon.ListServersRequest.verify|verify} messages.
         * @function encode
         * @memberof daemon.ListServersRequest
         * @static
         * @param {daemon.IListServersRequest} message ListServersRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListServersRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.page != null && message.hasOwnProperty("page"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.page);
            if (message.limit != null && message.hasOwnProperty("limit"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.limit);
            return writer;
        };

        /**
         * Encodes the specified ListServersRequest message, length delimited. Does not implicitly {@link daemon.ListServersRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof daemon.ListServersRequest
         * @static
         * @param {daemon.IListServersRequest} message ListServersRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListServersRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ListServersRequest message from the specified reader or buffer.
         * @function decode
         * @memberof daemon.ListServersRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {daemon.ListServersRequest} ListServersRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListServersRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.daemon.ListServersRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.page = reader.uint32();
                    break;
                case 2:
                    message.limit = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ListServersRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof daemon.ListServersRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {daemon.ListServersRequest} ListServersRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListServersRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ListServersRequest message.
         * @function verify
         * @memberof daemon.ListServersRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ListServersRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.page != null && message.hasOwnProperty("page"))
                if (!$util.isInteger(message.page))
                    return "page: integer expected";
            if (message.limit != null && message.hasOwnProperty("limit"))
                if (!$util.isInteger(message.limit))
                    return "limit: integer expected";
            return null;
        };

        /**
         * Creates a ListServersRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof daemon.ListServersRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {daemon.ListServersRequest} ListServersRequest
         */
        ListServersRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.daemon.ListServersRequest)
                return object;
            var message = new $root.daemon.ListServersRequest();
            if (object.page != null)
                message.page = object.page >>> 0;
            if (object.limit != null)
                message.limit = object.limit >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a ListServersRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof daemon.ListServersRequest
         * @static
         * @param {daemon.ListServersRequest} message ListServersRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ListServersRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.page = 0;
                object.limit = 0;
            }
            if (message.page != null && message.hasOwnProperty("page"))
                object.page = message.page;
            if (message.limit != null && message.hasOwnProperty("limit"))
                object.limit = message.limit;
            return object;
        };

        /**
         * Converts this ListServersRequest to JSON.
         * @function toJSON
         * @memberof daemon.ListServersRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ListServersRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ListServersRequest;
    })();

    daemon.ListServersResponse = (function() {

        /**
         * Properties of a ListServersResponse.
         * @memberof daemon
         * @interface IListServersResponse
         * @property {Array.<daemon.IServer>} [servers] ListServersResponse servers
         */

        /**
         * Constructs a new ListServersResponse.
         * @memberof daemon
         * @classdesc Represents a ListServersResponse.
         * @constructor
         * @param {daemon.IListServersResponse=} [properties] Properties to set
         */
        function ListServersResponse(properties) {
            this.servers = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ListServersResponse servers.
         * @member {Array.<daemon.IServer>}servers
         * @memberof daemon.ListServersResponse
         * @instance
         */
        ListServersResponse.prototype.servers = $util.emptyArray;

        /**
         * Creates a new ListServersResponse instance using the specified properties.
         * @function create
         * @memberof daemon.ListServersResponse
         * @static
         * @param {daemon.IListServersResponse=} [properties] Properties to set
         * @returns {daemon.ListServersResponse} ListServersResponse instance
         */
        ListServersResponse.create = function create(properties) {
            return new ListServersResponse(properties);
        };

        /**
         * Encodes the specified ListServersResponse message. Does not implicitly {@link daemon.ListServersResponse.verify|verify} messages.
         * @function encode
         * @memberof daemon.ListServersResponse
         * @static
         * @param {daemon.IListServersResponse} message ListServersResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListServersResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.servers != null && message.servers.length)
                for (var i = 0; i < message.servers.length; ++i)
                    $root.daemon.Server.encode(message.servers[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ListServersResponse message, length delimited. Does not implicitly {@link daemon.ListServersResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof daemon.ListServersResponse
         * @static
         * @param {daemon.IListServersResponse} message ListServersResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListServersResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ListServersResponse message from the specified reader or buffer.
         * @function decode
         * @memberof daemon.ListServersResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {daemon.ListServersResponse} ListServersResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListServersResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.daemon.ListServersResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.servers && message.servers.length))
                        message.servers = [];
                    message.servers.push($root.daemon.Server.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ListServersResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof daemon.ListServersResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {daemon.ListServersResponse} ListServersResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListServersResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ListServersResponse message.
         * @function verify
         * @memberof daemon.ListServersResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ListServersResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.servers != null && message.hasOwnProperty("servers")) {
                if (!Array.isArray(message.servers))
                    return "servers: array expected";
                for (var i = 0; i < message.servers.length; ++i) {
                    var error = $root.daemon.Server.verify(message.servers[i]);
                    if (error)
                        return "servers." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ListServersResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof daemon.ListServersResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {daemon.ListServersResponse} ListServersResponse
         */
        ListServersResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.daemon.ListServersResponse)
                return object;
            var message = new $root.daemon.ListServersResponse();
            if (object.servers) {
                if (!Array.isArray(object.servers))
                    throw TypeError(".daemon.ListServersResponse.servers: array expected");
                message.servers = [];
                for (var i = 0; i < object.servers.length; ++i) {
                    if (typeof object.servers[i] !== "object")
                        throw TypeError(".daemon.ListServersResponse.servers: object expected");
                    message.servers[i] = $root.daemon.Server.fromObject(object.servers[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ListServersResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof daemon.ListServersResponse
         * @static
         * @param {daemon.ListServersResponse} message ListServersResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ListServersResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.servers = [];
            if (message.servers && message.servers.length) {
                object.servers = [];
                for (var j = 0; j < message.servers.length; ++j)
                    object.servers[j] = $root.daemon.Server.toObject(message.servers[j], options);
            }
            return object;
        };

        /**
         * Converts this ListServersResponse to JSON.
         * @function toJSON
         * @memberof daemon.ListServersResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ListServersResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ListServersResponse;
    })();

    daemon.CreateServerRequest = (function() {

        /**
         * Properties of a CreateServerRequest.
         * @memberof daemon
         * @interface ICreateServerRequest
         * @property {string} [image] CreateServerRequest image
         * @property {string} [name] CreateServerRequest name
         * @property {string} [importDataDir] CreateServerRequest importDataDir
         */

        /**
         * Constructs a new CreateServerRequest.
         * @memberof daemon
         * @classdesc Represents a CreateServerRequest.
         * @constructor
         * @param {daemon.ICreateServerRequest=} [properties] Properties to set
         */
        function CreateServerRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateServerRequest image.
         * @member {string}image
         * @memberof daemon.CreateServerRequest
         * @instance
         */
        CreateServerRequest.prototype.image = "";

        /**
         * CreateServerRequest name.
         * @member {string}name
         * @memberof daemon.CreateServerRequest
         * @instance
         */
        CreateServerRequest.prototype.name = "";

        /**
         * CreateServerRequest importDataDir.
         * @member {string}importDataDir
         * @memberof daemon.CreateServerRequest
         * @instance
         */
        CreateServerRequest.prototype.importDataDir = "";

        /**
         * Creates a new CreateServerRequest instance using the specified properties.
         * @function create
         * @memberof daemon.CreateServerRequest
         * @static
         * @param {daemon.ICreateServerRequest=} [properties] Properties to set
         * @returns {daemon.CreateServerRequest} CreateServerRequest instance
         */
        CreateServerRequest.create = function create(properties) {
            return new CreateServerRequest(properties);
        };

        /**
         * Encodes the specified CreateServerRequest message. Does not implicitly {@link daemon.CreateServerRequest.verify|verify} messages.
         * @function encode
         * @memberof daemon.CreateServerRequest
         * @static
         * @param {daemon.ICreateServerRequest} message CreateServerRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateServerRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.image != null && message.hasOwnProperty("image"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.image);
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.importDataDir != null && message.hasOwnProperty("importDataDir"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.importDataDir);
            return writer;
        };

        /**
         * Encodes the specified CreateServerRequest message, length delimited. Does not implicitly {@link daemon.CreateServerRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof daemon.CreateServerRequest
         * @static
         * @param {daemon.ICreateServerRequest} message CreateServerRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateServerRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateServerRequest message from the specified reader or buffer.
         * @function decode
         * @memberof daemon.CreateServerRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {daemon.CreateServerRequest} CreateServerRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateServerRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.daemon.CreateServerRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.image = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.importDataDir = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateServerRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof daemon.CreateServerRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {daemon.CreateServerRequest} CreateServerRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateServerRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateServerRequest message.
         * @function verify
         * @memberof daemon.CreateServerRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateServerRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.image != null && message.hasOwnProperty("image"))
                if (!$util.isString(message.image))
                    return "image: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.importDataDir != null && message.hasOwnProperty("importDataDir"))
                if (!$util.isString(message.importDataDir))
                    return "importDataDir: string expected";
            return null;
        };

        /**
         * Creates a CreateServerRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof daemon.CreateServerRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {daemon.CreateServerRequest} CreateServerRequest
         */
        CreateServerRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.daemon.CreateServerRequest)
                return object;
            var message = new $root.daemon.CreateServerRequest();
            if (object.image != null)
                message.image = String(object.image);
            if (object.name != null)
                message.name = String(object.name);
            if (object.importDataDir != null)
                message.importDataDir = String(object.importDataDir);
            return message;
        };

        /**
         * Creates a plain object from a CreateServerRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof daemon.CreateServerRequest
         * @static
         * @param {daemon.CreateServerRequest} message CreateServerRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateServerRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.image = "";
                object.name = "";
                object.importDataDir = "";
            }
            if (message.image != null && message.hasOwnProperty("image"))
                object.image = message.image;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.importDataDir != null && message.hasOwnProperty("importDataDir"))
                object.importDataDir = message.importDataDir;
            return object;
        };

        /**
         * Converts this CreateServerRequest to JSON.
         * @function toJSON
         * @memberof daemon.CreateServerRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateServerRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateServerRequest;
    })();

    daemon.CreateServerResponse = (function() {

        /**
         * Properties of a CreateServerResponse.
         * @memberof daemon
         * @interface ICreateServerResponse
         * @property {daemon.IServer} [server] CreateServerResponse server
         */

        /**
         * Constructs a new CreateServerResponse.
         * @memberof daemon
         * @classdesc Represents a CreateServerResponse.
         * @constructor
         * @param {daemon.ICreateServerResponse=} [properties] Properties to set
         */
        function CreateServerResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateServerResponse server.
         * @member {(daemon.IServer|null|undefined)}server
         * @memberof daemon.CreateServerResponse
         * @instance
         */
        CreateServerResponse.prototype.server = null;

        /**
         * Creates a new CreateServerResponse instance using the specified properties.
         * @function create
         * @memberof daemon.CreateServerResponse
         * @static
         * @param {daemon.ICreateServerResponse=} [properties] Properties to set
         * @returns {daemon.CreateServerResponse} CreateServerResponse instance
         */
        CreateServerResponse.create = function create(properties) {
            return new CreateServerResponse(properties);
        };

        /**
         * Encodes the specified CreateServerResponse message. Does not implicitly {@link daemon.CreateServerResponse.verify|verify} messages.
         * @function encode
         * @memberof daemon.CreateServerResponse
         * @static
         * @param {daemon.ICreateServerResponse} message CreateServerResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateServerResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.server != null && message.hasOwnProperty("server"))
                $root.daemon.Server.encode(message.server, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified CreateServerResponse message, length delimited. Does not implicitly {@link daemon.CreateServerResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof daemon.CreateServerResponse
         * @static
         * @param {daemon.ICreateServerResponse} message CreateServerResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateServerResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateServerResponse message from the specified reader or buffer.
         * @function decode
         * @memberof daemon.CreateServerResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {daemon.CreateServerResponse} CreateServerResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateServerResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.daemon.CreateServerResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.server = $root.daemon.Server.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateServerResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof daemon.CreateServerResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {daemon.CreateServerResponse} CreateServerResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateServerResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateServerResponse message.
         * @function verify
         * @memberof daemon.CreateServerResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateServerResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.server != null && message.hasOwnProperty("server")) {
                var error = $root.daemon.Server.verify(message.server);
                if (error)
                    return "server." + error;
            }
            return null;
        };

        /**
         * Creates a CreateServerResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof daemon.CreateServerResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {daemon.CreateServerResponse} CreateServerResponse
         */
        CreateServerResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.daemon.CreateServerResponse)
                return object;
            var message = new $root.daemon.CreateServerResponse();
            if (object.server != null) {
                if (typeof object.server !== "object")
                    throw TypeError(".daemon.CreateServerResponse.server: object expected");
                message.server = $root.daemon.Server.fromObject(object.server);
            }
            return message;
        };

        /**
         * Creates a plain object from a CreateServerResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof daemon.CreateServerResponse
         * @static
         * @param {daemon.CreateServerResponse} message CreateServerResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateServerResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.server = null;
            if (message.server != null && message.hasOwnProperty("server"))
                object.server = $root.daemon.Server.toObject(message.server, options);
            return object;
        };

        /**
         * Converts this CreateServerResponse to JSON.
         * @function toJSON
         * @memberof daemon.CreateServerResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateServerResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateServerResponse;
    })();

    daemon.StartServerRequest = (function() {

        /**
         * Properties of a StartServerRequest.
         * @memberof daemon
         * @interface IStartServerRequest
         * @property {string} [id] StartServerRequest id
         */

        /**
         * Constructs a new StartServerRequest.
         * @memberof daemon
         * @classdesc Represents a StartServerRequest.
         * @constructor
         * @param {daemon.IStartServerRequest=} [properties] Properties to set
         */
        function StartServerRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StartServerRequest id.
         * @member {string}id
         * @memberof daemon.StartServerRequest
         * @instance
         */
        StartServerRequest.prototype.id = "";

        /**
         * Creates a new StartServerRequest instance using the specified properties.
         * @function create
         * @memberof daemon.StartServerRequest
         * @static
         * @param {daemon.IStartServerRequest=} [properties] Properties to set
         * @returns {daemon.StartServerRequest} StartServerRequest instance
         */
        StartServerRequest.create = function create(properties) {
            return new StartServerRequest(properties);
        };

        /**
         * Encodes the specified StartServerRequest message. Does not implicitly {@link daemon.StartServerRequest.verify|verify} messages.
         * @function encode
         * @memberof daemon.StartServerRequest
         * @static
         * @param {daemon.IStartServerRequest} message StartServerRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StartServerRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            return writer;
        };

        /**
         * Encodes the specified StartServerRequest message, length delimited. Does not implicitly {@link daemon.StartServerRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof daemon.StartServerRequest
         * @static
         * @param {daemon.IStartServerRequest} message StartServerRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StartServerRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StartServerRequest message from the specified reader or buffer.
         * @function decode
         * @memberof daemon.StartServerRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {daemon.StartServerRequest} StartServerRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StartServerRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.daemon.StartServerRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a StartServerRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof daemon.StartServerRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {daemon.StartServerRequest} StartServerRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StartServerRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StartServerRequest message.
         * @function verify
         * @memberof daemon.StartServerRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StartServerRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            return null;
        };

        /**
         * Creates a StartServerRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof daemon.StartServerRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {daemon.StartServerRequest} StartServerRequest
         */
        StartServerRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.daemon.StartServerRequest)
                return object;
            var message = new $root.daemon.StartServerRequest();
            if (object.id != null)
                message.id = String(object.id);
            return message;
        };

        /**
         * Creates a plain object from a StartServerRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof daemon.StartServerRequest
         * @static
         * @param {daemon.StartServerRequest} message StartServerRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StartServerRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.id = "";
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this StartServerRequest to JSON.
         * @function toJSON
         * @memberof daemon.StartServerRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StartServerRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return StartServerRequest;
    })();

    daemon.StartServerResponse = (function() {

        /**
         * Properties of a StartServerResponse.
         * @memberof daemon
         * @interface IStartServerResponse
         * @property {daemon.IServer} [server] StartServerResponse server
         */

        /**
         * Constructs a new StartServerResponse.
         * @memberof daemon
         * @classdesc Represents a StartServerResponse.
         * @constructor
         * @param {daemon.IStartServerResponse=} [properties] Properties to set
         */
        function StartServerResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StartServerResponse server.
         * @member {(daemon.IServer|null|undefined)}server
         * @memberof daemon.StartServerResponse
         * @instance
         */
        StartServerResponse.prototype.server = null;

        /**
         * Creates a new StartServerResponse instance using the specified properties.
         * @function create
         * @memberof daemon.StartServerResponse
         * @static
         * @param {daemon.IStartServerResponse=} [properties] Properties to set
         * @returns {daemon.StartServerResponse} StartServerResponse instance
         */
        StartServerResponse.create = function create(properties) {
            return new StartServerResponse(properties);
        };

        /**
         * Encodes the specified StartServerResponse message. Does not implicitly {@link daemon.StartServerResponse.verify|verify} messages.
         * @function encode
         * @memberof daemon.StartServerResponse
         * @static
         * @param {daemon.IStartServerResponse} message StartServerResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StartServerResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.server != null && message.hasOwnProperty("server"))
                $root.daemon.Server.encode(message.server, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified StartServerResponse message, length delimited. Does not implicitly {@link daemon.StartServerResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof daemon.StartServerResponse
         * @static
         * @param {daemon.IStartServerResponse} message StartServerResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StartServerResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StartServerResponse message from the specified reader or buffer.
         * @function decode
         * @memberof daemon.StartServerResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {daemon.StartServerResponse} StartServerResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StartServerResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.daemon.StartServerResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.server = $root.daemon.Server.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a StartServerResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof daemon.StartServerResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {daemon.StartServerResponse} StartServerResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StartServerResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StartServerResponse message.
         * @function verify
         * @memberof daemon.StartServerResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StartServerResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.server != null && message.hasOwnProperty("server")) {
                var error = $root.daemon.Server.verify(message.server);
                if (error)
                    return "server." + error;
            }
            return null;
        };

        /**
         * Creates a StartServerResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof daemon.StartServerResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {daemon.StartServerResponse} StartServerResponse
         */
        StartServerResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.daemon.StartServerResponse)
                return object;
            var message = new $root.daemon.StartServerResponse();
            if (object.server != null) {
                if (typeof object.server !== "object")
                    throw TypeError(".daemon.StartServerResponse.server: object expected");
                message.server = $root.daemon.Server.fromObject(object.server);
            }
            return message;
        };

        /**
         * Creates a plain object from a StartServerResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof daemon.StartServerResponse
         * @static
         * @param {daemon.StartServerResponse} message StartServerResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StartServerResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.server = null;
            if (message.server != null && message.hasOwnProperty("server"))
                object.server = $root.daemon.Server.toObject(message.server, options);
            return object;
        };

        /**
         * Converts this StartServerResponse to JSON.
         * @function toJSON
         * @memberof daemon.StartServerResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StartServerResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return StartServerResponse;
    })();

    daemon.StopServerRequest = (function() {

        /**
         * Properties of a StopServerRequest.
         * @memberof daemon
         * @interface IStopServerRequest
         * @property {string} [id] StopServerRequest id
         */

        /**
         * Constructs a new StopServerRequest.
         * @memberof daemon
         * @classdesc Represents a StopServerRequest.
         * @constructor
         * @param {daemon.IStopServerRequest=} [properties] Properties to set
         */
        function StopServerRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StopServerRequest id.
         * @member {string}id
         * @memberof daemon.StopServerRequest
         * @instance
         */
        StopServerRequest.prototype.id = "";

        /**
         * Creates a new StopServerRequest instance using the specified properties.
         * @function create
         * @memberof daemon.StopServerRequest
         * @static
         * @param {daemon.IStopServerRequest=} [properties] Properties to set
         * @returns {daemon.StopServerRequest} StopServerRequest instance
         */
        StopServerRequest.create = function create(properties) {
            return new StopServerRequest(properties);
        };

        /**
         * Encodes the specified StopServerRequest message. Does not implicitly {@link daemon.StopServerRequest.verify|verify} messages.
         * @function encode
         * @memberof daemon.StopServerRequest
         * @static
         * @param {daemon.IStopServerRequest} message StopServerRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StopServerRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            return writer;
        };

        /**
         * Encodes the specified StopServerRequest message, length delimited. Does not implicitly {@link daemon.StopServerRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof daemon.StopServerRequest
         * @static
         * @param {daemon.IStopServerRequest} message StopServerRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StopServerRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StopServerRequest message from the specified reader or buffer.
         * @function decode
         * @memberof daemon.StopServerRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {daemon.StopServerRequest} StopServerRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StopServerRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.daemon.StopServerRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a StopServerRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof daemon.StopServerRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {daemon.StopServerRequest} StopServerRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StopServerRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StopServerRequest message.
         * @function verify
         * @memberof daemon.StopServerRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StopServerRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            return null;
        };

        /**
         * Creates a StopServerRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof daemon.StopServerRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {daemon.StopServerRequest} StopServerRequest
         */
        StopServerRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.daemon.StopServerRequest)
                return object;
            var message = new $root.daemon.StopServerRequest();
            if (object.id != null)
                message.id = String(object.id);
            return message;
        };

        /**
         * Creates a plain object from a StopServerRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof daemon.StopServerRequest
         * @static
         * @param {daemon.StopServerRequest} message StopServerRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StopServerRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.id = "";
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this StopServerRequest to JSON.
         * @function toJSON
         * @memberof daemon.StopServerRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StopServerRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return StopServerRequest;
    })();

    daemon.StopServerResponse = (function() {

        /**
         * Properties of a StopServerResponse.
         * @memberof daemon
         * @interface IStopServerResponse
         */

        /**
         * Constructs a new StopServerResponse.
         * @memberof daemon
         * @classdesc Represents a StopServerResponse.
         * @constructor
         * @param {daemon.IStopServerResponse=} [properties] Properties to set
         */
        function StopServerResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new StopServerResponse instance using the specified properties.
         * @function create
         * @memberof daemon.StopServerResponse
         * @static
         * @param {daemon.IStopServerResponse=} [properties] Properties to set
         * @returns {daemon.StopServerResponse} StopServerResponse instance
         */
        StopServerResponse.create = function create(properties) {
            return new StopServerResponse(properties);
        };

        /**
         * Encodes the specified StopServerResponse message. Does not implicitly {@link daemon.StopServerResponse.verify|verify} messages.
         * @function encode
         * @memberof daemon.StopServerResponse
         * @static
         * @param {daemon.IStopServerResponse} message StopServerResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StopServerResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified StopServerResponse message, length delimited. Does not implicitly {@link daemon.StopServerResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof daemon.StopServerResponse
         * @static
         * @param {daemon.IStopServerResponse} message StopServerResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StopServerResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StopServerResponse message from the specified reader or buffer.
         * @function decode
         * @memberof daemon.StopServerResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {daemon.StopServerResponse} StopServerResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StopServerResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.daemon.StopServerResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a StopServerResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof daemon.StopServerResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {daemon.StopServerResponse} StopServerResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StopServerResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StopServerResponse message.
         * @function verify
         * @memberof daemon.StopServerResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StopServerResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a StopServerResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof daemon.StopServerResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {daemon.StopServerResponse} StopServerResponse
         */
        StopServerResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.daemon.StopServerResponse)
                return object;
            return new $root.daemon.StopServerResponse();
        };

        /**
         * Creates a plain object from a StopServerResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof daemon.StopServerResponse
         * @static
         * @param {daemon.StopServerResponse} message StopServerResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StopServerResponse.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this StopServerResponse to JSON.
         * @function toJSON
         * @memberof daemon.StopServerResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StopServerResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return StopServerResponse;
    })();

    daemon.DeleteServerRequest = (function() {

        /**
         * Properties of a DeleteServerRequest.
         * @memberof daemon
         * @interface IDeleteServerRequest
         * @property {string} [id] DeleteServerRequest id
         */

        /**
         * Constructs a new DeleteServerRequest.
         * @memberof daemon
         * @classdesc Represents a DeleteServerRequest.
         * @constructor
         * @param {daemon.IDeleteServerRequest=} [properties] Properties to set
         */
        function DeleteServerRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DeleteServerRequest id.
         * @member {string}id
         * @memberof daemon.DeleteServerRequest
         * @instance
         */
        DeleteServerRequest.prototype.id = "";

        /**
         * Creates a new DeleteServerRequest instance using the specified properties.
         * @function create
         * @memberof daemon.DeleteServerRequest
         * @static
         * @param {daemon.IDeleteServerRequest=} [properties] Properties to set
         * @returns {daemon.DeleteServerRequest} DeleteServerRequest instance
         */
        DeleteServerRequest.create = function create(properties) {
            return new DeleteServerRequest(properties);
        };

        /**
         * Encodes the specified DeleteServerRequest message. Does not implicitly {@link daemon.DeleteServerRequest.verify|verify} messages.
         * @function encode
         * @memberof daemon.DeleteServerRequest
         * @static
         * @param {daemon.IDeleteServerRequest} message DeleteServerRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteServerRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            return writer;
        };

        /**
         * Encodes the specified DeleteServerRequest message, length delimited. Does not implicitly {@link daemon.DeleteServerRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof daemon.DeleteServerRequest
         * @static
         * @param {daemon.IDeleteServerRequest} message DeleteServerRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteServerRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DeleteServerRequest message from the specified reader or buffer.
         * @function decode
         * @memberof daemon.DeleteServerRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {daemon.DeleteServerRequest} DeleteServerRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteServerRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.daemon.DeleteServerRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DeleteServerRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof daemon.DeleteServerRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {daemon.DeleteServerRequest} DeleteServerRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteServerRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DeleteServerRequest message.
         * @function verify
         * @memberof daemon.DeleteServerRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DeleteServerRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            return null;
        };

        /**
         * Creates a DeleteServerRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof daemon.DeleteServerRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {daemon.DeleteServerRequest} DeleteServerRequest
         */
        DeleteServerRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.daemon.DeleteServerRequest)
                return object;
            var message = new $root.daemon.DeleteServerRequest();
            if (object.id != null)
                message.id = String(object.id);
            return message;
        };

        /**
         * Creates a plain object from a DeleteServerRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof daemon.DeleteServerRequest
         * @static
         * @param {daemon.DeleteServerRequest} message DeleteServerRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DeleteServerRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.id = "";
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this DeleteServerRequest to JSON.
         * @function toJSON
         * @memberof daemon.DeleteServerRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DeleteServerRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DeleteServerRequest;
    })();

    daemon.DeleteServerResponse = (function() {

        /**
         * Properties of a DeleteServerResponse.
         * @memberof daemon
         * @interface IDeleteServerResponse
         */

        /**
         * Constructs a new DeleteServerResponse.
         * @memberof daemon
         * @classdesc Represents a DeleteServerResponse.
         * @constructor
         * @param {daemon.IDeleteServerResponse=} [properties] Properties to set
         */
        function DeleteServerResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new DeleteServerResponse instance using the specified properties.
         * @function create
         * @memberof daemon.DeleteServerResponse
         * @static
         * @param {daemon.IDeleteServerResponse=} [properties] Properties to set
         * @returns {daemon.DeleteServerResponse} DeleteServerResponse instance
         */
        DeleteServerResponse.create = function create(properties) {
            return new DeleteServerResponse(properties);
        };

        /**
         * Encodes the specified DeleteServerResponse message. Does not implicitly {@link daemon.DeleteServerResponse.verify|verify} messages.
         * @function encode
         * @memberof daemon.DeleteServerResponse
         * @static
         * @param {daemon.IDeleteServerResponse} message DeleteServerResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteServerResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified DeleteServerResponse message, length delimited. Does not implicitly {@link daemon.DeleteServerResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof daemon.DeleteServerResponse
         * @static
         * @param {daemon.IDeleteServerResponse} message DeleteServerResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteServerResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DeleteServerResponse message from the specified reader or buffer.
         * @function decode
         * @memberof daemon.DeleteServerResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {daemon.DeleteServerResponse} DeleteServerResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteServerResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.daemon.DeleteServerResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DeleteServerResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof daemon.DeleteServerResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {daemon.DeleteServerResponse} DeleteServerResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteServerResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DeleteServerResponse message.
         * @function verify
         * @memberof daemon.DeleteServerResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DeleteServerResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a DeleteServerResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof daemon.DeleteServerResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {daemon.DeleteServerResponse} DeleteServerResponse
         */
        DeleteServerResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.daemon.DeleteServerResponse)
                return object;
            return new $root.daemon.DeleteServerResponse();
        };

        /**
         * Creates a plain object from a DeleteServerResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof daemon.DeleteServerResponse
         * @static
         * @param {daemon.DeleteServerResponse} message DeleteServerResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DeleteServerResponse.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this DeleteServerResponse to JSON.
         * @function toJSON
         * @memberof daemon.DeleteServerResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DeleteServerResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DeleteServerResponse;
    })();

    daemon.Server = (function() {

        /**
         * Properties of a Server.
         * @memberof daemon
         * @interface IServer
         * @property {string} [id] Server id
         * @property {string} [name] Server name
         * @property {string} [image] Server image
         * @property {string} [currentOwnerId] Server currentOwnerId
         * @property {daemon.IFileset} [fileset] Server fileset
         * @property {daemon.Server.Status} [status] Server status
         */

        /**
         * Constructs a new Server.
         * @memberof daemon
         * @classdesc Represents a Server.
         * @constructor
         * @param {daemon.IServer=} [properties] Properties to set
         */
        function Server(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Server id.
         * @member {string}id
         * @memberof daemon.Server
         * @instance
         */
        Server.prototype.id = "";

        /**
         * Server name.
         * @member {string}name
         * @memberof daemon.Server
         * @instance
         */
        Server.prototype.name = "";

        /**
         * Server image.
         * @member {string}image
         * @memberof daemon.Server
         * @instance
         */
        Server.prototype.image = "";

        /**
         * Server currentOwnerId.
         * @member {string}currentOwnerId
         * @memberof daemon.Server
         * @instance
         */
        Server.prototype.currentOwnerId = "";

        /**
         * Server fileset.
         * @member {(daemon.IFileset|null|undefined)}fileset
         * @memberof daemon.Server
         * @instance
         */
        Server.prototype.fileset = null;

        /**
         * Server status.
         * @member {daemon.Server.Status}status
         * @memberof daemon.Server
         * @instance
         */
        Server.prototype.status = 0;

        /**
         * Creates a new Server instance using the specified properties.
         * @function create
         * @memberof daemon.Server
         * @static
         * @param {daemon.IServer=} [properties] Properties to set
         * @returns {daemon.Server} Server instance
         */
        Server.create = function create(properties) {
            return new Server(properties);
        };

        /**
         * Encodes the specified Server message. Does not implicitly {@link daemon.Server.verify|verify} messages.
         * @function encode
         * @memberof daemon.Server
         * @static
         * @param {daemon.IServer} message Server message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Server.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.image != null && message.hasOwnProperty("image"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.image);
            if (message.currentOwnerId != null && message.hasOwnProperty("currentOwnerId"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.currentOwnerId);
            if (message.fileset != null && message.hasOwnProperty("fileset"))
                $root.daemon.Fileset.encode(message.fileset, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.status != null && message.hasOwnProperty("status"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.status);
            return writer;
        };

        /**
         * Encodes the specified Server message, length delimited. Does not implicitly {@link daemon.Server.verify|verify} messages.
         * @function encodeDelimited
         * @memberof daemon.Server
         * @static
         * @param {daemon.IServer} message Server message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Server.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Server message from the specified reader or buffer.
         * @function decode
         * @memberof daemon.Server
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {daemon.Server} Server
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Server.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.daemon.Server();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.image = reader.string();
                    break;
                case 4:
                    message.currentOwnerId = reader.string();
                    break;
                case 5:
                    message.fileset = $root.daemon.Fileset.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.status = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Server message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof daemon.Server
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {daemon.Server} Server
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Server.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Server message.
         * @function verify
         * @memberof daemon.Server
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Server.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.image != null && message.hasOwnProperty("image"))
                if (!$util.isString(message.image))
                    return "image: string expected";
            if (message.currentOwnerId != null && message.hasOwnProperty("currentOwnerId"))
                if (!$util.isString(message.currentOwnerId))
                    return "currentOwnerId: string expected";
            if (message.fileset != null && message.hasOwnProperty("fileset")) {
                var error = $root.daemon.Fileset.verify(message.fileset);
                if (error)
                    return "fileset." + error;
            }
            if (message.status != null && message.hasOwnProperty("status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            return null;
        };

        /**
         * Creates a Server message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof daemon.Server
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {daemon.Server} Server
         */
        Server.fromObject = function fromObject(object) {
            if (object instanceof $root.daemon.Server)
                return object;
            var message = new $root.daemon.Server();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            if (object.image != null)
                message.image = String(object.image);
            if (object.currentOwnerId != null)
                message.currentOwnerId = String(object.currentOwnerId);
            if (object.fileset != null) {
                if (typeof object.fileset !== "object")
                    throw TypeError(".daemon.Server.fileset: object expected");
                message.fileset = $root.daemon.Fileset.fromObject(object.fileset);
            }
            switch (object.status) {
            case "STOPPED":
            case 0:
                message.status = 0;
                break;
            case "STARTING":
            case 1:
                message.status = 1;
                break;
            case "RUNNING":
            case 2:
                message.status = 2;
                break;
            case "STOPPING":
            case 3:
                message.status = 3;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a Server message. Also converts values to other types if specified.
         * @function toObject
         * @memberof daemon.Server
         * @static
         * @param {daemon.Server} message Server
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Server.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.name = "";
                object.image = "";
                object.currentOwnerId = "";
                object.fileset = null;
                object.status = options.enums === String ? "STOPPED" : 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.image != null && message.hasOwnProperty("image"))
                object.image = message.image;
            if (message.currentOwnerId != null && message.hasOwnProperty("currentOwnerId"))
                object.currentOwnerId = message.currentOwnerId;
            if (message.fileset != null && message.hasOwnProperty("fileset"))
                object.fileset = $root.daemon.Fileset.toObject(message.fileset, options);
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = options.enums === String ? $root.daemon.Server.Status[message.status] : message.status;
            return object;
        };

        /**
         * Converts this Server to JSON.
         * @function toJSON
         * @memberof daemon.Server
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Server.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Status enum.
         * @enum {string}
         * @property {number} STOPPED=0 STOPPED value
         * @property {number} STARTING=1 STARTING value
         * @property {number} RUNNING=2 RUNNING value
         * @property {number} STOPPING=3 STOPPING value
         */
        Server.Status = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "STOPPED"] = 0;
            values[valuesById[1] = "STARTING"] = 1;
            values[valuesById[2] = "RUNNING"] = 2;
            values[valuesById[3] = "STOPPING"] = 3;
            return values;
        })();

        return Server;
    })();

    daemon.Fileset = (function() {

        /**
         * Properties of a Fileset.
         * @memberof daemon
         * @interface IFileset
         * @property {Uint8Array} [hash] Fileset hash
         * @property {number|Long} [bytes] Fileset bytes
         */

        /**
         * Constructs a new Fileset.
         * @memberof daemon
         * @classdesc Represents a Fileset.
         * @constructor
         * @param {daemon.IFileset=} [properties] Properties to set
         */
        function Fileset(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Fileset hash.
         * @member {Uint8Array}hash
         * @memberof daemon.Fileset
         * @instance
         */
        Fileset.prototype.hash = $util.newBuffer([]);

        /**
         * Fileset bytes.
         * @member {number|Long}bytes
         * @memberof daemon.Fileset
         * @instance
         */
        Fileset.prototype.bytes = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new Fileset instance using the specified properties.
         * @function create
         * @memberof daemon.Fileset
         * @static
         * @param {daemon.IFileset=} [properties] Properties to set
         * @returns {daemon.Fileset} Fileset instance
         */
        Fileset.create = function create(properties) {
            return new Fileset(properties);
        };

        /**
         * Encodes the specified Fileset message. Does not implicitly {@link daemon.Fileset.verify|verify} messages.
         * @function encode
         * @memberof daemon.Fileset
         * @static
         * @param {daemon.IFileset} message Fileset message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Fileset.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.hash != null && message.hasOwnProperty("hash"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.hash);
            if (message.bytes != null && message.hasOwnProperty("bytes"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.bytes);
            return writer;
        };

        /**
         * Encodes the specified Fileset message, length delimited. Does not implicitly {@link daemon.Fileset.verify|verify} messages.
         * @function encodeDelimited
         * @memberof daemon.Fileset
         * @static
         * @param {daemon.IFileset} message Fileset message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Fileset.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Fileset message from the specified reader or buffer.
         * @function decode
         * @memberof daemon.Fileset
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {daemon.Fileset} Fileset
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Fileset.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.daemon.Fileset();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.hash = reader.bytes();
                    break;
                case 3:
                    message.bytes = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Fileset message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof daemon.Fileset
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {daemon.Fileset} Fileset
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Fileset.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Fileset message.
         * @function verify
         * @memberof daemon.Fileset
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Fileset.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.hash != null && message.hasOwnProperty("hash"))
                if (!(message.hash && typeof message.hash.length === "number" || $util.isString(message.hash)))
                    return "hash: buffer expected";
            if (message.bytes != null && message.hasOwnProperty("bytes"))
                if (!$util.isInteger(message.bytes) && !(message.bytes && $util.isInteger(message.bytes.low) && $util.isInteger(message.bytes.high)))
                    return "bytes: integer|Long expected";
            return null;
        };

        /**
         * Creates a Fileset message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof daemon.Fileset
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {daemon.Fileset} Fileset
         */
        Fileset.fromObject = function fromObject(object) {
            if (object instanceof $root.daemon.Fileset)
                return object;
            var message = new $root.daemon.Fileset();
            if (object.hash != null)
                if (typeof object.hash === "string")
                    $util.base64.decode(object.hash, message.hash = $util.newBuffer($util.base64.length(object.hash)), 0);
                else if (object.hash.length)
                    message.hash = object.hash;
            if (object.bytes != null)
                if ($util.Long)
                    (message.bytes = $util.Long.fromValue(object.bytes)).unsigned = true;
                else if (typeof object.bytes === "string")
                    message.bytes = parseInt(object.bytes, 10);
                else if (typeof object.bytes === "number")
                    message.bytes = object.bytes;
                else if (typeof object.bytes === "object")
                    message.bytes = new $util.LongBits(object.bytes.low >>> 0, object.bytes.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a Fileset message. Also converts values to other types if specified.
         * @function toObject
         * @memberof daemon.Fileset
         * @static
         * @param {daemon.Fileset} message Fileset
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Fileset.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.hash = options.bytes === String ? "" : [];
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.bytes = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.bytes = options.longs === String ? "0" : 0;
            }
            if (message.hash != null && message.hasOwnProperty("hash"))
                object.hash = options.bytes === String ? $util.base64.encode(message.hash, 0, message.hash.length) : options.bytes === Array ? Array.prototype.slice.call(message.hash) : message.hash;
            if (message.bytes != null && message.hasOwnProperty("bytes"))
                if (typeof message.bytes === "number")
                    object.bytes = options.longs === String ? String(message.bytes) : message.bytes;
                else
                    object.bytes = options.longs === String ? $util.Long.prototype.toString.call(message.bytes) : options.longs === Number ? new $util.LongBits(message.bytes.low >>> 0, message.bytes.high >>> 0).toNumber(true) : message.bytes;
            return object;
        };

        /**
         * Converts this Fileset to JSON.
         * @function toJSON
         * @memberof daemon.Fileset
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Fileset.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Fileset;
    })();

    daemon.Guild = (function() {

        /**
         * Properties of a Guild.
         * @memberof daemon
         * @interface IGuild
         * @property {string} [id] Guild id
         * @property {string} [name] Guild name
         * @property {boolean} [connected] Guild connected
         * @property {string} [ip] Guild ip
         */

        /**
         * Constructs a new Guild.
         * @memberof daemon
         * @classdesc Represents a Guild.
         * @constructor
         * @param {daemon.IGuild=} [properties] Properties to set
         */
        function Guild(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Guild id.
         * @member {string}id
         * @memberof daemon.Guild
         * @instance
         */
        Guild.prototype.id = "";

        /**
         * Guild name.
         * @member {string}name
         * @memberof daemon.Guild
         * @instance
         */
        Guild.prototype.name = "";

        /**
         * Guild connected.
         * @member {boolean}connected
         * @memberof daemon.Guild
         * @instance
         */
        Guild.prototype.connected = false;

        /**
         * Guild ip.
         * @member {string}ip
         * @memberof daemon.Guild
         * @instance
         */
        Guild.prototype.ip = "";

        /**
         * Creates a new Guild instance using the specified properties.
         * @function create
         * @memberof daemon.Guild
         * @static
         * @param {daemon.IGuild=} [properties] Properties to set
         * @returns {daemon.Guild} Guild instance
         */
        Guild.create = function create(properties) {
            return new Guild(properties);
        };

        /**
         * Encodes the specified Guild message. Does not implicitly {@link daemon.Guild.verify|verify} messages.
         * @function encode
         * @memberof daemon.Guild
         * @static
         * @param {daemon.IGuild} message Guild message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Guild.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.connected != null && message.hasOwnProperty("connected"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.connected);
            if (message.ip != null && message.hasOwnProperty("ip"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.ip);
            return writer;
        };

        /**
         * Encodes the specified Guild message, length delimited. Does not implicitly {@link daemon.Guild.verify|verify} messages.
         * @function encodeDelimited
         * @memberof daemon.Guild
         * @static
         * @param {daemon.IGuild} message Guild message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Guild.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Guild message from the specified reader or buffer.
         * @function decode
         * @memberof daemon.Guild
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {daemon.Guild} Guild
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Guild.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.daemon.Guild();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.connected = reader.bool();
                    break;
                case 4:
                    message.ip = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Guild message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof daemon.Guild
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {daemon.Guild} Guild
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Guild.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Guild message.
         * @function verify
         * @memberof daemon.Guild
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Guild.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.connected != null && message.hasOwnProperty("connected"))
                if (typeof message.connected !== "boolean")
                    return "connected: boolean expected";
            if (message.ip != null && message.hasOwnProperty("ip"))
                if (!$util.isString(message.ip))
                    return "ip: string expected";
            return null;
        };

        /**
         * Creates a Guild message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof daemon.Guild
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {daemon.Guild} Guild
         */
        Guild.fromObject = function fromObject(object) {
            if (object instanceof $root.daemon.Guild)
                return object;
            var message = new $root.daemon.Guild();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            if (object.connected != null)
                message.connected = Boolean(object.connected);
            if (object.ip != null)
                message.ip = String(object.ip);
            return message;
        };

        /**
         * Creates a plain object from a Guild message. Also converts values to other types if specified.
         * @function toObject
         * @memberof daemon.Guild
         * @static
         * @param {daemon.Guild} message Guild
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Guild.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.name = "";
                object.connected = false;
                object.ip = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.connected != null && message.hasOwnProperty("connected"))
                object.connected = message.connected;
            if (message.ip != null && message.hasOwnProperty("ip"))
                object.ip = message.ip;
            return object;
        };

        /**
         * Converts this Guild to JSON.
         * @function toJSON
         * @memberof daemon.Guild
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Guild.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Guild;
    })();

    daemon.ListGuildsRequest = (function() {

        /**
         * Properties of a ListGuildsRequest.
         * @memberof daemon
         * @interface IListGuildsRequest
         * @property {number} [page] ListGuildsRequest page
         * @property {number} [limit] ListGuildsRequest limit
         */

        /**
         * Constructs a new ListGuildsRequest.
         * @memberof daemon
         * @classdesc Represents a ListGuildsRequest.
         * @constructor
         * @param {daemon.IListGuildsRequest=} [properties] Properties to set
         */
        function ListGuildsRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ListGuildsRequest page.
         * @member {number}page
         * @memberof daemon.ListGuildsRequest
         * @instance
         */
        ListGuildsRequest.prototype.page = 0;

        /**
         * ListGuildsRequest limit.
         * @member {number}limit
         * @memberof daemon.ListGuildsRequest
         * @instance
         */
        ListGuildsRequest.prototype.limit = 0;

        /**
         * Creates a new ListGuildsRequest instance using the specified properties.
         * @function create
         * @memberof daemon.ListGuildsRequest
         * @static
         * @param {daemon.IListGuildsRequest=} [properties] Properties to set
         * @returns {daemon.ListGuildsRequest} ListGuildsRequest instance
         */
        ListGuildsRequest.create = function create(properties) {
            return new ListGuildsRequest(properties);
        };

        /**
         * Encodes the specified ListGuildsRequest message. Does not implicitly {@link daemon.ListGuildsRequest.verify|verify} messages.
         * @function encode
         * @memberof daemon.ListGuildsRequest
         * @static
         * @param {daemon.IListGuildsRequest} message ListGuildsRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListGuildsRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.page != null && message.hasOwnProperty("page"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.page);
            if (message.limit != null && message.hasOwnProperty("limit"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.limit);
            return writer;
        };

        /**
         * Encodes the specified ListGuildsRequest message, length delimited. Does not implicitly {@link daemon.ListGuildsRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof daemon.ListGuildsRequest
         * @static
         * @param {daemon.IListGuildsRequest} message ListGuildsRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListGuildsRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ListGuildsRequest message from the specified reader or buffer.
         * @function decode
         * @memberof daemon.ListGuildsRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {daemon.ListGuildsRequest} ListGuildsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListGuildsRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.daemon.ListGuildsRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.page = reader.uint32();
                    break;
                case 2:
                    message.limit = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ListGuildsRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof daemon.ListGuildsRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {daemon.ListGuildsRequest} ListGuildsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListGuildsRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ListGuildsRequest message.
         * @function verify
         * @memberof daemon.ListGuildsRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ListGuildsRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.page != null && message.hasOwnProperty("page"))
                if (!$util.isInteger(message.page))
                    return "page: integer expected";
            if (message.limit != null && message.hasOwnProperty("limit"))
                if (!$util.isInteger(message.limit))
                    return "limit: integer expected";
            return null;
        };

        /**
         * Creates a ListGuildsRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof daemon.ListGuildsRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {daemon.ListGuildsRequest} ListGuildsRequest
         */
        ListGuildsRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.daemon.ListGuildsRequest)
                return object;
            var message = new $root.daemon.ListGuildsRequest();
            if (object.page != null)
                message.page = object.page >>> 0;
            if (object.limit != null)
                message.limit = object.limit >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a ListGuildsRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof daemon.ListGuildsRequest
         * @static
         * @param {daemon.ListGuildsRequest} message ListGuildsRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ListGuildsRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.page = 0;
                object.limit = 0;
            }
            if (message.page != null && message.hasOwnProperty("page"))
                object.page = message.page;
            if (message.limit != null && message.hasOwnProperty("limit"))
                object.limit = message.limit;
            return object;
        };

        /**
         * Converts this ListGuildsRequest to JSON.
         * @function toJSON
         * @memberof daemon.ListGuildsRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ListGuildsRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ListGuildsRequest;
    })();

    daemon.ListGuildsResponse = (function() {

        /**
         * Properties of a ListGuildsResponse.
         * @memberof daemon
         * @interface IListGuildsResponse
         * @property {Array.<daemon.IGuild>} [guilds] ListGuildsResponse guilds
         */

        /**
         * Constructs a new ListGuildsResponse.
         * @memberof daemon
         * @classdesc Represents a ListGuildsResponse.
         * @constructor
         * @param {daemon.IListGuildsResponse=} [properties] Properties to set
         */
        function ListGuildsResponse(properties) {
            this.guilds = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ListGuildsResponse guilds.
         * @member {Array.<daemon.IGuild>}guilds
         * @memberof daemon.ListGuildsResponse
         * @instance
         */
        ListGuildsResponse.prototype.guilds = $util.emptyArray;

        /**
         * Creates a new ListGuildsResponse instance using the specified properties.
         * @function create
         * @memberof daemon.ListGuildsResponse
         * @static
         * @param {daemon.IListGuildsResponse=} [properties] Properties to set
         * @returns {daemon.ListGuildsResponse} ListGuildsResponse instance
         */
        ListGuildsResponse.create = function create(properties) {
            return new ListGuildsResponse(properties);
        };

        /**
         * Encodes the specified ListGuildsResponse message. Does not implicitly {@link daemon.ListGuildsResponse.verify|verify} messages.
         * @function encode
         * @memberof daemon.ListGuildsResponse
         * @static
         * @param {daemon.IListGuildsResponse} message ListGuildsResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListGuildsResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.guilds != null && message.guilds.length)
                for (var i = 0; i < message.guilds.length; ++i)
                    $root.daemon.Guild.encode(message.guilds[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ListGuildsResponse message, length delimited. Does not implicitly {@link daemon.ListGuildsResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof daemon.ListGuildsResponse
         * @static
         * @param {daemon.IListGuildsResponse} message ListGuildsResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListGuildsResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ListGuildsResponse message from the specified reader or buffer.
         * @function decode
         * @memberof daemon.ListGuildsResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {daemon.ListGuildsResponse} ListGuildsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListGuildsResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.daemon.ListGuildsResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.guilds && message.guilds.length))
                        message.guilds = [];
                    message.guilds.push($root.daemon.Guild.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ListGuildsResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof daemon.ListGuildsResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {daemon.ListGuildsResponse} ListGuildsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListGuildsResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ListGuildsResponse message.
         * @function verify
         * @memberof daemon.ListGuildsResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ListGuildsResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.guilds != null && message.hasOwnProperty("guilds")) {
                if (!Array.isArray(message.guilds))
                    return "guilds: array expected";
                for (var i = 0; i < message.guilds.length; ++i) {
                    var error = $root.daemon.Guild.verify(message.guilds[i]);
                    if (error)
                        return "guilds." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ListGuildsResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof daemon.ListGuildsResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {daemon.ListGuildsResponse} ListGuildsResponse
         */
        ListGuildsResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.daemon.ListGuildsResponse)
                return object;
            var message = new $root.daemon.ListGuildsResponse();
            if (object.guilds) {
                if (!Array.isArray(object.guilds))
                    throw TypeError(".daemon.ListGuildsResponse.guilds: array expected");
                message.guilds = [];
                for (var i = 0; i < object.guilds.length; ++i) {
                    if (typeof object.guilds[i] !== "object")
                        throw TypeError(".daemon.ListGuildsResponse.guilds: object expected");
                    message.guilds[i] = $root.daemon.Guild.fromObject(object.guilds[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ListGuildsResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof daemon.ListGuildsResponse
         * @static
         * @param {daemon.ListGuildsResponse} message ListGuildsResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ListGuildsResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.guilds = [];
            if (message.guilds && message.guilds.length) {
                object.guilds = [];
                for (var j = 0; j < message.guilds.length; ++j)
                    object.guilds[j] = $root.daemon.Guild.toObject(message.guilds[j], options);
            }
            return object;
        };

        /**
         * Converts this ListGuildsResponse to JSON.
         * @function toJSON
         * @memberof daemon.ListGuildsResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ListGuildsResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ListGuildsResponse;
    })();

    daemon.Member = (function() {

        /**
         * Properties of a Member.
         * @memberof daemon
         * @interface IMember
         * @property {string} [id] Member id
         * @property {string} [name] Member name
         * @property {string} [ip] Member ip
         */

        /**
         * Constructs a new Member.
         * @memberof daemon
         * @classdesc Represents a Member.
         * @constructor
         * @param {daemon.IMember=} [properties] Properties to set
         */
        function Member(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Member id.
         * @member {string}id
         * @memberof daemon.Member
         * @instance
         */
        Member.prototype.id = "";

        /**
         * Member name.
         * @member {string}name
         * @memberof daemon.Member
         * @instance
         */
        Member.prototype.name = "";

        /**
         * Member ip.
         * @member {string}ip
         * @memberof daemon.Member
         * @instance
         */
        Member.prototype.ip = "";

        /**
         * Creates a new Member instance using the specified properties.
         * @function create
         * @memberof daemon.Member
         * @static
         * @param {daemon.IMember=} [properties] Properties to set
         * @returns {daemon.Member} Member instance
         */
        Member.create = function create(properties) {
            return new Member(properties);
        };

        /**
         * Encodes the specified Member message. Does not implicitly {@link daemon.Member.verify|verify} messages.
         * @function encode
         * @memberof daemon.Member
         * @static
         * @param {daemon.IMember} message Member message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Member.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.ip != null && message.hasOwnProperty("ip"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.ip);
            return writer;
        };

        /**
         * Encodes the specified Member message, length delimited. Does not implicitly {@link daemon.Member.verify|verify} messages.
         * @function encodeDelimited
         * @memberof daemon.Member
         * @static
         * @param {daemon.IMember} message Member message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Member.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Member message from the specified reader or buffer.
         * @function decode
         * @memberof daemon.Member
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {daemon.Member} Member
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Member.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.daemon.Member();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.ip = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Member message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof daemon.Member
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {daemon.Member} Member
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Member.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Member message.
         * @function verify
         * @memberof daemon.Member
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Member.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.ip != null && message.hasOwnProperty("ip"))
                if (!$util.isString(message.ip))
                    return "ip: string expected";
            return null;
        };

        /**
         * Creates a Member message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof daemon.Member
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {daemon.Member} Member
         */
        Member.fromObject = function fromObject(object) {
            if (object instanceof $root.daemon.Member)
                return object;
            var message = new $root.daemon.Member();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            if (object.ip != null)
                message.ip = String(object.ip);
            return message;
        };

        /**
         * Creates a plain object from a Member message. Also converts values to other types if specified.
         * @function toObject
         * @memberof daemon.Member
         * @static
         * @param {daemon.Member} message Member
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Member.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.name = "";
                object.ip = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.ip != null && message.hasOwnProperty("ip"))
                object.ip = message.ip;
            return object;
        };

        /**
         * Converts this Member to JSON.
         * @function toJSON
         * @memberof daemon.Member
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Member.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Member;
    })();

    daemon.ListMembersRequest = (function() {

        /**
         * Properties of a ListMembersRequest.
         * @memberof daemon
         * @interface IListMembersRequest
         * @property {number} [page] ListMembersRequest page
         * @property {number} [limit] ListMembersRequest limit
         */

        /**
         * Constructs a new ListMembersRequest.
         * @memberof daemon
         * @classdesc Represents a ListMembersRequest.
         * @constructor
         * @param {daemon.IListMembersRequest=} [properties] Properties to set
         */
        function ListMembersRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ListMembersRequest page.
         * @member {number}page
         * @memberof daemon.ListMembersRequest
         * @instance
         */
        ListMembersRequest.prototype.page = 0;

        /**
         * ListMembersRequest limit.
         * @member {number}limit
         * @memberof daemon.ListMembersRequest
         * @instance
         */
        ListMembersRequest.prototype.limit = 0;

        /**
         * Creates a new ListMembersRequest instance using the specified properties.
         * @function create
         * @memberof daemon.ListMembersRequest
         * @static
         * @param {daemon.IListMembersRequest=} [properties] Properties to set
         * @returns {daemon.ListMembersRequest} ListMembersRequest instance
         */
        ListMembersRequest.create = function create(properties) {
            return new ListMembersRequest(properties);
        };

        /**
         * Encodes the specified ListMembersRequest message. Does not implicitly {@link daemon.ListMembersRequest.verify|verify} messages.
         * @function encode
         * @memberof daemon.ListMembersRequest
         * @static
         * @param {daemon.IListMembersRequest} message ListMembersRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListMembersRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.page != null && message.hasOwnProperty("page"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.page);
            if (message.limit != null && message.hasOwnProperty("limit"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.limit);
            return writer;
        };

        /**
         * Encodes the specified ListMembersRequest message, length delimited. Does not implicitly {@link daemon.ListMembersRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof daemon.ListMembersRequest
         * @static
         * @param {daemon.IListMembersRequest} message ListMembersRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListMembersRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ListMembersRequest message from the specified reader or buffer.
         * @function decode
         * @memberof daemon.ListMembersRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {daemon.ListMembersRequest} ListMembersRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListMembersRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.daemon.ListMembersRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.page = reader.uint32();
                    break;
                case 2:
                    message.limit = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ListMembersRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof daemon.ListMembersRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {daemon.ListMembersRequest} ListMembersRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListMembersRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ListMembersRequest message.
         * @function verify
         * @memberof daemon.ListMembersRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ListMembersRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.page != null && message.hasOwnProperty("page"))
                if (!$util.isInteger(message.page))
                    return "page: integer expected";
            if (message.limit != null && message.hasOwnProperty("limit"))
                if (!$util.isInteger(message.limit))
                    return "limit: integer expected";
            return null;
        };

        /**
         * Creates a ListMembersRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof daemon.ListMembersRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {daemon.ListMembersRequest} ListMembersRequest
         */
        ListMembersRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.daemon.ListMembersRequest)
                return object;
            var message = new $root.daemon.ListMembersRequest();
            if (object.page != null)
                message.page = object.page >>> 0;
            if (object.limit != null)
                message.limit = object.limit >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a ListMembersRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof daemon.ListMembersRequest
         * @static
         * @param {daemon.ListMembersRequest} message ListMembersRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ListMembersRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.page = 0;
                object.limit = 0;
            }
            if (message.page != null && message.hasOwnProperty("page"))
                object.page = message.page;
            if (message.limit != null && message.hasOwnProperty("limit"))
                object.limit = message.limit;
            return object;
        };

        /**
         * Converts this ListMembersRequest to JSON.
         * @function toJSON
         * @memberof daemon.ListMembersRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ListMembersRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ListMembersRequest;
    })();

    daemon.ListMembersResponse = (function() {

        /**
         * Properties of a ListMembersResponse.
         * @memberof daemon
         * @interface IListMembersResponse
         * @property {Array.<daemon.IMember>} [members] ListMembersResponse members
         */

        /**
         * Constructs a new ListMembersResponse.
         * @memberof daemon
         * @classdesc Represents a ListMembersResponse.
         * @constructor
         * @param {daemon.IListMembersResponse=} [properties] Properties to set
         */
        function ListMembersResponse(properties) {
            this.members = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ListMembersResponse members.
         * @member {Array.<daemon.IMember>}members
         * @memberof daemon.ListMembersResponse
         * @instance
         */
        ListMembersResponse.prototype.members = $util.emptyArray;

        /**
         * Creates a new ListMembersResponse instance using the specified properties.
         * @function create
         * @memberof daemon.ListMembersResponse
         * @static
         * @param {daemon.IListMembersResponse=} [properties] Properties to set
         * @returns {daemon.ListMembersResponse} ListMembersResponse instance
         */
        ListMembersResponse.create = function create(properties) {
            return new ListMembersResponse(properties);
        };

        /**
         * Encodes the specified ListMembersResponse message. Does not implicitly {@link daemon.ListMembersResponse.verify|verify} messages.
         * @function encode
         * @memberof daemon.ListMembersResponse
         * @static
         * @param {daemon.IListMembersResponse} message ListMembersResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListMembersResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.members != null && message.members.length)
                for (var i = 0; i < message.members.length; ++i)
                    $root.daemon.Member.encode(message.members[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ListMembersResponse message, length delimited. Does not implicitly {@link daemon.ListMembersResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof daemon.ListMembersResponse
         * @static
         * @param {daemon.IListMembersResponse} message ListMembersResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListMembersResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ListMembersResponse message from the specified reader or buffer.
         * @function decode
         * @memberof daemon.ListMembersResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {daemon.ListMembersResponse} ListMembersResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListMembersResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.daemon.ListMembersResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.members && message.members.length))
                        message.members = [];
                    message.members.push($root.daemon.Member.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ListMembersResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof daemon.ListMembersResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {daemon.ListMembersResponse} ListMembersResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListMembersResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ListMembersResponse message.
         * @function verify
         * @memberof daemon.ListMembersResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ListMembersResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.members != null && message.hasOwnProperty("members")) {
                if (!Array.isArray(message.members))
                    return "members: array expected";
                for (var i = 0; i < message.members.length; ++i) {
                    var error = $root.daemon.Member.verify(message.members[i]);
                    if (error)
                        return "members." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ListMembersResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof daemon.ListMembersResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {daemon.ListMembersResponse} ListMembersResponse
         */
        ListMembersResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.daemon.ListMembersResponse)
                return object;
            var message = new $root.daemon.ListMembersResponse();
            if (object.members) {
                if (!Array.isArray(object.members))
                    throw TypeError(".daemon.ListMembersResponse.members: array expected");
                message.members = [];
                for (var i = 0; i < object.members.length; ++i) {
                    if (typeof object.members[i] !== "object")
                        throw TypeError(".daemon.ListMembersResponse.members: object expected");
                    message.members[i] = $root.daemon.Member.fromObject(object.members[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ListMembersResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof daemon.ListMembersResponse
         * @static
         * @param {daemon.ListMembersResponse} message ListMembersResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ListMembersResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.members = [];
            if (message.members && message.members.length) {
                object.members = [];
                for (var j = 0; j < message.members.length; ++j)
                    object.members[j] = $root.daemon.Member.toObject(message.members[j], options);
            }
            return object;
        };

        /**
         * Converts this ListMembersResponse to JSON.
         * @function toJSON
         * @memberof daemon.ListMembersResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ListMembersResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ListMembersResponse;
    })();

    return daemon;
})();

module.exports = $root;
