import type { MerchItem } from '../types';

export const BEANS_AND_MERCH: MerchItem[] = [
  {
    id: 'bean-1',
    name: 'Ratnagiri Estate — Washed Lot #42',
    category: 'beans',
    description: 'From the misty slopes of Chikmagalur at 1,350m elevation. Shade-grown under silver oak canopy. Exceptional sweetness with bright malic apple acidity.',
    price: 680,
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=800&auto=format&fit=crop',
    weightOrSize: '250g Whole Bean / Fresh Roast',
    features: ['100% Arabica SLN 79.5', 'SCA Cup Score: 87.5', 'Roast Date: Stamped Fresh'],
    inStock: true,
    tastingNotes: ['Crisp Red Apple', 'Wild Honey', 'Jasmine Bloom'],
    roastLevel: 'Light-Medium (Omni-Roast)'
  },
  {
    id: 'bean-2',
    name: 'Attikan Estate — Anaerobic Natural',
    category: 'beans',
    description: 'Harvested from Biligirirangana Hills. 72-hour anaerobic fermentation in stainless tanks produces an explosion of tropical fruit aromatics and rum sweetness.',
    price: 740,
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=800&auto=format&fit=crop',
    weightOrSize: '250g Nitrogen-Flushed Bag',
    features: ['Rare Nano-Lot', 'SCA Cup Score: 89.0', 'Fermentation: 72hr Anaerobic'],
    inStock: true,
    tastingNotes: ['Passion Fruit', '70% Dark Chocolate', 'Dark Rum'],
    roastLevel: 'Light (Filter Roast)'
  },
  {
    id: 'bean-3',
    name: 'Brew & Co. Signature Roaster Blend',
    category: 'beans',
    description: 'Our flagship café espresso blend uniting washed Chikmagalur Arabica with honey-processed Coorg beans. Formulated for dense crema and rich chocolate-hazelnut milk drinks.',
    price: 980,
    image: 'https://images.unsplash.com/photo-1587734195503-904fca47e0e9?q=80&w=800&auto=format&fit=crop',
    weightOrSize: '500g Valve Bag',
    features: ['Estate Sourced', 'Optimized for Espresso & Moka Pot', 'Consistent Creaminess'],
    inStock: true,
    tastingNotes: ['Belgian Chocolate', 'Roasted Almond', 'Toffee'],
    roastLevel: 'Medium-Dark'
  },
  {
    id: 'bean-4',
    name: 'Monsoon Malabar Peaberry Reserve',
    category: 'beans',
    description: 'Exposed to monsoon winds along the Arabian Sea coast for 12 weeks. Natural swelling strips acidity, yielding an ultra-heavy syrupy body with earthy spice.',
    price: 620,
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop',
    weightOrSize: '250g Micro-Lot',
    features: ['Low Acidity', 'High Crema Yield', 'Traditional Monsooned'],
    inStock: true,
    tastingNotes: ['Pipe Tobacco', 'Cardamom Pod', 'Dark Molasses'],
    roastLevel: 'Medium-Dark'
  },
  {
    id: 'merch-1',
    name: 'Brew & Co. Matte Copper Travel Tumbler',
    category: 'lifestyle',
    description: 'Double-wall vacuum insulated 304 food-grade stainless steel with internal ceramic coating to preserve genuine coffee flavor. 12hr hot / 24hr cold.',
    price: 1450,
    image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?q=80&w=800&auto=format&fit=crop',
    weightOrSize: '350ml / 12oz Capacity',
    features: ['Leakproof Magnetic Lid', 'Pure Taste Ceramic Lining', 'Car Cupholder Friendly'],
    inStock: true
  },
  {
    id: 'merch-2',
    name: 'Artisanal Ceramic V60 & Carafe Set',
    category: 'equipment',
    description: 'Handcrafted by studio potters in Bangalore using local stoneware clay. Interior spiral ribs engineered for ideal 3-minute water draw down time.',
    price: 2200,
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop',
    weightOrSize: 'Size 02 (1-4 Cups) + 600ml Carafe',
    features: ['Hand-thrown Stoneware', 'Thermal Retention', 'Includes 40 Bleached Filters'],
    inStock: true
  }
];

export const GRIND_OPTIONS = [
  { id: 'whole-bean', label: 'Whole Bean (Freshest)', desc: 'For grinding at home right before brewing' },
  { id: 'espresso', label: 'Fine (Espresso & Moka Pot)', desc: 'Dense powdery grind for 9-bar pressure' },
  { id: 'aeropress', label: 'Medium-Fine (Aeropress)', desc: 'Ideal for 1-2 minute inverted extractions' },
  { id: 'pour-over', label: 'Medium (Pour-Over V60 & Chemex)', desc: 'Resembles sea salt for 3-minute pour-overs' },
  { id: 'french-press', label: 'Coarse (French Press & Cold Brew)', desc: 'Large particles for clean immersion filtering' }
];
