import { Component, OnInit, Input } from '@angular/core';
import {Http} from '@angular/http'
import HCSerivce from '../../utils/httpclient'
import CommonService from '../../utils/common'

@Component({
	selector: 'datagrid',
	templateUrl: './datagrid.component.html',
	styleUrls: ['./datagrid.component.css', '../../../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class DatagridComponent implements OnInit {
	@Input() config;
	@Input() lanType;

	configObj: Object = {};
	dataset: Array<any> = [];
	columns: Array<string> = [];
	chosenids: Array<any> = [];
	dictionary: Object = {};


	constructor(private http: HCSerivce, private common: CommonService) {
		// this.dictionary = common.dictionary;
	 }

	ngOnInit() {
		this.http.get(`${this.config}.txt`).then((_config) => {
			this.configObj = _config
			this.columns = this.configObj['cols'].split(',')
			this.http.get(this.configObj['url']).then((_res) => {
				this.dataset = _res['data'];
			})	
		});
		// const _common = new Common(this.http);
		// this.dictionary = _common.dictionary
	}

	getKeys(item = {}): Array<any>{
		return Object.keys(item)
	}

	dataFilter(key, val){
		//(this.config.colAttribute[key] => 'loginname'
		//cols: 'title,last_reply_at,top,reply_count,visit_count,create_at,loginname,avatar_url',
		// columns =cols.split(',')
		//val => {loginname: "aojiaotage", avatar_url: "https://avatars3.githubusercontent.com/u/8339316?v=4&s=120"}
		if(this.configObj['colAttributes']){
			// avatar_url: {
			// 	datasource: 'author',
			// 	value: 'avatar_url'
			//   }
			let colItem = this.configObj['colAttributes'][key];
			if(colItem){
				return val[colItem.datasource][colItem.value];
			} else {
				return val[key];
			}
			// for(let _key in this.config.colAttributes){
				
			// 	if(colItem.datasource && colItem.value == key){
			// 		console.log(val[colItem.datasource], colItem.value)
					
			// 	} else {
					
			// 	}
			// }
		} else {
			return val[key];
		}
	}

	selectTr(item){
		if(item){
			if(this.configObj['multiple']){
				if(this.chosenids.indexOf(item.id) > -1){
					this.chosenids.splice(this.chosenids.indexOf(item.id), 1);
				} else {
					this.chosenids.push(item.id);
				}
			} else {
				this.chosenids = [item.id];			
			}
		} else {
			if(this.chosenids.length == this.dataset.length){
				this.chosenids = [];
			} else {
				for(let obj of this.dataset){
					if(this.chosenids.indexOf(obj.id) < 0){
						this.chosenids.push(obj.id)
					}
				}
			}
		}
	}

}
