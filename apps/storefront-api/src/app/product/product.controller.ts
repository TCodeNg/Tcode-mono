import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Query,
  Req,
  UseGuards,
  UseInterceptors
} from '@nestjs/common';
import { ProductService } from './product.service';
import { Observable } from 'rxjs';
import { ProductDto, ProductQueryFilter, ProductResponse, RateProductDto } from '@tcode/api-interface';
import { JwtAuthGuard } from '@tcode/auth';
import { Request } from 'express';
import { SentryInterceptor } from '@tcode/sentry';

@UseInterceptors(SentryInterceptor)
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
  @Get(':id')
  getProduct(@Req() req: Request, @Param() params) {
    const { userId } = req.user as any;
    const { id } = params;
    return this.service.getProduct(id, userId);
  }
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  @HttpCode(204)
  deleteProduct(@Req() req: Request, @Param() params) {
    const { userId } = req.user as any;
    const { id } = params;
    return this.service.deleteProduct(userId, id);
  }

  @UseGuards(JwtAuthGuard)
  @Post(':id/rate')
  rateProduct(@Req() req: Request, @Body() dto: RateProductDto, @Param() params) {
    const { userId } = req.user as any;
    const { id } = params;
    return this.service.rateProduct(userId, id, dto);
  }
}
