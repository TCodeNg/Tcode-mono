export interface ImageUploadResponse {
  public_id: string;
  width: number;
  height: number;
  format: string;
  url: string;
  secure_url: string;
  thumb?: string;
}
interface ITransport {
  configure(...args): void;
  upload(files: any[], allowedFormats?: string[]): Promise<ImageUploadResponse>;
}

export abstract class MediaTransport implements ITransport {
  abstract configure(...args): void;
  abstract upload(files: any[], allowedFormats?: string[]): Promise<ImageUploadResponse>;
}
