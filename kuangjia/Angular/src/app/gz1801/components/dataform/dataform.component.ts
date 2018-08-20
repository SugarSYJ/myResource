import { Component, OnInit, Input } from '@angular/core';
import HCService from '../../utils/httpclient'
import CommonService from '../../utils/common'

@Component({
  selector: 'dataform',
  templateUrl: './dataform.component.html',
  styleUrls: ['./dataform.component.css', '../../../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class DataformComponent implements OnInit {
  @Input() config: string;


  columns: Array<string> = [];
  configObj: Object = {};

  fetchDataSource: Object = {};

  constructor(private http: HCService, private common: CommonService) { }

  ngOnInit() {
    this.http.get(this.config + '.txt').then((res) => {
      this.columns = res['cols'].split(',');
      this.configObj = res;
      console.log(res)
    })
  }

  fetchData(_key, _url){
    console.log(_url)
    // this.http.get(_url).then((res) => {
    //   this.fetchDataSource[_key] = res;
    // })
  }

}
