// Load required modules
var http    = require("http");              // http server core module
var express = require("express");           // web framework external module
var io      = require("socket.io");         // web socket external module
var easyrtc = require("easyrtc");           // EasyRTC external module

// Setup and configure Express http server. Expect a subfolder called "static" to be the web root.
var httpApp = express();
httpApp.use(express.static(__dirname + "/static/"));

// Start Express http server on port 8080
var webServer = http.createServer(httpApp).listen(8080);

// Start Socket.io so it attaches itself to Express server
var socketServer = io.listen(webServer, {"log level":1});

function auth(handshakeData, callback) {
  console.log('Got a socket.io authentication call');
  if (!handshakeData || !handshakeData.query || !handshakeData.query.token) {
    return callback(new Error('Token not found'));
  }

  if (handshakeData.query.token !== '123') {
    return callback(null, false);
  }
  return callback(null, true);
}

socketServer.configure(function() {
  socketServer.set('authorization', auth);
});

// Start EasyRTC server
var rtc = easyrtc.listen(httpApp, socketServer);
