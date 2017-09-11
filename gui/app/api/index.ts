import * as jspb from "google-protobuf";
import { Code, grpc, Metadata } from "grpc-web-client";
import {
    ListServersRequest,
    ListServersResponse,
    StartServerRequest,
    StartServerResponse,
} from "../pb/daemon_pb";
import { Daemon } from "../pb/daemon_pb_service";


const addr = new URLSearchParams(window.location.search).get('--gui-addr');
const host = `http://${addr}`;

export function apiCall<TRequest extends jspb.Message, TResponse extends jspb.Message, M extends grpc.MethodDefinition<TRequest, TResponse>>(methodDescriptor: M, request: TRequest): Promise<any> {
    return new Promise((resolve, reject) => {
        apiStream(methodDescriptor, request, (err, message) => {
            if (!err) {
                resolve(message);
            } else {
                reject(err)
            }
        })
    });
}

export function apiStream<TRequest extends jspb.Message, TResponse extends jspb.Message, M extends grpc.MethodDefinition<TRequest, TResponse>>(
        methodDescriptor: M,
        request: TRequest,
        callback: (error?: any, msg?: TResponse) => void
    ): void {
    grpc.invoke(methodDescriptor, {
        request,
        host,
        onMessage: (message: TResponse) => {
            callback(null, message);
        },
        onEnd: (code: Code, msg: string | undefined, trailers: Metadata) => {
            if (code !== Code.OK) {
                console.log("api error", code, msg, trailers);
                callback({code, msg, trailers});
            }
        }
    })
}

export function fetchServers(request: ListServersRequest): Promise<ListServersResponse> {
    return apiCall(Daemon.ListServers, request)
}

export function startServer(request: StartServerRequest): Promise<StartServerResponse> {
    return apiCall(Daemon.StartServer, request)
}

