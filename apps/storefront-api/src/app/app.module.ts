import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';

const app = 'storefront-db'

const DB = process.env.MONGODB_URI || `mongodb://localhost/${app}`;

@Module({
  imports: [
    ProductModule,
    MongooseModule.forRoot(DB)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
