module.exports = function(server) {
    var io = require("socket.io")(server);

    // New socket connection
    io.sockets.on("connection", function(socket) {
        console.log('socket')
    });
} 