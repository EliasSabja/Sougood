
export default interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  price: number;
  amount: number;
  subcategory: string;
  tags: string[];
  stock: number;
}
