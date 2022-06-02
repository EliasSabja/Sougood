import mongoose from 'mongoose';
const { Schema, model } = mongoose;
import { ISubcategory } from '../types/subcategory';

const SubcategorySchema = new Schema<ISubcategory>({
  name: String,
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category"
  },
});

export const Subcategory = model<ISubcategory>("Subcategory", SubcategorySchema);