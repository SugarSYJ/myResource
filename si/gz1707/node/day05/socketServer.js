var ws = require('ws');
var socketServer = new ws.Server({
    port:9090
});
socketServer.on('connection',function(client){    
    client.on('message',function(_message){
        var _messageObj = JSON.parse(_message);
        console.log(_messageObj);
        // status = 1 表示正常聊天
        _messageObj.status = 1;
        this.message = _messageObj;
        //把客户端的消息广播给所有在线的用户
        socketServer.broadCast(_messageObj);
    });
    client.on('close',function(){
        try{
            this.message = this.message || {};
            // status = 0 表示退出聊天
            this.message.status = 0;
            socketServer.broadCast(this.message);
        }catch(e){
            console.log('刷新页面');
        }
    });
});
//定义广播方法
socketServer.broadCast = function broadCast(_messageObj){
    socketServer.clients.forEach(function(item){
        item.send(JSON.stringify(_messageObj));
    });
};