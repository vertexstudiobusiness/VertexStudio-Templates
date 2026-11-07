import { Coupon } from '../types';

export const COUPONS: Coupon[] = [
  {
    code: 'LUNA10',
    discountType: 'percentage',
    discountValue: 10,
    minOrderValue: 2000,
    description: '10% off on your luxury order above ₹2,000'
  },
  {
    code: 'FESTIVE500',
    discountType: 'fixed',
    discountValue: 500,
    minOrderValue: 3500,
    description: '₹500 flat savings on festive collections above ₹3,500'
  },
  {
    code: 'FIRSTORDER',
    discountType: 'percentage',
    discountValue: 15,
    minOrderValue: 2500,
    description: '15% welcome treat for first-time patrons'
  },
  {
    code: 'LUXE20',
    discountType: 'percentage',
    discountValue: 20,
    minOrderValue: 8000,
    description: '20% off on premium wardrobe curation above ₹8,000'
  }
];
