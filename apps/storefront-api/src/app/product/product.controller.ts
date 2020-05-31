import { Controller, Get, Query } from '@nestjs/common';
import { ProductService } from './product.service';
import { Observable, of } from 'rxjs';
import { ProductResponse } from '@tcode/api-interface';

@Controller('product')
export class ProductController {
  constructor(private readonly service: ProductService) {}

  @Get()
  getProducts(@Query() query: any): Observable<ProductResponse> {
    return of({
      page: 1,
      total: 0,
      products: []
    });
  }
}
