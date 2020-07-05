import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Image } from '@tcode/api-interface';
import { ImageUploadResponse } from '@tcode/media-api';
import { from } from 'rxjs';

@Injectable()
export class ImageService {
  constructor(@InjectModel('Image') private readonly imageModel: Model<Image>) {}
  create(image: ImageUploadResponse) {
    return from(this.imageModel.create({
      public_id: image.public_id,
      width: image.width,
      height: image.height,
      image: image.secure_url,
      thumb: image.thumb
    }))
  }
}
