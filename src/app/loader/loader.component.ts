import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.sass']
})
export class LoaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  words:string[] = ["PRITHIVI", "UI DEVELOPER", "CAMERA", "PHOTOGRAPHY", "WEBSITE", "CSS", "HTML", "JAVASCRIPT", "JQUERY", "ANGULAR", "FRONTEND", "GIGYA", "BOOTSTRAP"];

    //function for generating random value.
     getRandomInt(min:number, max:number) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    //function for changing the word
    changeWord(a:any) {
		a.style.opacity = '0.1';
		a.innerHTML = this.words[this.getRandomInt(0, this.words.length - 1)];
		setTimeout(function() {
				a.style.opacity = '1';
        }, 1800);
        setTimeout(()=>{    //<<<---    using ()=> syntax
            this.changeWord(a);
       },this.getRandomInt(500, 800));
    }

    ngAfterViewInit() {
       var randoms= window.document.getElementsByClassName("randoms");
        for (var i = 0; i < randoms.length; i++)
                this.changeWord(randoms[i]);

    }
}
