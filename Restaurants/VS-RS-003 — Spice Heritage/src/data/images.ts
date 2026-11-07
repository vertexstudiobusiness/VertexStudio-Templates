/**
 * Central image registry — Unsplash CDN. Every URL below has been
 * verified live. Adjust `w`/`h` to change delivered resolution
 * (fit=crop auto-crops around the subject).
 */
const u = (id: string, w = 800, h?: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}${h ? `&h=${h}` : ""}&q=80`;

export const img = {
  /** Hero — overhead royal curry spread in brass serving bowls */
  hero: u("photo-1585937421612-70a008356fbe", 1760),
  heroMobile: u("photo-1585937421612-70a008356fbe", 1000),

  /** Signature dishes */
  biryani: u("photo-1589302168068-964664d93dc0", 760, 900),
  paneer: u("photo-1631452180519-c014fe946bc7", 760, 900),
  kebab: u("photo-1555939594-58d7cb561ad1", 760, 900),
  thali: u("photo-1585937421612-70a008356fbe", 760, 900),
  kulfi: u("photo-1615478503562-ec2d8aa0e24e", 760, 900),

  /** Chef's special — charcoal kadhai gosht */
  chef: u("photo-1512058564366-18510be2db19", 1100),
  chefSmall: u("photo-1596040033229-a9821ebd058d", 640),

  /** About / story */
  aboutTall: u("photo-1601050690597-df0568f70950", 900, 1150),
  aboutSmall: u("photo-1631515243349-e0cb75fb8d3a", 560),

  /** Heritage — the spice flat-lay */
  spices: u("photo-1596040033229-a9821ebd058d", 900, 1100),

  /** Gallery — interiors & dining experience */
  gallery: [
    { image: u("photo-1517248135467-4c7edcad34c4", 1200), title: "The Grand Dining Hall", wide: true },
    { image: u("photo-1552566626-52f8b828add9", 800), title: "The Tandoor Bar" },
    { image: u("photo-1414235077428-338989a2e8c0", 800), title: "Evening Service" },
    { image: u("photo-1559339352-11d035aa65de", 800), title: "Courtyard Terrace" },
    { image: u("photo-1466978913421-dad2ebd01d17", 800), title: "Private Dining Suite" },
    { image: u("photo-1596040033229-a9821ebd058d", 800), title: "The Spice Atelier" },
  ] as const,
} as const;
