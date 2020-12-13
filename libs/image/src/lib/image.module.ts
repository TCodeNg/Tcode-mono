import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageService } from './image.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
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
        {
          provide: HTTP_INTERCEPTORS,
          useClass: ImageInterceptor,
          multi: true
        },
        {
          provide: MediaService,
          useClass: ImageService
        },
        {
          provide: IMAGE_CONFIG_TOKEN,
          useValue: config
        }
      ]
    }
  }
}
