import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema, RatingSchema } from '@tcode/api-interface';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { AuthModule } from '@tcode/auth';
import { SentryModule } from '@tcode/sentry';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forFeatureAsync([
      {
        name: 'Product',
        useFactory: () => ProductSchema
      },
      {
        name: 'Rating',
        useFactory: () => RatingSchema
      }
    ]),
    SentryModule
  ],
  providers: [ProductService],
  controllers: [ProductController]
})
export class ProductModule {
}
