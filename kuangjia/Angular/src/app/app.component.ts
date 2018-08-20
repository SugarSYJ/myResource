import { Component } from '@angular/core';
import CommonService from './gz1801/utils/common'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'app';
  currentItem: Object = null;
  // lanType: string = "en";

  constructor(private common: CommonService){}
  //泛型
  // dataset: Array<any> = [""];

  dataset: Array<any> = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ]

  tyid(item){
    return item.id;
  }

  selectItem(item){
    // console.log(item)
    this.currentItem = item;
  }

  parentEvent(val: string){
    console.log(val);
  }

  cpEvent(arg1){
    console.log(arg1)
  }
}