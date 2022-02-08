import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appAppHorizontalScroll]'
})
export class AppHorizontalScrollDirective {

  @Output() wheelScroll:EventEmitter<any>  = new EventEmitter();

  constructor() { }


  @HostListener("wheel",["$event"])
  public onScroll(event:WheelEvent){
  this.wheelScroll.emit("scrolled");
  }
}
