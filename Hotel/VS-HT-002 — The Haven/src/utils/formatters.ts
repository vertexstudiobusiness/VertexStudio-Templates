import type { Currency } from '../types/hotel';

// Exchange rates relative to INR (approximate baseline for demo conversion)
const CONVERSION_RATES: Record<Currency, number> = {
  INR: 1,
  USD: 1 / 86,
  EUR: 1 / 93,
};

export const formatPrice = (amountINR: number, currency: Currency = 'INR'): string => {
  const converted = amountINR * CONVERSION_RATES[currency];

  if (currency === 'INR') {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(converted);
  }

  if (currency === 'USD') {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(converted);
  }

  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(converted);
};

export const calculateNights = (checkInStr: string, checkOutStr: string): number => {
  if (!checkInStr || !checkOutStr) return 1;
  const start = new Date(checkInStr);
  const end = new Date(checkOutStr);
  const diffTime = end.getTime() - start.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays > 0 ? diffDays : 1;
};

export const formatDateDisplay = (dateStr: string): string => {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
};

export const generateBookingReference = (): string => {
  const prefix = 'HVN';
  const random = Math.floor(100000 + Math.random() * 900000);
  return `${prefix}-${random}`;
};

export const createWhatsAppUrl = (
  roomName: string,
  checkIn: string,
  checkOut: string,
  guests: number,
  estimatedINR: number
): string => {
  const phone = '919876543210';
  const message = `Hello The Haven Concierge,

I would like to enquire about a reservation:
• Sanctuary Room: ${roomName}
• Check-in: ${formatDateDisplay(checkIn) || 'Flexible'}
• Check-out: ${formatDateDisplay(checkOut) || 'Flexible'}
• Guests: ${guests} guest(s)
• Estimated Total: ${formatPrice(estimatedINR, 'INR')} (incl. GST)

Kindly share current availability and bespoke reservation details. Thank you!`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};
