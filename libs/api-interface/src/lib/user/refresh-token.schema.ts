import * as mongoose from 'mongoose';

mongoose.set('useCreateIndex', true);

export const RefreshTokenSchema = new mongoose.Schema({
  token: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

RefreshTokenSchema.index({ token: 1 }, { unique: true });
