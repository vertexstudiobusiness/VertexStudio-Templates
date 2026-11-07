import type { MenuItem } from '../types';

export const MENU_ITEMS: MenuItem[] = [
  // COFFEE
  {
    id: "c-1",
    name: "Maison Signature Cortado",
    frenchName: "Cortado Maison à l'Orange",
    category: "coffee",
    description: "Double shot of Ethiopian Yirgacheffe, equal parts velvety steamed milk, infused with organic orange peel oil and a whisper of raw panela.",
    price: 240,
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80",
    isBestseller: true,
    isVegetarian: true,
    origin: "Yirgacheffe, Ethiopia (Natural Process)",
    tastingNotes: ["Bergamot", "Milk Chocolate", "Candied Orange"],
    options: ["Whole Milk", "Oat Milk (+₹40)", "Almond Milk (+₹40)"]
  },
  {
    id: "c-2",
    name: "Nordic Flat White",
    frenchName: "Flat White Scandinave",
    category: "coffee",
    description: "Micro-textured silk milk folded into an intense double ristretto. Clean, bright acidity balanced with sweet praline finish.",
    price: 260,
    image: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=800&q=80",
    isBestseller: true,
    isVegetarian: true,
    origin: "Huila, Colombia & Chikmagalur Micro-lot",
    tastingNotes: ["Roasted Hazelnut", "Caramel", "Red Apple"],
    options: ["Whole Milk", "Oat Milk (+₹40)", "Almond Milk (+₹40)"]
  },
  {
    id: "c-3",
    name: "Pour Over V60 Single-Origin",
    frenchName: "Café Filtre V60 Réserve",
    category: "coffee",
    description: "Slow-poured through Hario V60 using mineral-balanced 92°C water. Tea-like clarity with delicate floral aroma and stone fruit sweetness.",
    price: 320,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
    isVegetarian: true,
    isVegan: true,
    origin: "Gesha Village, Bench Maji Zone",
    tastingNotes: ["Jasmine Flowers", "Peach Nectar", "Meyer Lemon"]
  },
  {
    id: "c-4",
    name: "Madagascan Vanilla Bean Latte",
    frenchName: "Latte Vanille Bourbon",
    category: "coffee",
    description: "Slow-reduced syrup crafted in-house from cured Bourbon vanilla pods, layered with double espresso and creamy microfoam.",
    price: 290,
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80",
    isVegetarian: true,
    origin: "Bababudangiri Estate, India",
    tastingNotes: ["Bourbon Vanilla", "Toffee", "Creamy Cocoa"],
    options: ["Whole Milk", "Oat Milk (+₹40)", "Coconut Milk (+₹40)"]
  },
  {
    id: "c-5",
    name: "Espresso Romano",
    frenchName: "Espresso au Zeste de Citron",
    category: "coffee",
    description: "Extracted short at 9 bars. Served with an expressed Amalfi lemon peel and a small carafe of sparkling mineral water.",
    price: 210,
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    isVegetarian: true,
    isVegan: true,
    origin: "Antioquia, Colombia",
    tastingNotes: ["Dark Plum", "Cocoa Nibs", "Citrus Sparkle"]
  },
  {
    id: "c-6",
    name: "Hazelnut Praline Cappuccino",
    frenchName: "Cappuccino Praliné Noisette",
    category: "coffee",
    description: "Classic Italian-ratio foam capped with roasted Piedmont hazelnut dust and house-ground hazelnut praline paste.",
    price: 310,
    image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80",
    isVegetarian: true,
    containsNuts: true,
    tastingNotes: ["Roasted Hazelnut", "Brown Butter", "Molasses"],
    options: ["Whole Milk", "Oat Milk (+₹40)"]
  },

  // COLD DRINKS
  {
    id: "cd-1",
    name: "Iced Shakerato al Limone",
    frenchName: "Café Shakerato Glacé",
    category: "cold-drinks",
    description: "Double ristretto shaken vigorously over crystalline ice cubes with raw demerara sugar and fresh lemon essence until frothy and velvety.",
    price: 260,
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80",
    isBestseller: true,
    isVegetarian: true,
    isVegan: true,
    tastingNotes: ["Velvety Crema", "Bright Citrus", "Caramel Finish"]
  },
  {
    id: "cd-2",
    name: "Cascara Sparkling Blood Orange Tonic",
    frenchName: "Tonic Pétillant à la Cascara",
    category: "cold-drinks",
    description: "Cold brew made from dried coffee cherry husks (cascara), paired with Italian blood orange extract and artisanal cinchona tonic.",
    price: 290,
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    isVegetarian: true,
    isVegan: true,
    tastingNotes: ["Hibiscus", "Rosehips", "Sparkling Bittersweet Orange"]
  },
  {
    id: "cd-3",
    name: "Uji Ceremonial Matcha Cloud",
    frenchName: "Nuage de Matcha Cérémonial",
    category: "cold-drinks",
    description: "First-harvest stone ground matcha from Kyoto, whisked to order over chilled oat milk and topped with sea-salt cold foam.",
    price: 340,
    image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80",
    isBestseller: true,
    isVegetarian: true,
    isVegan: true,
    tastingNotes: ["Creamy Umami", "Spring Grass", "Salted Sweetness"],
    options: ["Oat Milk (Standard)", "Almond Milk", "Whole Milk"]
  },
  {
    id: "cd-4",
    name: "Slow 18-Hour Cold Drip",
    frenchName: "Extraction Lente à Froid",
    category: "cold-drinks",
    description: "Dutch-style slow Kyoto drip towers extracting drops for 18 hours. Ultra-smooth wine-like mouthfeel with zero astringency.",
    price: 280,
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80",
    isVegetarian: true,
    isVegan: true,
    tastingNotes: ["Blackberry", "Bourbon Oak", "Dark Honey"]
  },
  {
    id: "cd-5",
    name: "Valrhona Iced Chocolate Mousse",
    frenchName: "Chocolat Glacé Valrhona",
    category: "cold-drinks",
    description: "Melted Guanaja 70% dark chocolate whipped with chilled cream, Maldon flaky salt, and Ceylon cinnamon dust.",
    price: 320,
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
    isVegetarian: true,
    tastingNotes: ["Dark Cacao", "Silky Truffle", "Maldon Sea Salt"]
  },

  // BREAKFAST
  {
    id: "b-1",
    name: "Avocado & Poached Burford Tartine",
    frenchName: "Tartine d'Avocat & Œufs Pochés",
    category: "breakfast",
    description: "Thick slice of toasted stone-ground country sourdough, crushed Hass avocado, two pasture-raised poached eggs, marinated Danish feta, and za'atar crunch.",
    price: 420,
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
    isBestseller: true,
    isVegetarian: true,
    tastingNotes: ["Creamy Avocado", "Tangy Sourdough", "Golden Runny Yolks"]
  },
  {
    id: "b-2",
    name: "Brioche French Toast & Mascarpone",
    frenchName: "Pain Perdu à la Brioche Dorée",
    category: "breakfast",
    description: "Caramelized house-baked enriched brioche soaked in vanilla custard, topped with vanilla-bean mascarpone, roasted wild berries, and organic maple glaze.",
    price: 440,
    image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=800&q=80",
    isBestseller: true,
    isVegetarian: true,
    tastingNotes: ["Caramelized Crust", "Custardy Center", "Tart Berries"]
  },
  {
    id: "b-3",
    name: "Smoked Salmon & Truffle Scramble Tartine",
    frenchName: "Tartine Saumon Fumé & Brouillade Truffée",
    category: "breakfast",
    description: "Slow-stirred creamy French scrambled eggs with summer black truffle butter, Norwegian beechwood smoked salmon, and fresh dill on rye.",
    price: 490,
    image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80",
    tastingNotes: ["Velvety Scramble", "Smoky Beechwood", "Earthy Truffle"]
  },
  {
    id: "b-4",
    name: "Maison Golden Granola Bowl",
    frenchName: "Granola Croustillant & Yaourt au Miel",
    category: "breakfast",
    description: "Maple-baked rolled oats, pumpkin seeds, pecans and puffed amaranth over creamy sheep's milk labneh, poached figs, and raw forest blossom honey.",
    price: 380,
    image: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80",
    isVegetarian: true,
    containsNuts: true,
    tastingNotes: ["Crunchy Pecans", "Tangy Labneh", "Floral Honey"]
  },
  {
    id: "b-5",
    name: "Croque Monsieur au Gruyère",
    frenchName: "Le Véritable Croque Monsieur",
    category: "breakfast",
    description: "Layered pullman loaf, Dijon mustard, smoked ham, and velvety Nutmeg-infused Mornay béchamel, baked golden with Cave-aged Gruyère.",
    price: 460,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
    tastingNotes: ["Nutty Melted Cheese", "Savory Ham", "Buttery Crunch"]
  },

  // BAKERY
  {
    id: "bk-1",
    name: "Kardemummabulle (Cardamom Bun)",
    frenchName: "Brioche Suédoise à la Cardamome",
    category: "bakery",
    description: "The crown jewel of Copenhagen cafés: twisted laminated sweet yeast dough layered with freshly crushed green cardamom butter and sprinkled with Swedish pearl sugar.",
    price: 280,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    isBestseller: true,
    isVegetarian: true,
    tastingNotes: ["Warm Green Cardamom", "Caramelized Butter", "Crunchy Pearl Sugar"]
  },
  {
    id: "bk-2",
    name: "Pain au Chocolat Pur Beurre",
    frenchName: "Pain au Chocolat Artisanal",
    category: "bakery",
    description: "Double batons of Valrhona Guanaja 70% dark chocolate rolled inside 81 crisp layers of cold-fermented AOP Normandy butter dough.",
    price: 290,
    image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=800&q=80",
    isBestseller: true,
    isVegetarian: true,
    tastingNotes: ["Flaky Butter Crust", "Melting Bittersweet Cacao", "Honeycomb Open Crumb"]
  },
  {
    id: "bk-3",
    name: "Classic Butter Croissant",
    frenchName: "Croissant au Beurre d'Isigny",
    category: "bakery",
    description: "Three-day lamination with 84% fat cultured Normandy butter. Shatteringly light exterior with an airy, golden, fragrant honeycomb interior.",
    price: 240,
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80",
    isVegetarian: true,
    tastingNotes: ["Rich Cultured Butter", "Caramelized Tips", "Featherlight Crumb"]
  },
  {
    id: "bk-4",
    name: "Twice-Baked Almond Frangipane",
    frenchName: "Croissant aux Amandes",
    category: "bakery",
    description: "Soaked in orange blossom syrup, filled with roasted Marcona almond frangipane cream, and baked crisp under a mountain of toasted flaked almonds.",
    price: 340,
    image: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?auto=format&fit=crop&w=800&q=80",
    isVegetarian: true,
    containsNuts: true,
    tastingNotes: ["Toasty Almond", "Orange Blossom Perfume", "Decadent Creamy Core"]
  },
  {
    id: "bk-5",
    name: "Sicilian Pistachio & Rose Cruffin",
    frenchName: "Cruffin Pistache de Bronte & Rose",
    category: "bakery",
    description: "Hybrid croissant-muffin rolled in rose sugar, injected with silken Bronte pistachio praline mousseline and adorned with organic Ispahan rose petals.",
    price: 350,
    image: "https://images.unsplash.com/photo-1621236378699-8597fee6a1ce?auto=format&fit=crop&w=800&q=80",
    isBestseller: true,
    isVegetarian: true,
    containsNuts: true,
    tastingNotes: ["Emerald Pistachio", "Delicate Rosewater", "Crisp Sugar Shell"]
  },
  {
    id: "bk-6",
    name: "Kouign-Amann Breton Pastry",
    frenchName: "Véritable Kouign-Amann Breton",
    category: "bakery",
    description: "Brittany's butter-and-sugar folded pastry caramelized during baking into a sticky, deep amber candy crust with soft layered interior.",
    price: 290,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    isVegetarian: true,
    tastingNotes: ["Toffee Crust", "Salted Butter", "Caramelized Crunch"]
  },

  // DESSERTS
  {
    id: "d-1",
    name: "Salted Caramel Cannelé de Bordeaux",
    frenchName: "Cannelé Bordelais au Caramel Beurre Salé",
    category: "desserts",
    description: "Baked in traditional beeswax-lined copper fluted molds. Dark, mahogany caramelized crust giving way to a soft, custardy rum and vanilla bean center.",
    price: 220,
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80",
    isBestseller: true,
    isVegetarian: true,
    tastingNotes: ["Beeswax Crust", "Custardy Rum", "Tahitian Vanilla Bean"]
  },
  {
    id: "d-2",
    name: "Burnt Basque Cheesecake",
    frenchName: "Gâteau au Fromage Basque Brûlé",
    category: "desserts",
    description: "Baked at high heat for a scorched caramel skin encasing an oozy, velvet molten cream cheese center. Accompanied by tart raspberry-thyme compote.",
    price: 380,
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80",
    isBestseller: true,
    isVegetarian: true,
    tastingNotes: ["Toasted Caramel", "Molten Cream Cheese", "Tangy Raspberry"]
  },
  {
    id: "d-3",
    name: "Valrhona 72% Dark Chocolate Tart",
    frenchName: "Tartelette Chocolat Noir Intense & Noisette",
    category: "desserts",
    description: "Crisp sablé breton shell, dark chocolate ganache made with single-plantation Araguani cocoa, topped with gold leaf and sea salt.",
    price: 390,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
    isVegetarian: true,
    containsNuts: true,
    tastingNotes: ["Bittersweet 72% Cacao", "Salty Crunch", "Velvet Ganache"]
  },
  {
    id: "d-4",
    name: "Crisp Vanilla Bean Mille-Feuille",
    frenchName: "Mille-Feuille Croustillant Vanille de Madagascar",
    category: "desserts",
    description: "Three caramelized inverse puff pastry crisps filled with piped whipped light diplomatic cream specked with real vanilla caviar.",
    price: 360,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    isVegetarian: true,
    tastingNotes: ["Shattering Pastry", "Airy Vanilla Cream", "Caramelized Sugar"]
  }
];

export const BESTSELLER_ITEMS = MENU_ITEMS.filter(item => item.isBestseller);
