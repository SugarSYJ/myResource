const db = require('../db');
module.exports = {
    register:(app)=>{
        app.get('/getusers',(req,res)=>{
            let cb = (data)=>{
                res.send(data);
            }
            let data = db.mongodb.select('users',{name:"Tom"},cb);
            // db.mongodb.selectPromise('users',{name:"Tom"}).then((data)=>{
            //     res.send(data);
            // });
        });
    }
}