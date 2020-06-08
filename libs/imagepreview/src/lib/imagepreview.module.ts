import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagepreviewComponent } from './imagepreview/imagepreview.component';
import { ImgThumbnailComponent } from './img-thumbnail/img-thumbnail.component';
import { ImgBannerComponent } from './img-banner/img-banner.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ImagepreviewComponent,
    ImgThumbnailComponent,
    ImgBannerComponent
  ],
  exports: [
    ImagepreviewComponent,
    ImgThumbnailComponent,
    ImgBannerComponent
  ]
})
export class ImagepreviewModule {}
