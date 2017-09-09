import * as React from 'react';
import { Link } from 'react-router-dom';

let styles = require('./Home.scss');
// const grpc = require('grpc')
// const net = require('net')
//
// const PROTO_PATH = __dirname + '/../proto/daemon.proto'
// const pb = grpc.load(PROTO_PATH).daemon
//
// // const sock = '/Users/dave/Library/Application Support/Partycloud/Data/party.sock'
//
// console.log(pb)
// console.log(process.argv)
// const addr = new URLSearchParams(window.location.search).get('--gui-addr')
// const client = new pb.Daemon(addr, grpc.credentials.createInsecure());
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

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <h2>Servers</h2>
          
          <Link to="/counter">to Counter</Link>
        </div>
      </div>
    );
  }
}
