var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.use(express.static(__dirname + '/node_modules'));
app.get('/', function (req, res, next) {
    res.send("Welcome to the DC world");
});


io.sockets.on('connection', function (socket) {
    console.log('new connection' + socket.id);
});

var port = process.env.PORT || 4200;
server.listen(port);
console.log("server running at %d", port);