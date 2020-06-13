import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { RefreshTokenSchema, UserDoc, UserSchema } from '@tcode/api-interface';
import { MongooseModule } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';

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
        useFactory: () => {
          const schema = UserSchema;
          schema.pre<UserDoc>('save', async function(next: Function) {
            if (this.isModified('password')) {
              this.password = await bcrypt.hash(this.password, 10);
            }
            next();
          });
          return schema;
        }
      }
    ])
  ]
})
export class UserModule {}
