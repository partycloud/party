import { actionCreator, actionCreatorVoid } from './helpers';
import { daemon as pb } from '../pb/daemon';
import { RPCImpl }  from "protobufjs";
// import * as net from "net";

export const create = actionCreatorVoid('SERVERS_CREATE');
export const requestServers = actionCreatorVoid('SERVERS_REQUEST');
export const receiveServers = actionCreator<pb.IServer[]>('SERVERS_RECEIVE');

const grpc = require('grpc');
const PROTO_PATH = __dirname + '/../proto/daemon.proto'
//
// // const sock = '/Users/dave/Library/Application Support/Partycloud/Data/party.sock'
//
console.log(process.argv)
const addr = new URLSearchParams(window.location.search).get('--gui-addr')
const _client = new grpc.load(PROTO_PATH).daemon.Daemon(addr, grpc.credentials.createInsecure());
//
// // const call = client.events()
// // call.on('data', function(e) {
// //   console.log('got', e)
// // });
// // call.on('end', function() {
// //   console.log('end')
// // });
// // call.on('status', function(status) {
// //   console.log('status', status)
// // });
// // call.write({ type: 'yo' })
// //
// // console.log('send')

function createRpcClient() : RPCImpl {
  return async function(method, requestData, callback) {
    console.log({method, requestData})
    const resp = await _client.listServers()
    console.log({resp})
    callback(null, pb.ListServersResponse.encodeDelimited({
      servers: [],
    }).finish());
  }
}



const client = pb.Daemon.create(createRpcClient(), true, true);

export function fetchServers() {
  return async (dispatch: Function) => {
    dispatch(requestServers())
    const servers = await client.listServers({})
    dispatch(receiveServers(servers.servers));
  };
}
