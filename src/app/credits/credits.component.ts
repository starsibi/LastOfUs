import { Component, OnInit } from '@angular/core';
import { Credits } from '../models/credits';
import { ResponseFileReaderService } from '../_services/response-file-reader.service';

@Component({
  selector: 'app-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.sass']
})
export class CreditsComponent implements OnInit {
  credits: Credits[] = [];
  constructor(private responseFileReaderService: ResponseFileReaderService) { }

  ngOnInit(): void {
    this.getData();
    window.setInterval(function() {
      window.scrollBy(0,10);
    },2);
  }

  getData() {
    this.responseFileReaderService.getJSON("../../assets/data/credits.json").subscribe(data => {
      this.credits = data;
    })
  }

}
