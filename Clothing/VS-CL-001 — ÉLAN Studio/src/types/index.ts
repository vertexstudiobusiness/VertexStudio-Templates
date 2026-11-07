export type CategoryType = 
  | 'All' 
  | 'Women' 
  | 'Men' 
  | 'Dresses' 
  | 'Jackets' 
  | 'Shirts' 
  | 'Trousers' 
  | 'Accessories' 
  | 'Footwear';

export interface ProductColor {
  name: string;
  hex: string;
  imageIndex?: number;
}

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  originalPrice?: number;
  category: CategoryType;
  subCategory: string;
  gender: 'Women' | 'Men' | 'Unisex';
  images: string[];
  colors: ProductColor[];
  sizes: string[];
  isNew?: boolean;
  isBestseller?: boolean;
  isAtelierExclusive?: boolean;
  inStock: boolean;
  stockCount?: number;
  description: string;
  fabricDetails: {
    composition: string;
    origin: string;
    weight: string;
    care: string[];
  };
  details: string[];
  stylingTips?: string;
  measurementsModel?: string;
}

export interface CartItem {
  product: Product;
  selectedSize: string;
  selectedColor: ProductColor;
  quantity: number;
}

export interface WishlistItem {
  productId: string;
  addedAt: number;
}

export interface CheckoutShipping {
  fullName: string;
  email: string;
  phone: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  postalCode: string;
  giftNote?: string;
  isGiftBox: boolean;
}

export interface OrderRecord {
  orderId: string;
  date: string;
  items: CartItem[];
  shipping: CheckoutShipping;
  paymentMethod: 'upi' | 'card' | 'netbanking' | 'cod';
  subtotal: number;
  discount: number;
  shippingFee: number;
  total: number;
  estimatedDelivery: string;
}

export interface LookbookItem {
  id: string;
  title: string;
  location: string;
  image: string;
  taggedProductId: string;
  taggedProductName: string;
  price: number;
}
