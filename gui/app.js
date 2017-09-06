const grpc = require('grpc')
const net = require('net')

const PROTO_PATH = __dirname + '/../proto/daemon.proto'
const pb = grpc.load(PROTO_PATH).daemon

// const sock = '/Users/dave/Library/Application Support/Partycloud/Data/party.sock'

console.log(pb)
console.log(process.argv)

const client = new pb.Daemon('localhost:38387', grpc.credentials.createInsecure());

// const call = client.events()
// call.on('data', function(e) {
//   console.log('got', e)
// });
// call.on('end', function() {
//   console.log('end')
// });
// call.on('status', function(status) {
//   console.log('status', status)
// });
// call.write({ type: 'yo' })
//
// console.log('send')
