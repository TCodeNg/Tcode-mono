import { Component, OnInit, Input } from '@angular/core';
import { Image } from '../../../../api-interface/src/lib/image'

@Component({
  selector: 'tcode-img-preview',
  templateUrl: './imagepreview.component.html',
  styleUrls: ['./imagepreview.component.scss']
})
export class ImagepreviewComponent implements OnInit {

  @Input() images: Image[];
  selectedImage: Image;
  constructor() { }

  ngOnInit(): void {
    this.selectedImage = this.images.length > 0 ? this.images[0] : undefined;
  }

  pickImage(image: Image){
    this.selectedImage = image;
  }

}
