import * as mongoose from 'mongoose';

export const RefreshTokenSchema = new mongoose.Schema({
  token: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// mongoose.set('useCreateIndex', true);

RefreshTokenSchema.index({ token: 1 }, { unique: true });
