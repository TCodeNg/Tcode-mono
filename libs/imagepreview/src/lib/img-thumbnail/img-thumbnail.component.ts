import { Component, OnInit, Input } from '@angular/core';
import { Image } from 'libs/api-interface/src/lib/image';

@Component({
  selector: 'tcode-img-thumbnail',
  templateUrl: './img-thumbnail.component.html',
  styleUrls: ['./img-thumbnail.component.scss']
})
export class ImgThumbnailComponent implements OnInit {

  @Input() image: Image;
  @Input() selected = false;

  constructor() { }

  ngOnInit(): void {
  }

}
