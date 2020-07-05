import { DynamicModule, Module } from '@nestjs/common';
import { MediaController } from './media.controller';
import { MediaTransport } from './media-transport';
import { TransportService } from './media-transport/transport.service';
import { MongoUtilsModule } from '@tcode/mongo-utils';
import { ImageService } from './image.service';

@Module({
  controllers: [MediaController],
  providers: [TransportService, ImageService],
  imports: [MongoUtilsModule],
  exports: [],
})
export class MediaApiModule {
  static forRoot(transport: MediaTransport): DynamicModule {
    return {
      module: MediaApiModule,
      providers: [
        {
          provide: MediaTransport,
          useValue: transport
        }
      ]
    }
  }
}
