import {RequestOptions, RequestMethod, Http} from '@angular/http'
import {Injectable} from '@angular/core'

@Injectable()
export default class HttpClient{
    constructor(private http: Http){}


    private baseUrl = 'http://localhost:4200/assets/config/';

    urlFilter(_url){
        if(_url && _url.startsWith('http')){
            return _url;
        }
        return this.baseUrl + _url;
    }
    
    get(_url = '', _params = {}){
        _params['_r'] = Math.random();
        let url = this.urlFilter(_url);
        return new Promise((reslove, reject) => {  
            this.http.request(url, new RequestOptions({
                method: RequestMethod.Get,
                search: _params
            })).subscribe((_res) => {
				reslove(_res.json());
            })	
        })
        
    }
}


// export {}
// export default {}

// //a.js
// module.exports = function(){}

// const f = require('./a.js') => f()

// export default () => {}

// import f from './a.js' => f()

// //a.js

// exports.f = function(){}

// const f = require('./a.js') => {f: function(){}} => f.f()

// export function increment(){}

// import f from './a.js' = f.increment
// import {increment} from './a.js' => increment()