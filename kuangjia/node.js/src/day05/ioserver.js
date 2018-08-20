var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
http.listen(88);

io.on('connection',(client)=>{
    console.log('有人上线了');
    client.on('a',(args)=>{
        console.log(args);
        client.emit('b');
    });
    client.emit('a');
    client.on('dkmess',(_mess)=>{
        console.log(_mess);
    });
});