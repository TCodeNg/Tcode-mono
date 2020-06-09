import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

const app = 'storefront-db'

const DB = process.env.MONGODB_URI || `mongodb://localhost/${app}`;

@Module({
  controllers: [],
  imports: [
    MongooseModule.forRoot(DB)
  ],
  providers: [],
  exports: [MongooseModule],
})
export class MongoUtilsModule {}
