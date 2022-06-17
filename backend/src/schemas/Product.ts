import mongoose from 'mongoose';
const { Schema, model } = mongoose;
import { IProduct } from '../types/product';

const ProductSchema = new Schema<IProduct>({
  name: { type: String, required: true },
  description: { type: String, required: true },    
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true
  },
  subcategory: {
    type: Schema.Types.ObjectId,
    ref: "Subcategory",
    required: true
  },
  merchandiser: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
  },
  price: { Number, required: true},
  stock: { Number, required: true},
  imageUrl: { type: String, required: false},
  size: { type: String, required: true},
  tags: [{ type: String, required: false}],
});

export const Product = model<IProduct>("Product", ProductSchema);