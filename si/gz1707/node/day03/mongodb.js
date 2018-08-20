var mongodb = require('mongodb');
var mongoClient = mongodb.MongoClient;

// var _id = new mongodb.ObjectID()
mongoClient.connect("mongodb://127.0.0.1:27017/aaa", function(_error, _db){
    if(_error){
        console.log('connection error');
        console.log(_error);
    } else {
        console.log('connection success');
    }

    var userCollection = _db.db('aaa').collection('user');
    userCollection.insert({name:"hahah", age:53},function(_error, _result){
        if(_error){
            console.log('connection error');
            console.log(_error);            
        } else {
            console.log('insert success');
            console.log(_result);
        }
    })
    // userCollection.update()
})