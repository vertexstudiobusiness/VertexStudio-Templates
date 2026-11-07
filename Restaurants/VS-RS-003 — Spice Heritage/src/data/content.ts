import type { MenuItem, MenuFilter, SignatureDish, Testimonial, HeritageChapter } from "../types";
import { img } from "./images";

/* ── Interactive menu · prices in ₹ (INR) ─────────────────── */

export const menuFilters: { id: MenuFilter; label: string }[] = [
  { id: "all", label: "All Dishes" },
  { id: "starters", label: "Starters" },
  { id: "vegetarian", label: "Vegetarian" },
  { id: "non-vegetarian", label: "Non-Vegetarian" },
  { id: "mains", label: "Main Course" },
  { id: "desserts", label: "Desserts" },
];

export const menu: MenuItem[] = [
  /* Starters */
  {
    id: "samosa-chaat",
    name: "Subz Samosa Chaat",
    desc: "Crushed punjabi samosa over spiced chickpeas, whipped curd, tamarind drizzle and nylon sev, finished with pomegranate.",
    price: "₹295",
    course: "starters",
    diet: "veg",
    spice: 1,
    tag: "House Special",
  },
  {
    id: "dahi-kebab",
    name: "Dahi Ke Kebab",
    desc: "Hand-whipped hung-curd patties studded with cashew and green cardamom, flamed on the tawa until gold-crisp outside, molten within.",
    price: "₹345",
    course: "starters",
    diet: "veg",
    spice: 0,
    tag: "Must Try",
  },
  {
    id: "paneer-tikka",
    name: "Nizami Paneer Tikka",
    desc: "Old-city malai paneer in cheddar-and-chilli marinade, kissed by charcoal until it wears a whisper of smoke.",
    price: "₹385",
    course: "starters",
    diet: "veg",
    spice: 1,
  },
  {
    id: "murgh-seekh",
    name: "Murgh Malai Seekh",
    desc: "Cream, cardamom and mild white-pepper mince skewered and tandoor-fired; tender as a padauk petal.",
    price: "₹425",
    course: "starters",
    diet: "nonveg",
    spice: 1,
  },
  {
    id: "machli-tikka",
    name: "Amritsari Machli Tikka",
    desc: "Ajwain-battered river sole cured overnight in hung curd, fried till carom bites back. Mint chutney non-negotiable.",
    price: "₹495",
    course: "starters",
    diet: "nonveg",
    spice: 2,
  },

  /* Main Course */
  {
    id: "dal-e-shahi",
    name: "Dal-e-Shahi",
    desc: "Black urad simmered twenty-two hours over a whisper of coal, strengthened with browned butter and a film of cream.",
    price: "₹445",
    course: "mains",
    diet: "veg",
    spice: 1,
    tag: "Since 1998",
  },
  {
    id: "malai-kofta",
    name: "Malai Kofta",
    desc: "Paneer-and-khoya dumplings in a silken white gravy perfumed with mace; the quiet show-stealer of our vegetarian course.",
    price: "₹525",
    course: "mains",
    diet: "veg",
    spice: 0,
  },
  {
    id: "paneer-lababdar",
    name: "Paneer Lababdar",
    desc: "Two textures of cottage cheese — hand-crumbled and ribboned — folded into tomato torchon gravy with fenugreek.",
    price: "₹545",
    course: "mains",
    diet: "veg",
    spice: 1,
    tag: "Chef's Pride",
  },
  {
    id: "veg-biryani",
    name: "Dum Pukht Subz Biryani",
    desc: "Aged basmati layered with roasted beets, kathal and fried shallots, sealed under dough and opened at your table.",
    price: "₹595",
    course: "mains",
    diet: "veg",
    spice: 2,
  },
  {
    id: "butter-chicken",
    name: "Makhan Murgh",
    desc: "The tandoor bird, overnight in yogurt and Kashmiri chilli, finished in tomato-and-white-butter velvet. Ninety thousand dishes strong.",
    price: "₹695",
    course: "mains",
    diet: "nonveg",
    spice: 1,
    tag: "Legendary",
  },
  {
    id: "murgh-biryani",
    name: "Murgh Dum Biryani",
    desc: "Saffron, mint and fried onion fold through long-grain rice with corn-fed chicken on the bone. Served with burhani raita.",
    price: "₹675",
    course: "mains",
    diet: "nonveg",
    spice: 2,
  },
  {
    id: "laal-maas",
    name: "Laal Maas",
    desc: "Rajputana hunting curry — Mathania chillies and whole garlic, unsweetened, unapologetic. Order the chaas alongside; you'll need it.",
    price: "₹745",
    course: "mains",
    diet: "nonveg",
    spice: 3,
    tag: "Mewar Heat",
  },
  {
    id: "nihari",
    name: "Nihari-e-Gosht",
    desc: "Lamb shanks in overnight bone-broth gravy, ghee-fried ginger and lashings of saalan. Served with kesari kulcha, always.",
    price: "₹795",
    course: "mains",
    diet: "nonveg",
    spice: 2,
    tag: "Chef's Special",
  },

  /* Desserts */
  {
    id: "gulab-jamun",
    name: "Gulab Jamun & Rabri",
    desc: "Warm khoya dumplings soaked in rose syrup, cooled by a float of thickened-milk rabri and pistachio dust.",
    price: "₹275",
    course: "desserts",
    diet: "veg",
    spice: 0,
  },
  {
    id: "phirni",
    name: "Rose Phirni",
    desc: "Ground-rice pudding set in earthen kulhad the night before, veined with attar of rose and varq of dried fruit.",
    price: "₹255",
    course: "desserts",
    diet: "veg",
    spice: 0,
  },
  {
    id: "shahi-tukda",
    name: "Shahi Tukda",
    desc: "Ghee-halved bread, cardamom rabri, torched cashew praline — the kitchen's idea of a love letter.",
    price: "₹285",
    course: "desserts",
    diet: "veg",
    spice: 0,
    tag: "House Favourite",
  },
  {
    id: "moong-halwa",
    name: "Moong Dal Halwa",
    desc: "Seven hours of stirring, sweetened slowly, seared edges and a river of melted ghee. Worth every minute",
    price: "₹295",
    course: "desserts",
    diet: "veg",
    spice: 0,
  },
  {
    id: "kulfi-falooda",
    name: "Kesari Kulfi Falooda",
    desc: "Saffron kulfi crowned over falooda noodles, rose water, basil-seed jelly and a javelin of pistachio brittle.",
    price: "₹295",
    course: "desserts",
    diet: "veg",
    spice: 0,
    tag: "Must Try",
  },
];

/* ── Signature dishes (hero cards) ─────────────────────────── */

export const signatures: SignatureDish[] = [
  {
    id: "dum-gosht-biryani",
    name: "Dum Gosht Biryani",
    hindi: "दुम गोश्त बिरयानी",
    desc: "Mutton on the bone, sealed beneath dough and saffron rice — opened at your table with the lid-crack ceremony.",
    price: "₹795",
    diet: "nonveg",
    image: img.biryani,
    tag: "The Legend",
  },
  {
    id: "paneer-e-khaas",
    name: "Paneer-e-Khaas",
    hindi: "पनीर-ए-खास",
    desc: "Copper-karahi cottage cheese in tomato-saffron gravy, finished tableside with white butter.",
    price: "₹545",
    diet: "veg",
    image: img.paneer,
    tag: "Vegetarian Pride",
  },
  {
    id: "rajwadi-seekh",
    name: "Rajwadi Seekh Kebab",
    hindi: "राजवाड़ी सीख कबाब",
    desc: "Charcoal-shouldered platter: murgh malai, achari mutton and hari mirch skewers with three chutneys.",
    price: "₹695",
    diet: "nonveg",
    image: img.kebab,
    tag: "From the Tandoor",
  },
  {
    id: "maharaja-thali",
    name: "Spice Maharaja Thali",
    hindi: "महाराजा थाली",
    desc: "Seven courses, one brass plate — two kebabs, four curries, bread basket, rice, and kulfi. Two people, one decision.",
    price: "₹1,195",
    diet: "veg",
    image: img.thali,
    tag: "Feast for Two",
  },
  {
    id: "kesari-falooda",
    name: "Kesari Kulfi Falooda",
    hindi: "केसरी कुल्फी फ़ालूदा",
    desc: "The closer that books the next visit — saffron kulfi over rose falooda with brittle and jelly strata.",
    price: "₹295",
    diet: "veg",
    image: img.kulfi,
    tag: "Grand Finale",
  },
];

/* ── Heritage timeline ─────────────────────────────────────── */

export const heritageChapters: HeritageChapter[] = [
  {
    year: "1912",
    title: "The Bawarchi Ledger",
    text: "In the servants' kitchen of a Mewar nobleman, our great-great-grandfather Mahadev begins a cloth-bound ledger — weights in tolas, curries in seasons. 340 recipes survive.",
  },
  {
    year: "1985",
    title: "From Courtyard to Hearth",
    text: "Sharda Devi, our grandmother, turns her old-city courtyard into a ten-table supper kitchen. The dum biryani dough-seal becomes tableside theatre; the ledger becomes law.",
  },
  {
    year: "1998",
    title: "Spice Heritage Opens",
    text: "Forty seats, one coal tandoor, two brass karahi. On opening night the Nihari-e-Gosht sold out in ninety minutes — a tradition we have honoured ever since.",
  },
  {
    year: "Today",
    title: "Third Generation, Same Ledger",
    text: "124 seats, 12 spice masters, and one cloth-bound book that still goes home in a velvet case. Every curry we plate traces to a line handwritten a century ago.",
  },
];

/* ── Testimonials ──────────────────────────────────────────── */

export const testimonials: Testimonial[] = [
  {
    quote:
      "The lamb shank nihari arrived moon-slow and shaking with saffron — nobody at the table spoke for six straight minutes. We've driven 480 km since. Twice.",
    name: "Aarav Mehta",
    meta: "Anniversary dinner · Jaipur",
    initials: "AM",
  },
  {
    quote:
      "Booked eight of us on WhatsApp while boarding a flight; by midnight the table was set, the kulcha was kesari and the manager remembered my daughter's name.",
    name: "Priya Nair",
    meta: "Family get-together · Mumbai",
    initials: "PN",
  },
  {
    quote:
      "I have eaten from Delhi to Kochi. The laal maas here is the honest article — no sugar, no shortcuts, just Mathania chillies and courage. Outstanding discipline.",
    name: "James Whitfield",
    meta: "Business dinner · London",
    initials: "JW",
  },
  {
    quote:
      "They opened the biryani lid at the table and the whole dining room looked up. Our Diwali booking is now a three-year tradition — and a standing order.",
    name: "Sunita Agarwal",
    meta: "Diwali family dinner · Udaipur",
    initials: "SA",
  },
];
