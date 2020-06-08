import { Component, OnInit, Input } from '@angular/core';
import { Image } from 'libs/api-interface/src/lib/image';

@Component({
  selector: 'tcode-img-banner',
  templateUrl: './img-banner.component.html',
  styleUrls: ['./img-banner.component.scss']
})
export class ImgBannerComponent implements OnInit {
  @Input() image: Image;
  
  constructor() { }

  ngOnInit(): void {
  }

}
