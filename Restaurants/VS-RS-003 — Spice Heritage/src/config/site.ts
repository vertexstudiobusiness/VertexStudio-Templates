/**
 * ─────────────────────────────────────────────────────────────
 *  SPICE HERITAGE — BUSINESS CONFIGURATION
 *  Every piece of business data lives here. Edit this file to
 *  change contact details, hours, reservation slots, links,
 *  brand strings and WhatsApp booking settings.
 * ─────────────────────────────────────────────────────────────
 */

export const site = {
  name: "Spice Heritage",
  tagline: "Fine Indian Dining",
  established: "Est. 1998",
  city: "Udaipur",
  description:
    "Twelve centuries of royal kitchens, reduced to one unforgettable plate.",
} as const;

export const business = {
  name: site.name,
  tagline: site.tagline,
  established: 1998,
  sinceLabel: "Since 1998 · Udaipur",
  description: site.description,
  phoneDisplay: "+91 98290 44556",
  phoneHref: "tel:+919829044556",
  whatsappNumber: "919829044556", // country code + number, digits only — used for wa.me links
  whatsappDefaultMessage:
    "Namaste! I would like to reserve a table at Spice Heritage.",
  email: "reservations@spiceheritage.in",
  addressLines: ["Plot 14, Gulab Bagh Road", "Old City, Udaipur, Rajasthan 313001"],
  addressSummary: "Gulab Bagh Road, Old City · Udaipur 313001",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=Gulab+Bagh+Road+Udaipur+Rajasthan",
  mapEmbed:
    "https://www.google.com/maps?q=Gulab%20Bagh%20Road%2C%20Udaipur%2C%20Rajasthan&z=15&output=embed",
  directionsNote: "4-minute walk from Gulab Bagh & Zoo · Valet parking after 6 PM",
  travelNotes: [
    { label: "Maharana Pratap Airport", value: "25 min drive" },
    { label: "Udaipur City Railway Station", value: "8 min drive" },
    { label: "City Palace", value: "2.5 km · 7 min drive" },
  ],
  hours: {
    days: "Tuesday — Sunday",
    lunch: "12:00 PM – 3:30 PM",
    dinner: "6:30 PM – 11:00 PM",
    lastSeating: "Last seating 10:30 PM",
    closed: "Closed on Mondays (kitchen rest — the ledger does not)",
  },
  socials: [
    { label: "Instagram", handle: "@spiceheritage.in", href: "https://instagram.com/" },
    { label: "Facebook", handle: "SpiceHeritageUdaipur", href: "https://facebook.com/" },
    { label: "YouTube", handle: "Spice Heritage Kitchen", href: "https://youtube.com/" },
  ],
  fssai: "FSSAI Lic. 11421007001234",
  city: "Udaipur",
} as const;

/** Reservation booking slots — edit freely. */
export const booking = {
  maxDaysAhead: 60,
  maxGuests: 12,
  holdMinutes: 15,
  occasions: [
    "No occasion",
    "Anniversary",
    "Birthday",
    "Business dinner",
    "Family get-together",
    "Proposal",
    "Just because",
  ] as const,
  times: [
    "12:00",
    "12:30",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "6:30 PM",
    "7:00 PM",
    "7:30 PM",
    "8:00 PM",
    "8:30 PM",
    "9:00 PM",
    "9:30 PM",
    "10:00 PM",
  ] as const,
} as const;

export const navLinks = [
  { label: "Our Story", href: "#about" },
  { label: "Signatures", href: "#signature" },
  { label: "Menu", href: "#menu" },
  { label: "Heritage", href: "#heritage" },
  { label: "Chef", href: "#chef" },
  { label: "Gallery", href: "#gallery" },
  { label: "Visit", href: "#contact" },
] as const;

export const waLink = (message: string) =>
  `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(message)}`;

export type ReservationDraft = {
  name: string;
  phone: string;
  email: string;
  guests: string;
  date: string;
  time: string;
  occasion: string;
  notes: string;
};

export function reservationMessage(d: ReservationDraft): string {
  const prettyDate = new Date(`${d.date}T12:00:00`).toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const occ = d.occasion && d.occasion !== "No occasion" ? `\nOccasion: *${d.occasion}*` : "";
  const notes = d.notes.trim() ? `\nNotes: ${d.notes.trim()}` : "";
  return [
    `Namaste! I would like to reserve a table at *${business.name}*.`,
    ``,
    `*Name:* ${d.name}`,
    `*Guests:* ${d.guests} ${d.guests === "1" ? "person" : "people"}`,
    `*Date:* ${prettyDate}`,
    `*Time:* ${d.time.includes("PM") ? d.time : `${d.time} PM`}`,
    occ,
    notes,
    ``,
    `Please confirm our table. Thank you!`,
    `— sent from ${business.name.toLowerCase()}.in booking form`,
  ]
    .filter(Boolean)
    .join("\n");
}
