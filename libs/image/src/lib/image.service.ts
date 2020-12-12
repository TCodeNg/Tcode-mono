import { Inject, Injectable } from '@angular/core';
import { MediaOperation, MediaService } from '@tcode/media';
import { IImage } from '@tcode/api-interface';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { ImageServiceConfig } from './image.service.config';
import { IMAGE_CONFIG_TOKEN } from './image-config.token';

@Injectable()
export class ImageService extends MediaService<IImage> {
  constructor(private client: HttpClient, @Inject(IMAGE_CONFIG_TOKEN) private config: ImageServiceConfig) {
    super();
  }

  upload(file: File): Observable<MediaOperation<IImage>> {
    const data = new FormData();
    data.append('image', file);
    return this.client.post(`${this.config.baseUrl}/upload/image`, data).pipe(
      map((res: any) => ({ data: res.image })),
      catchError(err => of({ error: err }))
    );
  }
}
