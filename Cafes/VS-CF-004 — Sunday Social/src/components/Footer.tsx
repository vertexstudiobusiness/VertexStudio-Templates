import { BRAND, DEMO_NOTICE, FOOTER_STRIP } from "../config/site";
import { scrollToId } from "../lib/format";
import { InstagramIcon, PhoneIcon, WhatsAppIcon, XIcon } from "./icons";

const NAV = [
  { id: "home", label: "Home" },
  { id: "menu", label: "Menu" },
  { id: "offers", label: "Combo offers" },
  { id: "story", label: "Our story" },
  { id: "gallery", label: "Gallery" },
  { id: "visit", label: "Visit us" },
];

const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  BRAND.mapsQuery,
)}`;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-choco text-cream">
      {/* top marquee band */}
      <div className="border-y-[3px] border-choco-deep bg-butter py-2.5">
        <div className="marquee-track" style={{ ["--marquee-duration" as string]: "20s" }}>
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
              {FOOTER_STRIP.map((word) => (
                <span
                  key={`${copy}-${word}`}
                  className="flex items-center gap-3 px-4 font-display text-[13px] uppercase tracking-[0.22em] text-choco"
                >
                  <span className="text-burnt">✦</span>
                  {word}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="dots-cream pointer-events-none absolute inset-0 opacity-40" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-12 sm:px-6">
        {/* giant stroked type */}
        <p
          className="stroke-cream pointer-events-none select-none whitespace-nowrap text-center font-display text-[13.5vw] leading-none opacity-[0.13] sm:text-[11vw]"
          aria-hidden
        >
          GOOD FOOD — GREAT MOOD
        </p>

        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          {/* brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="relative grid h-10 w-10 place-items-center rounded-xl bg-burnt shadow-hard-sm">
                <span className="checker-cream absolute inset-0 rounded-xl opacity-30" aria-hidden />
                <span className="relative font-display text-lg leading-none text-cream">SS</span>
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-xl uppercase tracking-wide text-cream">
                  Sunday
                </span>
                <span className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.42em] text-butter">
                  Social
                </span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-[13.5px] leading-relaxed text-cream/65">
              {BRAND.tagline} A fictional retro-modern café built as a portfolio template —
              every word, photo and price here is configurable.
            </p>
            <p className="mt-3 font-script text-xl text-butter">
              see you on the good side of the street
            </p>
          </div>

          {/* explore */}
          <nav aria-label="Footer">
            <h3 className="font-display text-[13px] uppercase tracking-[0.28em] text-butter">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5">
              {NAV.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => scrollToId(l.id)}
                    className="pressable text-left text-[14px] text-cream/75 transition-colors hover:text-butter"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* hours-lite */}
          <div>
            <h3 className="font-display text-[13px] uppercase tracking-[0.28em] text-butter">
              Good hours
            </h3>
            <ul className="mt-4 space-y-2 text-[13.5px] text-cream/75">
              <li>Mon – Thu · 9 am – 11 pm</li>
              <li>Fri · 9 am – 12 am</li>
              <li>Sat · 8:30 am – 12 am</li>
              <li className="font-bold text-butter">Sun · 8:30 am – 11:30 pm</li>
              <li className="pt-1 text-[12px] text-cream/45">
                Kitchen winds down 30 min earlier.
              </li>
            </ul>
          </div>

          {/* contact */}
          <div>
            <h3 className="font-display text-[13px] uppercase tracking-[0.28em] text-butter">
              Say hello
            </h3>
            <ul className="mt-4 space-y-3 text-[13.5px] text-cream/75">
              <li>
                <a href={mapsHref} target="_blank" rel="noreferrer" className="pressable block transition-colors hover:text-butter">
                  {BRAND.address}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${BRAND.phone.replace(/\s/g, "")}`}
                  className="pressable flex items-center gap-2 transition-colors hover:text-butter"
                >
                  <PhoneIcon className="h-4 w-4 text-burnt" /> {BRAND.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${BRAND.email}`} className="pressable transition-colors hover:text-butter">
                  {BRAND.email}
                </a>
              </li>
            </ul>
            <a
              href={`https://wa.me/${BRAND.whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="pressable mt-4 inline-flex h-11 items-center gap-2 rounded-xl bg-whatsapp px-4 font-display text-[13px] uppercase tracking-[0.14em] text-choco shadow-hard-sm"
            >
              <WhatsAppIcon className="h-4.5 w-4.5" /> Order on WhatsApp
            </a>
            <div className="mt-4 flex items-center gap-3">
              <a
                href={BRAND.instagramUrl}
                aria-label="Instagram"
                className="pressable grid h-10 w-10 place-items-center rounded-xl border-2 border-cream/25 text-cream transition-colors hover:border-butter hover:text-butter"
              >
                <InstagramIcon className="h-4.5 w-4.5" />
              </a>
              <a
                href={BRAND.xUrl}
                aria-label="X (Twitter)"
                className="pressable grid h-10 w-10 place-items-center rounded-xl border-2 border-cream/25 text-cream transition-colors hover:border-butter hover:text-butter"
              >
                <XIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-12 border-t border-cream/15 pt-5 text-center sm:flex sm:items-center sm:justify-between sm:text-left">
          <p className="text-[12px] text-cream/50">
            © {year} {BRAND.name}. Fictional demo café — {DEMO_NOTICE}
          </p>
          <p className="mt-2 text-[12px] text-cream/50 sm:mt-0">
            Made with chai + Framer Motion in Bandra
          </p>
        </div>
      </div>
    </footer>
  );
}
