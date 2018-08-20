const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer((request,response)=>{
    let urlObj = url.parse(request.url,true);
    let pathname = urlObj.pathname;
    //路由 => 通过 url 映射到不同的功能实现
    
    //路由映射规则
    // let router = [
    //     {reg:/\*.html/,event:function(_fileName){
    //         let _html1 = fs.readFileSync(_fileName);
    //         response.end(_html1);
    //     }}
    // ]
    // for(let item of router){
    //     if(item.reg.test(pathname)){
    //         item.event(pathnae.replace('/',''));
    //     }
    // }
    switch(pathname){
        case '/2.html':
            let _html1 = fs.readFileSync('2.html');
            response.end(_html1);
            break;
        case '/2':
            let _html2 = fs.readFileSync('2.html');
            let _js = readFileSync('2.js');
            // response.write(_html2);
            // response.write(_js);
            response.end(_html2);
            break;
        case '/3.txt':
            fs.readFile('3.txt',(err,data)=>{
                response.end(data);
            });
            break;
        case '/3':
            fs.readFile('3.txt',(err,data)=>{
                response.end(data);
            });
            break;
        case '/4':
            let img = fs.readFileSync('001.jpg');
            response.write(img);
            response.end('1');
            break;
        default:
            response.end('request error');
            break;
    }
    // console.log(urlObj);
}).listen(8080);