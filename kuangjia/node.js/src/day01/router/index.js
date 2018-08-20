const http = require('http');
const url = require('url');

module.exports = {
    start:function(_port){
        http.createServer((req,res)=>{
            let urlObj = url.parse(req.url,true);
            let pathname = urlObj.pathname;
            res.end('123');
        }).listen(_port);
    }
}