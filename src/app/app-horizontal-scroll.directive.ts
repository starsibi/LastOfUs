import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
import { ClickEvent } from 'tsparticles/Options/Classes/Interactivity/Events/ClickEvent';

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

  @HostListener("click",["$event"])

  public clicked(event:ClickEvent){
    this.wheelScroll.emit("scrolled");
  }

}
