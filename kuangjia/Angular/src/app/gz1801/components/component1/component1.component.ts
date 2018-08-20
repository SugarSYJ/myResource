import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  @Input() item;

  @Output() parentEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    console.log('init')
  }

  childrenEvent(val: string){
    this.parentEvent.emit(val);
  }

}
