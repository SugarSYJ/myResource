const express = require('express');
const path = require('path');
const app = express();
const user = require('./user');
const upload = require('./upload');
// const upload = require('./uploadfile');

module.exports = {
    start:(_port)=>{
        app.use(express.static(path.join(path.resolve(__dirname,'../'),'/')));
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
        user.register(app);
        upload.register(app);

        // app.get('/login',(req.res)=>{
        //     res.send('get login');
        // });

        app.get('/',(req,res)=>{
            res.send('get root');
        });

        app.listen(_port,()=>{
            console.log(`running on http://localhost:${_port}`);
        });
    }
}