import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { RefreshTokenSchema, User, UserSchema } from '@tcode/api-interface';
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
          schema.pre<User>('save', async function(next: Function) {
            if (this.isModified('password')) {
              try {
                this.password = await bcrypt.hash(this.password, 10);
                this.createdAt = new Date();
                this.updatedAt = new Date();
                next();
              } catch (e) {
                console.log(e);
                next(e);
              }
            }
          });
          return schema;
        }
      }
    ])
  ]
})
export class UserModule {}
