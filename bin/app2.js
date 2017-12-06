
var PORT = 80;
var os = require("os");
var HOST = os.hostname();

var dgram = require('dgram');
var server = dgram.createSocket('udp4');

server.on('listening', function () {
    console.log('UDP Server listening on ' + address.address + ":" + address.port);
});

server.on('message', function (message, remote) {
    console.log(remote.address + ':' + remote.port +' - ' + message);

});

server.bind(PORT, HOST);
