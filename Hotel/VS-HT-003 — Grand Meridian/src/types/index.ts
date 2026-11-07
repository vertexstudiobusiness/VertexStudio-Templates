export type CurrencyCode = 'INR' | 'USD' | 'EUR' | 'GBP' | 'AED';

export interface CurrencyConfig {
  code: CurrencyCode;
  symbol: string;
  rate: number; // against INR (base is 1 INR)
  label: string;
}

export interface Amenity {
  iconName: string;
  name: string;
  description?: string;
}

export interface Room {
  id: string;
  name: string;
  tagline: string;
  category: 'executive' | 'deluxe' | 'suite' | 'presidential';
  priceINR: number;
  originalPriceINR?: number;
  sizeSqFt: number;
  sizeSqM: number;
  bedType: string;
  maxGuests: number;
  maxAdults: number;
  maxChildren: number;
  view: string;
  featured: boolean;
  images: string[];
  description: string;
  keyAmenities: string[];
  fullAmenities: {
    category: string;
    items: string[];
  }[];
  specifications: {
    workStation: string;
    connectivity: string;
    bathroom: string;
    soundproofing: string;
  };
  inclusions: string[];
}

export interface Addon {
  id: string;
  name: string;
  priceINR: number;
  description: string;
  icon: string;
  perNight: boolean;
}

export interface BookingFormData {
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  roomId: string;
  selectedAddons: string[];
  promoCode: string;
  discountPercent: number;
  // Guest Details
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  companyName?: string;
  gstin?: string;
  specialRequests?: string;
  flightNumber?: string;
  estimatedArrivalTime?: string;
}

export interface ConfirmedBooking {
  bookingId: string;
  createdAt: string;
  room: Room;
  formData: BookingFormData;
  nights: number;
  baseAmountINR: number;
  addonsAmountINR: number;
  discountAmountINR: number;
  taxAmountINR: number; // 18% GST
  totalAmountINR: number;
  paymentMethod: 'pay_at_hotel' | 'corporate_billing' | 'card_online';
}

export interface MeetingVenue {
  id: string;
  name: string;
  areaSqFt: number;
  areaSqM: number;
  ceilingHeightM: number;
  image: string;
  description: string;
  capacities: {
    theater: number;
    classroom: number;
    uShape: number;
    banquet: number;
    boardroom: number;
  };
  features: string[];
  idealFor: string;
}

export interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  timing: string;
  dressCode: string;
  image: string;
  description: string;
  signatureDishes: {
    name: string;
    description: string;
    priceINR: number;
    dietary: 'veg' | 'non-veg';
  }[];
}

export interface CorporateOffer {
  id: string;
  title: string;
  badge: string;
  validity: string;
  description: string;
  benefits: string[];
  terms: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  avatar: string;
  rating: number;
  content: string;
  verifiedStay: boolean;
  date: string;
}
