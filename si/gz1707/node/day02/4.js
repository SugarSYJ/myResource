function FunA(){
    console.log('funa');
}
var obj = {
    name:'sugar',
    age:22
}
// module.exports = FunA;
// module.exports = obj;

module.exports = {
    a:FunA,
    b:obj
}

// exports.a = FunA;
// exports.b = obj;