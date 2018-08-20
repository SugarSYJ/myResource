//设置 cookie
function setCookie(key, value, minutes) {
    var expires = new Date();
    if (minutes > 0) {
        expires.setMinutes(minutes);
    } else {
        expires.setYear(-1);
    }
    document.cookie = key + '=' + value + ';path=;expires=' + expires;
}

//[{"key1": "value1"}, {"key2": "value2"}]
function getCookie(key) {
    var cookies = document.cookie;
    if (!cookies) {
        return null;
    }
    console.log(cookies);
    //["key1=value1","key2=value2"]
    var cookeiArray = cookies.split(';');
    //定义要返回的数组
    var result = [];
    for (var i = 0; i < cookeiArray.length; i++) {
        //0:["key1", "value1"]
        //1:["key2", "value2"]
        var _keys = cookeiArray[i].split('=');
        //0:{"key1": "value1"}
        //1:{"key2": "value2"}
        var _obj = { key: _keys[0], value: _keys[1] };
        //参数不为空（keyname）
        //if (key) {
        //    return [_obj];
        //} else {
            result.push(_obj);
        //}
    }
    return result;
}


//删除
function removeCookie(key) {
    //获取cookie
    var _cookie = getCookie(key);
    if (_cookie && _cookie.length > 0) {
        for (var i = 0; i < _cookie.length; i++) {
            if (!key) {
                setCookie(_cookie[i].key, _cookie[i].value, -1);
            } else if (key == _cookie[i].key) {
                setCookie(_cookie[i].key, _cookie[i].value, -1);
                break;
            }
        }
    }
}