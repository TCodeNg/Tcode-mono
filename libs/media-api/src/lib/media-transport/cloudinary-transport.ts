import { ImageUploadResponse, MediaTransport } from './media-transport';
import { v2 } from 'cloudinary';

export interface CloudinaryConfig {
  cloud_name: string;
  api_key: string;
  api_secret: string;
}

export class CloudinaryTransport extends MediaTransport {
  _cloudinary = v2;
  imageFolder = process.env.TCODE_IMAGE_FOLDER || 'tcode-dev'

  constructor(private config: CloudinaryConfig) {
    super();
    this.configure(config);
  }

  configure(...args): void {
    this._cloudinary.config(this.config);
  }

  async upload(files: any[], allowed_formats = ['png', 'jpg'], folder = this.imageFolder): Promise<ImageUploadResponse> {
    let res = await this._cloudinary.uploader.upload(files[0].path, {
      allowed_formats,
      access_mode: 'public',
      folder
    }, null);

    const thumb = this._cloudinary.url(res.public_id, {width: 150, height: 150, crop: "fill"})

    return { ...res, thumb };
  }

}
