

var obj = { "username": "admin", "password": "123456" };
//判断 url 参数有没有 callback
var urlParams = getUrlParams();
console.log(urlParams);
if (urlParams.callback1) {
    //urlParams.callback1(obj);
}