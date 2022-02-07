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


  words:string[] =["UI DEVELOPER","CV TOOL", "PF CHANG'S", "GIGYA", "SITEFINITY","CRM","TFWWI","FULL STACK DEVELOPER", "HTML","CSS","JQUERY","ANGULARJS","AZURE","SOLID","TDD","AZURE FUNCTIONS","WEB API","CI CD","SAGGEZZA","INFOSTRETCH","PHOTOGRAPHY","HTML","CSS","JAVASCRIPT","DELTA","ALPHA","CONNECT" ] 

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
