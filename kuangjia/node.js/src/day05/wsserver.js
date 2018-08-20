const Wsserver = require('ws').Server;
const wss = new Wsserver({
    port:8080
});
wss.on('connection',(client)=>{
    console.log('有人上线了');
    client.on('close',()=>{
        console.log('有人下线了');
    });
    client.on('message',(mess)=>{
        console.log(mess);
        wss.clients.forEach((item)=>{
            item.send(mess);
        });
    });
});