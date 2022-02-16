import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Credits } from '../models/credits';
import { ResponseFileReaderService } from '../_services/response-file-reader.service';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.sass']
})
export class CreditsComponent implements OnInit {
  credits: Credits[] = [];
  showThanks:boolean = false;

  @ViewChild('scrollMe')
  private myScrollContainer!: ElementRef;
  position: number = 0;
  subscription!: Subscription;

  constructor(private responseFileReaderService: ResponseFileReaderService) { }


  ngOnInit(): void {
    this.getData();
    this.initScroll();
  }

  initScroll(){
    var ua = navigator.userAgent;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(ua)) {
      const source = interval(1);
      this.subscription = source.subscribe(val => this.scrollToBottom(this.position += .5));
    } else {
      const source = interval(1);
      this.subscription = source.subscribe(val => this.scrollToBottom(this.position += .8));
    }
  }

  scrollToBottom(position: number): void {
    try {
      console.log(position)
      this.myScrollContainer.nativeElement.scrollTop = position;         
    } catch (err) {}
  }

  scrollHandler() {  
    this.subscription.unsubscribe();
  }

  userScroll(){
    this.subscription.unsubscribe();
  }
  getData() {
    this.responseFileReaderService.getJSON("assets/data/credits.json").subscribe(data => {
      this.credits = data;
      this.showThanks = true;
    })
  }

}
