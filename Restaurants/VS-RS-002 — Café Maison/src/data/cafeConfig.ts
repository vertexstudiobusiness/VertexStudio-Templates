import type { CafeConfig } from '../types';

export const CAFE_CONFIG: CafeConfig = {
  name: "Café Maison",
  tagline: "A Little Pause, A Lot of Pleasure",
  established: 2021,
  phone: "+91 98201 44520",
  whatsappNumber: "919820144520", // Change this to your business WhatsApp number (with country code, no + or spaces)
  whatsappDisplayNumber: "+91 98201 44520",
  email: "bonjour@cafemaison.in",
  address: {
    street: "18 Rue Saint-Honoré Arcade, Pali Hill",
    neighborhood: "Bandra West",
    city: "Mumbai",
    state: "Maharashtra",
    postalCode: "400050",
    landmark: "Opposite The Old Olive Courtyard",
  },
  hours: {
    weekdays: "Monday – Friday: 07:30 AM – 09:30 PM",
    weekends: "Saturday – Sunday: 08:00 AM – 10:30 PM",
    kitchenCloses: "Kitchen orders close 45 minutes before closing",
  },
  social: {
    instagram: "https://instagram.com/cafemaison.artisan",
    whatsapp: "https://wa.me/919820144520",
    googleMaps: "https://maps.google.com/?q=Pali+Hill+Bandra+West+Mumbai",
  },
};

export const BRAND_STORY = {
  headline: "Born between Paris courtyards and Copenhagen roasteries.",
  shortDescription: "Café Maison is an independent neighborhood refuge where the exacting traditions of classical French baking meet the warmth of Scandinavian slow living. Every cup begins with shade-grown single-origin harvests, and every pastry is laminated by hand with French AOP butter over a 72-hour cold fermentation.",
  quote: "We wanted a sanctuary where time softens, conversations linger over porcelain, and the aroma of roasted beans feels like a quiet homecoming.",
  founders: "Éloise Dubois & Soren Lindqvist",
  philosophyPillars: [
    {
      title: "The Single Origin Ritual",
      description: "Direct-trade beans sourced from high-altitude micro-lots in Ethiopia, Colombia, and Chikmagalur, roasted gently to preserve terroir.",
      tag: "Terroir & Light Roast"
    },
    {
      title: "72-Hour Fermentation",
      description: "Our viennoiserie is rolled with Isigny Ste Mère French AOP butter, achieving 81 delicate layers of shatteringly crisp perfection.",
      tag: "Pure Butter Viennoiserie"
    },
    {
      title: "The Hygge Sanctuary",
      description: "Natural travertine stone, European white oak, warm linen shades, and acoustic jazz curated to let your thoughts breathe freely.",
      tag: "Quiet Luxury Ambiance"
    }
  ]
};
