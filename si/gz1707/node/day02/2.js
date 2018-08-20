// var fs = require('fs');
// fs.readFile('1.txt',function(error,data){
//     if(error){
//         console.log(error);
//     }else{
//         console.log(data);
//     }
// });
// 
// 
// var fs = require('fs');
// var url = require('url');
// var http = require('http');
// http.createServer(function(request,response){
//     var pathname = url.parse(request.url).pathname;
//     switch(pathname){
//         case '/img':
//             fs.writeFile('1.txt','愿世界和平',function(){
//                 fs.readFile('1.txt',function(error,data){
//                     if(error){
//                         // console.log(error);
//                     }else{
//                         // console.log(data);
//                         response.write(data);
//                         response.end();
//                     }
//                 });
//             })
//             break;
//         default:
//             response.write('error');
//             response.end();
//     }
// }).listen(3333);
// 
// 
var fs = require('fs');
var url = require('url');
var http = require('http');
http.createServer(function(request,response){
    var pathname = url.parse(request.url).pathname;
    switch(pathname){
        case '/text':
            response.writeHead(200,{"Content-Type":"text/plain;charset=utf-8"});
            fs.writeFile('1.txt','愿世界和平',function(){
                fs.readFile('1.txt',function(error,data){
                    response.write(data);
                    response.end();
                });
            })
            break;
        case '/img':
            var img = fs.readFileSync('001.jpg','binary');
            response.writeHead(200,{"Content-Type":"image/jpeg"});
            response.write(img,'binary');
            response.end();
            break;
        case '/1.html':
            var html = fs.readFileSync('1.html');
            response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
            response.write(html);
            response.end();
            break;
        default:
            response.write('error');
            response.end();
    }
}).listen(3333);