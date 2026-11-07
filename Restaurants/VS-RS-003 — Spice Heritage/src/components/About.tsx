import { Flame, Leaf, UtensilsCrossed } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { img } from "../data/images";

const pillars = [
  { icon: Flame, title: "Coal-fired tandoor", sub: "Lit at 4 AM daily" },
  { icon: Leaf, title: "Hand-ground spices", sub: "Stone-chaabi weekends" },
  { icon: UtensilsCrossed, title: "Three royal lineages", sub: "Awadhi · Mughlai · Rajasthani" },
];

export function About() {
  return (
    <section id="about" className="section-pad relative overflow-hidden bg-ivory jali-light scroll-mt-20">
      <div className="container-x grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
        {/* Copy */}
        <Reveal className="lg:col-span-6">
          <p className="eyebrow flex items-center gap-3 text-gold-700">
            <span className="h-px w-8 bg-gold-600/50" /> Our Story
          </p>
          <h2 className="mt-4 font-display text-[2.15rem] font-medium leading-[1.08] text-burgundy-700 sm:text-5xl">
            A Love Letter to
            <br />
            Indian Flavour
          </h2>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-ink/70 sm:text-base">
            Spice Heritage began not as a restaurant but as a ledger — a cloth-bound book of
            weights, seasons and silences written by our great-great-grandfather Mahadev in
            the palace kitchens of a Mewar nobleman.
          </p>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink/70 sm:text-base">
            Today that ledger is our law. Saffron is still measured in tolas, dal is still
            stirred for twenty-two hours, and every biryani is still opened at your table —
            so the steam can introduce itself, the way it did in 1912.
          </p>

          <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="flex items-center gap-3.5 rounded-2xl border border-burgundy-700/10 bg-cream/80 px-4 py-4 sm:flex-col sm:items-start"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-burgundy-700 text-gold-300">
                  <p.icon size={18} strokeWidth={1.8} />
                </span>
                <span className="min-w-0">
                  <span className="block text-[13.5px] font-medium text-burgundy-700">{p.title}</span>
                  <span className="block text-[11px] text-ink/50">{p.sub}</span>
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Collage */}
        <Reveal delay={0.15} className="lg:col-span-6">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="arch absolute -inset-2.5 border border-gold-500/40" aria-hidden="true" />
            <img
              src={img.aboutTall}
              alt="Punjabi samosas with mint and tamarind chutney on a brass tray"
              className="arch relative aspect-[4/5] w-full object-cover shadow-lux"
              loading="lazy"
              decoding="async"
            />

            <img
              src={img.aboutSmall}
              alt="Chicken dum biryani with raita"
              className="absolute -bottom-7 -right-3 w-28 rotate-2 rounded-xl border-4 border-cream object-cover aspect-square shadow-card sm:-right-7 sm:w-40 sm:border-cream"
              loading="lazy"
              decoding="async"
            />

            <div className="absolute -left-2 top-10 animate-floaty rounded-xl border border-gold-500/30 bg-burgundy-800/95 px-4 py-3 text-ivory shadow-lux backdrop-blur sm:-left-6">
              <p className="font-display text-2xl leading-none text-gold-300">340</p>
              <p className="mt-1 text-[9px] uppercase tracking-luxe text-ivory/60">
                recipes preserved
                <br />
                since 1912
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
