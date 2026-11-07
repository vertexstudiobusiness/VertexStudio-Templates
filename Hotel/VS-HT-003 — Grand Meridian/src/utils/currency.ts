import { CurrencyCode, CurrencyConfig } from '../types';

export const CURRENCIES: Record<CurrencyCode, CurrencyConfig> = {
  INR: {
    code: 'INR',
    symbol: '₹',
    rate: 1,
    label: 'INR (₹) - Indian Rupee'
  },
  USD: {
    code: 'USD',
    symbol: '$',
    rate: 0.0116, // approx 1 USD = 86.2 INR
    label: 'USD ($) - US Dollar'
  },
  EUR: {
    code: 'EUR',
    symbol: '€',
    rate: 0.0108, // approx 1 EUR = 92.5 INR
    label: 'EUR (€) - Euro'
  },
  GBP: {
    code: 'GBP',
    symbol: '£',
    rate: 0.0091, // approx 1 GBP = 110 INR
    label: 'GBP (£) - British Pound'
  },
  AED: {
    code: 'AED',
    symbol: 'AED ',
    rate: 0.0426, // approx 1 AED = 23.5 INR
    label: 'AED - UAE Dirham'
  }
};

export const formatPrice = (amountINR: number, currency: CurrencyCode = 'INR'): string => {
  const config = CURRENCIES[currency] || CURRENCIES.INR;
  const converted = amountINR * config.rate;

  if (currency === 'INR') {
    return `₹${Math.round(converted).toLocaleString('en-IN')}`;
  } else if (currency === 'AED') {
    return `AED ${Math.round(converted).toLocaleString('en-US')}`;
  } else {
    return `${config.symbol}${Math.round(converted).toLocaleString('en-US')}`;
  }
};
