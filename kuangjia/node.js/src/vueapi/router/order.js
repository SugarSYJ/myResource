const filter = require('../utils/filter');
const db = require('../db');
module.exports = {
    register(app){
        app.post('/generateorder',(req,res)=>{
            let pros = JSON.parse(req.body.pros);
            // console.log(pros);
            let total = 0;
            for(let item of pros){
                total += item.price;
            }
            let order = {
                orderno:parseInt(Math.random()*1000000),
                total,
                status:0,
                products:pros
            }
            db.mongodb.insert('order',order).then((result)=>{
                res.send(result);
            });
        });
        // app.get('/getorder',(req,res)=>{
        //     // console.log(req.query.orderno);
        //     var orderno = req.query.orderno;
        //     db.mongodb.select('order',orderno).then((result)=>{
        //         res.send(result);
        //     });
        // });
        // app.post('/editorder',(req,res)=>{
        //     var orderno = req.query.orderno;
        //     db.mongodb.update('order',{"orderno":orderno},{status:1},(_res)=>{
        //         res.send(_res);
        //     });
        // });
    }
};