import {Http} from '@angular/http'
import HttpClient from './httpclient'
import {Injectable} from '@angular/core'

@Injectable()
export default class Common{
    hc: HttpClient;
    dictionary: Object = {};
    lanType: string = 'en';

    constructor(private http: Http){
        this.hc = new HttpClient(this.http);
        this.hc.get(`dictionary.txt`).then((res) => {
			this.dictionary = res;
		})
    }

    getDictionary(f){
        return this.dictionary[this.lanType] && this.dictionary[this.lanType][f]  ?  this.dictionary[this.lanType][f] : f;
    }
}