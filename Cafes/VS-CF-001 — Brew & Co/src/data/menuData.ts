import type { MenuItem } from '../types';

export const MENU_CATEGORIES = [
  { id: 'all', label: 'Full Menu' },
  { id: 'hot-coffee', label: 'Hot Coffee' },
  { id: 'iced-coffee', label: 'Iced Coffee' },
  { id: 'non-coffee', label: 'Non-Coffee' },
  { id: 'breakfast', label: 'Breakfast' },
  { id: 'desserts', label: 'Desserts' },
] as const;

export const MENU_ITEMS: MenuItem[] = [
  // HOT COFFEE
  {
    id: 'hc-1',
    name: 'Espresso Doppio',
    description: 'Double shot of our seasonal micro-lot, extracted with 9-bar pressure for a silky, thick crema and complex floral acidity.',
    price: 190,
    category: 'hot-coffee',
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?q=80&w=600&auto=format&fit=crop',
    tags: ['Signature', 'Single Origin'],
    isSignature: true,
    roastLevel: 'Medium-Light',
    tastingNotes: ['Blood Orange', 'Dark Cocoa', 'Honey'],
    calories: 5
  },
  {
    id: 'hc-2',
    name: 'Classic Americano',
    description: 'Double espresso pulled directly over 180ml of 92°C filtered mineral water, preserving the volatile aromatic oils without dilution.',
    price: 210,
    category: 'hot-coffee',
    image: 'https://images.unsplash.com/photo-1551030173-122aabc4489c?q=80&w=600&auto=format&fit=crop',
    tags: ['Vegan', 'Low Calorie'],
    roastLevel: 'Medium',
    tastingNotes: ['Toasted Pecan', 'Molasses', 'Cacao'],
    calories: 5
  },
  {
    id: 'hc-3',
    name: 'Cortado 1:1',
    description: 'Equal parts double espresso and warm steamed whole milk, gently cutting acidity in a 130ml Gibraltar glass.',
    price: 230,
    category: 'hot-coffee',
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=600&auto=format&fit=crop',
    tags: ['House Favorite'],
    roastLevel: 'Medium-Dark',
    tastingNotes: ['Roasted Walnut', 'Brown Sugar', 'Cream'],
    calories: 75
  },
  {
    id: 'hc-4',
    name: 'Silk Flat White',
    description: 'A double ristretto shot paired with velvety micro-foam milk poured at a precise 45-degree angle.',
    price: 260,
    category: 'hot-coffee',
    image: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?q=80&w=600&auto=format&fit=crop',
    tags: ['Signature', 'Barista Pick'],
    isSignature: true,
    roastLevel: 'Medium-Light',
    tastingNotes: ['Sweet Almond', 'Fudge', 'Vanilla'],
    calories: 120
  },
  {
    id: 'hc-5',
    name: 'Artisan Cappuccino',
    description: 'Traditional 1:1:1 balance of espresso, steamed milk, and dense cloud foam dusted with Valrhona 70% dark cocoa.',
    price: 250,
    category: 'hot-coffee',
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=600&auto=format&fit=crop',
    tags: ['Classic'],
    roastLevel: 'Medium',
    tastingNotes: ['Milk Chocolate', 'Cacao Dust', 'Hazelnut'],
    calories: 130
  },
  {
    id: 'hc-6',
    name: 'Caffè Latte',
    description: 'Mild, creamy espresso beverage with a gentle layer of micro-foam, allowing the mellow caramel notes of our house blend to shine.',
    price: 260,
    category: 'hot-coffee',
    image: 'https://images.unsplash.com/photo-1561047029-3000c68339ca?q=80&w=600&auto=format&fit=crop',
    tags: ['Creamy'],
    roastLevel: 'Medium',
    tastingNotes: ['Sweet Cream', 'Caramelized Sugar', 'Malt'],
    calories: 160
  },
  {
    id: 'hc-7',
    name: 'Single Origin Aeropress',
    description: 'Submerged pressure-brewed single estate micro-lot from Bababudangiri. Intense, clean cup with juicy fruit sweetness.',
    price: 280,
    category: 'hot-coffee',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=600&auto=format&fit=crop',
    tags: ['Single Origin', 'Manual Brew'],
    roastLevel: 'Light',
    tastingNotes: ['Red Berry', 'Lemongrass', 'Raw Honey'],
    calories: 5
  },
  {
    id: 'hc-8',
    name: 'Valrhona Mocha',
    description: 'Double espresso blended with melted 70% dark bean-to-bar single estate chocolate and micro-steamed oat or dairy milk.',
    price: 290,
    category: 'hot-coffee',
    image: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?q=80&w=600&auto=format&fit=crop',
    tags: ['Indulgent'],
    roastLevel: 'Medium-Dark',
    tastingNotes: ['Dark Chocolate', 'Espresso', 'Marshmallow'],
    calories: 240
  },

  // ICED COFFEE
  {
    id: 'ic-1',
    name: '24-Hour Kyoto Cold Brew',
    description: 'Drip by slow drip through chilled mineral water. Delicate, aromatic, wine-like profile served over custom crystal sphere ice.',
    price: 280,
    category: 'iced-coffee',
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?q=80&w=600&auto=format&fit=crop',
    tags: ['Signature', 'Bestseller'],
    isSignature: true,
    roastLevel: 'Light',
    tastingNotes: ['Black Cherry', 'Bourbon Oak', 'Plum'],
    calories: 10
  },
  {
    id: 'ic-2',
    name: 'Iced Spanish Latte',
    description: 'Layers of slow-dripped espresso, chilled whole milk, and sweetened condensed milk over cracked ice, dusted with cinnamon.',
    price: 290,
    category: 'iced-coffee',
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?q=80&w=600&auto=format&fit=crop',
    tags: ['Sweet & Creamy'],
    isSignature: true,
    roastLevel: 'Medium-Dark',
    tastingNotes: ['Dulce De Leche', 'Cinnamon', 'Espresso'],
    calories: 220
  },
  {
    id: 'ic-3',
    name: 'Draft Nitro Cold Brew',
    description: 'Infused with high-purity food-grade nitrogen on tap. Pours with a cascading Guinness-like head and naturally sweet, creamy mouthfeel.',
    price: 310,
    category: 'iced-coffee',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=600&auto=format&fit=crop',
    tags: ['On Tap', 'Velvety'],
    roastLevel: 'Medium-Light',
    tastingNotes: ['Silky Cream', 'Chocolate Malt', 'Blackcurrant'],
    calories: 15
  },
  {
    id: 'ic-4',
    name: 'Tonic & Espresso Sparkler',
    description: 'Chilled botanical Indian tonic water layered with freshly pulled espresso float, expressed kaffir lime, and rosemary sprig.',
    price: 290,
    category: 'iced-coffee',
    image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?q=80&w=600&auto=format&fit=crop',
    tags: ['Refreshing', 'Sparkling'],
    roastLevel: 'Light',
    tastingNotes: ['Quinine Crisp', 'Citrus Peel', 'Bright Berry'],
    calories: 80
  },
  {
    id: 'ic-5',
    name: 'Iced Sea Salt Caramel Latte',
    description: 'Chilled double espresso, house-crafted jaggery sea salt caramel drizzle, cold textured milk, and flaky Maldon salt.',
    price: 310,
    category: 'iced-coffee',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=600&auto=format&fit=crop',
    tags: ['House Special'],
    roastLevel: 'Medium',
    tastingNotes: ['Salted Butterscotch', 'Espresso', 'Cream'],
    calories: 230
  },

  // NON-COFFEE
  {
    id: 'nc-1',
    name: 'Ceremonial Uji Matcha Latte',
    description: 'Stone-ground first-harvest green tea whisked with bamboo chasen, poured over silky textured oat or organic dairy milk.',
    price: 320,
    category: 'non-coffee',
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?q=80&w=600&auto=format&fit=crop',
    tags: ['Ceremonial Grade', 'Antioxidant'],
    tastingNotes: ['Umami', 'Fresh Vegetal', 'Sweet Cream'],
    calories: 110
  },
  {
    id: 'nc-2',
    name: 'Artisan Single Origin Hot Chocolate',
    description: 'Melted 70% Idukki single-estate chocolate ganache steamed with whole dairy milk, topped with toasted house marshmallow.',
    price: 290,
    category: 'non-coffee',
    image: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?q=80&w=600&auto=format&fit=crop',
    tags: ['Gluten-Free', 'Decadent'],
    tastingNotes: ['Dark Cocoa', 'Toasted Vanilla', 'Red Fruit'],
    calories: 260
  },
  {
    id: 'nc-3',
    name: 'Spiced Cascara Tisane',
    description: 'Sun-dried organic coffee cherry pulps steeped with star anise, cinnamon quill, and wild forest honey. Naturally low caffeine.',
    price: 240,
    category: 'non-coffee',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=600&auto=format&fit=crop',
    tags: ['Zero Waste', 'Herbal'],
    tastingNotes: ['Rosehip', 'Hibiscus', 'Tamarind Sweetness'],
    calories: 35
  },
  {
    id: 'nc-4',
    name: 'Cold-Pressed Valencia Orange & Mint',
    description: '100% pure raw cold-pressed citrus juice with bruised garden mint leaves and crushed mountain ice.',
    price: 260,
    category: 'non-coffee',
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=600&auto=format&fit=crop',
    tags: ['100% Fresh', 'Vegan'],
    tastingNotes: ['Zesty Orange', 'Crisp Mint', 'Floral Citrus'],
    calories: 90
  },

  // BREAKFAST
  {
    id: 'bf-1',
    name: 'Artisanal Sourdough Avocado Tartine',
    description: 'Naturally fermented 36hr country sourdough, smashed Hass avocado, Persian sheep feta, pickled shallots, togarashi, and micro-herbs.',
    price: 360,
    category: 'breakfast',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=600&auto=format&fit=crop',
    tags: ['Vegetarian', 'Chef Signature'],
    isSignature: true,
    tastingNotes: ['Creamy Avocado', 'Tangy Sourdough', 'Zesty Crunch'],
    calories: 380
  },
  {
    id: 'bf-2',
    name: 'Truffle Scrambled Eggs on Brioche',
    description: 'Organic free-range eggs slow-scrambled with French Normandy butter and black truffle emulsion, on toasted golden brioche.',
    price: 420,
    category: 'breakfast',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=600&auto=format&fit=crop',
    tags: ['House Favorite'],
    tastingNotes: ['Velvety Egg', 'Earth Truffle', 'Buttery Sweet'],
    calories: 490
  },
  {
    id: 'bf-3',
    name: 'Levantine Shakshuka & Feta',
    description: 'San Marzano slow-simmered tomato ragù spiced with cumin, smoked paprika, two pasture-raised eggs, crumbles of Greek feta, served with warm pita.',
    price: 390,
    category: 'breakfast',
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?q=80&w=600&auto=format&fit=crop',
    tags: ['Warm & Comforting'],
    tastingNotes: ['Smoky Pepper', 'Tangy Tomato', 'Salty Feta'],
    calories: 420
  },
  {
    id: 'bf-4',
    name: 'Almond & Frangipane Twice-Baked Croissant',
    description: 'Laminated French butter croissant filled with almond cream, topped with sliced toasted Marcona almonds and powdered sugar.',
    price: 260,
    category: 'breakfast',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=600&auto=format&fit=crop',
    tags: ['Fresh Bakery'],
    tastingNotes: ['Toasted Nut', 'Sweet Frangipane', 'Flaky Crisp'],
    calories: 340
  },

  // DESSERTS
  {
    id: 'ds-1',
    name: 'Signature Basque Burnt Cheesecake',
    description: 'Baked at 240°C for a deeply caramelized mahogany crust and an impossibly molten, silky center scented with Madagascar vanilla.',
    price: 340,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=600&auto=format&fit=crop',
    tags: ['Gluten-Free', 'Bestseller'],
    isSignature: true,
    tastingNotes: ['Burnt Caramel Crust', 'Silken Custard', 'Vanilla'],
    calories: 410
  },
  {
    id: 'ds-2',
    name: 'Brew & Co. Espresso Tiramisu',
    description: 'Ladyfingers submerged in our Kyoto cold brew and aged coffee liqueur, layered with whipped Zabaione mascarpone and bitter cocoa.',
    price: 360,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=600&auto=format&fit=crop',
    tags: ['House Signature'],
    isSignature: true,
    tastingNotes: ['Espresso Punch', 'Lush Cream', 'Dark Cocoa'],
    calories: 380
  },
  {
    id: 'ds-3',
    name: 'Warm 70% Dark Chocolate Fondant',
    description: 'Single estate Anamalai chocolate lava cake with a flowing molten core, paired with hand-churned Tahitian vanilla bean gelato.',
    price: 380,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=600&auto=format&fit=crop',
    tags: ['Fresh Baked (12 mins)'],
    tastingNotes: ['Intense Cocoa', 'Warm Ganache', 'Cold Gelato'],
    calories: 450
  },
  {
    id: 'ds-4',
    name: 'Sea Salt & Roasted Pistachio Cookie',
    description: 'Crisp chewy sourdough cookie studded with Valrhona dulcey wafers, Bronte pistachios, and coarse fleur de sel flakes.',
    price: 210,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=600&auto=format&fit=crop',
    tags: ['Freshly Baked'],
    tastingNotes: ['Roasted Pistachio', 'Caramelized White Chocolate', 'Fleur de Sel'],
    calories: 280
  }
];
