const express = require('express');
const app = express();
const bp = require('body-parser');
const url = require('url');
const users = require('./users');
const products = require('./product');

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") {
      res.send(200);/*让options请求快速返回*/
    } else{
      next();
    }
});

app.use((req,res,next)=>{
    next();
    return false;
    let pathname = url.parse(req.url,true).pathname;
    if(pathname == '/login'){
        next();
    }else{
        if(req.query.name){
            next();
        }else{
            res.send({status:false,error:'unauthorized',message:"无访问权限"});
        }
    }
});

app.use(bp.urlencoded({extended:false}));
module.exports = {
    start:(_port)=>{
        users.register(app);
        products.register(app);
        app.listen(_port || 8080);
    }
}