export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  subCategory: string;
  desc: string;
  description?: string;
  features?: string[];
  image?: string;
}
