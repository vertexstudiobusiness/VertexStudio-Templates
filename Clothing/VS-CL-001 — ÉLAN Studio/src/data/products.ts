import type { Product, LookbookItem } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'elan-01',
    name: 'Mulberry Silk Column Gown',
    subtitle: 'Varanasi Handloom Silk with Fluted Silhouette',
    price: 34500,
    originalPrice: 38000,
    category: 'Dresses',
    subCategory: 'Evening Wear',
    gender: 'Women',
    images: [
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=85',
    ],
    colors: [
      { name: 'Onyx Noir', hex: '#121212', imageIndex: 0 },
      { name: 'Warm Champagne', hex: '#d9c6aa', imageIndex: 1 },
      { name: 'Raw Ivory', hex: '#f4ede2', imageIndex: 2 }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    isNew: true,
    isBestseller: true,
    isAtelierExclusive: true,
    inStock: true,
    stockCount: 4,
    description: 'An architectural column gown crafted from weightless 100% pure Mulberry silk, woven by master artisans in Varanasi. Features a clean bateau neckline transitioning into a cascading fluid drape that skims the silhouette with poise and quiet luxury.',
    fabricDetails: {
      composition: '100% Pure Mulberry Silk (85 GSM)',
      origin: 'Varanasi, Uttar Pradesh, India',
      weight: 'Featherweight, Fluid Drape',
      care: [
        'Dry clean only by luxury textile specialists',
        'Store in breathable cotton garment bag provided',
        'Cool iron on reverse with protective pressing cloth',
        'Do not steam directly on zari binding'
      ]
    },
    details: [
      'Concealed back zip with hand-stitched silk pulls',
      'French seam construction throughout',
      'Pure silk lining dyed to match',
      'Subtle walking slit at rear hem'
    ],
    stylingTips: 'Pair with minimal architectural gold jewellery and our Hand-Finished Calfskin Jutti-Mules for evening receptions.',
    measurementsModel: 'Model is 5\'10" (178cm) wearing size Small.'
  },
  {
    id: 'elan-02',
    name: 'Artisanal Matka Silk Bandhgala',
    subtitle: 'Hand-Tailored High Collar Structured Jacket',
    price: 42000,
    originalPrice: 48000,
    category: 'Jackets',
    subCategory: 'Tailoring',
    gender: 'Men',
    images: [
      'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1200&q=85'
    ],
    colors: [
      { name: 'Obsidian Black', hex: '#0a0a0a', imageIndex: 0 },
      { name: 'Ash Taupe', hex: '#877c73', imageIndex: 1 }
    ],
    sizes: ['38', '40', '42', '44', '46'],
    isNew: true,
    isBestseller: true,
    isAtelierExclusive: true,
    inStock: true,
    stockCount: 3,
    description: 'An authoritative study in modern Indian sartorial tailoring. Constructed from structured hand-spun Matka silk from West Bengal, this Bandhgala combines historical regal lines with sleek international minimalism. Finished with brushed antique horn buttons.',
    fabricDetails: {
      composition: '100% Handloom Matka Silk, Bemberg Cupro Lining',
      origin: 'Murshidabad & New Delhi Atelier',
      weight: '340 GSM Midweight Structure',
      care: [
        'Specialist dry clean only',
        'Store on contoured cedar hanger',
        'Brush lightly with a horsehair clothes brush after wear'
      ]
    },
    details: [
      'Structured padded shoulders with natural drape',
      'Brushed antique brass & horn button front',
      'Internal passport and card pockets',
      'Fully canvassed chest piece for bespoke comfort'
    ],
    stylingTips: 'Wear over an unbuttoned crisp Supima cotton tunic or styled casually with our High-Waisted Pleated Trousers.',
    measurementsModel: 'Model is 6\'1" (185cm) wearing size 40.'
  },
  {
    id: 'elan-03',
    name: 'Handwoven Chanderi Slip Dress',
    subtitle: 'Semi-Sheer Gold Zari Inset Evening Midi',
    price: 26500,
    category: 'Dresses',
    subCategory: 'Cocktail',
    gender: 'Women',
    images: [
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=85'
    ],
    colors: [
      { name: 'Warm Ivory', hex: '#f8f4ec', imageIndex: 0 },
      { name: 'Subtle Sage', hex: '#8b9688', imageIndex: 1 },
      { name: 'Midnight Charcoal', hex: '#21201e', imageIndex: 2 }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    isNew: false,
    isBestseller: true,
    inStock: true,
    stockCount: 6,
    description: 'Woven in historic Chanderi with ultra-fine silk and mercerized cotton, this slip dress is punctuated by whisper-thin electroplated real gold zari wefts along the bias. Drapes like a liquid second skin.',
    fabricDetails: {
      composition: '70% Pure Silk, 30% Fine Cotton with Zari borders',
      origin: 'Chanderi, Madhya Pradesh, India',
      weight: 'Ultra-lightweight',
      care: [
        'Dry clean recommended',
        'Low iron with protective cloth',
        'Do not wring or spray perfume directly on metallic zari'
      ]
    },
    details: [
      'Delicate spaghetti straps with adjustable gold sliders',
      'Bias cut for natural stretch and body contouring',
      'Removable tonal silk habotai inner slip included',
      'Hand-rolled handkerchief hemline'
    ],
    stylingTips: 'Layer under our Cashmere Cocoon Overcoat for transitional seasons or wear solo for sunlit garden soirees.',
    measurementsModel: 'Model is 5\'9" (175cm) wearing size Small.'
  },
  {
    id: 'elan-04',
    name: 'Tailored Linen Pleated Trousers',
    subtitle: 'High-Rise Extended Waistband Trousers',
    price: 18500,
    category: 'Trousers',
    subCategory: 'Trousers',
    gender: 'Unisex',
    images: [
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1506152983158-b4a74a01c721?auto=format&fit=crop&w=1200&q=85'
    ],
    colors: [
      { name: 'Ecru Sand', hex: '#e8decb', imageIndex: 0 },
      { name: 'Washed Charcoal', hex: '#2c2b29', imageIndex: 1 },
      { name: 'Terra Umber', hex: '#5c483a', imageIndex: 2 }
    ],
    sizes: ['28', '30', '32', '34', '36'],
    isNew: true,
    isBestseller: false,
    inStock: true,
    stockCount: 8,
    description: 'Impeccably tailored trousers woven from French flax linen and spun in India. Double forward pleats and an extended gurkha-style tab waistband offer clean drape without requiring a belt. Breathable yet resilient structure.',
    fabricDetails: {
      composition: '100% Certified European Flax Linen (260 GSM)',
      origin: 'Spun in Coimbatore, Tailored in New Delhi',
      weight: 'Medium Crisp Weight',
      care: [
        'Dry clean or gentle hand wash cold with mild detergent',
        'Line dry in shade',
        'Warm steam while slightly damp for crisp press'
      ]
    },
    details: [
      'Double forward pleats with razor-creased front legs',
      'Side waist adjusters with brushed brass buckles',
      'Deep slash front pockets and dual jetted rear pockets',
      'Unfinished hem length with 2-inch interior allowance'
    ],
    stylingTips: 'Coordinate with our Washed Silk Mandarin Shirt tucked in for effortless daytime sophistication.',
    measurementsModel: 'Model is 6\'0" (183cm) wearing size 32.'
  },
  {
    id: 'elan-05',
    name: 'Washed Silk Mandarin Shirt',
    subtitle: 'Sandwashed Mulberry Silk Relaxed Tunic',
    price: 16500,
    originalPrice: 19500,
    category: 'Shirts',
    subCategory: 'Shirts',
    gender: 'Men',
    images: [
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1620012253295-c15c429fbb3e?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=1200&q=85'
    ],
    colors: [
      { name: 'Pearl Ivory', hex: '#f7f4ed', imageIndex: 0 },
      { name: 'Night Sky Navy', hex: '#111827', imageIndex: 1 },
      { name: 'Olive Drab', hex: '#3f4537', imageIndex: 2 }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    isNew: true,
    isBestseller: true,
    inStock: true,
    stockCount: 12,
    description: 'Crafted from heavy 22-momme sandwashed mulberry silk, giving it a peach-skin matte texture that breathes effortlessly in tropical and temperate climates. The neat standing mandarin collar is finished with natural mother-of-pearl buttons.',
    fabricDetails: {
      composition: '100% Sandwashed Mulberry Silk',
      origin: 'Karnataka Silk Mills',
      weight: '22 Momme Heavy Silk Crepe',
      care: [
        'Hand wash cold with silk elixir or dry clean',
        'Do not twist or wring',
        'Dry flat away from direct sunlight'
      ]
    },
    details: [
      'Architectural standing mandarin collar',
      'Genuine Australian mother-of-pearl buttons',
      'Side seam vents with reinforcement bar tacks',
      'Single needle tailored armholes'
    ],
    stylingTips: 'Wear with sleeves casually rolled twice alongside tailored shorts or our High-Rise Linen Trousers.',
    measurementsModel: 'Model is 6\'2" (188cm) wearing size Large.'
  },
  {
    id: 'elan-06',
    name: 'Artisanal Raw Silk Nehru Coat',
    subtitle: 'Sleeveless Tailored Waistcoat with Zari Detailing',
    price: 24500,
    category: 'Jackets',
    subCategory: 'Waistcoats',
    gender: 'Men',
    images: [
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85'
    ],
    colors: [
      { name: 'Pale Bone', hex: '#e9e3d7', imageIndex: 0 },
      { name: 'Raw Black', hex: '#161616', imageIndex: 1 }
    ],
    sizes: ['38', '40', '42', '44'],
    isNew: false,
    isBestseller: true,
    inStock: true,
    stockCount: 5,
    description: 'The quintessential modern vest for the global Indian closet. Woven from wild Bhagalpur Tussar raw silk featuring visible organic slubs. Embellished with subtle hand-worked tonal kantha stitching along the inner facing.',
    fabricDetails: {
      composition: '100% Wild Tussar Raw Silk',
      origin: 'Bhagalpur, Bihar, India',
      weight: 'Textured Handloom Slub',
      care: ['Specialist dry clean only', 'Keep wrapped in muslin cloth']
    },
    details: [
      'Concealed placket with antique brass press studs',
      'Chest welt pocket tailored for pocket square',
      'Side vents for comfortable movement when seated',
      'Hand-bound armholes and inner seams'
    ],
    stylingTips: 'Layer over our Crisp Organza Shirt or a tonal cotton kurta for festive gatherings and gallery openings.',
    measurementsModel: 'Model is 6\'1" (185cm) wearing size 40.'
  },
  {
    id: 'elan-07',
    name: 'Cashmere Cocoon Overcoat',
    subtitle: 'Double-Faced Himalayan Cashmere Blend Coat',
    price: 68000,
    originalPrice: 75000,
    category: 'Jackets',
    subCategory: 'Overcoats',
    gender: 'Women',
    images: [
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85'
    ],
    colors: [
      { name: 'Camel Warmth', hex: '#b5926c', imageIndex: 0 },
      { name: 'Charcoal Mélange', hex: '#312f2c', imageIndex: 1 }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    isNew: true,
    isBestseller: false,
    isAtelierExclusive: true,
    inStock: true,
    stockCount: 2,
    description: 'A monument to slow luxury craftsmanship. Hand-stitched using double-faced cashmere and virgin wool sourced from high-altitude Himalayan ranges. The unlined interior showcases immaculate handmade blind seam work that takes 32 artisan hours per coat.',
    fabricDetails: {
      composition: '65% Pure Himalayan Cashmere, 35% Superfine Merino Wool',
      origin: 'Ladakh Fibre, Crafted in New Delhi Atelier',
      weight: '520 GSM Ultra-Soft Thermal Drape',
      care: [
        'Dry clean only by cashmere specialists',
        'Do not hang for prolonged periods; store flat in cedar chests'
      ]
    },
    details: [
      'Double-faced construction with hand-split blind seams',
      'Detachable sash belt in matching cashmere',
      'Deep architectural welt pockets',
      'Soft drop shoulder for effortless layering'
    ],
    stylingTips: 'Wear loosely draped over shoulders with evening slip dresses or belted closely over tailored knitwear.',
    measurementsModel: 'Model is 5\'11" (180cm) wearing size Medium.'
  },
  {
    id: 'elan-08',
    name: 'Crisp Organza Silk Blouse',
    subtitle: 'Sculptural Balloon Sleeve Evening Blouse',
    price: 19500,
    category: 'Shirts',
    subCategory: 'Tops',
    gender: 'Women',
    images: [
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1534126511673-b6899657816a?auto=format&fit=crop&w=1200&q=85'
    ],
    colors: [
      { name: 'Translucent Chalk', hex: '#f0ece3', imageIndex: 0 },
      { name: 'Smoky Amber', hex: '#875d3c', imageIndex: 1 }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    isNew: false,
    isBestseller: false,
    inStock: true,
    stockCount: 7,
    description: 'A dialogue between transparency and sculpture. This blouse is crafted from crisp mulberry silk organza with volumetric puff sleeves, elongated cuffs, and a concealed center placket. Includes an opaque silk crepe camisole.',
    fabricDetails: {
      composition: '100% Pure Silk Organza with Silk Crepe Camisole',
      origin: 'Kanchipuram Silks, Tamil Nadu',
      weight: 'Architectural Sheer',
      care: ['Dry clean only', 'Gentle steam only from 15cm distance']
    },
    details: [
      'Volumetric raglan balloon sleeves with knife pleats',
      'Extended 4-button structured cuffs',
      'Detachable silk habotai inner modesty camisole',
      'Curved shirt-tail hem'
    ],
    stylingTips: 'Tuck into our Flared Mulberry Silk Palazzos with a sculpted brass belt for an unforgettable cocktail entrance.',
    measurementsModel: 'Model is 5\'10" (178cm) wearing size Small.'
  },
  {
    id: 'elan-09',
    name: 'Flared Mulberry Silk Palazzos',
    subtitle: 'Floor-Sweeping Wide Leg Evening Trousers',
    price: 22000,
    category: 'Trousers',
    subCategory: 'Palazzos',
    gender: 'Women',
    images: [
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=85'
    ],
    colors: [
      { name: 'Pure Obsidian', hex: '#0a0a0a', imageIndex: 0 },
      { name: 'Saffron Ochre', hex: '#a67232', imageIndex: 1 }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    isNew: false,
    isBestseller: true,
    inStock: true,
    stockCount: 9,
    description: 'Dramatic wide-leg trousers cut on the true grain from heavy 30-momme silk crepe de chine. Sits smoothly on the natural waist with an invisible side zip, flowing outward into voluminous motion with every stride.',
    fabricDetails: {
      composition: '100% Heavy Silk Crepe de Chine',
      origin: 'Bangalore Silk Weavers',
      weight: 'Substantial 30 Momme Drape',
      care: ['Dry clean only', 'Steam with low heat']
    },
    details: [
      'High-rise waist fitted cleanly across hips',
      'Discreet side slash pockets',
      'Blind-hemmed 3-inch cuffs allowing easy custom shortening',
      'Smooth silk satin inner facing band'
    ],
    stylingTips: 'Style with pointed heels to emphasize the floor-grazing length and our Crisp Organza Blouse.',
    measurementsModel: 'Model is 5\'9" (175cm) wearing size Small.'
  },
  {
    id: 'elan-10',
    name: 'Hand-Rolled Cashmere Pashmina Stole',
    subtitle: 'Authentic 100% Changthangi Cashmere Wrap',
    price: 28500,
    category: 'Accessories',
    subCategory: 'Shawls & Wraps',
    gender: 'Unisex',
    images: [
      'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&w=1200&q=85'
    ],
    colors: [
      { name: 'Oatmeal Natural', hex: '#d7cbb9', imageIndex: 0 },
      { name: 'Deep Espresso', hex: '#2c1e18', imageIndex: 1 },
      { name: 'Ivory Frost', hex: '#f6f2ea', imageIndex: 2 }
    ],
    sizes: ['One Size (200cm x 75cm)'],
    isNew: true,
    isBestseller: true,
    isAtelierExclusive: true,
    inStock: true,
    stockCount: 15,
    description: 'Hand-spun from the ultra-fine underfleece of Ladakh Capra Hircus mountain goats, this certified Pashmina stole is hand-woven on traditional Kashmiri wooden looms. Measuring 12-14 microns in fineness, it passes through a signet ring with ease.',
    fabricDetails: {
      composition: '100% Certified Handspun Kashmiri Pashmina Cashmere',
      origin: 'Srinagar, Kashmir',
      weight: 'Featherweight 95 Grams',
      care: [
        'Dry clean only by heritage shawlmaker',
        'Store wrapped in clean natural cotton with dried neem leaves',
        'Never hang on wire hangers'
      ]
    },
    details: [
      'Authentic raw feathered hand-fringed ends',
      'Subtle hand-embroidered ÉLAN atelier crest at corner',
      'Government GI Tag certification attached',
      'Accompanied by handmade mulberry bark presentation box'
    ],
    stylingTips: 'Drape across the shoulders as an evening wrap or knot loosely around the neck for transatlantic journeys.',
    measurementsModel: 'One size fits all (200 x 75 cm).'
  },
  {
    id: 'elan-11',
    name: 'Sculpted Brass Clasp Calfskin Minaudière',
    subtitle: 'Hand-Molded Italian Calf Leather Box Clutch',
    price: 32000,
    originalPrice: 35000,
    category: 'Accessories',
    subCategory: 'Bags',
    gender: 'Women',
    images: [
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1200&q=85'
    ],
    colors: [
      { name: 'Charcoal Black', hex: '#111010', imageIndex: 0 },
      { name: 'Burnished Tan', hex: '#7a4f2b', imageIndex: 1 }
    ],
    sizes: ['One Size'],
    isNew: false,
    isBestseller: false,
    inStock: true,
    stockCount: 4,
    description: 'An architectural evening bag inspired by modern Indian sculpture. Hand-crafted from full-grain vegetable tanned calfskin over a rigid molded wooden core, capped with a bespoke lost-wax cast hand-hammered brass closure.',
    fabricDetails: {
      composition: '100% Full-Grain Calf Leather, Solid Cast Brass Clasp, Lambskin Suede Lining',
      origin: 'Crafted in Chennai Atelier',
      weight: 'Solid Luxury Feel (420g)',
      care: [
        'Condition periodically with neutral beeswax balm',
        'Keep brass dry; buff with microfibre cloth',
        'Store in flannel dust bag'
      ]
    },
    details: [
      'Bespoke hand-hammered brass swivel lock',
      'Internal phone compartment and two card slots',
      'Detachable solid brass rolo chain shoulder strap (52cm drop)',
      'Numbered atelier edition stamped inside'
    ],
    stylingTips: 'Hold as a structured clutch or sling casually over your shoulder for contemporary gala events.',
    measurementsModel: 'Dimensions: 21cm W x 14cm H x 6cm D.'
  },
  {
    id: 'elan-12',
    name: 'Hand-Finished Calfskin Jutti-Mules',
    subtitle: 'Pointed Toe Backless Mules with Stacked Heel',
    price: 21500,
    category: 'Footwear',
    subCategory: 'Mules',
    gender: 'Women',
    images: [
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&w=1200&q=85'
    ],
    colors: [
      { name: 'Midnight Onyx', hex: '#141414', imageIndex: 0 },
      { name: 'Warm Cream', hex: '#ede6d8', imageIndex: 1 }
    ],
    sizes: ['36 EU', '37 EU', '38 EU', '39 EU', '40 EU'],
    isNew: true,
    isBestseller: true,
    inStock: true,
    stockCount: 6,
    description: 'A modern synthesis of the heritage Royal Jutti and the clean European backless mule. Cut with a sculpted elongated toe, ergonomic cushioned memory-foam leather insole, and a 25mm stacked leather heel wrapped in brass foil.',
    fabricDetails: {
      composition: 'Upper: 100% Calf Leather. Sole: Vegetable-Tanned Buffalo Hide',
      origin: 'Agra Guild Craftsmanship',
      weight: 'Lightweight & Supple',
      care: ['Buff with neutral shoe cream', 'Keep away from excessive moisture']
    },
    details: [
      'Sculptural pointed toe inspired by Mughal silhouettes',
      '25mm stacked leather block heel with brass edge plate',
      'Triple-density memory latex footbed for all-day comfort',
      'Hand-stitched Blake welted leather outsole'
    ],
    stylingTips: 'Pairs seamlessly with everything from cropped tailored trousers to fluid silk column gowns.',
    measurementsModel: 'Fits true to European sizing.'
  },
  {
    id: 'elan-13',
    name: 'Minimalist Oxford Loafers',
    subtitle: 'Goodyear Welted Fine Box Calf Loafers',
    price: 28000,
    category: 'Footwear',
    subCategory: 'Loafers',
    gender: 'Men',
    images: [
      'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1200&q=85'
    ],
    colors: [
      { name: 'Gloss Obsidian', hex: '#0a0a0a', imageIndex: 0 },
      { name: 'Chestnut Patina', hex: '#4d2a1b', imageIndex: 1 }
    ],
    sizes: ['40 EU', '41 EU', '42 EU', '43 EU', '44 EU'],
    isNew: false,
    isBestseller: true,
    inStock: true,
    stockCount: 5,
    description: 'Constructed on a bespoke chisel-toe last using full-grain French box calf leather. Features hand-painted beveled waists, brass toe plates, and a storm welt that guards against seasonal elements while maintaining clean lines.',
    fabricDetails: {
      composition: 'French Box Calfskin, Oak-Bark Tanned Leather Soles',
      origin: 'Handmade in Agra Artisan Workshop',
      weight: 'Solid Goodyear Welted',
      care: ['Polish with carnauba wax', 'Insert cedar shoe trees immediately after wear']
    },
    details: [
      'Traditional Goodyear welted construction for lifelong resoling',
      'Hand-burnished fiddleback waist profile',
      'Calfskin full glove leather lining',
      'Concealed elastic side gussets for slip-on ease'
    ],
    stylingTips: 'The ultimate finishing anchor for tailored trousers and Bandhgala jackets.',
    measurementsModel: 'Fits true to UK/European sizes.'
  },
  {
    id: 'elan-14',
    name: 'Sculptural Hand-Hammered Gold Cuff',
    subtitle: '24K Gold-Dipped Architectural Bangle',
    price: 14500,
    category: 'Accessories',
    subCategory: 'Jewellery',
    gender: 'Women',
    images: [
      'https://images.unsplash.com/photo-1611591475870-8b63004e0e4b?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&q=85'
    ],
    colors: [
      { name: 'Champagne Gold', hex: '#c5a880', imageIndex: 0 }
    ],
    sizes: ['Standard Adjustable'],
    isNew: true,
    isBestseller: false,
    inStock: true,
    stockCount: 10,
    description: 'Hand-formed by Jaipur metalsmiths using recycled brass dipped in 3-micron 24-karat gold with a velvet brushed finish. Its undulating organic profile catches natural light with understated elegance.',
    fabricDetails: {
      composition: 'Solid Recycled Brass, 3-Micron 24K Gold Electroplating',
      origin: 'Jaipur, Rajasthan',
      weight: 'Substantial 65g Bangle',
      care: ['Store in anti-tarnish velvet pouch', 'Wipe with soft jewellery cloth']
    },
    details: [
      'Hand-hammered faceted texture',
      'Gently malleable cuff design accommodates all wrist circumferences',
      'Engraved discreet ÉLAN insignia inside',
      'Hypoallergenic and nickel-free'
    ],
    stylingTips: 'Wear as a singular statement cuff or pair symmetrically on both wrists for high editorial impact.',
    measurementsModel: 'Adjustable inner diameter from 5.5cm to 7cm.'
  },
  {
    id: 'elan-15',
    name: '100-Count Pima Cotton Tunic Shirt',
    subtitle: 'Relaxed Band-Collar Kurta Shirt with French Cuffs',
    price: 12500,
    category: 'Shirts',
    subCategory: 'Shirts',
    gender: 'Men',
    images: [
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=85'
    ],
    colors: [
      { name: 'Crisp Chalk', hex: '#ffffff', imageIndex: 0 },
      { name: 'Raw Natural', hex: '#ebe4d5', imageIndex: 1 }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    isNew: false,
    isBestseller: true,
    inStock: true,
    stockCount: 14,
    description: 'Woven from extra-long staple Supima cotton in a refined 100-count poplin weave. Designed with an elongated curved tunic hem, hidden placket, and band collar that effortlessly transitions between heritage rituals and contemporary lounges.',
    fabricDetails: {
      composition: '100% Extra-Long Staple Pima Cotton',
      origin: 'Gujarat Spinning Mills',
      weight: 'Silky smooth 110 GSM',
      care: ['Machine wash gentle cold or dry clean', 'Steam or hot iron with starch']
    },
    details: [
      'Hand-stitched band collar with neat single button fastener',
      'Concealed front button placket',
      'Double convertible cuffs compatible with cufflinks',
      'Subtle side splits for easy hand-in-pocket posture'
    ],
    stylingTips: 'Pair under our Artisanal Nehru Coat with tailored trousers for relaxed evening hospitality.',
    measurementsModel: 'Model is 6\'1" (185cm) wearing size Large.'
  },
  {
    id: 'elan-16',
    name: 'Asymmetric Raw Silk Kimono Jacket',
    subtitle: 'Relaxed Belted Robe Jacket in Tussar Silk',
    price: 36000,
    category: 'Jackets',
    subCategory: 'Outerwear',
    gender: 'Women',
    images: [
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=85'
    ],
    colors: [
      { name: 'Slate Charcoal', hex: '#242220', imageIndex: 0 },
      { name: 'Raw Ecru', hex: '#ede6d8', imageIndex: 1 }
    ],
    sizes: ['XS-S', 'M-L'],
    isNew: true,
    isBestseller: false,
    isAtelierExclusive: true,
    inStock: true,
    stockCount: 4,
    description: 'An unstructured wrap silhouette in heavyweight hand-spun raw silk. Cut with wide kimono sleeves, an exaggerated fold-over shawl collar, and a self-tie silk cord belt finished with cast brass aglets.',
    fabricDetails: {
      composition: '100% Hand-Spun Wild Tussar Silk',
      origin: 'Bhagalpur, Bihar',
      weight: 'Heavy Textured Drape (380 GSM)',
      care: ['Specialist dry clean only', 'Store hung on broad hanger']
    },
    details: [
      'Wide architectural kimono sleeves',
      'Self-fabric wide tie belt with metal aglets',
      'Two oversized patch pockets',
      'Pure silk habotai half-lining'
    ],
    stylingTips: 'Cinch over tailored pants for gallery openings, or wear open as an effortless duster coat.',
    measurementsModel: 'Model is 5\'10" (178cm) wearing size XS-S.'
  }
];

export const CATEGORIES = [
  { id: 'All', name: 'All Pieces', count: 16 },
  { id: 'Women', name: 'Women', count: 9 },
  { id: 'Men', name: 'Men', count: 7 },
  { id: 'Dresses', name: 'Dresses & Gowns', count: 2, image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80' },
  { id: 'Jackets', name: 'Jackets & Coats', count: 5, image: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=800&q=80' },
  { id: 'Shirts', name: 'Shirts & Tops', count: 3, image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80' },
  { id: 'Trousers', name: 'Trousers & Palazzos', count: 2, image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80' },
  { id: 'Accessories', name: 'Accessories & Fine Jewelry', count: 3, image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=800&q=80' },
  { id: 'Footwear', name: 'Footwear & Mules', count: 2, image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80' }
];

export const LOOKBOOK_STORIES: LookbookItem[] = [
  {
    id: 'lb-1',
    title: 'The Column Silhouette in Varanasi Silk',
    location: 'Lodhi Gardens, New Delhi',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=85',
    taggedProductId: 'elan-01',
    taggedProductName: 'Mulberry Silk Column Gown',
    price: 34500
  },
  {
    id: 'lb-2',
    title: 'Modern Satorial Structure & Matka Silk',
    location: 'Victoria Memorial Colonnade, Kolkata',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=85',
    taggedProductId: 'elan-02',
    taggedProductName: 'Artisanal Matka Silk Bandhgala',
    price: 42000
  },
  {
    id: 'lb-3',
    title: 'Autumn Twilight in Chanderi & Gold Zari',
    location: 'Chowmahalla Palace Courtyard, Hyderabad',
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=85',
    taggedProductId: 'elan-03',
    taggedProductName: 'Handwoven Chanderi Slip Dress',
    price: 26500
  },
  {
    id: 'lb-4',
    title: 'Pure Cashmere Warmth & Fluid Proportion',
    location: 'The Oberoi Amarvilas, Agra',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=85',
    taggedProductId: 'elan-07',
    taggedProductName: 'Cashmere Cocoon Overcoat',
    price: 68000
  },
  {
    id: 'lb-5',
    title: 'Architectural Sculptural Brass & Tailored Linens',
    location: 'Modern Art Pavilion, Jaipur',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=85',
    taggedProductId: 'elan-04',
    taggedProductName: 'Tailored Linen Pleated Trousers',
    price: 18500
  },
  {
    id: 'lb-6',
    title: 'The Contemporary Mule & Heritage Jutti Last',
    location: 'Kala Ghoda Atelier, Mumbai',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1000&q=85',
    taggedProductId: 'elan-12',
    taggedProductName: 'Hand-Finished Calfskin Jutti-Mules',
    price: 21500
  }
];

export const BRAND_STORY = {
  headline: 'Artisanal Heritage Meets Modernist Architecture',
  quote: '"True luxury does not whisper in logos; it resonates in the weight of handloom silk, the precision of a bespoke seam, and the silence of impeccable proportions."',
  curator: 'Aarav Singhania & Maya Mehra',
  curatorTitle: 'Founders & Creative Directors, ÉLAN Studio',
  pillars: [
    {
      title: 'Master Weavers of Varanasi & Chanderi',
      description: 'Every silk bolt is woven by multigenerational guild families on pit looms that date back over a century, preserving ancient indigenous weaving traditions with contemporary design discipline.'
    },
    {
      title: 'Savile Row Tailoring, Indian Sensibility',
      description: 'Our Bandhgalas and pleated trousers feature full floating canvas chest pieces, hand-split double-faced seams, and bespoke shoulder construction tested across hundreds of fittings.'
    },
    {
      title: 'Conscious Slow Luxury',
      description: 'We reject industrial mass production. Each edition is produced in limited micro-batches of 25 to 50 pieces, eliminating surplus inventory and honouring honest artisan living wages.'
    }
  ]
};
