var db = require('../db/db');
module.exports = {
    register:function(_app){
        _app.post('/saveproduct',function(request,response){
            db.insert('product',request.body,function(res){
                response.send(res);
            });
        });
        _app.post('/deleteproduct',function(request,response){

        });
        _app.get('/getproduct',function(request,response){
            db.select('product',request.query,function(res){
                response.send(res);
            })
        });
    }
};