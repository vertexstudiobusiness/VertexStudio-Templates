/* ============================================================================
   SUNDAY SOCIAL â€” central site configuration
   Everything customer-facing lives here: brand copy, menu, prices (INR),
   photos, offers, hours, contact details and socials.
   ========================================================================== */

export type CategoryId =
  | "coffee"
  | "cold"
  | "shakes"
  | "breakfast"
  | "burgers"
  | "sandwiches"
  | "desserts";

export type Tag = "veg" | "nonveg" | "bestseller" | "new" | "spicy";

export interface Product {
  id: string;
  name: string;
  desc: string;
  price: number;
  category: CategoryId;
  image: string;
  tags: Tag[];
}

export interface Combo {
  id: string;
  name: string;
  desc: string;
  includes: string[];
  price: number;
  mrp: number;
  time: string;
  image: string;
}

export interface Category {
  id: CategoryId;
  label: string;
  emoji: string;
}

/* â”€â”€ Brand â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */

export const BRAND = {
  name: "Sunday Social",
  tagline: "Good food. Great mood. All day.",
  established: 2021,
  address: "9, Vasvani Junction, Chapel Lane, Bandra West, Mumbai 400050",
  mapsQuery: "Chapel Lane, Bandra West, Mumbai",
  phone: "+91 98765 43210",
  /** Used for the WhatsApp CTA â€” no country code spaces/dashes. */
  whatsappNumber: "919876543210",
  email: "hello@sundaysocial.in",
  instagram: "@sunday.social",
  instagramUrl: "#" /* connect a real Instagram handle */,
  xUrl: "#" /* connect a real X (Twitter) handle */,
  rating: 4.9,
  ratingCount: "2,400+",
};

/** Demo-checkout messaging (shown in cart + checkout). */
export const DEMO_NOTICE =
  "Demo checkout â€” this website is a showcase. Nothing is charged or delivered.";

export const CART_CONFIG = {
  deliveryFee: 39,
  freeDeliveryAbove: 299,
  storageKey: "sunday-social-cart-v1",
};

/* â”€â”€ Announcement strip copy â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */

export const PROMO_STRIP = [
  "50% OFF signature shakes â€” Thursdays only",
  "Free delivery over â‚¹299",
  "Sundays = unlimited refills on filter kaapi",
  "New in: Blueberry Morning Stack",
  "Studying? Second coffee is on us after 8 PM",
];

export const FOOTER_STRIP = [
  "Open all week",
  "Pet friendly",
  "Fresh bakes daily",
  "Chai weather approved",
  "Bandra West â€¢ Mumbai",
];

/* â”€â”€ Categories â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */

export const CATEGORIES: Category[] = [
  { id: "coffee", label: "Coffee", emoji: "â˜•" },
  { id: "cold", label: "Cold Drinks", emoji: "ðŸ¥¤" },
  { id: "shakes", label: "Shakes", emoji: "ðŸ¥›" },
  { id: "breakfast", label: "Breakfast", emoji: "ðŸ³" },
  { id: "burgers", label: "Burgers", emoji: "ðŸ”" },
  { id: "sandwiches", label: "Sandwiches", emoji: "ðŸ¥ª" },
  { id: "desserts", label: "Desserts", emoji: "ðŸ°" },
];

/* â”€â”€ Menu â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */

export const PRODUCTS: Product[] = [
  /* Coffee â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  {
    id: "filter-kaapi",
    name: "Filter Kaapi Cooler",
    desc: "Slow-brewed South Indian filter coffee, shaken hard over ice with evaporated milk. Old-school kaapi, new-school swagger.",
    price: 149,
    category: "coffee",
    image: "img/coffee-1.jpg",
    tags: ["veg", "bestseller"],
  },
  {
    id: "cloud-latte",
    name: "Cloud Brown Sugar Latte",
    desc: "Double shot, jaggery-brown-sugar cream clouded over silky milk. The foam is thick enough to feel feelings in.",
    price: 199,
    category: "coffee",
    image: "img/coffee-2.jpg",
    tags: ["veg", "new"],
  },
  {
    id: "cappuccino",
    name: "Cappuccino Classic",
    desc: "One-third espresso, one-third milk, one-third pure drama. Served with Sunday latte art, heart shape sold separately.",
    price: 159,
    category: "coffee",
    image: "img/coffee-3.jpg",
    tags: ["veg"],
  },
  {
    id: "heart-latte",
    name: "Signature Heart Latte",
    desc: "Our barista's smoothest, most buttery pour â€” the fluffiest heart in Bandra West. Tastes like fireworks.",
    price: 179,
    category: "coffee",
    image: "img/coffee-4.jpg",
    tags: ["veg", "new"],
  },
  {
    id: "house-blend",
    name: "House Blend Pour",
    desc: "Our roast of Chikmagalur arabica blended with fresh milk. The daily go-to for 9-to-non-sleepers.",
    price: 129,
    category: "coffee",
    image: "img/coffee-5.jpg",
    tags: ["veg"],
  },
  /* Cold drinks â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  {
    id: "tangerine-tonic",
    name: "Cold Brew Tangerine Tonic",
    desc: "18-hour cold brew charged with tangerine juice, sparkling tonic and a slice of citrus confidence.",
    price: 179,
    category: "cold",
    image: "img/cold-1.jpg",
    tags: ["veg"],
  },
  {
    id: "limbu-cooler",
    name: "Masala Limbu Cooler",
    desc: "Hand-squeezed lime, black salt, mint and a chaat-masala kick. Sunshine, with an attitude problem.",
    price: 119,
    category: "cold",
    image: "img/cold-2.jpg",
    tags: ["veg", "spicy"],
  },
  {
    id: "melon-slush",
    name: "Watermelon Chilli Slush",
    desc: "Blushed watermelon blitzed to slush with a chilli-salt rim. Sweet first, spicy later â€” like everything good.",
    price: 129,
    category: "cold",
    image: "img/cold-3.jpg",
    tags: ["veg", "spicy"],
  },
  /* Shakes â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  {
    id: "choco-bomb",
    name: "Choco Fudge Bomb",
    desc: "Handmade fudge, cold-blended ice cream, Oreo crumble and a syrup painter's drizzle. Non-negotiable.",
    price: 219,
    category: "shakes",
    image: "img/shake-1.jpg",
    tags: ["veg", "bestseller"],
  },
  {
    id: "strawberry-fields",
    name: "Strawberry Fields",
    desc: "Real strawberries (not the pink syrup situation) whipped into a tall, blushing, traffic-stopper.",
    price: 199,
    category: "shakes",
    image: "img/shake-2.jpg",
    tags: ["veg"],
  },
  {
    id: "cookies-cream",
    name: "Cookies & Cream Jar",
    desc: "Cookies-shake-crumble-cake, served as an edible tower of chaos in a jar. Bring a wide-mouth spoon.",
    price: 229,
    category: "shakes",
    image: "img/shake-3.jpg",
    tags: ["veg", "new"],
  },
  {
    id: "freakshake",
    name: "Sunday Freakshake",
    desc: "The kitchen-gone-wild celebrity: rainbow drip, brownie chunks, cream peaks and zero restraint.",
    price: 259,
    category: "shakes",
    image: "img/shake-4.jpg",
    tags: ["veg", "new"],
  },
  /* Breakfast â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  {
    id: "banana-pancakes",
    name: "Butter Banana Stack",
    desc: "Three fluffy pancakes, caramelised banana, melting butter and slow maple. No rush allowed.",
    price: 199,
    category: "breakfast",
    image: "img/bfast-1.jpg",
    tags: ["veg", "bestseller"],
  },
  {
    id: "blueberry-stack",
    name: "Blueberry Morning Stack",
    desc: "Plump blueberries folded into the fluffiest pancakes in town, with honey butter doing background vocals.",
    price: 219,
    category: "breakfast",
    image: "img/bfast-2.jpg",
    tags: ["veg", "new"],
  },
  {
    id: "french-toast",
    name: "Brioche French Toast",
    desc: "Thick brioche soaked overnight, griddled golden, buried in berries and a white-choc drizzle.",
    price: 189,
    category: "breakfast",
    image: "img/bfast-3.jpg",
    tags: ["veg"],
  },
  {
    id: "waffle-tower",
    name: "Hazelnut Waffle Tower",
    desc: "Two-day fermented waffles, hazelnut spread, roast nuts and a cold scoop riding on top.",
    price: 229,
    category: "breakfast",
    image: "img/waffles.jpg",
    tags: ["veg"],
  },
  {
    id: "avo-toast",
    name: "Avo Smash Toast",
    desc: "Sourdough, smashed avo, chilli flakes, lime and a jammy 6-minute egg. Your 11 AM personality in a plate.",
    price: 189,
    category: "breakfast",
    image: "img/bfast-4.jpg",
    tags: ["veg"],
  },
  {
    id: "salmon-bowl",
    name: "Smoked Salmon Protein Bowl",
    desc: "Smoked salmon, quinoa, charred kale, pickled bitten vegetables and a yuzu dressing. Gym people, we see you.",
    price: 329,
    category: "breakfast",
    image: "img/bfast-5.jpg",
    tags: ["nonveg", "new"],
  },
  {
    id: "garden-bowl",
    name: "Garden Khandani Bowl",
    desc: "Charred corn, pulled paneer, garden greens, pickled slaw and a roasted-tahini drizzle.",
    price: 249,
    category: "breakfast",
    image: "img/bfast-6.jpg",
    tags: ["veg"],
  },
  /* Burgers â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  {
    id: "smash-signature",
    name: "Smash Burger Signature",
    desc: "Double smash patties, molten cheese, burnt-end onions and the secret Sunday sauce. Fries not optional.",
    price: 249,
    category: "burgers",
    image: "img/burger-1.jpg",
    tags: ["nonveg", "bestseller"],
  },
  {
    id: "peri-peri",
    name: "Peri Peri Chicken Burger",
    desc: "Flame-grilled thigh, peri peri glaze and a proper kick. Comes with paper napkins â€” trust us, you'll need them.",
    price: 229,
    category: "burgers",
    image: "img/burger-2.jpg",
    tags: ["nonveg", "spicy"],
  },
  {
    id: "paneer-tikka",
    name: "Paneer Tikka Burger",
    desc: "Tandoor-charred paneer, mint mayo and pickled onions, stacked like an improper sandwich (in a good way).",
    price: 219,
    category: "burgers",
    image: "img/burger-3.jpg",
    tags: ["veg", "new"],
  },
  {
    id: "loaded-fries",
    name: "Loaded Cheesy Fries",
    desc: "Golden fries under a cheese flood, jalapeÃ±os, herbs and a decidedly extra amount of everything.",
    price: 179,
    category: "burgers",
    image: "img/fries-1.jpg",
    tags: ["veg", "new"],
  },
  {
    id: "classic-fries",
    name: "Classic Salted Fries",
    desc: "Crisp-edged, sea-salted, dangerously pop-into-one-mouthable. Everything else is a supporting act.",
    price: 99,
    category: "burgers",
    image: "img/fries-2.jpg",
    tags: ["veg"],
  },
  /* Sandwiches â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  {
    id: "baguetta",
    name: "Baguetta Royale",
    desc: "Crusty baguette, herb butter, smoked chicken, pickles and an honest amount of mustard brightness.",
    price: 199,
    category: "sandwiches",
    image: "img/sand-1.jpg",
    tags: ["nonveg"],
  },
  {
    id: "tandoori-wrap",
    name: "Tandoori Mayo Wrap",
    desc: "Char-grilled tandoori wrap with crunchy slaw, hung-curd mayo and lime. Someone nearby will smell it.",
    price: 179,
    category: "sandwiches",
    image: "img/sand-wrap.jpg",
    tags: ["nonveg", "spicy"],
  },
  {
    id: "avo-chutney",
    name: "Avo Chutney Sandwich",
    desc: "Green chutney, smashed avo, market-fresh tomatoes and coriander, griddled to a proper crunch.",
    price: 169,
    category: "sandwiches",
    image: "img/bfast-4.jpg",
    tags: ["veg"],
  },
  /* Desserts â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  {
    id: "brownie-bomb",
    name: "Brownie Bomb Sundae",
    desc: "Warm brownie, vanilla scoop, caramel flood and a wafer flag. It arrives, applause follows.",
    price: 249,
    category: "desserts",
    image: "img/cake-1.jpg",
    tags: ["veg", "bestseller"],
  },
  {
    id: "truffle-slice",
    name: "Choco Truffle Slice",
    desc: "Triple-layer dark chocolate truffle with a glossy drip and a rich silence at the table.",
    price: 199,
    category: "desserts",
    image: "img/cake-2.jpg",
    tags: ["veg"],
  },
  {
    id: "molten-bundt",
    name: "Molten Choco Bundt",
    desc: "Warm bundt cake under a slow, deliberate flood of molten chocolate. Time it right or eat it cold.",
    price: 249,
    category: "desserts",
    image: "img/cake-3.jpg",
    tags: ["veg"],
  },
  {
    id: "berry-cake",
    name: "Berry Custard Cake Slice",
    desc: "Feather-soft sponge, custard layers and strawberries from the good market. Sunday's quietest kind of joy.",
    price: 219,
    category: "desserts",
    image: "img/cake-4.jpg",
    tags: ["veg", "new"],
  },
  {
    id: "scoop-trio",
    name: "Artisan Scoop Trio",
    desc: "Three seasonal scoops from the churner â€” you don't pick, you surrender. Currently: fig, mango chili, lychee.",
    price: 149,
    category: "desserts",
    image: "img/scoop.jpg",
    tags: ["veg"],
  },
];

/* â”€â”€ Signature favourites (homepage showcase) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */

export const FAVOURITE_IDS = [
  "filter-kaapi",
  "freakshake",
  "waffle-tower",
  "banana-pancakes",
  "baguetta",
  "smash-signature",
];

/* â”€â”€ Limited-time combos (purchasable in cart) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */

export const COMBOS: Combo[] = [
  {
    id: "combo-burger",
    name: "The Big Sunday Burger Combo",
    desc: "The signature trio â€” burger, fries, shake. Watch a game or unwatch one, your call.",
    includes: ["Smash Burger Signature", "Loaded Cheesy Fries", "Choco Fudge Bomb"],
    price: 399,
    mrp: 647,
    time: "12 noon â€“ 4 pm",
    image: "img/burger-1.jpg",
  },
  {
    id: "combo-riser",
    name: "Rise & Shine Combo",
    desc: "Any breakfast plate with a Filter Kaapi Cooler â€” the most productive kind of morning.",
    includes: ["Any breakfast plate", "Filter Kaapi Cooler"],
    price: 249,
    mrp: 348,
    time: "8:30 am â€“ 11 am",
    image: "img/bfast-1.jpg",
  },
  {
    id: "combo-bff",
    name: "Bestie Bundle",
    desc: "Two freakshakes and fries for the person who tolerated your story-vulnerability today.",
    includes: ["2 Ã— Sunday Freakshake", "Classic Salted Fries"],
    price: 379,
    mrp: 417,
    time: "All day",
    image: "img/shake-4.jpg",
  },
];

/* â”€â”€ Story / About â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */

export const STORY = {
  kicker: "Our story",
  headline: "Born on a Sunday. Raised on second rounds.",
  paragraphs: [
    "It started in 2021 with two broke friends, a borrowed coffee machine and a six-table counter on Chapel Lane. The rule: great food, zero pretence, and everyone gets a second round on Sundays.",
    "Four years, one extension, and one very stubborn barista later, Sunday Social is where Bandra argues about football, proposes, journals and comes back the next day pretending otherwise.",
  ],
  images: ["img/story-crowd.jpg", "img/story-terrace.jpg", "img/story-pour.jpg"],
  stats: [
    { value: "2021", label: "est. on a Sunday" },
    { value: "31+", label: "menu items" },
    { value: "4.9â˜…", label: `${BRAND.ratingCount} reviews` },
    { value: "2", label: "old friends, still arguing" },
  ],
};

/* â”€â”€ Lifestyle strip â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */

export const LIFESTYLE = {
  images: {
    main: "img/lifestyle-main.jpg",
    mid: "img/lifestyle-mid.jpg",
  },
  words: ["Good Mood Club", "Coffee Chaos", "Bandra's Second Home"],
  quote: "Where the neighbourhood gets loud, gets fed, gets better.",
};

/* â”€â”€ Gallery â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */

export const GALLERY = [
  { src: "img/gal-8.jpg", caption: "Cappa moments", likes: 2301 },
  { src: "img/bfast-3.jpg", caption: "Sunday toast congregation", likes: 1892 },
  { src: "img/gal-2.jpg", caption: "Art class, but pourable", likes: 3120 },
  { src: "img/burger-1.jpg", caption: "The signature, unbothered", likes: 2740 },
  { src: "img/gal-1.jpg", caption: "Behind the bar rails", likes: 1640 },
  { src: "img/gal-5.jpg", caption: "Colour therapy bowls", likes: 1548 },
  { src: "img/gal-3.jpg", caption: "Window seats > everything", likes: 2007 },
  { src: "img/scoop.jpg", caption: "Churner season open", likes: 1120 },
  { src: "img/cake-1.jpg", caption: "Brownie bomb pre-flood", likes: 2560 },
];

/* â”€â”€ Testimonials â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */

export const TESTIMONIALS = [
  {
    quote:
      "The smash burger with filter kaapi has quietly replaced my entire personality. Sundays have not felt this good since school.",
    name: "Aarav Mehta",
    handle: "@aarav.eats",
    stars: 5,
  },
  {
    quote:
      "Came here for one photo. Stayed three hours, made one friend, left with the freakshake and feelings. Ten out of ten, would spiral again.",
    name: "Priya Nair",
    handle: "@priyaanextdoor",
    stars: 5,
  },
  {
    quote:
      "The blueberry stack deserves its own postcode. Also the staff sneak-gave us extra waffles. We demand justice â€” more waffles.",
    name: "Rhea & Kabir",
    handle: "@eatingmumbai",
    stars: 5,
  },
  {
    quote:
      "Ordered through WhatsApp at 1 PM, warm burger by 1:04. Mumbai traffic remains in shambles. The loaded fries are a power move.",
    name: "Sneha Gupta",
    handle: "@snehusurvives",
    stars: 5,
  },
];

/* â”€â”€ Hours & contact â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */

export const HOURS = [
  { day: "Monday â€“ Thursday", time: "9:00 am â€“ 11:00 pm" },
  { day: "Friday", time: "9:00 am â€“ 12:00 midnight" },
  { day: "Saturday", time: "8:30 am â€“ 12:00 midnight" },
  { day: "Sunday", time: "8:30 am â€“ 11:30 pm" },
];

/* â”€â”€ Misc content â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */

export const MENU_NOTE =
  "Prices include taxes. Menu and availability change with seasons and almond-milk sarcasm.";
