export type MenuCategory = 'all' | 'coffee' | 'cold-drinks' | 'breakfast' | 'bakery' | 'desserts';

export interface MenuItem {
  id: string;
  name: string;
  frenchName?: string;
  category: 'coffee' | 'cold-drinks' | 'breakfast' | 'bakery' | 'desserts';
  description: string;
  price: number; // in INR
  image: string;
  isBestseller?: boolean;
  isSeasonal?: boolean;
  isVegan?: boolean;
  isVegetarian?: boolean;
  containsNuts?: boolean;
  origin?: string;
  tastingNotes?: string[];
  options?: string[]; // e.g., ["Oat Milk", "Almond Milk", "Whole Milk"]
}

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
  selectedOption?: string;
  notes?: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  subtitle: string;
  category: 'coffee' | 'pastry' | 'interior' | 'moments';
  image: string;
  aspect: 'tall' | 'wide' | 'square';
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  publication?: string;
  rating: number;
  avatar: string;
}

export interface CafeConfig {
  name: string;
  tagline: string;
  established: number;
  phone: string;
  whatsappNumber: string; // international format without + or spaces for api.whatsapp.com, e.g. "919876543210"
  whatsappDisplayNumber: string;
  email: string;
  address: {
    street: string;
    neighborhood: string;
    city: string;
    state: string;
    postalCode: string;
    landmark: string;
  };
  hours: {
    weekdays: string;
    weekends: string;
    kitchenCloses: string;
  };
  social: {
    instagram: string;
    whatsapp: string;
    googleMaps: string;
  };
}
