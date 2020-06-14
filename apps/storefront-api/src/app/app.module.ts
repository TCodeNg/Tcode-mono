import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { MongoUtilsModule } from '@tcode/mongo-utils';
import { AuthModule } from '@tcode/auth';

@Module({
  imports: [
    AuthModule,
    ProductModule,
    MongoUtilsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
