export type Currency = 'INR' | 'USD' | 'EUR';

export interface Room {
  id: string;
  name: string;
  category: 'room' | 'suite' | 'villa' | 'residence';
  tagline: string;
  priceINR: number;
  sizeSqFt: number;
  sizeSqM: number;
  maxGuests: number;
  bedType: string;
  view: string;
  description: string;
  longDescription: string;
  features: string[];
  amenities: string[];
  images: string[];
  highlight: string;
  available: boolean;
}

export interface Experience {
  id: string;
  title: string;
  category: 'culinary' | 'wellness' | 'discoveries' | 'artisanal';
  subtitle: string;
  duration: string;
  timing: string;
  description: string;
  image: string;
  included: string[];
  priceINR?: number;
}

export interface JournalArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  content: string[];
  image: string;
  author: {
    name: string;
    role: string;
  };
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location: string;
  stayDate: string;
  roomStayed: string;
  rating: number;
  source: 'Conde Nast Traveler' | 'Architectural Digest' | 'Verified Guest';
}

export interface GalleryItem {
  id: string;
  url: string;
  title: string;
  caption: string;
  category: 'architecture' | 'interiors' | 'grounds' | 'dining';
  aspectRatio: 'landscape' | 'portrait' | 'square';
}

export interface BookingFormData {
  roomId: string;
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  specialRequests: string;
  airportTransfer: boolean;
}

export interface BookingConfirmationDetails extends BookingFormData {
  referenceId: string;
  roomName: string;
  nights: number;
  baseAmountINR: number;
  taxAmountINR: number;
  totalAmountINR: number;
  createdAt: string;
}
