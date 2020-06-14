import { Component, OnInit, Input } from '@angular/core';
import { IImage } from '@tcode/api-interface';

@Component({
  selector: 'tcode-img-thumbnail',
  templateUrl: './img-thumbnail.component.html',
  styleUrls: ['./img-thumbnail.component.scss']
})
export class ImgThumbnailComponent implements OnInit {

  @Input() image: IImage;
  @Input() selected = false;

  constructor() { }

  ngOnInit(): void {
  }

}
