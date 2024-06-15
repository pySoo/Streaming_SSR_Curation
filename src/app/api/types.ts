export interface ShoppingItem {
  productId: string;
  title: string;
  link: string;
  image: string;
  lprice: string;
  hprice: string;
  mallName: string;
}

export interface ShoppingListResponse {
  lastBuildDate: string;
  total: number;
  start: number;
  display: number;
  items: ShoppingItem[];
}
