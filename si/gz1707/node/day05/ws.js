var ws = require('ws');
var socketServer = new ws.Server({
    port:1010
});
socketServer.on('connection',function(client){
    client.send('hello,酷狗');
    client.on('close',function(){
        // console.log('挂了');
        broadcast('他挂了');
    })
    client.on('message',function(_message){
        console.log('_message');
        client.send('xixi');
        broadcast(_message);
    });
});
function broadcast(_message){
    socketServer.clients.forEach(function(item){
        item.send(_message);
    })
}