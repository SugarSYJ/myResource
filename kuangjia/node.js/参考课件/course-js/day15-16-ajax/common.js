/************
    定义设置 cookie 方法
    参数:name【cookie 名】,  value【cookie 的值】,   time【cookie 的有效时间(用分钟为单位)】
************/
function setCookie(name, value, time) {
    var _expires = new Date();
    if (time > 0) {
        _expires.setMinutes(_expires.getMinutes() + time);
    } else {
        _expires.setYear(_expires.getFullYear() + time);
    }
    document.cookie = name + '=' + value + ';path=;expires=' + _expires;
}

/************
    定义获取 cookie 方法
    参数:
    返回值(数组对像)：var _array = [{"name": "name1", "value": "value1"}, {"name": "name2", "value": "value2"}]
************/
function getCookie() {
    //定义要返回的结果
    var result = [];
    //"name1=value1;name2=value2"
    var _cookie = document.cookie;
    if (!_cookie) {
        return result;
    }
    //将字符串分隔成字符串数组
    //["name1=value1", "name2=value2"]
    var cookieArray = _cookie.split(';');
    //如果 cookie 数组为空，返回一个空数组
    if (cookieArray.length < 1) {
        return result;
    }
    //遍历 cookie 数组
    for (var i = 0; i < cookieArray.length; i++) {
        //"name1=value1" "name2=value2"
        var _str = cookieArray[i];
        //["name1", "value1"] ["name2", "value2"]
        var _strArray = _str.split('=');
        //{"name": "name1", "value": "value1"} {"name": "name2", "value": "value2"}
        var _obj = { "name": _strArray[0], "value": _strArray[1] };
        result.push(_obj);
    }
    return result;
}

/************
    定义删除 cookie 方法
    参数:
    返回值(数组对像)：{ "total": 0, "delcount": 0}(total：cookie 的总数量；delcount: cookie 被删除的数量);
************/
function delCookie(){
    //获取 cookie
    var cookies = getCookie();

    //console.log(cookie);
    //如果 cookie 为空则返回对应的对像结果
    if (cookies.length < 1) {
        return { "total": 0, "delcount": 0};
    }
    //删除 cookie 的数量
    var _delcount = 0
    for (var i = 0; i < cookies.length; i++) {
        //获取数组当中的 cookie
        var cookie = cookies[i];
        //设置对应 cookie 失效
        setCookie(cookie.name, cookie.value, -1);
        _delcount++;
    }
    return { "total": cookies.length, "delcount": _delcount };
}

//参数
/*
{
    "url": "api",
    "method": "get|post"，
    "async": bool,
    "success": function(json object){},
    "fail": function(){}
}
*/

function ajax(_json) {
    //创建 ajax 对像
    var xhr = new XMLHttpRequest();
    //监听事件
    xhr.onreadystatechange = function () {
        if (xhr.status == 200 && xhr.readyState == 4) {
            //获取响应信息;
            var _response = xhr.responseText;
            //如果 api 结果为空则返回一个空对像
            if (!_response) {
                _json.success(null);
            } else if (typeof _response == 'string') { //如果 api 结果类型为字符串，则将字符串格式化为对像回传到 success
                _json.success(JSON.parse(_response));
            } else {//如果 api 结果类型为对像，直接将对像回传到 success
                _json.success(_response);
            }
        } else if (xhr.readyState == 4 && xhr.status != 200 && xhr.status != 302 && xhr.status != 304) {
            _json.fail(xhr.status);
        }
    }
    //发起请求
    xhr.open(_json.method, _json.url, _json.async);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send();
}