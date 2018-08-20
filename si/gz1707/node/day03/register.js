var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(express.static(__dirname + '/'));
app.use(bodyParser.urlencoded({express:false}));
app.post('/register',function(req,res){
    //req.body => email exists db ? error : insert db
    //db => mysql || mongodb
    //服务端语言 connect db : mysql mongodb 
    //vue => nodejs + mongodb
    //react angular => php + mysql
    //oracle mysql sqlserver mongodb
    //mariadb vs mongodb
    //关系型数据库
    // nosql db
    res.writeHead(200,{ "Content-Type":"application/json;charset=utf-8"});
    res.write(JSON.stringify(req.body));
    res.end();
});
app.listen(3333);