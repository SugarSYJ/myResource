const http = require('http');
const qs = require('querystring');
http.createServer((request,response)=>{
    var params = '';
    request.on('data',(_data)=>{
        console.log(_data);
        params += _data;
    });
    request.on('end',()=>{
        console.log(params);
        var obj = qs.parse(params);
        console.log(obj);
        response.end(params);
    });
}).listen(8080);