export type RoomCategory = 'all' | 'deluxe' | 'suites' | 'villas' | 'presidential';

export interface RoomAmenity {
  id: string;
  name: string;
  iconName: string;
}

export interface Room {
  id: string;
  name: string;
  category: 'deluxe' | 'suites' | 'villas' | 'presidential';
  categoryLabel: string;
  tagline: string;
  pricePerNightINR: number;
  sizeSqFt: number;
  sizeSqM: number;
  maxGuests: {
    adults: number;
    children: number;
  };
  bedConfiguration: string;
  view: string;
  featuredImage: string;
  galleryImages: string[];
  description: string;
  highlights: string[];
  amenities: RoomAmenity[];
  features: {
    privatePool: boolean;
    oceanFacing: boolean;
    butlerService: boolean;
    outdoorShower: boolean;
    livingArea: boolean;
  };
}

export interface Experience {
  id: string;
  title: string;
  subtitle: string;
  category: 'Wellness & Spa' | 'Ocean & Nature' | 'Bespoke Dining' | 'Culture & Heritage';
  timing: string;
  duration: string;
  image: string;
  description: string;
  inclusions: string[];
  highlight: string;
}

export interface DiningVenue {
  id: string;
  name: string;
  type: string;
  cuisine: string;
  atmosphere: string;
  hours: string;
  dressCode: string;
  image: string;
  description: string;
  signatureDishes: string[];
  features: string[];
}

export interface SpecialOffer {
  id: string;
  title: string;
  tag: string;
  validity: string;
  description: string;
  savings: string;
  inclusions: string[];
  image: string;
  code: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Architecture' | 'Villas' | 'Pools & Ocean' | 'Dining' | 'Wellness';
  image: string;
  caption: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  guestName: string;
  guestLocation: string;
  stayDate: string;
  rating: number;
  villaStayed: string;
  verifiedStay: boolean;
  pressSource?: string;
}

export interface BookingSearchParams {
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  category: RoomCategory;
}

export interface BookingEnquiry {
  roomName: string;
  roomId?: string;
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  specialRequests?: string;
  totalNights: number;
  estimatedPriceINR: number;
  referenceId: string;
}

export type CurrencyCode = 'INR' | 'USD' | 'EUR' | 'GBP';

export interface CurrencyConfig {
  code: CurrencyCode;
  symbol: string;
  rateAgainstINR: number;
  locale: string;
}
