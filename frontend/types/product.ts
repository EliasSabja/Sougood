import Category from "./category";
import Subcategory from "./subcategory";

export default interface Product {
  _id: string;
  name: string;
  category: Category;
  description: string;
  image: string;
  price: number;
  subcategory: Subcategory;
  tags: string[];
  stock: number;
  size: string;
}
