var http = require('http');
var url = require('url');
http.createServer(function(request,response){
    var urlString = request.url;
    var urlObj = url.parse(urlString,true);
    var type = urlObj.query.type;
    var data = {};
    console.log(urlObj);
    switch(urlObj.pathname){
        case '/product':
            var proid = urlObj.query.id;
            // select * from product where productid = proid;
            data = {name: 'product'};
            break;
        case '/order':
            var orderid = urlObj.query.id;
            // select * from order where orderid = orderid;
            data = {name: 'order'};
            break;
        default:
            data = {name: 'error'};
    }
    response.write(JSON.stringify(data))
    response.end()
}).listen(3333);