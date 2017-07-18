const grpc = require('grpc')
const net = require('net')

const PROTO_PATH = __dirname + '/../proto/party.proto'
const pb = grpc.load(PROTO_PATH).partycloud

// const sock = '/Users/dave/Library/Application Support/Partycloud/Tray/party.sock'

const client = new pb.PCDaemon('localhost:50051', grpc.credentials.createInsecure());

const call = client.events()
call.on('data', function(e) {
  console.log('got', e)
});
call.on('end', function() {
  console.log('end')
});
call.on('status', function(status) {
  console.log('status', status)
});
call.write({ type: 'yo' })

console.log('send')
