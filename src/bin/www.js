// let app = require('express')();
// let http = require('http').Server(app);
// let io = require('socket.io')(http);

// io.on('connection', (socket) => {

//     // log whenever a user connects
//     console.log('user disconnected');

//     // log whenever a client disconnection from our websocket server
//     socket.on('disconnect', function() {
//         console.log('user disconnected');
//     });

//     // When we receive a 'message' event from our client, print out
//     socket.on('message', (message) => {
//         console.log('Message Received: ' + message);
//         io.emit('message', {type: 'new-message', text: message});
//     });
// });

// // Initialize our websocket server on port 5000
// http.listen(5000, () => {
//     console.log('started on port 5000');
// });

/**
 * Module dependencies.
 */

var app = require('../app.js');
var debug = require('debug')('angular2-nodejs:server');
var http = require('http');

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);

var io = require('socket.io').listen(server);

io.on('connection',(socket)=>{

    console.log('new connection made.');

    socket.on('message',function(data){
      io.in(data.user).emit('new_message', {user:data.user, message:data.message, message: data.img});
      console.log('new_message', {user:data.user, message:data.message, message: data.img});
    })
});

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
