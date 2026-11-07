export type CategoryId = 
  | 'all'
  | 'dresses'
  | 'tops'
  | 'co-ords'
  | 'ethnic-wear'
  | 'bottoms'
  | 'accessories'
  | 'sale';

export interface ProductVariant {
  colorName: string;
  colorHex: string;
  image: string;
}

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: CategoryId;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  isNew?: boolean;
  isBestseller?: boolean;
  isTrending?: boolean;
  isFestive?: boolean;
  isSale?: boolean;
  description: string;
  fabricDetails: string;
  careInstructions: string[];
  features: string[];
  sizes: string[];
  images: string[];
  colors: ProductVariant[];
  sku: string;
}

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  originalPrice?: number;
  size: string;
  color: string;
  image: string;
  quantity: number;
  category: CategoryId;
}

export interface Coupon {
  code: string;
  discountType: 'percentage' | 'fixed';
  discountValue: number;
  minOrderValue?: number;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  review: string;
  purchasedItem: string;
  date: string;
}

export interface LookbookItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  lookDescription: string;
  featuredProductIds: string[];
}

export interface InstagramPost {
  id: string;
  image: string;
  likes: number;
  comments: number;
  caption: string;
  handle: string;
  taggedProduct?: {
    id: string;
    name: string;
    price: number;
  };
}

export interface CheckoutForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  apartment?: string;
  city: string;
  state: string;
  pincode: string;
  paymentMethod: 'upi' | 'card' | 'netbanking' | 'cod';
  deliveryOption: 'standard' | 'express';
  notes?: string;
}
