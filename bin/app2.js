var io = require('socket.io')();
io.on('connection', function(client){});
io.listen(process.env.PORT);
