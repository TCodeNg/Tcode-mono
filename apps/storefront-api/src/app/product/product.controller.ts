import { Body, Controller, Get, Param, Post, Query, Req, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { Observable } from 'rxjs';
import { ProductDto, ProductQueryFilter, ProductResponse, RateProductDto } from '@tcode/api-interface';
import { JwtAuthGuard } from '@tcode/auth';
import { Request } from 'express';

@Controller('product')
export class ProductController {
  constructor(private readonly service: ProductService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  getProducts(@Req() req: Request, @Query() query: ProductQueryFilter): Observable<ProductResponse> {
    const { userId } = req.user as any;
    return this.service.getProducts(query, userId);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  createProduct(@Body() data: ProductDto, @Req() req: Request) {
    const { userId } = req.user as any;
    return this.service.createProduct(data, userId);
  }

  @UseGuards(JwtAuthGuard)
  @Post(':id/rate')
  rateProduct(@Req() req: Request, @Body() dto: RateProductDto, @Param() params) {
    const { userId } = req.user as any;
    const { id } = params;
    return this.service.rateProduct(userId, id, dto);
  }
}
