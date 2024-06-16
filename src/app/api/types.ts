export interface Product {
  productId: string;
  title: string;
  link: string;
  image: string;
  lprice: string;
  hprice: string;
  mallName: string;
  isLiked: boolean;
}

export type ProductId = Product['productId'];

export interface ShoppingListResponse {
  lastBuildDate: string;
  total: number;
  start: number;
  display: number;
  items: Product[];
}
