import { Component, OnInit, Input } from '@angular/core';
import { IImage } from '@tcode/api-interface';

@Component({
  selector: 'tcode-img-banner',
  templateUrl: './img-banner.component.html',
  styleUrls: ['./img-banner.component.scss']
})
export class ImgBannerComponent implements OnInit {
  @Input() image: IImage;
  
  constructor() { }

  ngOnInit(): void {
  }

}
