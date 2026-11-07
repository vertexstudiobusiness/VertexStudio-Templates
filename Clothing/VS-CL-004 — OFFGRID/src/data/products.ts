import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'og-tee-01',
    slug: 'sector-zero-oversized-tee',
    name: 'SECTOR ZERO // OVERSIZED GRAPHIC TEE',
    subtitle: 'Limited Drop 004 • Heavyweight 300 GSM',
    price: 2499,
    originalPrice: 3499,
    category: 'T-Shirts',
    collection: 'DROP 004: SECTOR ZERO',
    isNewDrop: true,
    isBestSeller: true,
    isLimited: true,
    stockCount: 6,
    editionTotal: 150,
    editionNumber: '038 / 150',
    images: [
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1200&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Vanta Black', hex: '#0a0a0c', bgClass: 'bg-neutral-950' },
      { name: 'Concrete Grey', hex: '#3e4148', bgClass: 'bg-neutral-700' },
      { name: 'Hazard Orange', hex: '#ff4400', bgClass: 'bg-[#ff4400]' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    fit: 'Boxy Oversized',
    gsm: '300 GSM Ultra-Combed Cotton',
    fabric: '100% Ring-Spun Cotton with Acid Wash Finish',
    description: 'The foundation piece of Drop 004. Engineered with a boxy, wide-cut torso and exaggerated dropped shoulders. Features screen-printed brutalist cybernetics typography on the front chest and an industrial manifesto print spanning across the back shoulder line. Double-needle stitched collar that will not sag over time.',
    features: [
      '300 GSM heavy-knit combed cotton',
      'Distressed acid wash with vintage faded tone',
      'High-density cracked puff print across back',
      'Reinforced tight ribbed crew neckline',
      'Raw side split hem with safety orange bar-tack'
    ],
    careInstructions: [
      'Machine wash cold inside-out (30°C)',
      'Do not iron directly over puff graphic prints',
      'Hang dry in shade to preserve wash texture',
      'Do not bleach or tumble dry'
    ],
    measurements: [
      { size: 'S', chest: '44"', length: '28.5"', shoulder: '21.5"', sleeve: '9.0"' },
      { size: 'M', chest: '46"', length: '29.5"', shoulder: '22.5"', sleeve: '9.5"' },
      { size: 'L', chest: '48"', length: '30.5"', shoulder: '23.5"', sleeve: '10.0"' },
      { size: 'XL', chest: '50"', length: '31.5"', shoulder: '24.5"', sleeve: '10.5"' },
      { size: 'XXL', chest: '52"', length: '32.5"', shoulder: '25.5"', sleeve: '11.0"' }
    ],
    rating: 4.9,
    reviewCount: 42
  },
  {
    id: 'og-hoodie-01',
    slug: 'neo-distortion-450gsm-hoodie',
    name: 'NEO-DISTORTION 450GSM HOODIE',
    subtitle: 'Heavy French Terry • Structured Double Hood',
    price: 4999,
    originalPrice: 6499,
    category: 'Hoodies',
    collection: 'DROP 004: SECTOR ZERO',
    isNewDrop: true,
    isBestSeller: true,
    isLimited: true,
    stockCount: 3,
    editionTotal: 100,
    editionNumber: '021 / 100',
    images: [
      'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1556906781-9a412961c28c?q=80&w=1200&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Pitch Black', hex: '#050505', bgClass: 'bg-black' },
      { name: 'Off-White Raw', hex: '#eae8e1', bgClass: 'bg-[#eae8e1]' },
      { name: 'Industrial Rust', hex: '#b34726', bgClass: 'bg-[#b34726]' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    fit: 'Boxy Oversized',
    gsm: '450 GSM Diagonal Loopback French Terry',
    fabric: '100% Organic Heavyweight Cotton',
    description: 'A monument in streetwear construction. Weighing in at 450 GSM, this heavyweight French Terry hoodie holds a rigid silhouette without needing drawstrings. Features an architectural double-layered crossover hood that stays erect, hidden kangaroo pouch with concealed zippered stash pocket, and tonal OFFGRID industrial embroidery.',
    features: [
      'Ultra-dense 450 GSM loopback cotton fleece',
      'Zero-drawstring architectural storm hood',
      'Concealed YKK zippered pocket inside front kangaroo pouch',
      'Thick 2x2 ribbing on cuffs and bottom hem',
      'Tonal 3D high-density silicone logo on wrist'
    ],
    careInstructions: [
      'Dry clean recommended or gentle cold hand wash',
      'Reshape while damp and flat dry',
      'Do not spin dry on high speed'
    ],
    measurements: [
      { size: 'S', chest: '46"', length: '27.5"', shoulder: '23.0"', sleeve: '24.5"' },
      { size: 'M', chest: '48"', length: '28.5"', shoulder: '24.0"', sleeve: '25.0"' },
      { size: 'L', chest: '50"', length: '29.5"', shoulder: '25.0"', sleeve: '25.5"' },
      { size: 'XL', chest: '52"', length: '30.5"', shoulder: '26.0"', sleeve: '26.0"' }
    ],
    rating: 5.0,
    reviewCount: 68
  },
  {
    id: 'og-cargo-01',
    slug: 'tactical-ripstop-modular-cargo',
    name: 'TACTICAL RIPSTOP MODULAR CARGO',
    subtitle: '8-Pocket Utility • Fidlock Ankle Adjusters',
    price: 4499,
    originalPrice: 5999,
    category: 'Bottoms',
    collection: 'DROP 004: SECTOR ZERO',
    isNewDrop: true,
    isBestSeller: true,
    isLimited: false,
    stockCount: 12,
    images: [
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1517445312882-bc9910d016b7?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542272604-780c96856592?q=80&w=1200&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Onyx Black', hex: '#0e0e11', bgClass: 'bg-neutral-900' },
      { name: 'Battleship Olive', hex: '#3d4035', bgClass: 'bg-[#3d4035]' },
      { name: 'Concrete Grey', hex: '#63666f', bgClass: 'bg-neutral-600' }
    ],
    sizes: ['30', '32', '34', '36'],
    fit: 'Straight Technical',
    gsm: '280 GSM Water-Repellent Ripstop',
    fabric: '65% Cotton, 35% Cordura Nylon Ripstop',
    description: 'Designed for urban mobility and survivalist aesthetics. Cut from rugged Cordura ripstop with DWR water-resistant coating. Features eight strategic storage pockets, articulated pleated knees for unrestricted movement, magnetic Fidlock-style ankle synch straps to toggle between wide and tapered fit.',
    features: [
      'Cordura-reinforced heavy ripstop weave with DWR coating',
      'Dual bellowed 3D cargo pockets with webbed pull tabs',
      'Articulated knee darts for ergonomic movement',
      'Integrated web belt with quick-release aluminum buckle',
      'Drawcord and snap ankle cuff taper adjusters'
    ],
    careInstructions: [
      'Machine wash cold, gentle cycle',
      'Close all fasteners and zips before washing',
      'Air dry in shade',
      'Do not iron technical nylon panels'
    ],
    measurements: [
      { size: '30', chest: 'Waist: 30-31"', length: '41.0"', shoulder: 'Inseam: 30"', sleeve: 'Thigh: 25"' },
      { size: '32', chest: 'Waist: 32-33"', length: '41.5"', shoulder: 'Inseam: 30.5"', sleeve: 'Thigh: 26"' },
      { size: '34', chest: 'Waist: 34-35"', length: '42.0"', shoulder: 'Inseam: 31"', sleeve: 'Thigh: 27"' },
      { size: '36', chest: 'Waist: 36-37"', length: '42.5"', shoulder: 'Inseam: 31.5"', sleeve: 'Thigh: 28"' }
    ],
    rating: 4.8,
    reviewCount: 37
  },
  {
    id: 'og-jacket-01',
    slug: 'subterra-dual-zip-bomber-jacket',
    name: 'SUBTERRA DUAL-ZIP BOMBER JACKET',
    subtitle: 'Insulated Flight Nylon • Reflective Trim',
    price: 6499,
    originalPrice: 8999,
    category: 'Outerwear',
    collection: 'DROP 004: SECTOR ZERO',
    isNewDrop: true,
    isBestSeller: false,
    isLimited: true,
    stockCount: 4,
    editionTotal: 75,
    editionNumber: '014 / 075',
    images: [
      'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1200&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Matte Obsidian', hex: '#0f1115', bgClass: 'bg-zinc-950' },
      { name: 'Hazard Safety Orange', hex: '#ff4400', bgClass: 'bg-[#ff4400]' }
    ],
    sizes: ['M', 'L', 'XL'],
    fit: 'Boxy Oversized',
    gsm: 'Heavy Flight Nylon + 120 GSM Primaloft Insulation',
    fabric: '100% High-Density Japanese Flight Satin',
    description: 'An aggressive reimagining of the MA-1 flight silhouette. Constructed with a dual offset two-way chunky zipper system, emergency orange safety interior lining with internal carrying harness straps, and subtle 3M reflective line graphics across the rear spine.',
    features: [
      'Two-way matte black heavy gauge industrial zips',
      'Interior backpack sling straps for hands-free carry',
      '3M Scotchlite reflective stencil typography on collar',
      'Water-repellent and windproof shell fabric',
      'Cigarette utility arm pocket with OFFGRID red ribbon tag'
    ],
    careInstructions: [
      'Specialist outerwear dry clean only',
      'Store on wide shoulder hanger'
    ],
    measurements: [
      { size: 'M', chest: '50"', length: '27.0"', shoulder: '23.0"', sleeve: '25.0"' },
      { size: 'L', chest: '52"', length: '28.0"', shoulder: '24.0"', sleeve: '25.5"' },
      { size: 'XL', chest: '54"', length: '29.0"', shoulder: '25.0"', sleeve: '26.0"' }
    ],
    rating: 5.0,
    reviewCount: 19
  },
  {
    id: 'og-tee-02',
    slug: 'cybernetic-blueprint-acid-tee',
    name: 'CYBERNETIC BLUEPRINT ACID TEE',
    subtitle: 'Cracked Plastisol Print • Heavy Rib Knit',
    price: 2299,
    originalPrice: 2999,
    category: 'T-Shirts',
    collection: 'UNDERGROUND FREQUENCY',
    isNewDrop: false,
    isBestSeller: true,
    isLimited: false,
    stockCount: 14,
    images: [
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1200&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Distressed Ash', hex: '#232428', bgClass: 'bg-zinc-800' },
      { name: 'Bleached Bone', hex: '#dedbd2', bgClass: 'bg-[#dedbd2]' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    fit: 'Drop Shoulder Relaxed',
    gsm: '280 GSM Single Jersey Combed Cotton',
    fabric: '100% Pre-Shrunk Bio-Washed Cotton',
    description: 'Inspired by Tokyo circuit boards and industrial schematics. Features a multi-layered faded screen print in vintage chalk white and subtle hazard yellow. Enzyme washed for an authentic broken-in vintage hand-feel.',
    features: [
      'Enzyme and stone-washed for authentic vintage drape',
      'Cracked ink graphic print that ages uniquely',
      'Thick 1.25" rib crewneck collar',
      'Seamless tubular body knit'
    ],
    careInstructions: ['Machine wash cold inside-out', 'Do not tumble dry'],
    measurements: [
      { size: 'S', chest: '43"', length: '28.0"', shoulder: '21.0"', sleeve: '9.0"' },
      { size: 'M', chest: '45"', length: '29.0"', shoulder: '22.0"', sleeve: '9.5"' },
      { size: 'L', chest: '47"', length: '30.0"', shoulder: '23.0"', sleeve: '10.0"' },
      { size: 'XL', chest: '49"', length: '31.0"', shoulder: '24.0"', sleeve: '10.5"' }
    ],
    rating: 4.8,
    reviewCount: 54
  },
  {
    id: 'og-bottom-02',
    slug: 'kinetic-nylon-parachute-pant',
    name: 'KINETIC NYLON PARACHUTE PANT',
    subtitle: 'Bungee Hem Cinch • Wide-Leg Oversized Cut',
    price: 3999,
    originalPrice: 4999,
    category: 'Bottoms',
    collection: 'UNDERGROUND FREQUENCY',
    isNewDrop: true,
    isBestSeller: false,
    isLimited: false,
    stockCount: 8,
    images: [
      'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1517445312882-bc9910d016b7?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=1200&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Concrete Grey', hex: '#484a51', bgClass: 'bg-zinc-700' },
      { name: 'Matte Black', hex: '#111215', bgClass: 'bg-zinc-950' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    fit: 'Wide Parachute',
    gsm: '190 GSM Ultra-Lightweight Crinkle Taslan',
    fabric: '100% Hydrophobic Taslan Nylon',
    description: 'The defining silhouette of contemporary street style. Ballooned wide-leg drape with articulated knee pleating and elasticated waistband with industrial toggles. Bottom hems feature dual bungee drawcords for dramatic stack effect.',
    features: [
      'Featherweight crinkle matte taslan fabric',
      'Fully adjustable bungee cord system at ankles',
      'Deep slash side pockets with internal key loop',
      'Breathable mesh interior lining'
    ],
    careInstructions: ['Cold wash delicate cycle', 'Drip dry in shade'],
    measurements: [
      { size: 'S', chest: 'Waist: 28-30"', length: '40.0"', shoulder: 'Inseam: 29"', sleeve: 'Leg Opening: 22"' },
      { size: 'M', chest: 'Waist: 31-33"', length: '41.0"', shoulder: 'Inseam: 30"', sleeve: 'Leg Opening: 23"' },
      { size: 'L', chest: 'Waist: 34-36"', length: '42.0"', shoulder: 'Inseam: 30.5"', sleeve: 'Leg Opening: 24"' },
      { size: 'XL', chest: 'Waist: 36-38"', length: '42.5"', shoulder: 'Inseam: 31"', sleeve: 'Leg Opening: 24.5"' }
    ],
    rating: 4.7,
    reviewCount: 29
  },
  {
    id: 'og-hoodie-02',
    slug: 'anarchy-oversized-raw-zip-fleece',
    name: 'ANARCHY RAW ZIP REVERSIBLE HOODIE',
    subtitle: 'Heavy 420 GSM • Thermal Reversible Waffle',
    price: 5499,
    originalPrice: 6999,
    category: 'Hoodies',
    collection: 'CORE ARCHIVE',
    isNewDrop: false,
    isBestSeller: true,
    isLimited: false,
    stockCount: 7,
    images: [
      'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?q=80&w=1200&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Washed Charcoal', hex: '#2e3037', bgClass: 'bg-zinc-800' },
      { name: 'Vanta Black', hex: '#0a0a0c', bgClass: 'bg-neutral-950' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    fit: 'Boxy Oversized',
    gsm: '420 GSM Heavyweight Terry + 240 GSM Waffle Knit',
    fabric: 'Dual Layer 100% Combed Cotton',
    description: 'Two jackets in one architectural garment. Side A features raw external overlock stitching and silicone branding on heavy charcoal cotton. Reverse to Side B to reveal a textured thermal honeycomb waffle in off-white.',
    features: [
      'Fully reversible two-way construction with custom metal puller',
      'Exposed contrast raw seam stitching',
      'Dual deep patch pockets on both sides',
      'Extra heavyweight drape with boxy cut'
    ],
    careInstructions: ['Dry clean or delicate gentle hand wash', 'Lay flat to dry'],
    measurements: [
      { size: 'S', chest: '47"', length: '27.5"', shoulder: '23.5"', sleeve: '24.5"' },
      { size: 'M', chest: '49"', length: '28.5"', shoulder: '24.5"', sleeve: '25.0"' },
      { size: 'L', chest: '51"', length: '29.5"', shoulder: '25.5"', sleeve: '25.5"' },
      { size: 'XL', chest: '53"', length: '30.5"', shoulder: '26.5"', sleeve: '26.0"' }
    ],
    rating: 4.9,
    reviewCount: 47
  },
  {
    id: 'og-acc-01',
    slug: 'offgrid-tactical-modular-chest-rig',
    name: 'OFFGRID TACTICAL MODULAR CHEST RIG',
    subtitle: 'Cordura 1000D • Molle Webbing & Fidlock',
    price: 2799,
    originalPrice: 3499,
    category: 'Accessories',
    collection: 'DROP 004: SECTOR ZERO',
    isNewDrop: true,
    isBestSeller: true,
    isLimited: true,
    stockCount: 9,
    editionTotal: 100,
    editionNumber: '042 / 100',
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1200&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Tactical Black', hex: '#0a0a0c', bgClass: 'bg-black' },
      { name: 'Coyote Concrete', hex: '#7a7469', bgClass: 'bg-stone-600' }
    ],
    sizes: ['ONE SIZE (ADJUSTABLE)'],
    fit: 'Regular Fit',
    gsm: '1000D Ballistic Cordura',
    fabric: 'Military Spec Ballistic Cordura Nylon',
    description: 'The definitive utility accessory for street culture. Worn across the chest with 4-point adjustable harness system or converted into a cross-body sling. Features waterproof YKK zippers, internal earphone cable pass-through, and laser-cut MOLLE webbing.',
    features: [
      '1000D Ballistic Cordura waterproof exterior',
      'Detachable padded 4-point shoulder harness',
      'Internal organizer for phone, cards, passport, and vape',
      'Matte black aluminum quick-release carabiners'
    ],
    careInstructions: ['Wipe clean with damp cloth', 'Do not submerge or machine wash'],
    measurements: [
      { size: 'ONE SIZE', chest: 'Width: 9.5"', length: 'Height: 7.0"', shoulder: 'Depth: 2.5"', sleeve: 'Harness: 28-48" Adj' }
    ],
    rating: 4.9,
    reviewCount: 31
  },
  {
    id: 'og-tee-03',
    slug: 'monolith-heavyweight-box-tee',
    name: 'MONOLITH 320GSM HEAVY BOX TEE',
    subtitle: 'Raw Edge Finish • Minimalist Industrial Tag',
    price: 2199,
    originalPrice: 2799,
    category: 'T-Shirts',
    collection: 'CORE ARCHIVE',
    isNewDrop: false,
    isBestSeller: true,
    isLimited: false,
    stockCount: 18,
    images: [
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1200&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Off-White Chalk', hex: '#f0ede6', bgClass: 'bg-[#f0ede6]' },
      { name: 'Vanta Black', hex: '#0a0a0c', bgClass: 'bg-black' },
      { name: 'Concrete Mud', hex: '#5e5a53', bgClass: 'bg-[#5e5a53]' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    fit: 'Boxy Oversized',
    gsm: '320 GSM Super Heavy Jersey Cotton',
    fabric: '100% Combed Compact Cotton',
    description: 'Our most architectural everyday tee. Pure structure, no compromise. Thick enough that it stands away from the body in a dramatic square box drape. Finished with an industrial rubberized OFFGRID coordinate tag on the front left hem.',
    features: [
      'Extreme 320 GSM structure — zero drape collapse',
      'Seamless high collar with tight 1.5" ribbing',
      'Thermal embossed silicone logo at back neck',
      'Raw laser-cut sleeve and waist hem'
    ],
    careInstructions: ['Cold wash with similar darks', 'Lay flat to dry'],
    measurements: [
      { size: 'S', chest: '45"', length: '28.0"', shoulder: '22.0"', sleeve: '9.0"' },
      { size: 'M', chest: '47"', length: '29.0"', shoulder: '23.0"', sleeve: '9.5"' },
      { size: 'L', chest: '49"', length: '30.0"', shoulder: '24.0"', sleeve: '10.0"' },
      { size: 'XL', chest: '51"', length: '31.0"', shoulder: '25.0"', sleeve: '10.5"' }
    ],
    rating: 4.9,
    reviewCount: 63
  },
  {
    id: 'og-acc-02',
    slug: 'industrial-safety-web-belt',
    name: 'OFFGRID INDUSTRIAL UTILITY BELT',
    subtitle: 'Heavy Webbing 200cm • Quick Release Alloy Buckle',
    price: 1499,
    originalPrice: 1999,
    category: 'Accessories',
    collection: 'CORE ARCHIVE',
    isNewDrop: false,
    isBestSeller: false,
    isLimited: false,
    stockCount: 22,
    images: [
      'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1200&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Safety Blaze Orange', hex: '#ff4400', bgClass: 'bg-[#ff4400]' },
      { name: 'Industrial Black', hex: '#0a0a0c', bgClass: 'bg-black' }
    ],
    sizes: ['ONE SIZE (200CM EXTRA LONG)'],
    fit: 'Regular Fit',
    gsm: 'Industrial High-Tensile Polyamide',
    fabric: 'Jacquard Woven High-Strength Webbing',
    description: 'Extra long 200cm industrial streetwear belt designed to hang loose down the leg. Woven with continuous OFFGRID typography and engineered load-bearing stats. Equipped with a heavy quick-release aluminum slide buckle.',
    features: [
      '200cm extended length for dramatic street styling drop',
      'Heavy anodized aluminum alloy buckle with laser engraving',
      'Jacquard woven bold typography throughout the strap',
      'Metal end cap with embossed logo'
    ],
    careInstructions: ['Spot clean only'],
    measurements: [
      { size: '200CM', chest: 'Width: 1.5"', length: 'Length: 200cm', shoulder: 'Buckle: 2.2" x 1.8"', sleeve: 'N/A' }
    ],
    rating: 4.8,
    reviewCount: 26
  }
];

export const PROMO_CODES: { [key: string]: { discountType: 'percentage' | 'fixed'; discountValue: number; description: string; minOrder: number } } = {
  'OFFGRID10': {
    discountType: 'percentage',
    discountValue: 10,
    description: '10% off on all items across Drop 004',
    minOrder: 0
  },
  'FIRSTDROP': {
    discountType: 'fixed',
    discountValue: 500,
    description: '₹500 flat off on orders above ₹2,499',
    minOrder: 2499
  },
  'STREETCREW': {
    discountType: 'percentage',
    discountValue: 15,
    description: 'VIP Street Syndicate 15% discount',
    minOrder: 3999
  }
};

export const CATEGORIES_LIST = [
  {
    name: 'Oversized T-Shirts',
    categoryKey: 'T-Shirts' as const,
    count: '14 STYLES',
    tagline: '300-320 GSM • Boxy Silhouette',
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=900&auto=format&fit=crop',
  },
  {
    name: 'Heavyweight Hoodies',
    categoryKey: 'Hoodies' as const,
    count: '8 STYLES',
    tagline: '450 GSM French Terry • Architectural Hood',
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=900&auto=format&fit=crop',
  },
  {
    name: 'Tactical Cargo Pants',
    categoryKey: 'Bottoms' as const,
    count: '9 STYLES',
    tagline: 'Ripstop Cordura • Fidlock Adjusters',
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=900&auto=format&fit=crop',
  },
  {
    name: 'Utility Outerwear',
    categoryKey: 'Outerwear' as const,
    count: '5 STYLES',
    tagline: 'Flight Nylon • Weatherproof Shells',
    image: 'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=900&auto=format&fit=crop',
  },
  {
    name: 'Street Accessories',
    categoryKey: 'Accessories' as const,
    count: '12 STYLES',
    tagline: 'Chest Rigs • Industrial Belts • Heavy Chains',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=900&auto=format&fit=crop',
  }
];

export const COMMUNITY_LOOKS = [
  {
    id: 'c-01',
    handle: '@zoya_distort',
    location: 'Bandra West, Mumbai',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=900&auto=format&fit=crop',
    wearing: 'Sector Zero Oversized Graphic Tee (L)',
    productId: 'og-tee-01',
    likes: 842
  },
  {
    id: 'c-02',
    handle: '@kabir_raw',
    location: 'Hauz Khas, New Delhi',
    image: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=900&auto=format&fit=crop',
    wearing: 'Neo-Distortion 450GSM Hoodie (XL)',
    productId: 'og-hoodie-01',
    likes: 1205
  },
  {
    id: 'c-03',
    handle: '@neha.cargo',
    location: 'Indiranagar, Bengaluru',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=900&auto=format&fit=crop',
    wearing: 'Tactical Ripstop Modular Cargo (32)',
    productId: 'og-cargo-01',
    likes: 963
  },
  {
    id: 'c-04',
    handle: '@aditya_tokyo',
    location: 'Shibuya, Tokyo',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=900&auto=format&fit=crop',
    wearing: 'Subterra Dual-Zip Bomber (L)',
    productId: 'og-jacket-01',
    likes: 1530
  }
];

