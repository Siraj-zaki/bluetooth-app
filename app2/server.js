const WebSocket = require('websocket').server;

const server = new WebSocket({
    httpServer: require('./app').listen(3000)
});

// Listen for connection
server.on('connection', socket => {

    // Listen for audio data
    socket.on('message', data => {

        // Broadcast data to all clients
        server.clients.forEach(client => {
            client.send(data);
        });

    });

});