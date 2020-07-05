import { Controller, Post, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { MediaTransport } from './media-transport';
import { from } from 'rxjs';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { map, switchMap } from 'rxjs/operators';
import { ImageService } from './image.service';
import { JwtAuthGuard } from '@tcode/auth';

@Controller('media')
export class MediaController {

  constructor(private readonly transport: MediaTransport, private readonly imageService: ImageService) {
  }

  @UseGuards(JwtAuthGuard)
  @Post('upload/image')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './files',
      filename: (req, file, cb) => {
        const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('');
        return cb(null, `${randomName}${extname(file.originalname)}`);
      }
    })
  }))
  upload(@UploadedFile() file) {
    return from(this.transport.upload([file])).pipe(
      map(res => ({
        public_id: res.public_id,
        width: res.width,
        height: res.height,
        url: res.url,
        secure_url: res.secure_url,
        format: res.format,
        thumb: res.thumb
      })),
      switchMap(res => this.imageService.create(res))
    );
  }
}
