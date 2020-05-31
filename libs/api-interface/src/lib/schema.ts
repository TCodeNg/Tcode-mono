import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  currency: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Currency',
    required: true
  },
  type: {
    type: String,
    required: true
  },
  category: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  }],
  agent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Agent',
    required: false
  },
  rooms: {
    type: Number,
    required: false
  },
  bathrooms: {
    type: Number,
    required: false
  },
  livingRooms: {
    type: Number,
    required: false
  },
  description: {
    type: Number,
    required: false
  },
  images: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Image'
    }
  ],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Business',
    required: false
  },
  status: {
    type: String,
    required: true
  },
  stock: {
    type: Number,
    required: false
  },
  created: {
    type: Date,
    required: true
  }
});

export const Currency = new mongoose.Schema({

});
