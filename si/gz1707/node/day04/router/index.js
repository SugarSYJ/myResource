var express = require('express');
var bp = require('body-parser');
var path = require('path');

var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var product = require('./product');
var order = require('./order');

app.use(express.static(path.resolve(__dirname,'../')));
app.use(bp.urlencoded({extended:false}));

io.on('connection',function(client){
    client.on('scan',function(){
        io.emit('scan');
    })
    client.on('payment',function(){
        io.emit('payment');
    })
})

module.exports = {
    start:function(_port){
        product.register(app);
        order.register(app);
        
        http.listen(_port);
    }
}