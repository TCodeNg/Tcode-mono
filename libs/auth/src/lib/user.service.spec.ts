import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { RefreshTokenDoc, RefreshTokenDto, RefreshTokenModel, UserDoc, UserDto, UserModel } from '@tcode/api-interface';
import { Model } from 'mongoose';
import { getModelToken } from '@nestjs/mongoose';

const date = new Date();

const mockToken: (token: RefreshTokenDto) => RefreshTokenModel = (t: RefreshTokenDto) => {
  return {
    token: 'token'
  }
}

const mockTokenDoc: (token: RefreshTokenDto) => Partial<RefreshTokenDoc> = (mock?: RefreshTokenDto) => {
  return {
    _id: 'id',
    token: 'token'
  }
};

const mockTokenDto: (token?: RefreshTokenDto) => RefreshTokenDto = (token: RefreshTokenDto = {
  token: 'totototot'
}) => {
  return {
    token: token.token
  }
}

const mockUser: (user: UserDto) => UserModel = (u: UserDto) => {
  return {
    id: '',
    username: '',
    password: '',
    email: '',
    createdAt: date,
    updatedAt: date
  }
};

const mockUserDoc: (mock?: UserDto) => Partial<UserDoc> = (mock?: UserDto) => {
  return {
    _id: 'user',
    email: '',
    username: '',
    password: '',
    createdAt: date,
    updatedAt: date
  }
};

const mockUserDto: (user?: UserDto) => UserDto = (user: UserDto = {
  username: 'mrsmith9ja',
  email: 'tata@dada.com',
  password: 'papapapa',
}) => {
  return {
    email: user.email,
    password: user.password,
    username: user.username
  }
}

describe('UserService', () => {
  let service: UserService;
  let userModel: Model<UserDoc>;
  let tokenModel: Model<RefreshTokenDoc>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getModelToken('RefreshToken'),
          useValue: {
            new: jest.fn().mockResolvedValue(mockToken(mockTokenDto())),
            constructor: jest.fn().mockResolvedValue(mockToken(mockTokenDto())),
            find: jest.fn(),
            findOne: jest.fn(),
            update: jest.fn(),
            create: jest.fn(),
            remove: jest.fn(),
            exec: jest.fn(),
          }
        },
        {
          provide: getModelToken('User'),
          useValue: {
            new: jest.fn().mockResolvedValue(mockUser(mockUserDto())),
            constructor: jest.fn().mockResolvedValue(mockUser(mockUserDto())),
            find: jest.fn(),
            findOne: jest.fn(),
            update: jest.fn(),
            create: jest.fn(),
            remove: jest.fn(),
            exec: jest.fn(),
          }
        }
      ],
    }).compile();

    service = module.get<UserService>(UserService);
    userModel = module.get<Model<UserDoc>>(getModelToken('User'));
    tokenModel = module.get<Model<RefreshTokenDoc>>(getModelToken('RefreshToken'));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
