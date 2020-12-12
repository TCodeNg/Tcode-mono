import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageService } from './image.service';
import { HttpClientModule } from '@angular/common/http';
import { ImageServiceConfig } from './image.service.config';
import { IMAGE_CONFIG_TOKEN } from './image-config.token';
import { ImageInterceptor } from './image.interceptor';
import { MediaService } from '@tcode/media';

@NgModule({
  imports: [CommonModule, HttpClientModule]
})
export class ImageModule {
  static config(config: ImageServiceConfig): ModuleWithProviders<ImageModule> {
    return {
      ngModule: ImageModule,
      providers: [
        ImageInterceptor,
        {
          provide: MediaService,
          useClass: ImageService,
          multi: true
        },
        {
          provide: IMAGE_CONFIG_TOKEN,
          useValue: config
        }
      ]
    }
  }
}
