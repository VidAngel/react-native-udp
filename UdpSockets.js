
/**
 * @providesModule UdpSockets
 * @flow
 */
global.Buffer = global.Buffer || require('buffer').Buffer
var UdpSocket = require('./UdpSocket');

exports.createSocket = function(options) {
  if (typeof options === 'string') options = { type: options }
  return new UdpSocket(options)
}

exports.Socket = UdpSocket;
