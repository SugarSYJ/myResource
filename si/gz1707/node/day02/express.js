// var http = require('http');
// var url = require('url');

// http.createServer(function(request, response){
//     var urlObj = url.parse(request.url, true);
//     switch(urlObj.pathname){
//         case '/1.html':
//             response.sendFile(__dirname + '/' + '1.html');
//             break;
//         case '/img':
//             break;
//         case '/product':
//             response.write("[{}, {}]");
//             break;
//         case '/order':
//             response.write("[{}, {}]");
//             break;
//     }
//     response.end();
// }).listen(3333)

// $.get('http://localhost:3333/order', function(res){
    
// })
// -----------------------

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
//全局过滤器 || 全局拦截器
app.use('*',function(response,request,next){
    console.log('global');
    next();
})
app.use(bodyParser.urlencoded({extended:false}));
app.get('/',function(request,response){
    response.write('root');
    response.end();
})
//私有过滤器 || 私有拦截器 || 局部
var filter = function(request,response,next){
    console.log(1);
    if('login'){
        next();
    }else{
        next('没有登录');
    }
}
app.get('/product',function(request,response){
    response.write("product");
    response.end();
})
app.get('/order',function(request,response){
    console.log(request.query);
    response.send({name:'sam',age:22});
})
app.post('/register',function(request,response){
    // response.write("register");
    response.send(request.body);
})
// app.get('/1.html',function(request,response){
//     console.log(__dirname);
//     response.sendFile(__dirname + '/' + '1.html');
// })
// app.get('/001.jpg',function(request,response){
//     console.log(__dirname);
//     response.sendFile(__dirname + '/img' + '001.jpg');
// })
app.use(express.static(__dirname + '/'));
app.listen(3333);