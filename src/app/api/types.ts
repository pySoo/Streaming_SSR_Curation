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

export interface Weather {
  time: number;
  summary: WeatherSummary;
  title: string;
  temperatureHigh: number;
  temperatureLow: number;
  icon: string;
}

export type WeatherSummary =
  | 'clear'
  | 'partly cloudy'
  | 'cloudy'
  | 'rain'
  | 'snow'
  | 'sleet'
  | 'wind'
  | 'fog';

export interface WeatherListResponse {
  daily: {
    data: Weather[];
  };
}

export interface WeatherDescription {
  title: string;
  icon: string;
}
