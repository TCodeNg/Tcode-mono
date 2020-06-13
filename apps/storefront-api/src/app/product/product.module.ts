import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from '@tcode/api-interface';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { AuthModule } from '@tcode/auth';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forFeatureAsync([
      {
        name: 'Product',
        useFactory: () => {
          return ProductSchema;
        }
      }
    ])
  ],
  providers: [ProductService],
  controllers: [ProductController]
})
export class ProductModule {
}
