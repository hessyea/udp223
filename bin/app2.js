
var PORT = 80;


var dgram = require('dgram');
var server = dgram.createSocket('udp4');
var HOST = server.address();
server.on('listening', function () {
    var address = server.address()+"/101";
    console.log('UDP Server listening on ' + address.address + ":" + address.port);
});

server.on('message', function (message, remote) {
    console.log(remote.address + ':' + remote.port +' - ' + message);

});

server.bind(PORT, HOST);
