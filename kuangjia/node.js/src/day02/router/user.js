const bp = require('body-parser');
const bparser = bp.urlencoded({extended:false});
module.exports = {
    register:(app)=>{
        app.get('/login',(req,res)=>{
            let sql = `select * from user where username = ${req.query.username} and pwd = ${req.query.pwd}`;
            //...操作数据
            let result = req.query.username == 'admin' && req.query.pwd == 'admin';
            if(result){
                res.send({status:true});
            }else{
                res.send({status:false,message:'用户名密码不正确'});
            }
        });
        app.post('/login',bparser,(req,res)=>{
            res.send(req.body);
        });
    }
}