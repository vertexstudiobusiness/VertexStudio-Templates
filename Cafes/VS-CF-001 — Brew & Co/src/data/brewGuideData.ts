export interface BrewMethod {
  id: string;
  name: string;
  iconName: string;
  ratio: number; // e.g. 15 for 1:15
  temp: string;
  grind: string;
  time: string;
  description: string;
  steps: { time: string; action: string }[];
}

export const BREW_METHODS: BrewMethod[] = [
  {
    id: 'v60',
    name: 'Hario V60 Pour-Over',
    iconName: 'Coffee',
    ratio: 16, // 1:16
    temp: '92°C – 94°C',
    grind: 'Medium (Kosher Salt)',
    time: '2m 45s – 3m 15s',
    description: 'Highlights sparkling acidity, delicate florals, and clarity of single-origin beans.',
    steps: [
      { time: '0:00', action: 'Rinse paper filter with hot water and discard rinse water. Add ground coffee and level bed.' },
      { time: '0:00 - 0:45', action: 'Bloom: Pour 45g of 93°C water in spirals. Swirl gently and let de-gas.' },
      { time: '0:45 - 1:30', action: 'First Pour: Pour steadily up to 60% of total water in concentric circles.' },
      { time: '1:30 - 2:15', action: 'Final Pour: Gently top up to final brew weight. Light tap on brewer bed.' },
      { time: '2:15 - 3:00', action: 'Drawdown: Allow water to filter through completely. Swirl server and enjoy.' }
    ]
  },
  {
    id: 'aeropress',
    name: 'Inverted Aeropress',
    iconName: 'Sliders',
    ratio: 13, // 1:13
    temp: '88°C – 90°C',
    grind: 'Medium-Fine',
    time: '1m 45s',
    description: 'Full immersion brewing with pneumatic pressure. Rich body, low bitterness, and intense sweetness.',
    steps: [
      { time: '0:00', action: 'Assemble Aeropress inverted with plunger at circle 4. Add coffee.' },
      { time: '0:00 - 0:20', action: 'Pour total water quickly, ensuring all grinds are submerged.' },
      { time: '0:20 - 0:40', action: 'Stir vigorously 4 times back and forth. Attach rinsed cap and filter.' },
      { time: '1:15', action: 'Carefully flip onto decanter or cup.' },
      { time: '1:15 - 1:45', action: 'Press down steadily with arm weight until slight hiss is heard. Stop pressing.' }
    ]
  },
  {
    id: 'french-press',
    name: 'Artisan French Press',
    iconName: 'Layers',
    ratio: 15, // 1:15
    temp: '94°C',
    grind: 'Coarse (Sea Salt)',
    time: '4m 00s',
    description: 'Immersion brew retaining natural aromatic coffee oils for a full, velvety mouthfeel.',
    steps: [
      { time: '0:00', action: 'Preheat glass beaker with boiling water, empty, and add coarse ground coffee.' },
      { time: '0:00 - 0:30', action: 'Pour all water in a single rolling stream, wetting all grounds evenly.' },
      { time: '4:00', action: 'Break the coffee crust with two spoons and skim away remaining foam.' },
      { time: '5:00', action: 'Insert plunger filter just below surface and pour gently into cups.' }
    ]
  },
  {
    id: 'cold-brew',
    name: 'Kyoto-Style Cold Brew',
    iconName: 'Droplets',
    ratio: 8, // 1:8 concentrate
    temp: 'Room temp / Ice Water',
    grind: 'Extra Coarse',
    time: '16 – 24 Hours',
    description: 'Long steep cold extraction stripping all harsh tannins while magnifying fruit and chocolate notes.',
    steps: [
      { time: 'Prep', action: 'Combine coarse grounds with filtered cold water in a sterile brewing jar or flask.' },
      { time: 'Steep', action: 'Stir gently to ensure full saturation. Seal airtight and refrigerate for 18–24 hours.' },
      { time: 'Filter', action: 'Filter through fine mesh strainer and second pass through paper V60 filter.' },
      { time: 'Serve', action: 'Dilute 1:1 with crystal clear block ice, tonic water, or cold whole milk.' }
    ]
  }
];
