const server = require('http').createServer();

const io = require('socket.io')(server, {
  transports: ['websocket', 'polling'],
});

server.listen(3000);
