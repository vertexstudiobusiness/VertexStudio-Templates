import { ChefHat } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { img } from "../data/images";

const badges = ["Slow-braised 14 hours", "Kesari kulcha & saalan", "₹795 · tableside"];

export function ChefSpecial() {
  return (
    <section id="chef" className="relative overflow-hidden bg-cream py-16 sm:py-20 md:py-24 scroll-mt-20">
      <span className="absolute -left-6 top-10 -z-0 font-display text-[11rem] leading-none text-gold-600/10 select-none" aria-hidden="true">
        №
      </span>

      <Reveal className="container-x">
        <div className="relative grid overflow-hidden rounded-[26px] border border-gold-500/30 bg-burgundy-700 text-ivory shadow-lux lg:grid-cols-2">
          {/* Content panel */}
          <div className="relative p-7 sm:p-10 lg:p-12 xl:p-14">
            <span className="pointer-events-none absolute right-6 top-6 hidden font-display text-5xl text-gold-400/20 lg:block" aria-hidden="true">
              ✦
            </span>

            <p className="eyebrow flex items-center gap-3 text-gold-300">
              <span className="h-px w-8 bg-gold-400/60" /> Tonight at the Tandoor
            </p>

            <h2 className="mt-4 font-display text-[2rem] font-medium leading-tight sm:text-[2.6rem]">
              Nihari-e-Gosht
            </h2>
            <p className="mt-4 max-w-md text-[14.5px] font-light leading-relaxed text-ivory/70 sm:text-[15px]">
              Lamb shanks surrendered to an overnight bone-broth nihari, ghee-fried
              ginger lifting each spoonful, and a kesari kulcha pulled straight from
              the coal tandoor to mop the saalan.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {badges.map((b) => (
                <span
                  key={b}
                  className="rounded-full border border-gold-400/30 bg-gold-400/[0.07] px-3.5 py-1.5 text-[10.5px] font-medium uppercase tracking-[0.16em] text-gold-300"
                >
                  {b}
                </span>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-4 border-t border-ivory/10 pt-6">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-ivory/10 text-gold-300" aria-hidden="true">
                <ChefHat size={22} strokeWidth={1.6} />
              </span>
              <div className="min-w-0">
                <p className="text-[13.5px] font-medium text-ivory">Chef Arjun Rathore</p>
                <p className="text-[10.5px] uppercase tracking-[0.2em] text-ivory/45">
                  Executive Chef · Guardian of the Ledger
                </p>
              </div>
            </div>
            <p className="mt-4 font-display text-xl italic text-gold-300/90 sm:text-[1.35rem]">
              "If the ledger smiles, the dish is ready."
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href="#reserve" className="btn-gold text-[14.5px] sm:px-7">
                Reserve for Tonight
              </a>
              <a href="#menu" className="btn-outline-light text-[14.5px] sm:px-7">
                Full Menu
              </a>
            </div>
          </div>

          {/* Photography */}
          <div className="relative min-h-[300px] sm:min-h-[380px] lg:min-h-full">
            <img
              src={img.chef}
              alt="Kadhai of charcoal-fired gosht curry finished with lemon and coriander"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-burgundy-700/50 via-transparent to-transparent lg:bg-gradient-to-r lg:from-burgundy-700/70 lg:via-burgundy-700/10 lg:to-transparent" />
            <div className="absolute bottom-5 right-6 hidden text-right lg:block">
              <p className="font-display text-2xl italic text-ivory/85">coal · ghee · patience</p>
            </div>
          </div>
        </div>

        <p className="mt-6 text-center text-[13px] font-light italic text-ink/45">
          Next week at the tandoor: <span className="font-medium not-italic text-burgundy-700">Kochi Prawn Balchão</span> — ledger recipe № 214.
        </p>
      </Reveal>
    </section>
  );
}
