# The Daily Grind — Premium Study & Work Café

A modern, sophisticated study and work café web application built with **React**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

Designed mobile-first with a high-end Scandinavian-meets-artisanal coffee roastery aesthetic, featuring warm beige, off-white, charcoal, muted olive, and natural wood tones.

---

## ☕ Key Features

### 1. Mobile-First Architecture (375px–430px Priority)
- **Engineered for mobile touch ergonomics**: minimum 44px tap targets, spacious thumb-friendly controls, and zero horizontal scrolling.
- **Floating Mobile Action Dock**: Instant access to WhatsApp host enquiry, café menu, and seat reservation with live credit badge.
- **Polished Hamburger Navigation Drawer**: Includes live studio status, quick jump anchors, phone/location info, and instant reservation trigger.
- **Tested across viewports**: 375px (iPhone SE/Mini), 390px (iPhone 13/14/15), 430px (iPhone Pro Max), 768px (iPad/Tablet), and 1440px (Desktop).

### 2. Live Telemetry & Studio Status Bar
- Real-time seat occupancy counter (e.g., 18 desks & 2 pods available now).
- Verified dual-WAN network speed test simulator (520 Mbps download, 480 Mbps upload, 4ms latency).
- Acoustic dB noise level monitor (&lt;38 dB in Silent Focus Mezzanine).
- Roaster bean on hopper notification (Single Origin Chikmagalur Red Honey).

### 3. Purpose-Built Architectural Zones
- **The Silent Mezzanine**: Sub-35 dB whisper-free zone with brass task lighting, acoustic baffles, and ergonomic teak desks.
- **The Main Roastery Floor**: Sunlit communal white oak tables, ambient low-fi jazz, and coffee bar view.
- **Acoustic Glass Pods & Booths**: Sub-30 dB soundproof booths with ring lights, ethernet, and 4K screens for video calls and team scrums.
- **The Sunlit Garden Verandah**: Covered outdoor terrace surrounded by tropical greenery, pet-friendly with weather-shielded outlets.

### 4. Interactive Specialty Café Menu
- **Categories**: Specialty Coffee, Artisanal Tea & Matcha, All-Day Breakfast & Bowls, Gourmet Sandwiches, Brain Snacks, Bakery & Desserts.
- **Dietary Filter Pills**: Vegetarian, Vegan, Gluten-Free, High-Protein, All Diets.
- **Real-Time Instant Search**: Filter by bean origin (Chikmagalur, Nilgiris, Coorg), tasting notes, or ingredients.
- **Item Quick-View Modal**: View detailed tasting profile, caffeine intensity, and workspace credit eligibility.

### 5. Transparent Pricing & Interactive Savings Calculator
- **Pass Categories**: Day Passes (₹280 Half Day, ₹490 Full Day Focus), Monthly Resident Desks (₹6,800 Nomad, ₹10,500 Dedicated Studio), and Private Meeting Pods (₹250/hr Solo Booth, ₹850/hr Glasshouse Pod).
- **Interactive Calculator**: Adjust days per week and daily coffee consumption to see net effective workspace spend and included café credit savings.

### 6. Study & Work Packages
- Curated combo bundles: *The Deep Work Sprint* (₹399), *The Founder's Marathon* (₹849), *The 5-Day Study Camp* (₹1,999), and *The Sprint Team Huddle* (₹3,200).
- One-click package selection pre-fills the reservation form automatically.

### 7. Interactive Seat Reservation System
- **Touch-friendly inputs**: Date picker, time slot selector, focus zone selector, guest count (1–6), pass type, and pour-over arrival add-on.
- **Live Price Estimation**: Real-time breakdown of base cost, add-ons, included café credits, and total payable at check-in.
- **Form Validation**: Strict client-side verification for name, Indian 10-digit mobile number, email, and required slots.
- **Celebratory Confirmation Modal**: Triggers multi-color confetti, generates a unique booking ID (e.g., `TDG-BLR-8419`), displays a summary, and formats a pre-filled WhatsApp message.
- **Instant WhatsApp Booking**: Generates an encoded WhatsApp message with date, time, zone, and guest details directed to the café's front host desk.

### 8. Visual Gallery with Lightbox
- Categorized photo tour (Focus & Study, Coffee & Kitchen, Meeting Pods, Garden Verandah).
- Lightbox popup with next/previous controls and descriptive captions.

### 9. Location & Neighborhood Guide
- Located at 1048, 12th Main Road, HAL 2nd Stage, Indiranagar, Bengaluru.
- Direct clickable links: Phone (`tel:`), WhatsApp, Email (`mailto:`), and Google Maps directions.
- Transit details: 600m from Indiranagar Metro Station (Purple Line), EV 2-wheeler charging, and valet parking.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript
- **Bundler**: Vite 8
- **Styling**: Tailwind CSS 3.4
- **Icons**: Lucide React
- **Confetti Animation**: canvas-confetti
- **Typography**: Plus Jakarta Sans (body UI) + Fraunces (editorial headlines)

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 📍 Customization Guide

- **Café Details & Pricing**: Edit `src/data/mockData.ts` to customize address, telephone, WhatsApp numbers, INR prices, and menu items.
- **Colors & Branding**: Edit `tailwind.config.js` to tweak `sand`, `charcoal`, `wood`, `olive`, and `ambercrema` palette values.
