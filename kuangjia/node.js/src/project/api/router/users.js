const db = require('../db');
module.exports = {
    register:(app)=>{
        app.post('/login',(req,res)=>{
            let name = req.body.username;
            let pwd = req.body.pwd;
            db.mongodb.select('users',{name}).then((data)=>{
                if(data[0]){
                    res.send({status:true});
                }else{
                    res.send({status:false,message:'登录信息错误'});
                }
            }).catch((error)=>{
                res.send({status:false,error});
            });
        });
    }
};