import type { SeasonalSpecial } from '../types';

export const SEASONAL_SPECIALS: SeasonalSpecial[] = [
  {
    id: 'season-1',
    name: 'Spiced Cascara & Yuzu Tonic',
    badge: 'Limited Autumn Micro-Lot',
    description: 'Brewed sun-dried organic coffee cherry husk steeped with Japanese yuzu cordial, sparkling cinchona tonic, and crushed star anise on rock ice.',
    price: 320,
    image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?q=80&w=800&auto=format&fit=crop',
    ingredients: ['Cascara Tea', 'Japanese Yuzu', 'Botanical Tonic', 'Star Anise', 'Clear Ice'],
    flavorProfile: 'Bright, effervescent, botanical with floral berry notes',
    availableUntil: 'Nov 30, 2026'
  },
  {
    id: 'season-2',
    name: 'Bronte Pistachio Praline Cortado',
    badge: 'Chef Collaboration',
    description: 'Double ristretto poured over stone-ground Bronte pistachio paste, emulsified with warm textured oat milk and pistachio praline crunch.',
    price: 350,
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=800&auto=format&fit=crop',
    ingredients: ['Double Ristretto', 'Bronte Pistachio Butter', 'Oat Milk', 'Praline Crumble'],
    flavorProfile: 'Nutty, buttery, velvety with delicate caramelized finish',
    availableUntil: 'Dec 15, 2026'
  },
  {
    id: 'season-3',
    name: 'Kashmiri Saffron Siphon Reserve',
    badge: 'Tabletop Extraction',
    description: 'Rare heirloom Arabica from Bababudangiri vacuum-brewed via tabletop halogen siphon, infused with Mongra saffron strands and crushed green cardamom pod.',
    price: 390,
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop',
    ingredients: ['Micro-lot Arabica', 'Kashmiri Mongra Saffron', 'Green Cardamom', 'Alkaline Water'],
    flavorProfile: 'Silky, aromatic, tea-like body with honeyed saffron undertones',
    availableUntil: 'Dec 31, 2026'
  },
  {
    id: 'season-4',
    name: 'Smoked Sea Salt Coconut Cold Foam',
    badge: 'Barista Innovation',
    description: 'Our 24hr Kyoto cold brew crowned with thick aerated coconut cream cold foam, toasted coconut chips, and smoked Malabar sea salt.',
    price: 330,
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?q=80&w=800&auto=format&fit=crop',
    ingredients: ['24hr Kyoto Cold Brew', 'Whipped Coconut Cold Foam', 'Toasted Flakes', 'Smoked Sea Salt'],
    flavorProfile: 'Tropical sweetness balanced by bold dark roast & savory sea salt',
    availableUntil: 'Jan 15, 2027'
  }
];
