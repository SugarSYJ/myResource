var http = require('http');
var url = require('url');
http.createServer(function(request,response){
    var urlObj = url.parse(request.url,true);
    var username = urlObj.query.username;
    var age = urlObj.query.age;
    var type = urlObj.query.type;
    var data = {};
    switch(type){
        case 'product':
        //从数据库表 product 读取数据 => data => select * from product
        case 'order'
        //data => select * from order
    }
    response.write('data');
    console.log(urlObj);
    response.end();
}).listen(3333);