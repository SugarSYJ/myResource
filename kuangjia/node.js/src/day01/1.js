var http = require('http');
var url = require('url');
http.createServer((request,response)=>{
    var obj = url.parse(request.url,true);
    console.log(obj);
    var username = obj.query.username;
    var pwd = obj.query.pwd;
    // connect db
    if(1===1){
        response.end('{status:false,message error}');
    }else{
        response.end('{status:true,');
    }
    // response.end('123');
}).listen(8080);