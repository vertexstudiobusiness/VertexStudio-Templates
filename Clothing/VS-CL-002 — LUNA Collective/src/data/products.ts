import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'luna-01',
    name: 'Mira Tiered Linen Midi Dress',
    subtitle: 'Pure European Flax with Handcrafted Pintucks',
    category: 'dresses',
    price: 4450,
    originalPrice: 5890,
    rating: 4.9,
    reviewsCount: 38,
    isNew: true,
    isBestseller: true,
    isTrending: true,
    description: 'Designed for effortless summer-to-autumn dressing, the Mira Midi Dress is sculpted from mid-weight pure European linen. Features delicate hand-tucked bodice details, gentle tiered silhouette, and discrete side seam pockets.',
    fabricDetails: '100% Certified European Linen. Breathable, pre-washed for vintage softness, naturally hypoallergenic.',
    careInstructions: [
      'Gentle cold machine wash inside out with similar colors',
      'Use mild eco-friendly liquid detergent',
      'Line dry in shade to preserve natural texture',
      'Warm steam iron while damp or embrace natural relaxed crinkle'
    ],
    features: [
      'Concealed deep side pockets',
      'Adjustable back-tie with mother-of-pearl beads',
      'Breathable organic cotton voile lining',
      'Relaxed, flowy A-line drape'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      {
        colorName: 'Muted Rose',
        colorHex: '#D4A59A',
        image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1000&q=80'
      },
      {
        colorName: 'Soft Ivory',
        colorHex: '#FAF8F5',
        image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=1000&q=80'
      },
      {
        colorName: 'Earthy Mocha',
        colorHex: '#5A4232',
        image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=1000&q=80'
      }
    ],
    images: [
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1000&q=80'
    ],
    sku: 'LN-DRS-001'
  },
  {
    id: 'luna-02',
    name: 'Aarya Chanderi Angrakha Kurta Set',
    subtitle: 'Woven Metallic Zari Accents with Tonal Trousers',
    category: 'ethnic-wear',
    price: 6850,
    originalPrice: 8500,
    rating: 5.0,
    reviewsCount: 52,
    isFestive: true,
    isBestseller: true,
    isTrending: true,
    description: 'An ode to heritage craftsmanship through a contemporary lens. The Aarya set showcases an asymmetric overlap Angrakha silhouette cut from handspun Chanderi silk with delicate rose-gold pita zari embroidery on lapels and cuffs.',
    fabricDetails: 'Handwoven Chanderi Silk Blend (60% Silk, 40% Cotton) paired with pure mulberry silk organza dupatta and cotton silk straight trousers.',
    careInstructions: [
      'Strictly dry clean only',
      'Store in provided muslin cloth bag',
      'Iron on reverse with low silk heat setting',
      'Avoid spraying perfume directly on zari metallic threads'
    ],
    features: [
      'Handcrafted silk latkans on side tie-ups',
      'Sheer scalloped organza dupatta with micro-pearl edging',
      'Elasticated back waistband with drawstrings for tailored comfort',
      'Hand-stitched facing along hemline'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      {
        colorName: 'Blush Pearl',
        colorHex: '#E8D3CE',
        image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80'
      },
      {
        colorName: 'Ivory Zari',
        colorHex: '#FAF8F5',
        image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=80'
      }
    ],
    images: [
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&w=1000&q=80'
    ],
    sku: 'LN-ETH-002'
  },
  {
    id: 'luna-03',
    name: 'Siena Relaxed Linen-Silk Co-ord Set',
    subtitle: 'Collared Kimono Shirt & Pleated Wide-Leg Trousers',
    category: 'co-ords',
    price: 5290,
    originalPrice: 6500,
    rating: 4.8,
    reviewsCount: 29,
    isNew: true,
    isTrending: true,
    description: 'The ultimate airport-to-resort luxury statement. Features an oversized fluid drop-shoulder shirt with relaxed notched collar, paired with high-waisted pleated palazzo trousers with a tailored waistband and elasticated back.',
    fabricDetails: 'Linen-Silk Blend (70% Organic Linen, 30% Mulberry Silk). Luxuriously lightweight, supple luster with crisp drape.',
    careInstructions: [
      'Hand wash in cold water using delicate wool/silk rinse',
      'Do not wring; lay flat to dry in gentle breeze',
      'Low steam iron or hang in steamy shower for natural de-wrinkling'
    ],
    features: [
      'Concealed horn buttons along center placket',
      'Pleated front with belt loops and deep pocket styling',
      'Versatile separates — wear as a full set or styled individually',
      'Relaxed gender-neutral tailoring suited for modern luxury'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      {
        colorName: 'Warm Sand',
        colorHex: '#D8CFBE',
        image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=80'
      },
      {
        colorName: 'Chocolate Espresso',
        colorHex: '#3D2B1F',
        image: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=1000&q=80'
      }
    ],
    images: [
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=80'
    ],
    sku: 'LN-CRD-003'
  },
  {
    id: 'luna-04',
    name: 'Zoya Hand-Embroidered Organza Kurta',
    subtitle: 'Pastel Peach Kurta with Aari Threadwork & Slip',
    category: 'ethnic-wear',
    price: 5850,
    originalPrice: 7200,
    rating: 4.9,
    reviewsCount: 44,
    isFestive: true,
    isBestseller: true,
    description: 'Bask in timeless Indian romance. Cut from featherlight kora organza, this translucent festive tunic features meticulous tone-on-tone aari floral vines along the neckline and cuffs. Accompanied by a pure mulmul slip.',
    fabricDetails: 'Pure Tissue Organza with 100% fine cotton mulmul inner lining.',
    careInstructions: [
      'Dry clean recommended',
      'Store flat inside acid-free tissue paper',
      'Steam iron only; avoid direct soleplate contact'
    ],
    features: [
      'Includes separate detachable pure cotton camisole slip',
      'Hand-cut scallop embroidery across hemline',
      'Keyhole back with mother-of-pearl button closure',
      'Graceful quarter sleeves with flared cuffs'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      {
        colorName: 'Blush Coral',
        colorHex: '#E8D3CE',
        image: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&w=1000&q=80'
      },
      {
        colorName: 'Ivory Sheer',
        colorHex: '#FAF8F5',
        image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=80'
      }
    ],
    images: [
      'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80'
    ],
    sku: 'LN-ETH-004'
  },
  {
    id: 'luna-05',
    name: 'Elysian Draped Satin Maxi Dress',
    subtitle: 'Bias-Cut Slip Dress with Fluted Cowl Neckline',
    category: 'dresses',
    price: 4890,
    originalPrice: 6200,
    rating: 4.9,
    reviewsCount: 31,
    isTrending: true,
    isBestseller: true,
    description: 'An effortless statement of sensual sophistication. Cut on the bias to caress every contour gracefully, the Elysian Maxi features an architectural cowl neck, delicate criss-cross adjustable back straps, and an ankle-grazing fluid hem.',
    fabricDetails: 'Eco-Vero Heavy Modal Satin (90% Viscose, 10% Spandex) with natural liquid silk luster.',
    careInstructions: [
      'Hand wash in cold water with mild detergent',
      'Dry flat on clean towel in shade',
      'Steam iron on reverse using low temperature'
    ],
    features: [
      'Bias cut for figure-skimming organic stretch',
      'Fully self-lined bodice for maximum opacity',
      'Subtle left side slit for fluid movement',
      'Adjustable micro-rouleau straps'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      {
        colorName: 'Dusty Rose',
        colorHex: '#B77B6E',
        image: 'https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?auto=format&fit=crop&w=1000&q=80'
      },
      {
        colorName: 'Champagne Ivory',
        colorHex: '#FAF8F5',
        image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=80'
      },
      {
        colorName: 'Dark Cacao',
        colorHex: '#261B14',
        image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1000&q=80'
      }
    ],
    images: [
      'https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1000&q=80'
    ],
    sku: 'LN-DRS-005'
  },
  {
    id: 'luna-06',
    name: 'Kavya Pleated Wide-Leg Trousers',
    subtitle: 'High-Waist Tailored Trousers in Sand Beige',
    category: 'bottoms',
    price: 3250,
    originalPrice: 4200,
    rating: 4.7,
    reviewsCount: 26,
    isNew: true,
    description: 'Tailored for poise and comfort. Featuring front inverted double pleats, structured waistband, slanted Italian pockets, and clean floor-skimming wide cuffs that elongate the silhouette.',
    fabricDetails: 'Cotton-Tencel Twill (65% Tencel Lyocell, 35% Long Staple Cotton). Soft handfeel with wrinkle resistance.',
    careInstructions: [
      'Machine wash gentle cycle cold',
      'Hang dry on trouser hanger to minimize creasing',
      'Medium iron or vertical steam'
    ],
    features: [
      'High-rise waist with tailored buckle tabs',
      'Reinforced pockets with clean pocket facing',
      'YKK zip fly with concealed hook-and-bar closure',
      'Extra 1.5-inch hem seam allowance for customized tailoring'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      {
        colorName: 'Sand Beige',
        colorHex: '#D8CFBE',
        image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=80'
      },
      {
        colorName: 'Cacao Brown',
        colorHex: '#3D2B1F',
        image: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=1000&q=80'
      }
    ],
    images: [
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=1000&q=80'
    ],
    sku: 'LN-BTM-006'
  },
  {
    id: 'luna-07',
    name: 'Aditi Hand-Woven Silk Crop Shirt',
    subtitle: 'Mandarin Collar Blouse with Organza Bishop Sleeves',
    category: 'tops',
    price: 2990,
    originalPrice: 3800,
    rating: 4.8,
    reviewsCount: 19,
    isNew: true,
    description: 'A striking fusion of modern tailoring and artisan craft. This boxy crop blouse features delicate pin-tucks on the yoke, structured mandarin collar, and translucent bishop sleeves gathered into elongated buttoned cuffs.',
    fabricDetails: 'Handloom Cotton Silk (50% Silk, 50% Organic Cotton) with pure organza sleeves.',
    careInstructions: [
      'Hand wash in cold water with mild silk wash',
      'Do not soak or bleach',
      'Iron inside out on medium setting'
    ],
    features: [
      'Natural Mother-of-Pearl shank buttons',
      'Boxy modern silhouette looks chic with sarees, lehengas or denim',
      'French seams for smooth interior finish',
      'Elasticated inner wrist gather'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      {
        colorName: 'Vanilla Cream',
        colorHex: '#FAF8F5',
        image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=1000&q=80'
      },
      {
        colorName: 'Blush Petal',
        colorHex: '#E8D3CE',
        image: 'https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=1000&q=80'
      }
    ],
    images: [
      'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80'
    ],
    sku: 'LN-TOP-007'
  },
  {
    id: 'luna-08',
    name: 'Tara Hammered Gold & Pearl Drop Earrings',
    subtitle: '18K Gold Plated Brass with Natural Freshwater Baroque Pearls',
    category: 'accessories',
    price: 1850,
    originalPrice: 2400,
    rating: 4.9,
    reviewsCount: 65,
    isBestseller: true,
    isTrending: true,
    description: 'Sculptural elegance for everyday luxury or festive evenings. Features hand-hammered organic gold-plated discs cradling genuine baroque freshwater pearls, ensuring each pair possesses its own unique artisanal fingerprint.',
    fabricDetails: 'Hypoallergenic brass with 1 micron 18K Yellow Gold plating and Grade-AAA cultured freshwater pearls.',
    careInstructions: [
      'Store in dry anti-tarnish jewelry pouch provided',
      'Keep away from direct contact with perfumes, lotions and sanitizers',
      'Wipe with soft microfiber cloth after wear'
    ],
    features: [
      'Featherlight weight (under 8 grams per earring)',
      'Nickel-free and lead-free posts suitable for sensitive ears',
      'Secure silicone-embedded butterfly backs',
      'Handcrafted by generational metalsmiths in Jaipur'
    ],
    sizes: ['One Size'],
    colors: [
      {
        colorName: '18K Gold & Pearl',
        colorHex: '#D4AF37',
        image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=80'
      }
    ],
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=80'
    ],
    sku: 'LN-ACC-008'
  },
  {
    id: 'luna-09',
    name: 'Nyla Embroidered Chanderi Anarkali Set',
    subtitle: 'Kalidar Flared Silhouette with Scalloped Silk Dupatta',
    category: 'ethnic-wear',
    price: 8450,
    originalPrice: 10500,
    rating: 5.0,
    reviewsCount: 47,
    isFestive: true,
    isBestseller: true,
    description: 'The crowning jewel of our festive Noor collection. Designed with 24 fluid kalis that cascade into an impressive 6-meter flare, adorned with delicate hand-done sitara and marodi needlework along the neckline, sleeves, and hem.',
    fabricDetails: 'Pure handloom Chanderi Silk paired with santoon lining, churidar trousers, and 2.5m pure silk organza dupatta.',
    careInstructions: [
      'Dry clean only',
      'Keep covered in muslin cloth',
      'Do not fold directly on heavy embroidery'
    ],
    features: [
      'Voluminous 6-meter hemline with custom zari braid border',
      'Concealed side zipper for a tailored bust fit',
      'Delicate hand-tasselled dori at rear neck',
      'Breathable double-lined inner bustier'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      {
        colorName: 'Rose Petal',
        colorHex: '#D4A59A',
        image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80'
      },
      {
        colorName: 'Old Rose Muted',
        colorHex: '#B77B6E',
        image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=80'
      }
    ],
    images: [
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&w=1000&q=80'
    ],
    sku: 'LN-ETH-009'
  },
  {
    id: 'luna-10',
    name: 'Maya Linen Utility Wrap Jumpsuit',
    subtitle: 'Kimono Sleeves with Hand-Woven Fabric Belt',
    category: 'co-ords',
    price: 4650,
    originalPrice: 5900,
    rating: 4.8,
    reviewsCount: 22,
    isNew: true,
    description: 'An architectural piece built for empowered elegance. Featuring a relaxed surplice neckline, kimono roll-up sleeves, tapered trouser legs, and a self-fabric obi belt that defines the waist effortlessly.',
    fabricDetails: '100% Slub Linen woven in small batches in West Bengal.',
    careInstructions: [
      'Cold gentle cycle inside out',
      'Line dry flat in shade',
      'Warm iron with damp pressing cloth'
    ],
    features: [
      'Deep slash front utility pockets',
      'Concealed interior snap button prevents gaping',
      'Detachable sash tie belt with fringe trim',
      'Pre-shrunk organic fabric'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      {
        colorName: 'Warm Latte',
        colorHex: '#D8CFBE',
        image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=80'
      },
      {
        colorName: 'Mocha Clay',
        colorHex: '#5A4232',
        image: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=1000&q=80'
      }
    ],
    images: [
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=1000&q=80'
    ],
    sku: 'LN-CRD-010'
  },
  {
    id: 'luna-11',
    name: 'Rhea Woven Leather Shoulder Baguette',
    subtitle: 'Vegetable-Tanned Italian Leather with Gold Ring Clasp',
    category: 'accessories',
    price: 3650,
    originalPrice: 4800,
    rating: 4.9,
    reviewsCount: 41,
    isBestseller: true,
    description: 'The epitome of refined tactile minimalism. Intricately hand-woven by leather artisans, this sleek shoulder baguette features custom brushed-gold hardware, structured curved base, and a soft microfiber suede lining.',
    fabricDetails: '100% Certified Full Grain Vegetable-Tanned Cowhide Leather with brushed brass hardware.',
    careInstructions: [
      'Protect from prolonged direct moisture and alcohol sprays',
      'Condition with neutral leather balm every 6 months',
      'Store in provided organic cotton dust bag with tissue stuffing'
    ],
    features: [
      'Removable adjustable shoulder strap (wear as shoulder or clutch)',
      'Interior zip wall pocket and dedicated slip card slot',
      'Smooth Japanese YKK zipper glide',
      'Fits iPhone Pro Max, cardholder, cosmetics and keys'
    ],
    sizes: ['One Size'],
    colors: [
      {
        colorName: 'Warm Cognac',
        colorHex: '#5A4232',
        image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1000&q=80'
      },
      {
        colorName: 'Alabaster Ivory',
        colorHex: '#FAF8F5',
        image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1000&q=80'
      }
    ],
    images: [
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1000&q=80'
    ],
    sku: 'LN-ACC-011'
  },
  {
    id: 'luna-12',
    name: 'Inaya Tiered Mulmul Sundress',
    subtitle: 'Hand Block-Printed Floral Bootis with Smocked Back',
    category: 'dresses',
    price: 3490,
    originalPrice: 4500,
    rating: 4.8,
    reviewsCount: 35,
    isSale: true,
    description: 'Breezy romance in heritage Jaipur block-prints. Printed using non-toxic azo-free earthen dyes on featherlight Indian mulmul, featuring romantic ruffled shoulder straps, square neckline, and a comfortable smocked rear bodice.',
    fabricDetails: '100% Organic Hand-Spun Mulmul Cotton. Breathable, cloud-soft and gentle on sensitive skin.',
    careInstructions: [
      'Hand wash separately in cold water for initial 2 washes',
      'Do not soak in detergent water',
      'Dry in shade; iron on medium heat'
    ],
    features: [
      'Smocked back expands gently for custom bust fit',
      'Side seam invisible zipper',
      'Fully lined in sheer cotton mulmul to ensure opacity',
      'Artisanal wooden block motif with natural variations'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      {
        colorName: 'Blush & Ochre',
        colorHex: '#D4A59A',
        image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1000&q=80'
      },
      {
        colorName: 'Ivory Floral',
        colorHex: '#FAF8F5',
        image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=1000&q=80'
      }
    ],
    images: [
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=1000&q=80'
    ],
    sku: 'LN-DRS-012'
  },
  {
    id: 'luna-13',
    name: 'Suhani Crushed Tussar Silk Wrap Top',
    subtitle: 'Peplum Hem with French Cuff Detailing',
    category: 'tops',
    price: 3190,
    originalPrice: 4100,
    rating: 4.7,
    reviewsCount: 18,
    isTrending: true,
    description: 'A luminous wrap top crafted in textured raw Tussar silk. Features an adjustable side waist sash, flattering V-neckline, subtle shoulder gathers, and a flared peplum hem that drapes gracefully over trousers or sarees.',
    fabricDetails: '100% Wild Tussar Silk with natural slub character and rich golden undertone.',
    careInstructions: [
      'Dry clean only to maintain crisp crushed texture',
      'Warm iron with cloth shield'
    ],
    features: [
      'Internal waist stay tie ensures neckline never shifts',
      'Tailored elongated French cuffs with metal buttons',
      'Naturally luminous golden luster without artificial sheen'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      {
        colorName: 'Warm Champagne',
        colorHex: '#FAF8F5',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80'
      },
      {
        colorName: 'Muted Terracotta',
        colorHex: '#B77B6E',
        image: 'https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=1000&q=80'
      }
    ],
    images: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=1000&q=80'
    ],
    sku: 'LN-TOP-013'
  },
  {
    id: 'luna-14',
    name: 'Dia Raw Silk Cigarette Trousers',
    subtitle: 'Ankle-Length Trousers with Slit Cuffs & Gold Buttons',
    category: 'bottoms',
    price: 2890,
    originalPrice: 3600,
    rating: 4.8,
    reviewsCount: 29,
    isFestive: true,
    description: 'Essential luxury bottoms engineered for timeless versatility. Features a clean flat front, elasticated back comfort band, tailored ankle slits, and discrete hand-embroidered accents.',
    fabricDetails: 'Handloom Raw Silk and Modal blend with a subtle sheen and structured body.',
    careInstructions: [
      'Dry clean or gentle hand wash cold',
      'Press with medium iron'
    ],
    features: [
      'Seamless pocket design for a clean hip silhouette',
      'Ankle side slit allows easy movement and showcases footwear',
      'Pairs seamlessly with festive kurtas or formal blouses'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      {
        colorName: 'Natural Ivory',
        colorHex: '#FAF8F5',
        image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=80'
      },
      {
        colorName: 'Rich Espresso',
        colorHex: '#3D2B1F',
        image: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=1000&q=80'
      }
    ],
    images: [
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=1000&q=80'
    ],
    sku: 'LN-BTM-014'
  },
  {
    id: 'luna-15',
    name: 'Noor Handspun Cashmere Pashmina Stole',
    subtitle: 'Delicate Hand-Spun Weave with Sozni Needlework Border',
    category: 'accessories',
    price: 4950,
    originalPrice: 6500,
    rating: 5.0,
    reviewsCount: 39,
    isFestive: true,
    isBestseller: true,
    description: 'A whisper-soft heritage heirloom from Kashmir. Spun from ultra-fine cashmere wool, this featherlight wrap is adorned with delicate needlework floral creepers along the selvedge edges. Feathery eyelash fringe finish.',
    fabricDetails: '100% Pure Fine Cashmere Wool (GI Certified Craftsmanship).',
    careInstructions: [
      'Specialist dry clean only',
      'Store in cedarwood box or cotton bag with natural moth repellents'
    ],
    features: [
      'Generous 200cm x 75cm dimensions drape effortlessly',
      'Passes through a small finger ring test for pure fineness',
      'Soft natural eyelash fringe border'
    ],
    sizes: ['One Size'],
    colors: [
      {
        colorName: 'Dusty Rose Blush',
        colorHex: '#D4A59A',
        image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=1000&q=80'
      },
      {
        colorName: 'Pale Sand',
        colorHex: '#EFE9E0',
        image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&w=1000&q=80'
      }
    ],
    images: [
      'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&w=1000&q=80'
    ],
    sku: 'LN-ACC-015'
  },
  {
    id: 'luna-16',
    name: 'Tara Ribbed Modal Knit Tank',
    subtitle: 'Scoop Neck Essential Layer with Micro-Rib Texture',
    category: 'tops',
    price: 1690,
    originalPrice: 2200,
    rating: 4.8,
    reviewsCount: 54,
    isSale: true,
    description: 'The foundational piece every discerning wardrobe requires. Crafted in breathable Austrian Lenzing Modal with fine elastane recovery. Hugs gently without clinging, perfect tucked into trousers or under open shirts.',
    fabricDetails: '95% Lenzing Modal, 5% Spandex fine rib knit.',
    careInstructions: [
      'Machine wash gentle cycle cold in laundry mesh bag',
      'Lay flat to dry'
    ],
    features: [
      'Bra-friendly broad shoulder strap coverage',
      'Subtle double-needle edge stitching',
      'Ultra-soft next-to-skin touch'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      {
        colorName: 'Warm Ivory',
        colorHex: '#FAF8F5',
        image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=1000&q=80'
      },
      {
        colorName: 'Deep Cacao',
        colorHex: '#3D2B1F',
        image: 'https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=1000&q=80'
      }
    ],
    images: [
      'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=1000&q=80'
    ],
    sku: 'LN-TOP-016'
  }
];
