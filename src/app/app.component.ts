import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'LastOfUs';
  showLoader: boolean = true;

  ngOnInit(){
    this.init();
  }
 init() {
  setTimeout(() => {
    this.showLoader = false;
  }, 7000); 
 }
}
