var common = common || {};
common.baseUrl = 'http://10.3.131.232:8080/';

common.loading = {
    // show(){
    //     if($(''))
    // }

}

common.http = {
    get(_api,_params,_cb){
        // show up loading
        _api = _api.startsWith('http') ? _api : common.baseUrl + _api;
        $.get(_api,_params || {},function(res){
            if(!res.status && res.error == 'unauthorized'){
                location.href = 'login.html';
            }else{
                _cb(res);
            }
        });
        // hide loading
    },
    post(_api,_params,_cb){
        // show up loading
        _api = _api.startsWith('http') ? _api : common.baseUrl + _api;
        $.post(_api,_params || {},function(res){
            if(!res.status && res.error == 'unauthorized'){
                location.href = 'login.html';
            }else{
                _cb(res);
            }
        });
        // hide loading
    }
}