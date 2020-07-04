import { Component, OnInit } from '@angular/core';
import { Image } from 'libs/api-interface/src/lib/image';

@Component({
  selector: 'tcode-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 't-Code';
  show = false;

  ngOnInit(){
    setTimeout(() => {
      this.show = true
    }, 2000);
  }

}
