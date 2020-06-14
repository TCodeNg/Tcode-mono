import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { RefreshTokenSchema, User, UserSchema } from '@tcode/api-interface';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  providers: [UserService],
  exports: [UserService],
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: 'RefreshToken',
        useFactory: () => RefreshTokenSchema
      },
      {
        name: 'User',
        useFactory: () => UserSchema
      }
    ])
  ]
})
export class UserModule {}
