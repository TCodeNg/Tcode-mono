import { Injectable } from '@angular/core';
import { IImage } from '@tcode/api-interface';
import { MediaOperation, MediaService } from '@tcode/media';
import { Observable } from 'rxjs';

@Injectable()
export class AddNewProductService {
  constructor(
    private mediaService: MediaService<IImage>
  ){}

  uploadImage(file: File): Observable<MediaOperation<IImage>>{
    return this.mediaService.upload(file);
  }
}