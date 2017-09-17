import * as jspb from "google-protobuf";
import { Code, grpc, Metadata } from "grpc-web-client";


const addr = new URLSearchParams(window.location.search).get('--daemon-addr');
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


