import { Room, Addon, MeetingVenue, Restaurant, CorporateOffer, Testimonial } from '../types';

export const HOTEL_INFO = {
  name: "Grand Meridian",
  fullName: "Grand Meridian Hotel & Residences",
  tagline: "Where Business Meets Exceptional Comfort",
  stars: 5,
  founded: 2018,
  address: {
    line1: "Asset Area 8, Hospitality District",
    line2: "IGI Airport Aerocity",
    city: "New Delhi",
    state: "Delhi NCR",
    postalCode: "110037",
    country: "India"
  },
  contact: {
    phone: "+91 11 4988 7700",
    phoneDisplay: "+91 (11) 4988 7700",
    tollFree: "1800 209 7700",
    whatsapp: "+911149887700",
    whatsappDisplay: "+91 11 4988 7700",
    email: "reservations@grandmeridiandelhi.com",
    corporateEmail: "corporate@grandmeridiandelhi.com",
    eventsEmail: "events@grandmeridiandelhi.com",
    mapUrl: "https://maps.google.com/?q=Aerocity+New+Delhi"
  },
  quickStats: [
    { label: "Executive Rooms & Suites", value: "284" },
    { label: "Mins to International Airport", value: "12" },
    { label: "Dedicated Fiber Wi-Fi", value: "10 Gbps" },
    { label: "Meeting & Boardrooms", value: "18" },
    { label: "Corporate CSAT Rating", value: "99.4%" },
    { label: "Round-the-Clock Concierge", value: "24/7" }
  ]
};

export const ROOMS_DATA: Room[] = [
  {
    id: "executive-king",
    name: "Executive King Room",
    tagline: "Purpose-built for productive corporate travelers",
    category: "executive",
    priceINR: 9800,
    originalPriceINR: 11500,
    sizeSqFt: 420,
    sizeSqM: 39,
    bedType: "King Bed with Posturepedic Mattress",
    maxGuests: 2,
    maxAdults: 2,
    maxChildren: 1,
    view: "Aerocity Skyline & Courtyard Garden",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Designed strictly for executive efficiency. Features an oversized solid walnut work desk, Herman Miller ergonomic chair, universal international multi-plugs, acoustic soundproofing, and a spa-grade marble bathroom.",
    keyAmenities: [
      "Herman Miller Ergonomic Chair",
      "10 Gbps Dedicated Fiber Wi-Fi",
      "Nespresso Coffee Machine",
      "Soundproof Acoustic Double Glazing",
      "Italian Marble Rain Shower"
    ],
    fullAmenities: [
      {
        category: "Executive Workspace",
        items: [
          "Oversized solid wood desk with built-in cable management",
          "Herman Miller Aeron ergonomic chair",
          "HDMI & USB-C quick-connect to 55-inch 4K Smart TV",
          "High-output reading lamp with color temperature control",
          "Dedicated Cat-6 Ethernet port and secure Wi-Fi 6"
        ]
      },
      {
        category: "Sleep & Comfort",
        items: [
          "Custom posturepedic king mattress with 400-thread-count Egyptian cotton linens",
          "Pillow menu featuring memory foam, goose down, and hypoallergenic options",
          "Motorized blackout curtains with touch bedside controls",
          "Quiet inverter climate control with PM2.5 air purifier"
        ]
      },
      {
        category: "Marble Bathroom",
        items: [
          "Imported Italian marble with walk-in rain shower",
          "L'Occitane en Provence luxury bath amenities",
          "Anti-fog backlit vanity mirror and makeup mirror",
          "Plush terry cotton bathrobes and velour slippers"
        ]
      },
      {
        category: "Refreshments & Technology",
        items: [
          "Complimentary Nespresso capsules replenished daily",
          "Stocked premium mini-bar and electric kettle with TWG teas",
          "Electronic laptop-sized safe with internal charging plug",
          "Cordless bedside phone with hands-free speakerphone"
        ]
      }
    ],
    specifications: {
      workStation: "Executive desk (1.8m) + Herman Miller chair",
      connectivity: "Wi-Fi 6 + Cat-6 1 Gbps wired drop",
      bathroom: "Five-fixture marble with thermostatic rain shower",
      soundproofing: "STC 52 acoustic double glazing"
    },
    inclusions: [
      "Buffet breakfast at The Meridian Table",
      "Daily 2 pieces express business garment pressing",
      "High-speed 10 Gbps Wi-Fi access",
      "Complimentary shoe shine service",
      "Bottled Himalayan spring water replenished unlimited"
    ]
  },
  {
    id: "deluxe-twin",
    name: "Deluxe Twin Room",
    tagline: "Spacious dual configuration for visiting delegates",
    category: "deluxe",
    priceINR: 11200,
    originalPriceINR: 13000,
    sizeSqFt: 460,
    sizeSqM: 43,
    bedType: "Two Twin Posturepedic Beds",
    maxGuests: 2,
    maxAdults: 2,
    maxChildren: 1,
    view: "City Skyline & Landscaped Water Feature",
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Ideal for colleagues traveling together on corporate assignments or project audits. Offers two generous twin beds, dual vanity bathroom, and dedicated workspace with dual power banks.",
    keyAmenities: [
      "Dual Posturepedic Twin Beds",
      "High-Speed Fiber Wi-Fi",
      "Dual Marble Vanity",
      "Smart 55-inch 4K TV",
      "Tea & Coffee Station"
    ],
    fullAmenities: [
      {
        category: "Executive Workspace",
        items: [
          "Dual desk setup with individual reading lights",
          "Multiple universal socket points and USB ports",
          "Dedicated high-speed wireless connection"
        ]
      },
      {
        category: "Comfort",
        items: [
          "Twin orthopaedic beds with independent duvets",
          "Individual temperature control and air purification",
          "Full-length mirror and generous wardrobe space"
        ]
      }
    ],
    specifications: {
      workStation: "Ergonomic dual desk setup",
      connectivity: "Wi-Fi 6 up to 500 Mbps",
      bathroom: "Dual sink marble vanity & rain shower",
      soundproofing: "STC 50 acoustic glazing"
    },
    inclusions: [
      "Buffet breakfast for two at The Meridian Table",
      "Complimentary access to 24/7 fitness center and heated pool",
      "Two items pressed daily per person"
    ]
  },
  {
    id: "club-business-room",
    name: "Club Business Room (Lounge Access)",
    tagline: "Exclusive high-floor comfort with Executive Lounge privileges",
    category: "deluxe",
    priceINR: 15400,
    originalPriceINR: 18000,
    sizeSqFt: 520,
    sizeSqM: 48,
    bedType: "Plush King Bed with Pillow-top Featherbed",
    maxGuests: 2,
    maxAdults: 2,
    maxChildren: 1,
    view: "Panoramic Aerocity Skyline & Runways",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Located on our 5th and 6th Club floors. Includes full privileges at the 24/7 Grand Club Lounge: private express check-in, gourmet breakfast, afternoon high tea, and evening hors d'oeuvres with premium single malts.",
    keyAmenities: [
      "24/7 Grand Club Lounge Privileges",
      "Complimentary Evening Cocktails & Canapés",
      "Express Private Floor Check-in/Out",
      "2 Hours Daily Boardroom Access",
      "Complimentary Airport Chauffeur (One-Way)"
    ],
    fullAmenities: [
      {
        category: "Club Privileges",
        items: [
          "Exclusive access to 6th Floor Grand Club Lounge",
          "Evening cocktail hours with top-shelf spirits and sommelier wines",
          "2 hours complimentary use of Club 8-seater Boardroom per stay",
          "Private concierge dedicated to flights and business itineraries"
        ]
      },
      {
        category: "Room Features",
        items: [
          "Floor-to-ceiling soundproof bay windows with runway vistas",
          "Dyson Supersonic hairdryer in bathroom",
          "Bose Bluetooth Smart Speaker sound system",
          "Interactive 65-inch OLED TV with casting capability"
        ]
      }
    ],
    specifications: {
      workStation: "Executive mahogany workstation with leather desk pad",
      connectivity: "Priority 1 Gbps symmetrical Wi-Fi",
      bathroom: "Freestanding soaking tub & separate rain shower",
      soundproofing: "STC 55 certified airport-grade acoustic glass"
    },
    inclusions: [
      "Private Club Lounge gourmet breakfast & all-day barista service",
      "Evening cocktails & gourmet canapés (6:00 PM – 8:30 PM)",
      "Complimentary one-way Mercedes-Benz airport transfer",
      "4 items express garment laundry daily",
      "Guaranteed late check-out till 3:00 PM"
    ]
  },
  {
    id: "executive-one-bedroom-suite",
    name: "Executive One-Bedroom Suite",
    tagline: "Separate meeting living room for confidential discussions",
    category: "suite",
    priceINR: 23500,
    originalPriceINR: 28000,
    sizeSqFt: 780,
    sizeSqM: 72,
    bedType: "Grand California King Bed",
    maxGuests: 3,
    maxAdults: 3,
    maxChildren: 2,
    view: "Unobstructed Runway & Sunset Skyline View",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "An expansive suite thoughtfully partitioned into a private master bedroom and an executive living room with a 4-person conference/dining table. Perfect for senior leaders conducting private interviews or confidential meetings.",
    keyAmenities: [
      "Separate Living Room & 4-Pax Meeting Table",
      "Guest Powder Room for Meeting Visitors",
      "Roundtrip Luxury Airport Chauffeur",
      "Full Executive Club Lounge Privileges",
      "Deep Soaking Marble Bathtub"
    ],
    fullAmenities: [
      {
        category: "Meeting & Hospitality Zone",
        items: [
          "Conference-ready living room with conference phone and 65-inch screen",
          "Dedicated guest restroom so your bedroom remains entirely private",
          "Cocktail wet bar with crystal decanters and premium refreshments",
          "Dedicated secretarial assistance on request"
        ]
      },
      {
        category: "Master Bedroom & Bath",
        items: [
          "Handcrafted California King bed with silk-blend pillows",
          "Walk-in dressing room with double wardrobes",
          "Spacious spa bathroom with deep soaking tub and dual rain heads",
          "Jo Malone London luxury bath collection"
        ]
      }
    ],
    specifications: {
      workStation: "4-seater meeting table + separate private study nook",
      connectivity: "Ultra-fast dedicated IP connection upon request",
      bathroom: "Master marble bathroom + separate visitor powder room",
      soundproofing: "STC 56 heavy acoustic partitions"
    },
    inclusions: [
      "Roundtrip Mercedes-Benz E-Class airport transfer",
      "Personalized in-suite check-in & check-out",
      "Full Grand Club Lounge access with champagne hours",
      "Complimentary pressing of all business suits upon arrival",
      "Guaranteed late check-out till 4:00 PM"
    ]
  },
  {
    id: "meridian-diplomatic-suite",
    name: "Meridian Diplomatic Suite",
    tagline: "Unrivaled luxury for CEOs, ambassadors and government delegates",
    category: "suite",
    priceINR: 36000,
    originalPriceINR: 42000,
    sizeSqFt: 1150,
    sizeSqM: 107,
    bedType: "Palatial King Bed with Silk Linens",
    maxGuests: 4,
    maxAdults: 4,
    maxChildren: 2,
    view: "360° Wrap-around Corner Panoramic City Views",
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "A diplomatic-level corner residence featuring a formal 6-person dining and conference salon, private pantry with dedicated butler pantry access, master dressing suite, and secure communications infrastructure.",
    keyAmenities: [
      "24/7 Dedicated Private Butler",
      "6-Person Formal Dining / Boardroom Table",
      "Private Service Pantry & Wine Chiller",
      "Walk-in Dressing Salon & Safe Room",
      "Roundtrip BMW 7-Series Chauffeur"
    ],
    fullAmenities: [
      {
        category: "Diplomatic Security & Comfort",
        items: [
          "Private secondary entry for service staff and butler",
          "Dedicated secure Wi-Fi VLAN for executive data privacy",
          "Formal dining room with Rosenthal porcelain tableware",
          "Master bathroom with whirlpool jacuzzi and private sauna"
        ]
      }
    ],
    specifications: {
      workStation: "Executive boardroom suite with telepresence hub",
      connectivity: "Encrypted high-bandwidth enterprise connection",
      bathroom: "Whirlpool jacuzzi, rainforest shower, and guest bathroom",
      soundproofing: "STC 58 military-grade acoustic isolation"
    },
    inclusions: [
      "Complimentary BMW 7-Series airport transfers throughout the stay",
      "24/7 dedicated butler service",
      "All-inclusive dining across all hotel restaurants",
      "Unlimited laundry and dry cleaning",
      "Flexi 24-hour check-in and check-out"
    ]
  },
  {
    id: "presidential-suite",
    name: "The Grand Presidential Suite",
    tagline: "The crown jewel of Indian corporate hospitality",
    category: "presidential",
    priceINR: 75000,
    originalPriceINR: 90000,
    sizeSqFt: 2400,
    sizeSqM: 223,
    bedType: "Palatial Master Bed + Secondary Suite",
    maxGuests: 4,
    maxAdults: 4,
    maxChildren: 2,
    view: "Top-Floor 180° Panoramic View of Delhi & Aerocity",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "An extraordinary penthouse estate occupying the hotel's entire top-floor wing. Boasts a private 10-seater boardroom, personal gym and sauna, Steinway baby grand piano, private elevator access, and bullet-resistant double glazing.",
    keyAmenities: [
      "10-Seater Private Executive Boardroom",
      "Personal In-Suite Gym & Finnish Sauna",
      "Dedicated Private Elevator Access",
      "Steinway & Sons Baby Grand Piano",
      "Full Presidential Protection Protocol"
    ],
    fullAmenities: [
      {
        category: "Penthouse Amenities",
        items: [
          "Private secure elevator with biometric / keycard access",
          "Dedicated chef and sommelier available on demand",
          "Master bedroom with custom silk upholstery and Emperor mattress",
          "Soundproof home cinema and telepresence system"
        ]
      }
    ],
    specifications: {
      workStation: "10-seater private boardroom + private study library",
      connectivity: "Redundant dual-fiber 10 Gbps dedicated lines",
      bathroom: "Hand-carved Carrara marble spa with steam room",
      soundproofing: "STC 62 acoustic & ballistic grade protection"
    },
    inclusions: [
      "Dedicated fleet of luxury sedans for all local city transit",
      "24/7 private chef, butler, and concierge team",
      "Helipad coordination and tarmac VIP greeting at IGI Airport",
      "Unlimited premium dining and vintage cellar privileges"
    ]
  }
];

export const ADDONS_DATA: Addon[] = [
  {
    id: "airport-mercedes",
    name: "VIP Airport Transfer (Mercedes E-Class)",
    priceINR: 2450,
    description: "Chauffeur meet-and-greet at Terminal 3 arrivals with chilled water, Wi-Fi, and luggage assist.",
    icon: "Car",
    perNight: false
  },
  {
    id: "executive-lounge",
    name: "Grand Club Lounge All-Day Access",
    priceINR: 3200,
    description: "All-day barista coffee, afternoon tea, evening free-flow cocktail hours & boardroom usage.",
    icon: "Coffee",
    perNight: true
  },
  {
    id: "gourmet-breakfast",
    name: "Gourmet Global Breakfast Buffet",
    priceINR: 1450,
    description: "Over 120 global dishes, fresh artisanal bakery, live organic eggs & healthy cold-pressed juices.",
    icon: "Utensils",
    perNight: true
  },
  {
    id: "express-laundry",
    name: "Executive Express Laundry (4 pieces)",
    priceINR: 950,
    description: "Same-day wash and crisp steam press delivered to your wardrobe in under 4 hours.",
    icon: "Shirt",
    perNight: true
  },
  {
    id: "jetlag-spa",
    name: "60-Min Jet Lag Recovery Massage",
    priceINR: 3800,
    description: "Therapeutic deep-tissue treatment designed by ayurvedic and Swedish wellness specialists.",
    icon: "Sparkles",
    perNight: false
  }
];

export const BUSINESS_FACILITIES = [
  {
    id: "fiber-wifi",
    title: "10 Gbps Symmetrical Fiber Wi-Fi",
    description: "Enterprise Cisco Meraki access points in every room and public space, backed by redundant dual-ISP fiber lines and 99.99% uptime guarantee.",
    icon: "Wifi",
    stat: "10 Gbps Redundant",
    details: ["Wi-Fi 6 Certified", "Cat-6 in-room ports", "Dedicated VLAN available", "Zero packet loss"]
  },
  {
    id: "business-lounge",
    title: "24/7 Grand Executive Lounge",
    description: "A quiet sanctuary on the 6th floor with barista-made specialty coffees, private acoustic meeting booths, and panoramic runway skyline views.",
    icon: "Building2",
    stat: "Open 24/7",
    details: ["Barista station", "Acoustic phone pods", "Flight status monitors", "Secretarial helpdesk"]
  },
  {
    id: "boardrooms",
    title: "Executive Hybrid Boardrooms",
    description: "Equipped with 4K Cisco Webex and Polycom telepresence video systems, interactive digital whiteboards, and studio-grade beamforming microphones.",
    icon: "MonitorPlay",
    stat: "18 Venues",
    details: ["4K video conference", "Smart touchscreen boards", "Document camera", "Audio privacy STC 55"]
  },
  {
    id: "airport-fleet",
    title: "Airport Chauffeur & Fleet",
    description: "Dedicated hotel fleet of Mercedes-Benz E-Class and BMW sedans with complimentary in-car high-speed Wi-Fi, bottled water, and phone chargers.",
    icon: "Car",
    stat: "12 Mins to T3",
    details: ["Terminal tarmac assist", "Real-time flight tracking", "In-car Wi-Fi & tablet", "English-fluent drivers"]
  },
  {
    id: "secretarial",
    title: "Corporate Secretarial & Concierge",
    description: "Comprehensive back-office support including color laser printing, scanning, document binding, courier handling, legal notaries, and live translation.",
    icon: "FileText",
    stat: "Instant Assist",
    details: ["Confidential shredding", "High-volume printing", "DHL / FedEx courier desk", "Multi-lingual staff"]
  },
  {
    id: "wellness",
    title: "24-Hour Fitness & Heated Lap Pool",
    description: "Maintain your workout rhythm across time zones. Features Technogym cardio machines, free weights, Olympic-length lap pool, sauna, and steam room.",
    icon: "Dumbbell",
    stat: "Open 24 Hours",
    details: ["Technogym equipment", "Temperature-controlled pool", "Cedarwood sauna", "On-demand personal trainer"]
  }
];

export const MEETING_VENUES: MeetingVenue[] = [
  {
    id: "grand-ballroom",
    name: "The Grand Meridian Ballroom",
    areaSqFt: 8500,
    areaSqM: 790,
    ceilingHeightM: 6.2,
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
    description: "Our flagship pillarless ballroom with state-of-the-art intelligent lighting, high-definition 4K LED video wall (32 ft x 14 ft), and dedicated pre-function foyer.",
    capacities: {
      theater: 650,
      classroom: 380,
      uShape: 120,
      banquet: 450,
      boardroom: 80
    },
    features: [
      "Pillarless 6.2m ceiling with intelligent rigging",
      "Built-in 4K LED video wall and JBL line-array sound",
      "Dedicated VIP green rooms and private driveway",
      "Simultaneous interpretation translation booths",
      "Direct heavy vehicle access for car and product launches"
    ],
    idealFor: "Annual general meetings, global summits, product launches & corporate galas"
  },
  {
    id: "pavilion-hall",
    name: "The Aerocity Pavilion",
    areaSqFt: 3600,
    areaSqM: 335,
    ceilingHeightM: 4.5,
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80",
    description: "A flexible conference space that can be divided into three soundproof breakout rooms via automated acoustic partitions. Flooded with natural daylight.",
    capacities: {
      theater: 240,
      classroom: 160,
      uShape: 65,
      banquet: 180,
      boardroom: 45
    },
    features: [
      "Triple acoustic partition walls (STC 54)",
      "Natural daylight with automated blackout shades",
      "Dual ceiling-mounted laser projectors and motorized screens",
      "Adjoining outdoor terrace for coffee breaks"
    ],
    idealFor: "Mid-sized conferences, training symposiums, quarterly townhalls & workshops"
  },
  {
    id: "summit-boardroom",
    name: "The Summit Executive Boardroom",
    areaSqFt: 1100,
    areaSqM: 102,
    ceilingHeightM: 3.8,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    description: "Prestigious boardroom featuring a custom 24-seater leather conference table, individual touch screens, Cisco Webex Room Kit Pro, and confidential encrypted audio.",
    capacities: {
      theater: 35,
      classroom: 24,
      uShape: 22,
      banquet: 24,
      boardroom: 24
    },
    features: [
      "Cisco Webex Room Kit Pro with dual 85-inch 4K displays",
      "Shure ceiling array beamforming microphones",
      "Private dining salon and ensuite restroom",
      "Built-in motorized pop-up universal power sockets and HDMI drops"
    ],
    idealFor: "Board of Directors meetings, M&A strategy sessions & diplomatic bilaterals"
  },
  {
    id: "chancery-meeting-room",
    name: "The Chancery Meeting Suite",
    areaSqFt: 650,
    areaSqM: 60,
    ceilingHeightM: 3.5,
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80",
    description: "An intimate, quiet setting designed for high-stakes candidate interviews, investor pitches, client presentations, and hybrid team collaboration.",
    capacities: {
      theater: 20,
      classroom: 14,
      uShape: 12,
      banquet: 12,
      boardroom: 12
    },
    features: [
      "75-inch interactive 4K whiteboard display",
      "Jabra PanaCast 180° panoramic camera",
      "Complimentary Nespresso bar and beverage cooler",
      "Acoustic paneling and privacy smart glass"
    ],
    idealFor: "Executive interviews, angel pitches, audit reviews & team offsites"
  }
];

export const RESTAURANTS_DATA: Restaurant[] = [
  {
    id: "meridian-table",
    name: "The Meridian Table",
    cuisine: "Contemporary Indian & Global All-Day Dining",
    timing: "Open 24 Hours (Breakfast: 6:00 AM – 10:30 AM)",
    dressCode: "Smart Casual",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    description: "Our signature restaurant presenting a lavish global executive buffet alongside an interactive à la carte menu. Live cooking theaters feature wood-fired pizzas, authentic Awadhi gravies, and Japanese teppanyaki.",
    signatureDishes: [
      {
        name: "Grand Meridian Butter Chicken",
        description: "Slow-simmered in roasted vine tomatoes, fenugreek cream, and smoked butter.",
        priceINR: 1150,
        dietary: "non-veg"
      },
      {
        name: "Dal Meridian (36-Hour Slow Cooked)",
        description: "Black lentils simmered overnight over charcoal with clarified butter.",
        priceINR: 850,
        dietary: "veg"
      },
      {
        name: "Norwegian Pan-Seared Salmon",
        description: "Served on truffle potato mousseline, asparagus spears, and lemon butter emulsion.",
        priceINR: 1650,
        dietary: "non-veg"
      },
      {
        name: "Wild Mushroom & Truffle Risotto",
        description: "Arborio rice, porcini mushrooms, aged Parmigiano Reggiano, and black truffle drizzle.",
        priceINR: 1050,
        dietary: "veg"
      }
    ]
  },
  {
    id: "silk-route",
    name: "The Silk Route",
    cuisine: "Authentic Cantonese, Sichuan & Dim Sum Bar",
    timing: "12:30 PM – 3:30 PM | 7:00 PM – 11:45 PM",
    dressCode: "Business Casual",
    image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80",
    description: "A tribute to ancient trade pathways. Master chefs from Guangzhou curate handcrafted dim sum, Peking duck carved tableside, and fragrant Sichuan wok specialties.",
    signatureDishes: [
      {
        name: "Crispy Peking Duck (Tableside Service)",
        description: "Crispy roasted duck carved tableside, steamed pancakes, cucumber, scallions, and hoisin sauce.",
        priceINR: 2200,
        dietary: "non-veg"
      },
      {
        name: "Truffle Edamame & Wild Mushroom Dim Sum",
        description: "Crystal dumplings stuffed with crushed edamame and black summer truffle.",
        priceINR: 950,
        dietary: "veg"
      },
      {
        name: "Chongqing Chili Chicken",
        description: "Crispy morsels tossed with fiery facing-heaven chilies and Sichuan peppercorns.",
        priceINR: 1250,
        dietary: "non-veg"
      }
    ]
  },
  {
    id: "latitude-18",
    name: "Latitude 18 Bar & Cigar Lounge",
    cuisine: "Rare Single Malts, Fine Wines & Tapas",
    timing: "5:00 PM – 1:30 AM",
    dressCode: "Elegant Casual",
    image: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=1200&q=80",
    description: "The preferred evening meeting spot for Aerocity corporate leaders. Features a temperature-controlled walk-in wine cellar with over 350 international labels, rare single malts, and subtle ambient jazz.",
    signatureDishes: [
      {
        name: "Meridian Smoked Old Fashioned",
        description: "Bourbon, artisanal bitters, Demerara sugar, smoked with oak chips tableside.",
        priceINR: 1100,
        dietary: "veg"
      },
      {
        name: "New Zealand Lamb Sliders",
        description: "Mint labneh, caramelized shallots, brioche bun, and rosemary truffle fries.",
        priceINR: 1200,
        dietary: "non-veg"
      },
      {
        name: "Artisanal Cheese & Charcuterie Platter",
        description: "Aged Gouda, Brie de Meaux, Gorgonzola, honeycomb, grapes, and lavash crackers.",
        priceINR: 1450,
        dietary: "veg"
      }
    ]
  }
];

export const CORPORATE_OFFERS: CorporateOffer[] = [
  {
    id: "corporate-advantage",
    title: "Corporate Advantage Program (CAP)",
    badge: "Preferred Enterprise Rate",
    validity: "Annual Contract",
    description: "Negotiated rates for organizations with 50+ annual room nights. Includes dedicated account management, room category upgrades, and flexible cancellation policies.",
    benefits: [
      "Fixed corporate rate year-round with zero seasonal price spikes",
      "Guaranteed late check-out till 4:00 PM",
      "Complimentary high-speed 10 Gbps Wi-Fi for all team members",
      "2 hours complimentary boardroom access per week",
      "15% savings across all dining venues and laundry"
    ],
    terms: "Requires company GSTIN registration and minimum annual commitment.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "extended-stay",
    title: "Executive Extended Stay (14+ Nights)",
    badge: "Long Stay Savings",
    validity: "Minimum 14 Nights",
    description: "Designed for consultants, expatriates, and project directors on extended business assignments in the Delhi-NCR capital region.",
    benefits: [
      "Up to 30% savings on executive rooms and suites",
      "Complimentary 6 pieces of garment laundry daily",
      "Weekly dinner voucher at The Silk Route or The Meridian Table",
      "Dedicated relationship manager and personalized grocery provisioning",
      "Complimentary weekend airport shuttle for domestic flights"
    ],
    terms: "Applies to continuous stays of 14 nights or more. Advance deposit required.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "day-use-transit",
    title: "Day-Use Business Transit (6 Hours)",
    badge: "Airport Layover",
    validity: "Between 08:00 to 20:00",
    description: "Catch up on urgent work, refresh in a rain shower, or prepare for an evening presentation without committing to a full overnight charge.",
    benefits: [
      "Full access to Executive King Room for up to 6 hours",
      "Complimentary high-speed fiber Wi-Fi and work desk",
      "Access to hotel fitness center and steam sauna",
      "Complimentary Terminal 3 pick-up or drop-off",
      "₹800 food & beverage credit included"
    ],
    terms: "Subject to daytime availability. Valid for check-in between 8:00 AM and 2:00 PM.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80"
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "test-1",
    name: "Vikramaditya Singhania",
    role: "Managing Director, South Asia",
    company: "Global Investment Banking Corp",
    location: "Mumbai, India",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    content: "Grand Meridian is my second home in Delhi. The 10 Gbps fiber Wi-Fi and acoustic soundproofing in the Executive Suite allowed me to host back-to-back earnings calls with New York without a whisper of airport noise. Flawless hospitality.",
    verifiedStay: true,
    date: "October 2026"
  },
  {
    id: "test-2",
    name: "Dr. Alistair Campbell",
    role: "Senior Partner & Head of Strategy",
    company: "McKinsey & Company",
    location: "London, UK",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    content: "We conducted our 3-day regional leadership summit in the Grand Ballroom. From the 4K LED presentation wall to the seamless logistics and prompt Mercedes airport transfers, the execution was world-class.",
    verifiedStay: true,
    date: "September 2026"
  },
  {
    id: "test-3",
    name: "Pooja Krishnamurthy",
    role: "Vice President, Cloud Infrastructure",
    company: "Google India",
    location: "Bengaluru, India",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    content: "The Grand Club Lounge on the 6th floor is the best in Aerocity. The evening cocktail hours, quiet phone pods, and 12-minute commute to Terminal 3 make it an effortless choice for high-frequency business travelers.",
    verifiedStay: true,
    date: "August 2026"
  },
  {
    id: "test-4",
    name: "Henrik Lindqvist",
    role: "Chief Technology Officer",
    company: "Fintech Nordics",
    location: "Stockholm, Sweden",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    content: "The ergonomic Herman Miller Aeron chair and genuine dual-glaze acoustic silence in the room made a massive difference to my productivity. The 24/7 express room dining delivered hot, delicious food in 18 minutes.",
    verifiedStay: true,
    date: "November 2026"
  }
];

export const LOCATION_DISTANCES = [
  {
    destination: "IGI Airport Terminal 3 (International)",
    distance: "4.2 km",
    travelTime: "12 mins",
    icon: "Plane",
    detail: "Complimentary hotel shuttle every 30 mins"
  },
  {
    destination: "IGI Airport Terminal 1 (Domestic)",
    distance: "6.8 km",
    travelTime: "16 mins",
    icon: "PlaneTakeoff",
    detail: "Direct cab or chauffeur assist"
  },
  {
    destination: "Delhi Aerocity Metro Express Station",
    distance: "800 m",
    travelTime: "3 mins walk / 1 min ride",
    icon: "Train",
    detail: "Fast high-speed transit to New Delhi Railway Station in 15 mins"
  },
  {
    destination: "DLF Cyber City & Cyber Hub, Gurugram",
    distance: "11.5 km",
    travelTime: "18 mins",
    icon: "Briefcase",
    detail: "Direct access via NH-48 Express Highway"
  },
  {
    destination: "Chanakyapuri Diplomatic Enclave",
    distance: "12.0 km",
    travelTime: "20 mins",
    icon: "Shield",
    detail: "Embassy and High Commission corridor"
  },
  {
    destination: "Yashobhoomi (IICC) Convention Center, Dwarka",
    distance: "9.5 km",
    travelTime: "14 mins",
    icon: "Building",
    detail: "Asia's largest MICE and exhibition facility"
  }
];

export const FAQS = [
  {
    q: "What is the standard check-in and check-out time?",
    a: "Standard check-in is at 2:00 PM and check-out is at 12:00 PM. For guests booking Club Business Rooms or Executive Suites, early check-in from 10:00 AM and late check-out till 4:00 PM is complimentary (subject to availability)."
  },
  {
    q: "Can I get a formal GST tax invoice for corporate reimbursement?",
    a: "Yes, absolutely. During booking or at check-in, simply provide your company name and GSTIN. We issue GST-compliant tax invoices with state-specific input tax credit (ITC) codes directly to your finance email."
  },
  {
    q: "How does the airport transfer service work?",
    a: "Our chauffeur team monitors real-time flight telemetry. A uniformed hotel representative holding a 'Grand Meridian' digital tablet greets you right at the arrival gate and escorts you to our waiting Mercedes-Benz or BMW sedan."
  },
  {
    q: "What internet speed and security protocols are available in rooms?",
    a: "All rooms are connected to dedicated 10 Gbps symmetrical fiber lines powered by enterprise Cisco Meraki hardware with WPA3 enterprise security. Wired Cat-6 RJ45 connections and isolated corporate VLANs are available upon request."
  },
  {
    q: "What are the hours and dress code for the Grand Club Lounge?",
    a: "The Grand Club Lounge is accessible 24/7 with your room keycard for barista coffee, refreshments, and workstations. Evening cocktails and hors d'oeuvres are served from 6:00 PM to 8:30 PM. The dress code is Business Casual (smart footwear, collared shirts)."
  }
];
