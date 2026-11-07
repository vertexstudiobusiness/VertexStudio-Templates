import type { MenuItem, WorkspacePlan, WorkPackage, Zone, Testimonial, GalleryItem } from '../types';

export const CAFE_INFO = {
  name: "The Daily Grind",
  tagline: "Your Space to Think, Create & Connect",
  city: "Bengaluru",
  neighborhood: "Indiranagar",
  address: "1048, 12th Main Road, HAL 2nd Stage, Indiranagar, Bengaluru, Karnataka 560038",
  phone: "+91 80 4122 8900",
  whatsapp: "+919845012345",
  whatsappFormatted: "+91 98450 12345",
  email: "hello@thedailygrindcafe.in",
  hours: {
    weekdays: "7:30 AM – 11:00 PM",
    weekends: "7:30 AM – 11:30 PM",
  },
  metrics: {
    speedMbps: 520,
    pingMs: 4,
    powerOutlets: "100% of seats",
    avgNoiseDb: "38 dB in Silent Zone",
    capacity: "68 Workstations & Pods",
    coffeeOrigin: "Single Estate Chikmagalur & Coorg Arabica",
  }
};

export const MENU_ITEMS: MenuItem[] = [
  // COFFEE
  {
    id: 'c1',
    name: 'Single Origin V60 Pour-Over',
    category: 'coffee',
    price: 240,
    description: 'Slow-dripped heirloom Arabica with notes of wild berries, blackcurrant, and bergamot.',
    origin: 'Kalledevarapura Estate, Chikmagalur',
    tags: ['vegan', 'organic'],
    caffeine: 'High',
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'c2',
    name: 'Daily Grind Cortado',
    category: 'coffee',
    price: 190,
    description: 'Equal parts double ristretto and silky textured micro-foam served in an unglazed ceramic glass.',
    origin: 'Attikan Estate, Biligiriranga Hills',
    tags: ['veg'],
    caffeine: 'High',
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'c3',
    name: '18-Hour Kyoto Drip Cold Brew',
    category: 'coffee',
    price: 260,
    description: 'Slow ice-melt extraction resulting in low acidity, deep dark chocolate undertones and whiskey aroma.',
    origin: 'Kelagur Estate, Western Ghats',
    tags: ['vegan'],
    caffeine: 'High',
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'c4',
    name: 'Cardamom & Jaggery Flat White',
    category: 'coffee',
    price: 220,
    description: 'Velvety espresso steamed with organic jaggery reduction and fresh green cardamom pods from Idukki.',
    origin: 'Shevaroy Hills Micro-lot',
    tags: ['veg'],
    caffeine: 'Medium',
    image: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'c5',
    name: 'Nitro Cascara Spritz',
    category: 'coffee',
    price: 250,
    description: 'Brewed coffee cherry cascara infused with Valencia orange zest and charged with creamy nitrogen.',
    origin: 'Chikmagalur Organic Micro-lot',
    tags: ['vegan'],
    caffeine: 'Low',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
  },

  // TEA & MATCHA
  {
    id: 't1',
    name: 'Uji Ceremonial Matcha Latte',
    category: 'tea',
    price: 290,
    description: 'Stone-ground first-harvest Japanese matcha whisked with oat milk and subtle vanilla bean.',
    tags: ['vegan', 'organic'],
    caffeine: 'Medium',
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 't2',
    name: 'Nilgiri Silver Needle White Tea',
    category: 'tea',
    price: 210,
    description: 'Sun-dried tender tea buds offering subtle floral jasmine fragrance with zero astringency.',
    origin: 'Glendale Estate, Nilgiris (6,000 ft)',
    tags: ['vegan', 'organic'],
    caffeine: 'Low',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 't3',
    name: 'Ashwagandha Calm Botanical Infusion',
    category: 'tea',
    price: 195,
    description: 'Adaptogenic blend of organic ashwagandha root, chamomile flowers, holy basil, and lemongrass.',
    tags: ['vegan', 'organic'],
    caffeine: 'Caffeine-Free',
    image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=800&q=80',
  },

  // BREAKFAST & BOWLS
  {
    id: 'b1',
    name: 'Hass Avocado & Edamame Sourdough',
    category: 'breakfast',
    price: 360,
    description: 'Toasted artisanal 36-hr sourdough, whipped lime avocado, smashed edamame, chili crisp, radish, microgreens.',
    tags: ['vegan', 'high-protein'],
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'b2',
    name: 'Alphonso Mango & Chia Focus Bowl',
    category: 'breakfast',
    price: 320,
    description: 'Coconut milk chia pudding layered with Ratnagiri alphonso puree, toasted pumpkin seeds, cacao nibs and kiwi.',
    tags: ['vegan', 'gluten-free', 'high-protein'],
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'b3',
    name: 'Turkish Poached Eggs in Garlic Labneh',
    category: 'breakfast',
    price: 340,
    description: 'Two organic free-range poached eggs over warm garlic labneh, Aleppo pepper brown butter, with warm zaatar sourdough.',
    tags: ['high-protein'],
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80',
  },

  // SANDWICHES & SAVOURY
  {
    id: 's1',
    name: 'Wild Shiitake & Truffle Sourdough Melt',
    category: 'sandwiches',
    price: 390,
    description: 'Pan-roasted wild forest mushrooms, truffle aioli, aged cheddar and fontina cheese on crusty grilled sourdough.',
    tags: ['veg'],
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 's2',
    name: 'Smoked Pesto Paneer & Sun-Dried Focaccia',
    category: 'sandwiches',
    price: 350,
    description: 'Malai paneer marinated in fresh walnut-basil pesto, grilled zucchini, sun-dried tomatoes, house rosemary olive focaccia.',
    tags: ['veg', 'high-protein'],
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 's3',
    name: 'Harissa Roasted Sweet Potato Wrap',
    category: 'sandwiches',
    price: 310,
    description: 'Spiced slow-roasted sweet potatoes, creamy chickpea hummus, pickled purple cabbage, and tahini drizzle.',
    tags: ['vegan'],
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
  },

  // SNACKS
  {
    id: 'sn1',
    name: 'Artisan Hummus Plate with Zaatar Crisps',
    category: 'snacks',
    price: 280,
    description: 'Silk-smooth tahini hummus topped with warm spiced chickpeas, extra virgin olive oil, and house pita chips.',
    tags: ['vegan', 'high-protein'],
    image: 'https://images.unsplash.com/photo-1577906096429-f73c2c312435?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'sn2',
    name: 'Spiced Rosemary Cashew & Almond Roast',
    category: 'snacks',
    price: 210,
    description: 'Goan jumbo cashews and California almonds slow-roasted with fresh garden rosemary and Malabar sea salt.',
    tags: ['vegan', 'gluten-free'],
    image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&w=800&q=80',
  },

  // DESSERTS & BAKERY
  {
    id: 'd1',
    name: 'Flaky French Almond Croissant',
    category: 'desserts',
    price: 220,
    description: 'Twice-baked with rich frangipane almond cream, toasted sliced almonds, and a dusting of powdered sugar.',
    tags: ['veg'],
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'd2',
    name: '72% Single Origin Chocolate Sea-Salt Cookie',
    category: 'desserts',
    price: 160,
    description: 'Warm fudgy cookie baked with Bean-to-bar Idukki cocoa chunks and topped with crushed Maldon flake salt.',
    tags: ['veg'],
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'd3',
    name: 'Espresso Tiramisu Jar',
    category: 'desserts',
    price: 270,
    description: 'Savoiardi biscuits soaked in our cold brew ristretto, whipped mascarpone zabaione, and Valrhona cocoa.',
    tags: ['veg'],
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80',
  }
];

export const WORKSPACE_PLANS: WorkspacePlan[] = [
  // DAY PASSES
  {
    id: 'half-day-pass',
    category: 'passes',
    title: 'Drop-in Half Day',
    subtitle: 'Perfect for a deep 4-hour morning focus or afternoon sprint.',
    price: 280,
    period: '4 Hours',
    badge: 'Flexible Entry',
    features: [
      '₹100 Café Food & Drink credit included',
      'High-speed 520 Mbps dual fiber Wi-Fi',
      'Access to Communal Desk or Verandah',
      'Universal surge-protected power at desk',
      'Filtered alkaline water & stationery bar',
    ],
    cafeCredit: 100,
    idealFor: 'Students & short remote work blocks',
  },
  {
    id: 'full-day-pass',
    category: 'passes',
    title: 'Full Day Productivity Pass',
    subtitle: 'Unrestricted day-long work sanctuary from morning till night.',
    price: 490,
    period: 'Full Day (12h)',
    isPopular: true,
    badge: 'Most Popular',
    features: [
      '₹200 Café Credit redeemable on full menu',
      'Unrestricted access across all quiet zones',
      'Herman Miller & solid oak ergonomic seats',
      'High-speed 520 Mbps Wi-Fi with zero lag',
      '15 pages free wireless laser printing',
      'Complimentary phone booth calls (30 mins)',
    ],
    cafeCredit: 200,
    idealFor: 'Full-time remote tech & creative professionals',
  },
  {
    id: 'flexi-10-pack',
    category: 'passes',
    title: '10-Day Flexi Pass',
    subtitle: 'Ten full-day passes usable across 60 days with priority seating.',
    price: 3900,
    period: '10 Passes (60d)',
    badge: 'Save ₹1,000',
    features: [
      '₹1,600 Total Café Credits included',
      'Valid for 60 calendar days from first visit',
      'Guaranteed seat hold via WhatsApp reservation',
      '1 Hour complimentary Soundproof Pod credit',
      'Locker storage access on visit days',
    ],
    cafeCredit: 1600,
    idealFor: 'Hybrid workers visiting 1–2 days a week',
  },

  // RESIDENT MEMBERSHIPS
  {
    id: 'resident-nomad',
    category: 'memberships',
    title: 'Nomad Resident',
    subtitle: 'Your habitual desk haven with member perks and community access.',
    price: 6800,
    period: 'Monthly',
    isPopular: true,
    badge: 'Best Value',
    features: [
      'Unlimited monthly access 7 days a week',
      '₹2,500 Monthly Café credit in your digital wallet',
      '5 Hours private soundproof meeting pod access',
      'Personal lockable storage locker',
      'Mail handling & business address usage',
      'Invites to founders & design community meetups',
    ],
    cafeCredit: 2500,
    idealFor: 'Freelancers, remote engineers & researchers',
  },
  {
    id: 'dedicated-studio-desk',
    category: 'memberships',
    title: 'Dedicated Studio Desk',
    subtitle: 'Permanent ergonomic desk setup reserved exclusively for you.',
    price: 10500,
    period: 'Monthly',
    badge: 'Exclusive',
    features: [
      'Fixed assigned solid oak desk & Herman Miller chair',
      '27" 4K USB-C monitor + mechanical keyboard mount',
      '₹3,800 Monthly food & specialty coffee credit',
      '10 Hours free meeting pod / room reservations',
      'Overnight device and document safety locker',
      '2 Guest day passes included every month',
    ],
    cafeCredit: 3800,
    idealFor: 'Startup founders, lead architects & authors',
  },

  // PODS & PRIVATE ROOMS
  {
    id: 'solo-phone-pod',
    category: 'pods',
    title: 'Solo Soundproof Pod',
    subtitle: 'Ultra-quiet acoustic booth designed for critical video calls.',
    price: 250,
    period: 'Per Hour',
    badge: '<30 dB Silent',
    features: [
      'Acoustic double-glazed tempered privacy glass',
      'Adjustable ring light & 4K magnetic webcam mount',
      'Dual active ventilation fans (fresh air circulation)',
      'USB-C 100W PD charging & Ethernet hookup',
      'Direct in-pod beverage ordering via QR',
    ],
    cafeCredit: 0,
    idealFor: 'Investor pitches, client calls, interviews',
  },
  {
    id: 'team-board-pod',
    category: 'pods',
    title: 'The Glasshouse Meeting Pod',
    subtitle: 'Designed for high-impact team syncs, sprints, and interviews.',
    price: 850,
    period: 'Per Hour (Seats 4-6)',
    badge: 'Seats 4–6',
    features: [
      'Seats up to 6 people around a live-edge wooden table',
      '55" 4K Wireless presentation screen (AirPlay/Cast)',
      'Jabra Studio intelligent conference mic & camera',
      'Magnetic porcelain whiteboard & marker kits',
      'Dedicated barista coffee service delivered to pod',
    ],
    cafeCredit: 0,
    idealFor: 'Design sprints, client workshops & interviews',
  }
];

export const WORK_PACKAGES: WorkPackage[] = [
  {
    id: 'deep-work-sprint',
    name: 'The Deep Work Sprint',
    tagline: '3 Focused hours + Specialty Pour-over + Artisanal Pastry',
    price: 399,
    duration: '3 Hours',
    cafeCredit: 'Included Beverage & Bakery item',
    savings: 'Save ₹120',
    popular: true,
    itemsIncluded: [
      '3-Hour High-Speed Desk Pass',
      '1 Single Origin V60 Pour-over or Flat White',
      '1 Flaky Almond Croissant or Sea Salt Cookie',
      'Universal power & ultra-quiet focus seating',
    ],
    perks: ['Instant walk-in access', 'Unlimited drinking water', 'High-speed 520 Mbps Wi-Fi']
  },
  {
    id: 'founders-marathon',
    name: "The Founder's Marathon",
    tagline: 'Full Day Pass + 2 Coffees + Gourmet Meal + 1 Hr Call Booth',
    price: 849,
    duration: 'Full Day (12h)',
    cafeCredit: '₹550 total food & drink value',
    savings: 'Save ₹260',
    popular: true,
    itemsIncluded: [
      'All-day access to all silent & communal zones',
      '2 Specialty Coffees (any variety from the menu)',
      '1 Artisanal Sourdough Sandwich or Focus Bowl',
      '1 Hour Soundproof Call Pod reservation included',
    ],
    perks: ['Guaranteed ergonomic chair', 'Free wireless printing (20 sheets)', 'Priority table service']
  },
  {
    id: 'thesis-exam-pass',
    name: 'The 5-Day Study Camp',
    tagline: '5 Consecutive Full Days + Daily Batch Brew + Silent Zone Reserve',
    price: 1999,
    duration: '5 Days',
    cafeCredit: 'Daily unlimited filter/batch coffee',
    savings: 'Save ₹750',
    itemsIncluded: [
      '5 Full-day passes in the Silent Focus Mezzanine',
      'Unlimited bottomless daily specialty batch brew',
      'Dedicated power bank & multi-port charging at desk',
      'Quiet library protocol strictly maintained',
    ],
    perks: ['Personal power dock', 'Study group discount (10% off for 2+)', 'Free book library access']
  },
  {
    id: 'sprint-team-pack',
    name: 'The Sprint Team Huddle',
    tagline: '4 Team Day Passes + 3 Hours Glasshouse Pod + Coffee Carafes',
    price: 3200,
    duration: 'Full Day for 4',
    cafeCredit: '4 Hot beverages & bakery platter',
    savings: 'Save ₹1,100',
    itemsIncluded: [
      '4 Full-Day Passes for your team members',
      '3 Hours in the 6-person Glasshouse Meeting Pod',
      'Large French Press carafes & assorted fresh bakes',
      '55" 4K Screen & conference audio hardware',
    ],
    perks: ['Whiteboards & post-its supplied', 'Pre-reserved adjacent desks', 'Invoice with GST compliance']
  }
];

export const CAFE_ZONES: Zone[] = [
  {
    id: 'focus-mezzanine',
    name: 'The Silent Mezzanine',
    acousticLevel: 'Silent Zone (<35 dB)',
    description: 'A whisper-free upper sanctuary with acoustic ceiling baffles, warm brass desk lamps, and individual partitions for intensive coding, writing, and research.',
    seatsCount: 22,
    seatingType: 'Solid Teak Individual Desks with Ergonomic Mesh Chairs',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80',
    suitableFor: ['Deep coding sprints', 'Thesis & exam research', 'Focused writing', 'Data analysis'],
  },
  {
    id: 'communal-roastery',
    name: 'The Main Roastery Floor',
    acousticLevel: 'Gentle Ambience (42–48 dB)',
    description: 'Lively, airy open-plan creative hall bathed in natural light. Features long communal oak tables, low-fi jazz in the background, and direct views of the espresso bar.',
    seatsCount: 28,
    seatingType: 'Communal White Oak Sharing Tables with Bench & Chair Mix',
    image: 'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&w=1200&q=80',
    suitableFor: ['Casual remote work', 'Creative brainstorming', 'Light collaboration', 'Coffee sipping'],
  },
  {
    id: 'soundproof-pods',
    name: 'Acoustic Glass Pods & Booths',
    acousticLevel: 'Isolated Sub-30 dB',
    description: 'Double-glazed sound-isolating phone booths and meeting pods equipped with 4K ring lights, high-speed ethernet, and quiet forced-air circulation.',
    seatsCount: 6,
    seatingType: 'Padded Acoustic Banquettes & Swivel Chairs',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    suitableFor: ['Zoom & Google Meet calls', 'Investor pitches', 'Podcast recording', 'Team scrums'],
  },
  {
    id: 'verandah-garden',
    name: 'The Sunlit Garden Verandah',
    acousticLevel: 'Open Air (Natural Rustle & Breeze)',
    description: 'A covered outdoor patio surrounded by tropical monstera, bamboo palms, and warm wood decking. Weather-shielded with misting fans and full Wi-Fi range.',
    seatsCount: 16,
    seatingType: 'Weather-treated Rattan Loungers & Teak Café Tables',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80',
    suitableFor: ['Reading & sketching', 'Informal 1-on-1 catchups', 'Afternoon recharge', 'Pet-friendly work'],
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Individual Focus Booths with Brass Task Lighting',
    category: 'focus',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80',
    caption: 'Designed with acoustic wool felt panels and 65W USB-C fast charging at every seat.'
  },
  {
    id: 'g2',
    title: 'Specialty V60 Pour-over Dialled In Daily',
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80',
    caption: 'Single-origin beans freshly roasted weekly in small batches.'
  },
  {
    id: 'g3',
    title: 'Communal Oak Work Tables with Built-in Cable Wells',
    category: 'focus',
    image: 'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&w=1200&q=80',
    caption: 'Clean, tangle-free desk surfaces with hidden power ducts.'
  },
  {
    id: 'g4',
    title: 'The Glasshouse 6-Person Meeting Pod',
    category: 'pods',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    caption: 'Soundproof privacy with 4K screen projection and conference audio.'
  },
  {
    id: 'g5',
    title: 'Sunlit Courtyard Verandah',
    category: 'verandah',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80',
    caption: 'Lush greenery, fresh Bangalore morning air, and covered power sockets.'
  },
  {
    id: 'g6',
    title: 'Artisan Espresso Counter & Ceramic Ware',
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80',
    caption: 'Slayer 3-group espresso machine dialed to 9.2 bars.'
  },
  {
    id: 'g7',
    title: 'Warm Scandinavian Seating & Architectural Woodwork',
    category: 'focus',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    caption: 'Generous whitespace and natural timber finishes to keep cognitive fatigue low.'
  },
  {
    id: 'g8',
    title: 'Artisanal Toast & Brain-Food Morning Spread',
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1200&q=80',
    caption: 'Slow-carbohydrate nutrition designed to avoid afternoon energy crashes.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Ananya Deshmukh',
    role: 'Principal Product Designer',
    companyOrCollege: 'Fintech Unicorn (Remote)',
    rating: 5,
    quote: 'Traditional cafés in Indiranagar are usually too loud for Figma deep dives, and corporate coworking offices feel like dentist waiting rooms. The Daily Grind hit the sweet spot: jaw-dropping coffee, sub-35dB quiet zone, and chairs where your back actually survives 8 hours.',
    favoriteDrink: 'V60 Pour-over (Kalledevarapura)',
    frequentedZone: 'The Silent Mezzanine',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 't2',
    name: 'Rohan Venkatesh',
    role: 'Staff Machine Learning Engineer',
    companyOrCollege: 'Autonomous AI Labs',
    rating: 5,
    quote: 'The dual 500 Mbps redundant fiber is no joke. I cloned a 40GB model repo in under two minutes while sipping a Cold Brew. Plus, the private phone booths meant I could hop on investor calls without worrying about ambient noise.',
    favoriteDrink: '18-Hour Kyoto Cold Brew',
    frequentedZone: 'Soundproof Pod #2',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 't3',
    name: 'Dr. Meera Nambiar',
    role: 'Doctoral Researcher in Neuroscience',
    companyOrCollege: 'IISc Bengaluru',
    rating: 5,
    quote: 'I wrote two chapters of my dissertation on the Mezzanine floor. The natural lighting, no-talking etiquette, and the fact that you get ₹200 food credit with your day pass makes it an absolute no-brainer.',
    favoriteDrink: 'Uji Ceremonial Matcha Latte',
    frequentedZone: 'The Silent Mezzanine',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 't4',
    name: 'Aditya & Tanvi',
    role: 'Co-Founders',
    companyOrCollege: 'ClimateTech Studio',
    rating: 5,
    quote: 'We held our quarterly strategy offsite in the Glasshouse Pod. The 4K screen, Jabra speaker, and having fresh flat whites delivered right to the door kept our momentum electric all day. Our team fell in love with it.',
    favoriteDrink: 'Cardamom Jaggery Flat White',
    frequentedZone: 'Glasshouse Meeting Pod',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
  }
];

export const WORKSPACE_FEATURES = [
  {
    icon: 'Wifi',
    title: '520 Mbps Redundant Fiber',
    description: 'Dual enterprise fiber connections with automatic zero-drop failover. Low ping for Zoom and cloud compilation.'
  },
  {
    icon: 'Zap',
    title: 'Power at 100% of Desks',
    description: 'Universal surge-protected outlets, 65W USB-C Power Delivery, and multi-pin plugs directly at every individual seat.'
  },
  {
    icon: 'VolumeX',
    title: 'Acoustically Zoned Silence',
    description: 'Dedicated whisper-free Silent Mezzanine with acoustic wool baffles maintaining strict sub-38 dB background noise.'
  },
  {
    icon: 'PhoneCall',
    title: 'Soundproof Call Booths',
    description: 'Private double-glazed booths equipped with ring lights and fresh air intake for seamless video interviews.'
  },
  {
    icon: 'Coffee',
    title: 'Specialty Micro-lot Roastery',
    description: 'Directly sourced estate Arabica dialed in with precision scales. Coffee credits included with every workspace pass.'
  },
  {
    icon: 'Armchair',
    title: 'Ergonomic Posture Support',
    description: 'Herman Miller chairs and custom solid teak desks designed specifically for all-day comfort without lumbar strain.'
  },
  {
    icon: 'Clock',
    title: 'Early 7:30 AM to 11 PM',
    description: 'Start your deep work before the city wakes up, or power through evening deadlines with warm ambient evening lighting.'
  },
  {
    icon: 'Printer',
    title: 'Wireless Printing & Supplies',
    description: 'High-resolution wireless laser printing, document scanner, stationery, and adapter lending library on demand.'
  }
];

export const FAQS = [
  {
    question: "Do I need to book a workspace in advance, or can I walk in?",
    answer: "Walk-ins are always warmly welcomed! However, during peak hours (10:00 AM – 3:00 PM on weekdays), our Silent Mezzanine and Soundproof Pods fill up quickly. We recommend reserving online or texting us on WhatsApp 30 minutes ahead to ensure your preferred seat is held."
  },
  {
    question: "How does the Café Credit work with workspace passes?",
    answer: "Every workspace pass includes a built-in food & drink credit (e.g. ₹200 on the ₹490 Day Pass, ₹100 on the Half-Day Pass). When you order any coffee, tea, breakfast bowl, or sandwich, the amount is automatically deducted from your pass tab at checkout."
  },
  {
    question: "Are Zoom and phone calls allowed in the café?",
    answer: "To maintain our productivity haven, calls are strictly restricted to our Soundproof Booths, the private Glasshouse Pod, and the outdoor Garden Verandah. The Silent Mezzanine is a whisper-only zone so everyone can stay in deep flow."
  },
  {
    question: "What is your Wi-Fi reliability and speed?",
    answer: "We run a dual-WAN load-balanced fiber setup (Airtel Enterprise + ACT Gigabit) with automated sub-second failover. Real-world speeds hover around 520 Mbps download and 480 Mbps upload with 3-5ms ping to major Indian cloud hubs."
  },
  {
    question: "Is there two-wheeler and four-wheeler parking?",
    answer: "Yes! We have dedicated on-site parking for two-wheelers with EV charging points. For four-wheelers, we offer 6 designated parking slots in front and secure valet parking assistance along 12th Main Road."
  },
  {
    question: "Can I bring my pet to The Daily Grind?",
    answer: "Our outdoor Sunlit Garden Verandah is 100% pet-friendly! We have water bowls, pet treats, and shaded greenery for your furry study companion. Indoor silent zones remain pet-free for acoustic and allergy safety."
  }
];
