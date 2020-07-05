import { Test, TestingModule } from '@nestjs/testing';
import { MediaController } from './media.controller';
import { MediaTransport } from './media-transport';
import { TransportService } from './media-transport/transport.service';
import { ImageService } from './image.service';
// import { cold } from 'jest-marbles';

describe('Media Controller', () => {
  let controller: MediaController;
  let service: TransportService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MediaController],
      providers: [
        {
          provide: MediaTransport,
          useValue: {
            upload: jest.fn().mockResolvedValue({})
          }
        },
        {
          provide: TransportService,
          useValue: {
            upload: jest.fn()
          }
        },
        {
          provide: ImageService,
          useValue: {}
        }
      ]
    }).compile();

    controller = module.get<MediaController>(MediaController);
    service = module.get<TransportService>(TransportService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it.todo('should call upload service');

  // it('should call upload service', () => {
  //   const spy = jest.spyOn(service, 'upload');
  //   const expected = cold('(a|)', { a: {} });
  //   const stream = controller.upload({} as any);
  //   expect(stream).toSatisfyOnFlush(() => {
  //     expect(spy).toBeCalled();
  //   });
  //   expect(stream).toBeObservable(expected);
  // });
});
