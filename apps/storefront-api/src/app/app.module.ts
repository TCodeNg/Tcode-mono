import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { MongoUtilsModule } from '@tcode/mongo-utils';
import { AuthModule } from '@tcode/auth';
import { CloudinaryConfig, CloudinaryTransport, MediaApiModule } from '@tcode/media-api';

const cloudinaryConfig: CloudinaryConfig = {
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME
}

const transport = new CloudinaryTransport(cloudinaryConfig);


@Module({
  imports: [
    AuthModule,
    ProductModule,
    MediaApiModule.forRoot(transport),
    MongoUtilsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
