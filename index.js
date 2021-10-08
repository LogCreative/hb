const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    username = ""
    socket.on('username', (usrname) => {
        username = usrname;
        console.log(username,' 已连接');
    })
    socket.on('disconnect', () => {
        console.log(username,' 已离开');
    });
    socket.on('chat message', (msg) => {
        io.emit('chat message', {username, msg});
    });
    socket.on('wish message', (msg) => {
        io.emit('wish message', {username, msg});
    });
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});