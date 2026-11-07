export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'hot-coffee' | 'iced-coffee' | 'non-coffee' | 'breakfast' | 'desserts';
  image: string;
  tags?: string[];
  isSignature?: boolean;
  isSeasonal?: boolean;
  origin?: string;
  tastingNotes?: string[];
  roastLevel?: 'Light' | 'Medium-Light' | 'Medium' | 'Medium-Dark' | 'Dark';
  calories?: number;
}

export interface CoffeeProduct {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  image: string;
  notes: string[];
  origin: string;
  elevation: string;
  process: string;
  roast: 'Light' | 'Medium-Light' | 'Medium' | 'Medium-Dark' | 'Dark';
  brewRecommendation: string;
  badge?: string;
}

export interface SeasonalSpecial {
  id: string;
  name: string;
  badge: string;
  description: string;
  price: number;
  image: string;
  ingredients: string[];
  flavorProfile: string;
  availableUntil: string;
}

export interface MerchItem {
  id: string;
  name: string;
  category: 'beans' | 'equipment' | 'lifestyle';
  description: string;
  price: number;
  image: string;
  weightOrSize?: string;
  features?: string[];
  inStock: boolean;
  tastingNotes?: string[];
  roastLevel?: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'all' | 'interior' | 'brew-bar' | 'roastery' | 'atmosphere';
  categoryLabel: string;
  image: string;
  caption: string;
  aspectRatio?: 'tall' | 'wide' | 'square';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  review: string;
  favoriteItem: string;
  date: string;
  verifiedVisit: boolean;
}

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  milkChoice?: string;
  grindChoice?: string;
  temperature?: 'Hot' | 'Iced';
  notes?: string;
}

export interface CafeConfig {
  cafeName: string;
  tagline: string;
  whatsappNumber: string;
  phoneNumber: string;
  email: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  pincode: string;
  currencySymbol: string;
  instagramHandle: string;
}
