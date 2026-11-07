export interface Room {
  id: string;
  name: string;
  category: 'heritage' | 'royal-suite' | 'maharaja-suite' | 'presidential';
  categoryLabel: string;
  priceINR: number;
  sizeSqFt: number;
  maxGuests: number;
  bedType: string;
  view: string;
  shortDesc: string;
  fullDesc: string;
  highlights: string[];
  amenities: string[];
  images: string[];
  badge?: string;
  floor: string;
}

export interface Experience {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  category: 'cultural' | 'wellness' | 'culinary' | 'heritage' | 'adventure';
  timing: string;
  duration: string;
  image: string;
  description: string;
  inclusions: string[];
  priceINR?: number;
}

export interface DiningVenue {
  id: string;
  name: string;
  tagline: string;
  cuisine: string;
  timing: string;
  attire: string;
  image: string;
  description: string;
  signatureDishes: { name: string; desc: string; priceINR: number }[];
  atmosphere: string;
}

export interface WeddingVenue {
  id: string;
  name: string;
  capacity: string;
  setting: string;
  image: string;
  description: string;
  features: string[];
}

export interface PackageOffer {
  id: string;
  title: string;
  duration: string;
  priceINR: number;
  savings: string;
  image: string;
  description: string;
  inclusions: string[];
  validUntil: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'architecture' | 'rooms' | 'dining' | 'experiences' | 'weddings';
  image: string;
  caption: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location: string;
  role: string;
  rating: number;
  stayDate: string;
  suiteType: string;
}

export const HOTEL_CONFIG = {
  name: "Rajmahal Heritage",
  tagline: "A Royal Stay. A Timeless Story.",
  descriptor: "Palace & Luxury Heritage Sanctuary",
  subheading: "Where the Grandeur of 18th Century Rajputana Embraces Contemporary Imperial Living",
  foundedYear: 1742,
  founder: "Maharaja Sawai Vikramaditya Dev",
  location: {
    address: "Palace Road, Foothills of Aravali, Near City Lake",
    city: "Udaipur & Royal Jaipur Corridor",
    state: "Rajasthan",
    country: "India",
    pinCode: "313001",
    coordinates: { lat: 24.5764, lng: 73.6835 },
    nearbyAttractions: [
      { name: "City Palace & Lake Pichola", distance: "4.5 km / 12 mins" },
      { name: "Jag Mandir Island Palace", distance: "5.2 km / 15 mins by royal boat" },
      { name: "Sajjangarh Monsoon Palace", distance: "9.8 km / 25 mins" },
      { name: "Bagore Ki Haveli & Gangaur Ghat", distance: "4.0 km / 10 mins" },
      { name: "Maharana Pratap Airport (UDR)", distance: "28 km / 45 mins" },
      { name: "Private Palace Helipad", distance: "On-site / Direct arrival" }
    ]
  },
  contact: {
    phone: "+91 294 288 9000",
    phoneDisplay: "+91 (294) 288-9000",
    tollFree: "1800-RAJ-MAHAL",
    whatsappNumber: "919829012345",
    whatsappDisplay: "+91 98290 12345",
    reservationsEmail: "concierge@rajmahalheritage.com",
    weddingsEmail: "weddings@rajmahalheritage.com",
    pressEmail: "press@rajmahalheritage.com"
  },
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
    tripadvisor: "https://tripadvisor.com"
  },
  stats: [
    { label: "Original Architecture", value: "1742 AD" },
    { label: "Acres of Royal Terraced Gardens", value: "32 Acres" },
    { label: "Bespoke Suites & Chambers", value: "48 Keys" },
    { label: "Imperial Butler Ratio", value: "1 : 1" },
  ],
  currencies: [
    { code: 'INR', symbol: '₹', rate: 1, name: 'Indian Rupee' },
    { code: 'USD', symbol: '$', rate: 0.012, name: 'US Dollar' },
    { code: 'EUR', symbol: '€', rate: 0.011, name: 'Euro' },
    { code: 'GBP', symbol: '£', rate: 0.0094, name: 'British Pound' },
    { code: 'AED', symbol: 'AED ', rate: 0.044, name: 'UAE Dirham' }
  ]
};

export const ROOMS: Room[] = [
  {
    id: "heritage-garden-chamber",
    name: "Heritage Garden Chamber",
    category: "heritage",
    categoryLabel: "Heritage Rooms",
    priceINR: 28000,
    sizeSqFt: 520,
    maxGuests: 2,
    bedType: "Royal King Poster Bed",
    view: "Sandstone Zenana Courtyard & Rose Gardens",
    shortDesc: "Elegantly restored 18th-century chambers framed by cusped Rajput arches, antique teak woodwork, and a private stone jharokha overlooking fragrant jasmine courtyards.",
    fullDesc: "Once reserved for visiting nobles of the royal court, each Heritage Garden Chamber is a masterclass in living history. Featuring original lime-plastered walls finished in natural pigments, hand-knotted silk rugs, and carved sandstone jharokhas that capture morning breezes from the royal gardens. An Italian-quarried marble bathroom with a freestanding clawfoot copper tub and forest essential oils completes this regal haven.",
    highlights: ["Hand-carved Sandstone Jharokha", "Restored Teak Four-Poster Bed", "Freestanding Copper Soaking Tub", "Complimentary High Tea Daily"],
    amenities: [
      "24-Hour Imperial Butler Call",
      "Signature Forest Essentials Toiletries",
      "Complimentary High-Speed Wi-Fi",
      "Pashmina Evening Turn-Down Service",
      "Bose Acoustic Sound System",
      "Artisanal Coffee & Indian Masala Chai Bar",
      "Climate Controlled Heating & Cooling",
      "Personal Safe & Valuables Vault",
      "Royal Breakfast Buffet Included"
    ],
    images: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80"
    ],
    floor: "Ground & First Courtyard Levels",
    badge: "Guest Favorite"
  },
  {
    id: "royal-palace-suite",
    name: "Royal Palace Suite",
    category: "royal-suite",
    categoryLabel: "Royal Suites",
    priceINR: 48000,
    sizeSqFt: 880,
    maxGuests: 3,
    bedType: "Embroidered Silk King Canopy Bed",
    view: "Grand Baori Lotus Pool & Marble Arches",
    shortDesc: "Expansive two-room sanctuaries boasting restored gold-leaf ceiling cornices, private dining salon, and sweeping views of the illuminated lotus stepwell pool.",
    fullDesc: "The Royal Palace Suites occupy the premier wing overlooking the majestic Baori pool. Each suite incorporates an opulent living room furnished with Belgian chandeliers and restored Mewari miniature paintings, leading into a serene bedchamber draped in pure raw silks. The expansive marble bathroom features a dual vanity, rainfall shower, and a carved marble bath with fragrant rose bath salts.",
    highlights: ["Separate Royal Living Salon", "Private Balcony with Arched Pillars", "Carved Marble Deep Soak Tub", "Chilled Champagne & Saffron Treats on Arrival"],
    amenities: [
      "Dedicated 24-Hour Royal Valet",
      "Complimentary Chauffeured Airport Transfers",
      "Interactive Smart IPTV with Streaming",
      "Bespoke Pillow & Linen Menu",
      "Twice-Daily Housekeeping with Fresh Florals",
      "In-Suite Private Dining Setup",
      "Premium Bar with Aged Single Malts & Wines",
      "Nespresso & Artisanal Kahwa Station",
      "Complimentary Ironing & Garment Pressing"
    ],
    images: [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&w=1200&q=80"
    ],
    floor: "Second Palace Floor",
    badge: "Heritage Classic"
  },
  {
    id: "maharaja-heritage-suite",
    name: "Maharaja Heritage Suite",
    category: "maharaja-suite",
    categoryLabel: "Maharaja Suites",
    priceINR: 85000,
    sizeSqFt: 1450,
    maxGuests: 3,
    bedType: "Custom Silver-Inlaid Imperial Bed",
    view: "Panoramic Aravali Hills & Royal Lake Horizon",
    shortDesc: "Sumptuous suites that once hosted visiting Maharajas, featuring private plunge pool on a sandstone terrace, hand-painted thikri mirror alcoves, and silver-crafted furnishings.",
    fullDesc: "Immerse yourself in quintessential Rajput opulence. The Maharaja Heritage Suite is adorned with authentic Thikri glass mirror mosaic work handcrafted by fifth-generation royal artisans. Step out onto an expansive sandstone terrace with your own temperature-controlled plunge pool and cushioned royal diwan seating, offering unobstructed views of sunset hues painting the Aravali mountains.",
    highlights: ["Private Heated Terrace Plunge Pool", "Authentic Thikri Mirror Work Alcove", "Private Dining Terrace for Six", "Daily Evening High Tea & Canapés"],
    amenities: [
      "Dedicated Personal Butler & Private Chauffeur",
      "Bespoke Welcome Ceremony with Royal Aarti",
      "Custom Monogrammed Bathrobes & Slippers",
      "Full Complimentary In-Suite Premium Bar",
      "Dyson Supersonic Hair Care System",
      "Private Yoga & Meditation Session on Terrace",
      "In-Suite Check-in & Express Check-out",
      "Evening Sunset Cocktails with Private Sitarist",
      "Unrestricted Spa Hydrotherapy Access"
    ],
    images: [
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490359683-658d3d23f972?auto=format&fit=crop&w=1200&q=80"
    ],
    floor: "Third Palace Floor (Royal Wing)",
    badge: "Signature Luxury"
  },
  {
    id: "presidential-grand-residence",
    name: "The Sawai Grand Presidential Residence",
    category: "presidential",
    categoryLabel: "Presidential Residence",
    priceINR: 175000,
    sizeSqFt: 2600,
    maxGuests: 4,
    bedType: "Master Imperial King + Secondary Royal King",
    view: "360° Uninterrupted View of Entire Palace Estate & Lake",
    shortDesc: "The pinnacle of Indian royal sovereignty: a sprawling multi-wing residence featuring a private marble courtyard, personal infinity pool, royal armory salon, and private chef.",
    fullDesc: "Designed as the private sanctuary for visiting heads of state and royal monarchs, The Sawai Grand Presidential Residence commands the entire top pavilion of Rajmahal Heritage. Featuring two master bedchambers, a magnificent 12-seat formal dining hall beneath rock-crystal chandeliers, a private library stocked with rare manuscripts, a personal gym and spa treatment room, and a private infinity pool cantilevered over the palace gardens.",
    highlights: ["Private Heated Infinity Pool & Jacuzzi", "Dedicated Private Chef & 2 Butlers", "Private Helipad Landing Privileges", "Antique Silver & Gold Dinnerware Service"],
    amenities: [
      "24/7 Dedicated Team: Master Chef, 2 Butlers, Chauffeur",
      "Rolls Royce or Vintage Fleet Airport Transfer",
      "Exclusive Access to the Royal Palace Vault",
      "Unlimited Ayurvedic Treatments in In-Suite Spa",
      "Full Wine Cellar Curated by Master Sommelier",
      "Bang & Olufsen Bespoke Audio System",
      "Private Guard & Discreet Security Protocol",
      "Complimentary Custom Dining Menus Throughout Stay",
      "VIP Access & Private Guide for all Rajasthan Forts"
    ],
    images: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80"
    ],
    floor: "Top Pavilion (Exclusive Penthouse Wing)",
    badge: "Crown Jewel"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "royal-welcome",
    title: "The Regal Rajputana Welcome",
    subtitle: "A Ceremony Fit for Emperors",
    tagline: "Tradition Alive Since 1742",
    category: "cultural",
    timing: "Upon Every Arrival",
    duration: "20 Minutes",
    image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=1000&q=80",
    description: "Step across the palace threshold to the resonating cadence of royal Nagada drums and Tutari trumpets. Royal courtiers shower fragrant rose petals from jharokha balconies while offering a traditional sandalwood tilak and ceremonial garland, accompanied by cool saffron-almond sherbet.",
    inclusions: ["Live Nagada & Dhol Musical Escort", "Fragrant Rose Petal Shower", "Ceremonial Sandalwood Tilak", "Welcome Saffron Sherbet & Sweet Delicacies"],
    priceINR: 0
  },
  {
    id: "zenana-soiree",
    title: "Twilight Courtyard Soirée & Kalbelia Dance",
    subtitle: "Rhythms of the Thar Desert Under Starlit Skies",
    tagline: "Live Music & Royal Revelry",
    category: "cultural",
    timing: "Daily from 7:00 PM – 8:30 PM",
    duration: "1.5 Hours",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1000&q=80",
    description: "As dusk falls over the Zenana Courtyard and hundreds of brass oil lamps (diyas) illuminate the stone arches, world-renowned Kalbelia, Ghoomar, and fire dancers bring folklore to life. Savor vintage wines and kebabs straight from the sigri.",
    inclusions: ["Live Rajasthani Folk Music & Classical Dance", "Complimentary Royal Kebabs & Starters", "Open-air Diya-lit Courtyard Seating", "Interaction with Master Folk Artists"],
    priceINR: 0
  },
  {
    id: "heritage-architecture-walk",
    title: "Curated Palace Art & Heritage Walk",
    subtitle: "Untold Secrets of Royal Architecture",
    tagline: "Led by Resident Historian",
    category: "heritage",
    timing: "Every Morning at 8:30 AM & 4:30 PM",
    duration: "1 Hour",
    image: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?auto=format&fit=crop&w=1000&q=80",
    description: "Walk alongside Dr. Raghavendra Rathore, the palace's resident archivist. Uncover hidden passageways, the secret royal archives, 280-year-old Mewari miniature paintings, and the mathematical precision behind the natural cooling courtyards.",
    inclusions: ["Guided Walk through Private Palace Quarters", "Access to the 1742 Royal Manuscript Vault", "Morning Masala Chai & Saffron Shortbread", "Signed Heritage Illustrated Booklet"],
    priceINR: 2500
  },
  {
    id: "somras-ayurvedic-spa",
    title: "Jiva Somras Royal Ayurvedic Spa",
    subtitle: "Ancient Vedic Wellness & Rose Milk Baths",
    tagline: "Holistic Rejuvenation",
    category: "wellness",
    timing: "8:00 AM – 9:00 PM",
    duration: "90 – 150 Minutes",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80",
    description: "Tucked within the vaulted subterranean chambers where royal queens once indulged in beauty rituals. Experience Abhyanga four-hand warm oil massages, Shirodhara with medicated herbal oils, and soaking in marble baths infused with 1,000 fresh damask roses.",
    inclusions: ["Personal Consultation with Ayurvedic Vaidya", "Custom Herb-Infused Sesame & Kumkumadi Oils", "Private Steam & Herbal Hydrotherapy", "Fresh Organic Herbal Teas & Infusions"],
    priceINR: 8500
  },
  {
    id: "baradari-private-dining",
    title: "Imperial Baradari Candlelit Feast",
    subtitle: "A Table Reserved for Royalty",
    tagline: "Bespoke Culinary Romance",
    category: "culinary",
    timing: "8:00 PM – 11:30 PM",
    duration: "3 Hours",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80",
    description: "An exclusive dining pavilion atop the palace's highest sandstone Baradari. Surrounded by 500 flickering candles, personal live sitar melodies, and a six-course royal tasting menu served on hallmarked silverware by your private butler.",
    inclusions: ["Exclusive Use of the 18th-century Baradari", "Six-Course Degustation Menu with Wine Pairings", "Dedicated Royal Butler & Sommelier", "Live Classical Sitar & Flute Performance"],
    priceINR: 24000
  },
  {
    id: "vintage-car-safari",
    title: "Royal Vintage Fleet & Lakeview Drive",
    subtitle: "Travel Like Rajput Monarchs",
    tagline: "Palace Collection Drive",
    category: "adventure",
    timing: "4:00 PM – 6:30 PM",
    duration: "2.5 Hours",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1000&q=80",
    description: "Choose from the palace's private collection: a 1938 Rolls-Royce Phantom III, 1947 Cadillac Series 62, or a 1952 Buick Super. Enjoy a chauffeured scenic drive through the Aravali foothills and lakeside promenades with a royal picnic hamper.",
    inclusions: ["Chauffeured Drive in Palace Vintage Car", "Gourmet Picnic Hamper with French Champagne", "Stop at Scenic Sunset Hilltop", "Commemorative Framed Photograph"],
    priceINR: 18000
  }
];

export const ARCHITECTURE_SHOWCASE = [
  {
    title: "The Zenana Chowk",
    subtitle: "The Queen's Inner Courtyard",
    description: "Built with hand-chiseled yellow Jaisalmer sandstone, this sanctuary served as the private courtyard for royal women. Water cascades through a stepped lotus fountain, cooling the ambient air naturally by 5°C throughout Rajasthan summers.",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
    details: "12 Cusped Arches • Central Baori Fountain • Handcrafted Marble Inlay"
  },
  {
    title: "Cusped Rajput & Mughal Arches",
    subtitle: "Symmetry of Imperial Stone",
    description: "Characterized by multi-lobed foliate arches supported by carved fluted columns. Each arch is embellished with stylized lotus crests and peacocks, reflecting the harmonious synthesis of Rajput courage and Mughal finesse.",
    image: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?auto=format&fit=crop&w=1200&q=80",
    details: "18th-Century Polychrome Sandstone • Hand-carved Medallions • Fluted Pillars"
  },
  {
    title: "The Shish Mahal (Thikri Mirror Hall)",
    subtitle: "Constellations in Stone & Glass",
    description: "Adorned with over 40,000 convex mirror pieces imported from Belgium in 1780. When a single candle is lit in the center of the hall, the walls and domed ceiling reflect a starry night sky of infinite twinkling reflections.",
    image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80",
    details: "Hand-cut Convex Mirrors • Gold Leaf Foil • Original Fresco Borders"
  },
  {
    title: "The Baori Lotus Pool",
    subtitle: "Restored Royal Stepwell Architecture",
    description: "Inspired by the geometric stepwells (baoris) of western India, the main swimming pavilion features stepped sandstone ledges leading into turquoise waters, framed by shaded pavilions and fragrant frangipani trees.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    details: "Heated Stepwell Swimming Pool • Shaded Chhatris • Poolside Royal Service"
  }
];

export const DINING_VENUES: DiningVenue[] = [
  {
    id: "shahi-dastarkhwan",
    name: "Shahi Dastarkhwan",
    tagline: "Imperial Rajput & Mewari Fine Dining",
    cuisine: "Royal Rajasthani, North Indian & Mughlai",
    timing: "Lunch: 12:30 PM – 3:30 PM | Dinner: 7:30 PM – 11:30 PM",
    attire: "Royal Elegant / Smart Casual",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    description: "Dine under soaring vaulted stone ceilings lit by antique glass chandeliers. Shahi Dastarkhwan preserves centuries-old royal family recipes handed down through generations of palace khansamas (head chefs).",
    signatureDishes: [
      { name: "Mewari Laal Maas", desc: "Slow-cooked tender Mathania chilli lamb infused with smoky clove charcoal", priceINR: 2400 },
      { name: "Ker Sangri Ka Korma", desc: "Desert beans & wild berries simmered in rich yoghurt and roasted spices", priceINR: 1650 },
      { name: "Royal Dal Baati Churma", desc: "Five-lentil broth, oven-baked wheat baatis with pure desi ghee & crushed jaggery", priceINR: 1850 },
      { name: "Zafrani Shahi Tukda", desc: "Crisp saffron brioche steeped in cardamom condensed milk with silver vark", priceINR: 950 }
    ],
    atmosphere: "Regal, intimate, with live santoor accompaniment and silverware service."
  },
  {
    id: "jharokha-lounge",
    name: "The Jharokha Tea & Patisserie",
    tagline: "Afternoon High Tea & Royal Confectionery",
    cuisine: "Artisanal Teas, Palace Sweets & Light European Fare",
    timing: "10:00 AM – 8:00 PM (High Tea: 3:30 PM – 6:00 PM)",
    attire: "Casual Resort Chic",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1200&q=80",
    description: "Perched above the main courtyard with carved stone oriel windows, this airy salon serves royal cardamom chai, Darjeeling first flushes, delicate scones, and gold-dusted pistachio macarons.",
    signatureDishes: [
      { name: "Maharani High Tea Tier", desc: "Saffron scones, cucumber finger sandwiches, rose clotted cream & warm savouries", priceINR: 2800 },
      { name: "Palace Cardamom Kahwa", desc: "Kashmiri green tea brewed with saffron, almonds, cinnamon and wild honey", priceINR: 650 },
      { name: "Gold Leaf Pistachio Opera", desc: "Layered almond sponge, dark chocolate ganache, and edible 24k gold leaf", priceINR: 1100 }
    ],
    atmosphere: "Sunlit, breezy, surrounded by hand-painted botanical murals."
  },
  {
    id: "baradari-terrace",
    name: "Baradari Terrace & Bar",
    tagline: "Al Fresco Grill & Botanical Cocktails",
    cuisine: "Sigri Grills, Mediterranean & Bespoke Mixology",
    timing: "5:00 PM – 1:00 AM",
    attire: "Smart Evening",
    image: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=1200&q=80",
    description: "Under starry Rajasthan nights, this rooftop terrace pairs charcoal-grilled delicacies with innovative cocktails crafted using indigenous botanicals, desert herbs, and royal preserves.",
    signatureDishes: [
      { name: "Rajmahal Smoked Negroni", desc: "Oak-aged gin infused with rose petals, Campari, vermouth and clove smoke", priceINR: 1400 },
      { name: "Tandoori Jheenga", desc: "Jumbo prawns marinated in yellow mustard, hung curd and smoked Kashmiri chillies", priceINR: 2600 },
      { name: "Baradari Paneer Tikka", desc: "Cottage cheese stuffed with spiced dried figs, cooked over charcoal sigri", priceINR: 1550 }
    ],
    atmosphere: "Open-air lounge with panoramic palace views and ambient deep lounge beats."
  }
];

export const WEDDING_VENUES: WeddingVenue[] = [
  {
    id: "zenana-grand-courtyard",
    name: "The Zenana Grand Courtyard",
    capacity: "Up to 450 Guests",
    setting: "Open-air Sandstone Courtyard",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    description: "The crown jewel for grand Indian wedding celebrations. A majestic multi-tiered courtyard flanked by illuminated cusped arches and a central water stage perfect for royal pheras and sangeet night.",
    features: ["Dedicated Royal Elephant/Horse Procession Path", "In-house Floral Design by Master Florists", "Traditional Shehnai & Nagada Troupe Stage", "State-of-the-Art Concealed Acoustic Rig"]
  },
  {
    id: "durbar-banquet-hall",
    name: "The Imperial Durbar Hall",
    capacity: "Up to 300 Guests",
    setting: "Historic High-Ceilinged Royal Hall",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80",
    description: "Once the seat of royal assemblies, the Durbar Hall features 24-foot vaulted ceilings, Belgian crystal chandeliers, hand-carved teak columns, and pure marble floors.",
    features: ["Climate Controlled Luxury", "Separate Royal Pre-function Foyer", "Gold-leaf Banquet Setup Available", "Full Stage & Audio-Visual Integration"]
  },
  {
    id: "lotus-poolside-chhatris",
    name: "The Lotus Poolside Gardens",
    capacity: "Up to 200 Guests",
    setting: "Lakeside & Pool Pavilion",
    image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80",
    description: "Perfect for sun-kissed Mehendi soirées and intimate cocktail parties. Decorated with marigold cascades, floating candle bowls, and cushioned royal diwans under shaded chhatris.",
    features: ["Floating Candle Water Display", "Live Cooking Counters & Chaat Bazar", "Lawn Gazebos & Custom Canopy Lounges", "Sunset View Over Aravali Foothills"]
  }
];

export const PACKAGES: PackageOffer[] = [
  {
    id: "royal-heritage-retreat",
    title: "The Royal Heritage Sojourn",
    duration: "3 Nights / 4 Days",
    priceINR: 110000,
    savings: "Save 25% on Suite Stays",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1000&q=80",
    description: "An immersive escape designed to experience the fullest essence of Rajput royal hospitality, heritage dining, and palace wellness.",
    inclusions: [
      "Accommodations in a Royal Palace Suite",
      "Daily Royal Champagne Breakfast in Bed or Courtyard",
      "One Six-Course Degustation Dinner at Shahi Dastarkhwan",
      "Private Curated Architecture & Vault Tour",
      "Roundtrip Airport Transfers in Luxury Sedan",
      "20% Privilege on all Ayurvedic Spa Treatments"
    ],
    validUntil: "Valid Year-Round"
  },
  {
    id: "palace-romance-honeymoon",
    title: "Palace Romance & Honeymoon Sanctuary",
    duration: "2 Nights / 3 Days",
    priceINR: 95000,
    savings: "Inclusive of Dining & Spa",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80",
    description: "Created specifically for couples seeking an unforgettable romantic milestone wrapped in timeless palace grandeur.",
    inclusions: [
      "Stay in Maharaja Heritage Suite with Private Plunge Pool",
      "Chilled Moët & Chandon and Saffron Delights on Arrival",
      "Candlelit Private 5-Course Dinner at the Rooftop Baradari",
      "90-Minute Couple's Rose Milk & Sandalwood Spa Ritual",
      "Sunset Vintage Car Drive along the Lake",
      "Personal Butler Service Throughout Stay"
    ],
    validUntil: "Valid Year-Round"
  },
  {
    id: "ayurvedic-wellness-rejuvenation",
    title: "Vedic Wellness & Rasayana Retreat",
    duration: "4 Nights / 5 Days",
    priceINR: 145000,
    savings: "Complimentary Daily Treatments",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80",
    description: "Align your mind, body and soul through age-old Ayurvedic wisdom, personalized organic nutrition, and yoga in the palace gardens.",
    inclusions: [
      "Chamber in the Quiet Heritage Garden Wing",
      "Comprehensive Consultation with Senior Ayurvedic Physician",
      "Two Bespoke Daily Ayurvedic Therapies (Abhyanga & Shirodhara)",
      "Daily Sunrise Pranayama & Hatha Yoga at the Lotus Pavilion",
      "Custom Sattvic Gourmet Meals Tailored to Your Dosha",
      "Herbal Take-Home Rejuvenation Kit"
    ],
    validUntil: "Valid through Winter & Spring"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g-1",
    title: "Palace Facade at Twilight",
    category: "architecture",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
    caption: "The illuminated sandstone facade and chhatri pavilions glow against the twilight Aravali sky."
  },
  {
    id: "g-2",
    title: "The Sawai Presidential Master Suite",
    category: "rooms",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
    caption: "Custom silver-inlaid canopy bed surrounded by pure silk drapes and marble floors."
  },
  {
    id: "g-3",
    title: "Zenana Courtyard Lotus Fountain",
    category: "architecture",
    image: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?auto=format&fit=crop&w=1200&q=80",
    caption: "A central fountain cooled by morning breezes, framed by yellow Jaisalmer sandstone arches."
  },
  {
    id: "g-4",
    title: "Shahi Dastarkhwan Dining Hall",
    category: "dining",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    caption: "Royal table setting with hallmarked silverware, Belgian crystal, and floral centerpieces."
  },
  {
    id: "g-5",
    title: "Twilight Kalbelia Performance",
    category: "experiences",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80",
    caption: "Folk dancers performing traditional spins amidst hundreds of flickering brass oil lamps."
  },
  {
    id: "g-6",
    title: "Baori Stepwell Swimming Pool",
    category: "architecture",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    caption: "Stepped sandstone ledges and turquoise waters under shaded Rajput pavilions."
  },
  {
    id: "g-7",
    title: "Royal Wedding Mandap Ceremony",
    category: "weddings",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    caption: "Marigold-draped floral mandap elevated over the serene water courtyard."
  },
  {
    id: "g-8",
    title: "Thikri Mirror Alcove",
    category: "rooms",
    image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80",
    caption: "Thousands of miniature convex glass mirrors creating an ethereal constellation of light."
  },
  {
    id: "g-9",
    title: "Baradari Rooftop Cocktail Lounge",
    category: "dining",
    image: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=1200&q=80",
    caption: "Crafted botanical mixology served against the backdrop of the palace towers."
  },
  {
    id: "g-10",
    title: "Traditional Dhol Welcome",
    category: "experiences",
    image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=1200&q=80",
    caption: "Dressed in imperial turbans, court musicians herald every guest's arrival."
  },
  {
    id: "g-11",
    title: "The Jharokha Afternoon Tea",
    category: "dining",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1200&q=80",
    caption: "Artisanal saffron pastries, cardamom teas and tiered savouries in the sunlit gallery."
  },
  {
    id: "g-12",
    title: "Grand Durbar Hall Wedding Banquet",
    category: "weddings",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80",
    caption: "Regal banquet setting under crystal chandeliers for unforgettable nuptial celebrations."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t-1",
    quote: "Staying at Rajmahal Heritage was unlike any luxury hotel on earth. The attention to historical integrity combined with quiet, warm Rajput hospitality made us feel like honoured guests of a royal family.",
    author: "Sir Alistair & Lady Montgomery",
    location: "London, United Kingdom",
    role: "Patrons of the British Heritage Trust",
    rating: 5,
    stayDate: "February 2026",
    suiteType: "Sawai Grand Presidential Residence"
  },
  {
    id: "t-2",
    quote: "The dinner at Shahi Dastarkhwan alone is worth traveling across continents. The slow-cooked Laal Maas and the aroma of charcoal sigris in the courtyard will remain etched in our memories forever.",
    author: "Chef Vikram & Ananya Singhania",
    location: "Mumbai, India",
    role: "Culinary Critics & Authors",
    rating: 5,
    stayDate: "January 2026",
    suiteType: "Maharaja Heritage Suite"
  },
  {
    id: "t-3",
    quote: "We hosted our 3-day royal destination wedding here with 350 guests. From the elephant procession to the pheras on the water mandap, the team executed every detail with supreme precision and majesty.",
    author: "Devika & Siddharth Birla",
    location: "New York, USA",
    role: "Private Wedding Clients",
    rating: 5,
    stayDate: "November 2025",
    suiteType: "Zenana Palace Courtyard Wedding"
  },
  {
    id: "t-4",
    quote: "The Somras Ayurvedic Spa session was transcendent. Soaking in rose water while listening to soft temple flutes in an authentic 18th-century vaulted cellar restored mind and body completely.",
    author: "Elena Rostova",
    location: "Zurich, Switzerland",
    role: "Architect & Luxury Travel Writer",
    rating: 5,
    stayDate: "December 2025",
    suiteType: "Royal Palace Suite"
  }
];

export const PRESS_ACCOLADES = [
  { award: "Condé Nast Traveler", title: "Top 3 Palace Hotels in Asia (Gold List 2025)" },
  { award: "Architectural Digest", title: "Exemplary Living Heritage Conservation Award" },
  { award: "Travel + Leisure", title: "World's Best Heritage Hospitality Experience" },
  { award: "Michelin Guide Selection", title: "Exceptional Traditional Gastronomy" }
];
