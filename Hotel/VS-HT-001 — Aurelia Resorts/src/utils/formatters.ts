import type { CurrencyCode, CurrencyConfig } from '../types';

export const CURRENCIES: Record<CurrencyCode, CurrencyConfig> = {
  INR: {
    code: 'INR',
    symbol: '₹',
    rateAgainstINR: 1,
    locale: 'en-IN',
  },
  USD: {
    code: 'USD',
    symbol: '$',
    rateAgainstINR: 0.0116, // approx 1 USD = 86.2 INR
    locale: 'en-US',
  },
  EUR: {
    code: 'EUR',
    symbol: '€',
    rateAgainstINR: 0.0108,
    locale: 'en-DE',
  },
  GBP: {
    code: 'GBP',
    symbol: '£',
    rateAgainstINR: 0.0091,
    locale: 'en-GB',
  },
};

export function formatPrice(amountINR: number, currency: CurrencyCode = 'INR'): string {
  const config = CURRENCIES[currency];
  const converted = amountINR * config.rateAgainstINR;
  
  if (currency === 'INR') {
    return `₹${Math.round(converted).toLocaleString('en-IN')}`;
  }
  
  return new Intl.NumberFormat(config.locale, {
    style: 'currency',
    currency: config.code,
    maximumFractionDigits: 0,
  }).format(converted);
}

export function calculateNights(checkIn: string, checkOut: string): number {
  if (!checkIn || !checkOut) return 1;
  const start = new Date(checkIn);
  const end = new Date(checkOut);
  const diffTime = end.getTime() - start.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays > 0 ? diffDays : 1;
}

export function formatDateDisplay(dateString: string): string {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });
}

export function getTodayDateString(): string {
  const today = new Date();
  return today.toISOString().split('T')[0];
}

export function getTomorrowDateString(afterDateString?: string): string {
  const base = afterDateString ? new Date(afterDateString) : new Date();
  base.setDate(base.getDate() + (afterDateString ? 2 : 1));
  return base.toISOString().split('T')[0];
}

export function generateWhatsAppLink(details: {
  roomName: string;
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  guestName?: string;
  phone?: string;
}): string {
  const hotelWhatsApp = '919876543210';
  const nights = calculateNights(details.checkIn, details.checkOut);
  
  const text = `*Luxury Reservation Enquiry - Aurelia Resorts & Spa*\n\n` +
    `Hello Concierge Team, I would like to inquire about booking availability:\n` +
    `• *Villa/Suite:* ${details.roomName}\n` +
    `• *Check-in:* ${details.checkIn || 'To be decided'}\n` +
    `• *Check-out:* ${details.checkOut || 'To be decided'} (${nights} Night${nights > 1 ? 's' : ''})\n` +
    `• *Guests:* ${details.adults} Adult(s), ${details.children} Child(ren)\n` +
    (details.guestName ? `• *Guest Name:* ${details.guestName}\n` : '') +
    `\nPlease share availability, special bespoke arrangements, and package inclusions.`;

  return `https://wa.me/${hotelWhatsApp}?text=${encodeURIComponent(text)}`;
}

export function generateReferenceId(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let result = 'AUR-';
  for (let i = 0; i < 6; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}
