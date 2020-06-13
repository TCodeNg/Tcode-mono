import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategorySchema, CurrencySchema, ImageSchema, RatingSchema } from '@tcode/api-interface';

const app = 'storefront-db';

const DB = process.env.MONGODB_URI || `mongodb://localhost/${app}`;

@Module({
  controllers: [],
  imports: [
    MongooseModule.forRoot(DB),
    MongooseModule.forFeature([
      {
        name: 'Currency',
        schema: CurrencySchema
      },
      {
        name: 'Rating',
        schema: RatingSchema
      },
      {
        name: 'Category',
        schema: CategorySchema
      },
      {
        name: 'Image',
        schema: ImageSchema
      }
    ])
  ],
  providers: [],
  exports: [MongooseModule]
})
export class MongoUtilsModule {
}
