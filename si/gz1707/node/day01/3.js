var http = request('http');
var url = request('url');
http.creatServer(function(request,response){
    var data = '';
    request.addListener('data',function(_data){
        data += _data;
    });
    request.addListener('end',function(){
        console.log(data)
    });
    response.end();
}).listen(3333);