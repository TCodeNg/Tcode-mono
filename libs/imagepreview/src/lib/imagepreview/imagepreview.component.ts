import { Component, OnInit, Input, ChangeDetectionStrategy, OnChanges, SimpleChanges } from '@angular/core';
import { IImage } from '@tcode/api-interface'

@Component({
  selector: 'tcode-img-preview',
  templateUrl: './imagepreview.component.html',
  styleUrls: ['./imagepreview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImagepreviewComponent implements OnInit, OnChanges {

  @Input() images: IImage[];
  selectedImage: IImage;
  constructor() { }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges){
    if(changes.images){
      this.selectedImage = this.images && this.images.length > 0 ? this.images[0] : undefined;
    }
  }

  pickImage(image: IImage){
    this.selectedImage = image;
  }

}
