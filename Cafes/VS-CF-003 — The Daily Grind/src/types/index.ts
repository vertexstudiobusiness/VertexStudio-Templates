export type DietaryTag = 'veg' | 'vegan' | 'gluten-free' | 'high-protein' | 'organic';

export type MenuCategory = 'all' | 'coffee' | 'tea' | 'breakfast' | 'sandwiches' | 'snacks' | 'desserts';

export interface MenuItem {
  id: string;
  name: string;
  category: 'coffee' | 'tea' | 'breakfast' | 'sandwiches' | 'snacks' | 'desserts';
  price: number;
  description: string;
  origin?: string;
  tags: DietaryTag[];
  caffeine?: 'High' | 'Medium' | 'Low' | 'Caffeine-Free';
  isPopular?: boolean;
  image: string;
}

export type PricingTier = 'passes' | 'memberships' | 'pods';

export interface WorkspacePlan {
  id: string;
  category: PricingTier;
  title: string;
  subtitle: string;
  price: number;
  period: string;
  isPopular?: boolean;
  badge?: string;
  features: string[];
  cafeCredit: number;
  idealFor: string;
}

export interface WorkPackage {
  id: string;
  name: string;
  tagline: string;
  price: number;
  duration: string;
  cafeCredit: string;
  savings: string;
  popular?: boolean;
  itemsIncluded: string[];
  perks: string[];
}

export interface Zone {
  id: string;
  name: string;
  acousticLevel: string; // e.g. "Silent Zone (<35 dB)", "Quiet Focus (35-42 dB)", "Conversational (45-55 dB)"
  description: string;
  seatsCount: number;
  seatingType: string;
  image: string;
  suitableFor: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  companyOrCollege: string;
  rating: number;
  quote: string;
  favoriteDrink: string;
  frequentedZone: string;
  avatar: string;
}

export interface ReservationFormData {
  fullName: string;
  email: string;
  phone: string;
  date: string;
  timeSlot: string;
  durationHours: number;
  guestsCount: number;
  preferredZone: string;
  packageType: string;
  specialRequests: string;
  addCoffeePass: boolean;
}

export interface ConfirmedBooking extends ReservationFormData {
  bookingId: string;
  totalEstimatedAmount: number;
  createdAt: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'focus' | 'coffee' | 'pods' | 'verandah' | 'all';
  image: string;
  caption: string;
  dimensions?: string;
}
