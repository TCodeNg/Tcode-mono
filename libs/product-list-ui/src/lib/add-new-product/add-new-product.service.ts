import { Inject, Injectable } from '@angular/core';
import { IImage, Product } from '@tcode/api-interface';
import { MediaOperation, MediaService } from '@tcode/media';
import { ProductService, PRODUCT_SERVICE_TOKEN } from '@tcode/product';
import { Observable } from 'rxjs';

@Injectable()
export class AddNewProductService {
  constructor(
    private mediaService: MediaService<IImage>,
    @Inject(PRODUCT_SERVICE_TOKEN) private productService: ProductService,
  ){}

  uploadImage(file: File): Observable<MediaOperation<IImage>>{
    return this.mediaService.upload(file);
  }

  createNewProduct(data: Partial<Product>) {
    return this.productService.createProduct(data);
  }
}