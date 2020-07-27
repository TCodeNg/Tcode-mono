import { Component, OnInit, Input } from '@angular/core';
import { IImage } from '@tcode/api-interface'

@Component({
  selector: 'tcode-img-preview',
  templateUrl: './imagepreview.component.html',
  styleUrls: ['./imagepreview.component.scss']
})
export class ImagepreviewComponent implements OnInit {

  @Input() images: IImage[];
  selectedImage: IImage;
  constructor() { }

  ngOnInit(): void {
    this.selectedImage = this.images && this.images.length > 0 ? this.images[0] : undefined;
  }

  pickImage(image: IImage){
    this.selectedImage = image;
  }

}
