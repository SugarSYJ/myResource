getUrlParams = function (name) {
    var r = window.location.search.substr(1);
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    r = r.match(reg);
    if (r != null) {
        return decodeURI(r[2]);
    }
    return null;
}