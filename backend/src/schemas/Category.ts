import mongoose from 'mongoose';
const { Schema, model } = mongoose;
import { ICategory } from '../types/category';

const CategorySchema = new Schema<ICategory>({
  name: String,
  subcategories: [{
    type: Schema.Types.ObjectId,
    ref: "Subcategory"
  }],
});

export const Category = model<ICategory>("Category", CategorySchema);
