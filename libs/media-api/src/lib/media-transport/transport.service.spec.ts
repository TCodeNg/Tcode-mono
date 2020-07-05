import { Test, TestingModule } from '@nestjs/testing';
import {  MediaTransport } from './';
import { TransportService } from './transport.service';
import { getModelToken } from '@nestjs/mongoose';

describe('TransportService', () => {
  let service: TransportService;
  let transport: MediaTransport

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TransportService,
        {
          provide: MediaTransport,
          useValue: {
            upload: jest.fn()
          }
        }
      ],
    }).compile();

    service = module.get<TransportService>(TransportService);
    transport = module.get<MediaTransport>(MediaTransport);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should call media transport impl on upload', () => {
    const spy = jest.spyOn(transport, 'upload');
    const file = {} as any;
    service.upload(file);
    expect(spy).toBeCalledWith([file]);
  })
});
