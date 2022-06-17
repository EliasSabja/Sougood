import { ObjectId } from 'mongoose';
import { ISubcategory } from './subcategory';

export interface ICategory {
    name: string;
    subcategories: ISubcategory[];
}