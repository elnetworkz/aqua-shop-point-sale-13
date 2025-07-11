
export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image?: string;
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}
