import { motion } from "framer-motion";
import { COMBOS } from "../config/site";
import { useCart } from "../context/CartContext";
import { inr } from "../lib/format";
import { CartIcon } from "./icons";
import { Reveal, SectionHeading } from "./ui-bits";

export function ComboOffers() {
  const { add, countOf } = useCart();

  return (
    <section id="offers" className="relative py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          align="center"
          kicker="Limited time"
          title={
            <>
              Combo <span className="font-script normal-case text-burnt text-[0.72em]">tickets</span>
            </>
          }
          sub="Retro-deal energy — clip nothing, just tap. Each ticket is one tap away from your bag."
        />

        <div className="mt-9 grid gap-6 md:grid-cols-3 md:gap-5">
          {COMBOS.map((c, idx) => {
            const rotation = [-2.5, 1.8, -1.5][idx % 3];
            const inCart = countOf(c.id);
            return (
              <Reveal key={c.id} delay={idx * 0.08}>
                <motion.article
                  whileHover={{ y: -6, rotate: 0 }}
                  style={{ rotate: rotation }}
                  className="relative overflow-hidden rounded-[1.75rem] border-[3px] border-choco bg-butter shadow-hard"
                >
                  {/* ticket stub image */}
                  <div className="relative h-44 overflow-hidden border-b-[3px] border-choco sm:h-48">
                    <img
                      src={c.image}
                      alt={c.name}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                    <span className="absolute left-4 top-4 rounded-full border-2 border-choco bg-cream px-3 py-1 font-display text-[11px] uppercase tracking-[0.16em] text-choco shadow-hard-sm">
                      {c.time}
                    </span>
                    <span className="absolute right-4 top-4 grid h-14 w-14 rotate-6 place-items-center rounded-full border-[3px] border-cream bg-burnt text-center font-display text-[11px] uppercase leading-tight text-cream shadow-hard-sm">
                      combo
                      <br />
                      deal
                    </span>
                    {/* perforation */}
                    <div className="absolute inset-x-0 bottom-0 h-4 border-t-[3px] border-dotted border-choco/40 bg-butter" aria-hidden />
                  </div>

                  <div className="p-5">
                    <h3 className="font-display text-xl uppercase leading-tight text-choco sm:text-[22px]">
                      {c.name}
                    </h3>
                    <p className="mt-1.5 text-[13px] leading-snug text-choco/70">{c.desc}</p>

                    <ul className="mt-3 space-y-1">
                      {c.includes.map((inc) => (
                        <li key={inc} className="flex items-center gap-2 text-[13px] font-medium text-choco/85">
                          <span className="text-burnt">✚</span>
                          {inc}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 flex items-end justify-between gap-3">
                      <div>
                        <span className="text-[13px] font-semibold text-choco/50 line-through">
                          {inr(c.mrp)}
                        </span>
                        <span className="ml-2 font-display text-[26px] leading-none text-choco">
                          {inr(c.price)}
                        </span>
                        <span className="ml-2 rounded-md bg-tomato px-1.5 py-0.5 text-[11px] font-bold text-cream">
                          save {inr(c.mrp - c.price)}
                        </span>
                      </div>
                      {inCart > 0 ? (
                        <span className="rounded-xl border-2 border-choco bg-choco px-3 py-2.5 font-display text-xs uppercase tracking-wider text-cream">
                          ×{inCart} in bag
                        </span>
                      ) : (
                        <motion.button
                          whileTap={{ scale: 0.93 }}
                          onClick={() => add(c.id)}
                          className="pressable flex h-12 items-center gap-2 rounded-xl bg-choco px-4 font-display text-[13px] uppercase tracking-[0.12em] text-cream shadow-hard-sm transition-colors hover:bg-burnt"
                        >
                          <CartIcon className="h-4.5 w-4.5" /> Add combo
                        </motion.button>
                      )}
                    </div>
                  </div>
                </motion.article>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <p className="mt-6 text-center text-[12px] font-semibold uppercase tracking-[0.25em] text-choco/45">
            demo website · combos, prices & offers are fully configurable
          </p>
        </Reveal>
      </div>
    </section>
  );
}
