import { Facebook, Instagram, Youtube } from "lucide-react";
import { Logo } from "./ui/Logo";
import { Ornament } from "./ui/Ornament";
import { business, navLinks } from "../config/site";

const socialIcons = [Instagram, Facebook, Youtube];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-burgundy-900 border-t border-gold-500/20 pt-14 text-ivory jali-dark sm:pt-16">
      <div className="container-x relative grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
        {/* Brand */}
        <div className="lg:col-span-5">
          <span className="text-ivory">
            <Logo />
          </span>
          <p className="mt-5 max-w-sm text-[14px] font-light leading-relaxed text-ivory/55">
            A third-generation Indian fine-dining house in the old city of Udaipur —
            where a 1912 recipe ledger is law, the tandoor never sleeps on Sundays,
            and every biryani is opened at your table.
          </p>
          <div className="mt-6 flex gap-3">
            {business.socials.map((s, i) => {
              const Icon = socialIcons[i % socialIcons.length];
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${business.name} on ${s.label}`}
                  className="grid h-11 w-11 place-items-center rounded-full border border-ivory/15 text-ivory/70 transition-all duration-300 hover:border-gold-400 hover:text-gold-300"
                >
                  <Icon size={17} strokeWidth={1.6} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Explore */}
        <nav className="lg:col-span-3" aria-label="Footer">
          <h3 className="text-[11px] font-medium uppercase tracking-luxe text-gold-400">Explore</h3>
          <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-2.5 sm:grid-cols-2">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-[13.5px] font-light text-ivory/60 transition-colors hover:text-gold-300"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#reserve" className="text-[13.5px] font-light text-ivory/60 transition-colors hover:text-gold-300">
                Reserve
              </a>
            </li>
          </ul>
          <Ornament className="mt-6 hidden lg:block" width={130} tone="text-gold-400/50" />
        </nav>

        {/* Contact + hours */}
        <div className="grid gap-8 sm:col-span-2 sm:grid-cols-2 lg:col-span-4">
          <div>
            <h3 className="text-[11px] font-medium uppercase tracking-luxe text-gold-400">Contact</h3>
            <address className="mt-5 space-y-2.5 text-[13.5px] font-light not-italic leading-relaxed text-ivory/60">
              {business.addressLines.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
              <a className="block transition-colors hover:text-gold-300" href={business.phoneHref}>
                {business.phoneDisplay}
              </a>
              <a className="block transition-colors hover:text-gold-300" href={`mailto:${business.email}`}>
                {business.email}
              </a>
            </address>
          </div>
          <div>
            <h3 className="text-[11px] font-medium uppercase tracking-luxe text-gold-400">Hours</h3>
            <ul className="mt-5 space-y-2.5 text-[13.5px] font-light text-ivory/60">
              <li>{business.hours.days}</li>
              <li>
                Lunch <span className="text-ivory/85">{business.hours.lunch}</span>
              </li>
              <li>
                Dinner <span className="text-ivory/85">{business.hours.dinner}</span>
              </li>
              <li className="font-display italic text-gold-400/80">{business.hours.closed}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-ivory/10">
        <div className="container-x flex flex-col items-center justify-between gap-2.5 py-6 text-[11px] font-light tracking-wide text-ivory/35 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {business.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-4">
            <span>{business.fssai}</span>
            <span className="hidden sm:inline text-ivory/20" aria-hidden="true">
              ·
            </span>
            <span className="italic font-display text-[12px] text-gold-500/60">
              Crafted in the Old City
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
