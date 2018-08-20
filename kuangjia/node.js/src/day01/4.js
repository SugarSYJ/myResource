function FunA(){
    console.log('function a');
}
function FunB(){
    console.log('function b');
}
// module.exports = FunA;
// module.exports = FunB;
module.exports = {
    FunA,
    FunB
}
// exports.FunA = FunA;
// exports.FunB = FunB;