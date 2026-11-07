export type ProductCategory = 
  | 'All'
  | 'T-Shirts'
  | 'Hoodies'
  | 'Bottoms'
  | 'Outerwear'
  | 'Accessories';

export type ProductFit = 
  | 'Boxy Oversized'
  | 'Drop Shoulder Relaxed'
  | 'Straight Technical'
  | 'Wide Parachute'
  | 'Regular Fit';

export interface ProductColor {
  name: string;
  hex: string;
  bgClass?: string;
}

export interface SizeMeasurement {
  size: string;
  chest: string;
  length: string;
  shoulder: string;
  sleeve: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  price: number; // in INR
  originalPrice: number; // in INR
  category: 'T-Shirts' | 'Hoodies' | 'Bottoms' | 'Outerwear' | 'Accessories';
  collection: string;
  isNewDrop: boolean;
  isBestSeller: boolean;
  isLimited: boolean;
  stockCount: number;
  editionTotal?: number;
  editionNumber?: string;
  images: string[];
  colors: ProductColor[];
  sizes: string[];
  fit: ProductFit;
  gsm: string;
  fabric: string;
  description: string;
  features: string[];
  careInstructions: string[];
  measurements: SizeMeasurement[];
  rating: number;
  reviewCount: number;
}

export interface CartItem {
  id: string; // generated unique id: `${product.id}-${size}-${color}`
  product: Product;
  selectedSize: string;
  selectedColor: string;
  quantity: number;
}

export interface PromoCode {
  code: string;
  discountType: 'percentage' | 'fixed';
  discountValue: number;
  description: string;
  minOrder?: number;
}

export interface ShippingAddress {
  fullName: string;
  phone: string;
  email: string;
  addressLine1: string;
  addressLine2?: string;
  landmark?: string;
  pincode: string;
  city: string;
  state: string;
}

export interface OrderDetails {
  orderId: string;
  date: string;
  items: CartItem[];
  subtotal: number;
  discount: number;
  shippingFee: number;
  total: number;
  shippingAddress: ShippingAddress;
  paymentMethod: 'upi' | 'card' | 'cod' | 'netbanking';
  paymentStatus: 'Paid' | 'Pending COD Verification';
  estimatedDelivery: string;
}

export type PageView = 
  | 'home'
  | 'shop'
  | 'product-detail'
  | 'checkout'
  | 'lookbook'
  | 'manifesto';

