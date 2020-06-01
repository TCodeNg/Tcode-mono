import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagepreviewComponent } from './imagepreview/imagepreview.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ImagepreviewComponent
  ],
  exports: [
    ImagepreviewComponent
  ]
})
export class ImagepreviewModule {}
