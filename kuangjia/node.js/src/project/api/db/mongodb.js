const mongo = require('mongodb');
const client = mongo.MongoClient;
const ObjectID = mongo.ObjectID;
let db;

client.connect('mongodb://10.3.131.232:27017/a1708',(_error,_db)=>{
    if(_error){
        console.error(_error);
        return false;
    }
    db = _db;
});
module.exports = {
    select:(_collection,_condition)=>{
        if(db){
            return new Promise((resolve,reject)=>{
                db.db('a1708').collection(_collection).find(_condition || {}).toArray((_error,_data)=>{
                    if(_error){
                        reject(_error);
                    }else{
                        resolve(_data);
                    }
                });
            });
        }
    },
    update:(_collection,_condition)=>{
        return new Promise((resolve,reject)=>{
            db.db('a1708').collection(_collection).update(_condition)
        });
    },
    insert:(_collection,_data)=>{
        return new Promise((resolve,reject)=>{
            db.db('a1708').collection(_collection).insert(_data).then((result,error)=>{
                resolve(result);
            });1
        });
    },
    delete:(_collection,_condition)=>{
        return new Promise((resolve,reject)=>{
            db.db('a1708').collection(_collection).remove(_condition).then((result,error)=>{
                resolve(result);
            });
        });
    },
    objectid:(_id)=>{
        return _id ? ObjectID(_id) : new ObjectID();
    }
}