var db = require('../db/db');
module.exports = {
    register:function(_app){
        _app.post('/generateorder',function(request,response){
            var newData = {total:0};
            var data = JSON.parse(request.body.data);
            data.forEach(function(item){
                newData.total += parseFloat(item.price);
            });
            newData.data = data;
            newData.type = 0;
            db.insert('order',newData,function(res){
                response.send(res);
            })
        });
        _app.get('/getorder',function(request,response){
            var id = db.parseObjectID(request.query.id);
            db.select('order',{"_id":id},function(res){
                response.send(res);
            })
        });
        _app.post('/editorder',function(request,response){
            var id = db.parseObjectID(request.body.id);
            db.update('order',{"_id":id},{type:1},function(_res){
                response.send(_res);
            })
        })
    }
};