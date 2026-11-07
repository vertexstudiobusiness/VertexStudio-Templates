import { PROMO_STRIP } from "../config/site";
import type { ReactNode } from "react";

function Row({ children, repeat = 3 }: { children: ReactNode; repeat?: number }) {
  return (
    <>
      {Array.from({ length: repeat }).map((_, i) => (
        <span key={i} className="flex items-center" aria-hidden={i > 0}>
          {children}
        </span>
      ))}
    </>
  );
}

export function AnnouncementStrip({ items = PROMO_STRIP }: { items?: string[] }) {
  return (
    <div
      className="marquee-paused relative isolate my-7 overflow-hidden sm:my-10"
      role="marquee"
      aria-label="Announcements"
    >
      {/* two crossing bands, clipped by the parent — no page overflow */}
      <div className="rotate-[1.2deg]">
        <div className="bg-burnt py-2.5">
          <div className="marquee-track" style={{ ["--marquee-duration" as string]: "30s" }}>
            <Row repeat={2}>
              {items.map((t) => (
                <span
                  key={t}
                  className="mx-5 flex items-center gap-5 whitespace-nowrap font-display text-[13px] uppercase tracking-[0.14em] text-cream sm:text-sm"
                >
                  {t} <span className="text-butter">★</span>
                </span>
              ))}
            </Row>
          </div>
        </div>
      </div>
      <div className="-mt-6 rotate-[-1.6deg]">
        <div className="bg-choco py-2.5">
          <div className="marquee-track marquee-reverse" style={{ ["--marquee-duration" as string]: "36s" }}>
            <Row repeat={2}>
              {items
                .slice()
                .reverse()
                .map((t) => (
                  <span
                    key={t}
                    className="mx-5 flex items-center gap-5 whitespace-nowrap font-display text-[13px] uppercase tracking-[0.14em] text-butter sm:text-sm"
                  >
                    {t} <span className="text-burnt">★</span>
                  </span>
                ))}
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}
