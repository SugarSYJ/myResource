import { Component, OnInit } from '@angular/core';
import CommonService from '../../utils/common'

@Component({
  selector: 'cnode',
  templateUrl: './cnode.component.html',
  styleUrls: ['./cnode.component.css']
})
export class CnodeComponent implements OnInit {

  constructor(private common: CommonService) { }

  ngOnInit() {
  }

}
