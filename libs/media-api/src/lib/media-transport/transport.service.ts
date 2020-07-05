import { Injectable } from '@nestjs/common';
import { MediaTransport } from './media-transport';

@Injectable()
export class TransportService {
  constructor(private readonly transport: MediaTransport) {}

  upload(file: File) {
    return this.transport.upload([file]);
  }
}
