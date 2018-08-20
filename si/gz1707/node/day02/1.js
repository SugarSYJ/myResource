var http = require('http');
var url = require('url');
var qs = require('querystring');
http.createServer(function(request,response){
    var data = '';
    request.addListener('data',function(_data){
        console.log('data-' + data);
        data += _data;
    });
    request.addListener('end',function(){
        console.log('end-' + data);
        console.log(qs.parse(data));
    });
    response.end();
}).listen(3333);