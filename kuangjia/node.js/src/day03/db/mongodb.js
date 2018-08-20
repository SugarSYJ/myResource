const mongodb = require('mongodb');
const client = mongodb.MongoClient;
var db = null;

client.connect('mongodb://127.0.0.1:27017/a1708',(_error,_db)=>{
    if(_error){
        console.log(_error);
        return false;
    }
    db = _db;
});
module.exports = {
    select:(_collection,_condition,_cb)=>{
        if(db){
            db.db('a1708').collection(_collection).find(_condition || {}).toArray((_error,_data)=>{
                _cb({status:_error ? false : true,error:_error,data:_data});
            });
        }
    },
    // selectPromise:(_collection,_condition)=>{
    //     return new Promise((resolve,reject)=>{
    //         db.db('a1708').collection(_collection).find(_condition || {}).toArray((_error,_data)=>{
    //             let result = {status:_error ? false : true,error:_error,data:_data};
    //             if(_error){
    //                 reject(result);
    //             }else{
    //                 resolve(result);
    //             }
    //         });
    //     })
    // },
    update:()=>{},
    insert:()=>{},
    delete:()=>{}
}