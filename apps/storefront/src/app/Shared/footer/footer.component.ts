import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'tcode-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  year;
  constructor(){

  }

  ngOnInit() {
    this.year = new Date(Date.now()).getFullYear();
  }
  
}