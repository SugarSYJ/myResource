module.exports = {
    register:function(_pathname,_request,_response){
        // connect to db => select * from product
        let result = [{id:1,proname:'iponex'}];
        _response.end(JSON.stringify(result));
    }
}