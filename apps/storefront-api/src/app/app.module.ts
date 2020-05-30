import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

const app = 'storefront-db'

const DB = process.env.MONGODB_URI || `mongodb://localhost/${app}`;

@Module({
  imports: [
    MongooseModule.forRoot(DB)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
