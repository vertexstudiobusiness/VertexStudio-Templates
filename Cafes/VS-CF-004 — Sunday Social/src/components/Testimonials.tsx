import { motion, useReducedMotion } from "framer-motion";
import { BRAND, TESTIMONIALS } from "../config/site";
import { QuoteIcon, StarIcon } from "./icons";
import { SectionHeading, Reveal } from "./ui-bits";

const TILTS = [-1.4, 1.2, -0.9, 1.5];
const CARDS = ["bg-white", "bg-butter-soft/60", "bg-white", "bg-cream-deep/70"];

export function Testimonials() {
  const reduce = useReducedMotion();

  return (
    <section id="testimonials" className="dots py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            kicker="Table talk"
            title={
              <>
                The Sunday{" "}
                <span className="font-script normal-case text-[0.72em] text-burnt">guestbook</span>
              </>
            }
            sub="Scribbled notes from the regulars — wall of fame energy, zero filters."
          />
          <Reveal delay={0.1}>
            <div className="flex items-center gap-2 rounded-2xl border-2 border-choco bg-butter px-3.5 py-2.5 shadow-hard-sm">
              <span className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4 text-choco" />
                ))}
              </span>
              <span className="font-display text-sm tracking-wide text-choco">
                {BRAND.rating} ★ · {BRAND.ratingCount} reviews
              </span>
            </div>
          </Reveal>
        </div>

        {/* mobile: snap row →  sm+: grid */}
        <div className="no-scrollbar mt-8 -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-3 [&>*]:snap-center [&>*]:shrink-0 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-4">
          {TESTIMONIALS.map((t, i) => (
            <Reveal
              key={t.name}
              delay={(i % 4) * 0.07}
              className="w-[84vw] max-w-[350px] sm:w-auto sm:max-w-none"
            >
              <motion.blockquote
                whileHover={reduce ? undefined : { y: -5, rotate: 0 }}
                style={{ rotate: TILTS[i % TILTS.length] }}
                className={` flex h-full flex-col rounded-[1.5rem] border-2 border-choco p-5 shadow-hard-sm transition-transform ${CARDS[i % CARDS.length]}`}
              >
                <div className="flex items-center justify-between">
                  <QuoteIcon className="h-6 w-6 text-burnt" />
                  <span className="flex items-center gap-1 rounded-full bg-choco px-2 py-1">
                    {Array.from({ length: t.stars }).map((_, s) => (
                      <StarIcon key={s} className="h-3 w-3 text-butter" />
                    ))}
                  </span>
                </div>
                <p className="mt-3 flex-1 text-[14.5px] leading-relaxed text-choco/85">
                  “{t.quote}”
                </p>
                <footer className="mt-4 border-t-2 border-dashed border-choco/20 pt-3">
                  <p className="font-display text-[15px] uppercase tracking-wide text-choco">
                    {t.name}
                  </p>
                  <p className="text-[12px] font-semibold tracking-wide text-burnt">{t.handle}</p>
                </footer>
              </motion.blockquote>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-6 text-center text-[12px] font-semibold uppercase tracking-[0.25em] text-choco/40">
            demo website · reviews are fictional and fully editable
          </p>
        </Reveal>
      </div>
    </section>
  );
}
