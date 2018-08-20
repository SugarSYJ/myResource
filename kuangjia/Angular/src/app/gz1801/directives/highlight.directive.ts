import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[ahl]'
})
export class HighlightDirective {
  @Input('ahl') age: string;
  @Input() name: string
 

  constructor(el: ElementRef) { 
    el.nativeElement.style.background = 'yellow';
  }

  @HostListener('click', ['$event']) onclick(event){
    console.log(event.target, this.age, this.name)
  }
}