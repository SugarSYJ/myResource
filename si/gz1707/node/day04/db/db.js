var mongodb = require('mongodb');
var mongoClient = mongodb.MongoClient;
var db;

mongoClient.connect("mongodb://192.168.191.1:27017/sugar",function(_error,_db){
    if(_error){
        console.log(_error);
    }else{
        db = _db;
    }
});
module.exports = {
    insert:function(_collectionName,_data,_callback){
        var currentCollection = db.db('sugar').collection(_collectionName);
        currentCollection.insert(_data,function(_error,_result){
            if(_error){
                _callback({status:false,error:_error});
            }else{
                _callback({status:true,data:_result});
            }
        })
    },
    delete: function(){},
    select: function(_collectionName,_condition,_callback){
        db.db('sugar').collection(_collectionName).find(_condition || {}).toArray(function(_error,_data){
            if(_error){
                _callback({status:false,error:_error});
            }else{
                _callback({status:true,data:_data});
            }
        });
    },
    update: function(_collectionName,_query,_data,_callback){
        db.db('sugar').collection(_collectionName).update(_query,{$set:_data}).then(function(res){
            _callback(res);
        })
    },
    parseObjectID:function(_id){
        return mongodb.ObjectID(_id);
    }
}