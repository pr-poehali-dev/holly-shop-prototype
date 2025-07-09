export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  brand: string;
}

export interface Category {
  name: string;
  icon: string;
  color: string;
}
