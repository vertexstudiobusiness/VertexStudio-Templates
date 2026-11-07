import { motion, useReducedMotion, type Variants } from "framer-motion";
import { BRAND } from "../config/site";
import { scrollToId } from "../lib/format";
import { ArrowRight, StarIcon } from "./icons";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};

const rise: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="home" className="relative overflow-hidden pb-8 pt-24 sm:pt-28 lg:pb-16">
      {/* backdrop decorations */}
      <div className="checker pointer-events-none absolute -right-10 -top-24 h-56 w-72 rotate-6 opacity-[0.05]" aria-hidden />
      <div className="dots pointer-events-none absolute bottom-24 left-0 h-40 w-40 opacity-40" aria-hidden />
      <motion.span
        aria-hidden
        animate={reduce ? {} : { rotate: [8, 14, 8], y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[8%] top-20 font-display text-4xl text-butter drop-shadow-hard sm:text-5xl"
      >
        â˜…
      </motion.span>
      <motion.span
        aria-hidden
        animate={reduce ? {} : { rotate: [-10, -18, -10] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[4%] top-[38%] hidden font-display text-3xl text-burnt sm:block"
      >
        â˜…
      </motion.span>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-10"
      >
        {/* â”€â”€ type column â”€â”€ */}
        <div className="relative z-10">
          <motion.p
            variants={rise}
            className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-1 font-display text-[11px] uppercase tracking-[0.3em] text-choco/70 sm:text-xs"
          >
            <span className="rounded-full bg-choco px-2.5 py-1 text-cream">Since 2021</span>
            <span>Bandra West Â· Mumbai</span>
          </motion.p>

          <h1 className="font-display uppercase leading-[0.93] text-choco">
            <motion.span variants={rise} className="block text-[15.5vw] sm:text-[13vw] lg:text-[6.4rem]">
              Good{" "}
              <motion.img
                src="img/coffee-1.jpg"
                alt=""
                aria-hidden
                animate={reduce ? {} : { rotate: [-4, -1, -4] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="mx-0.5 inline-block h-[0.82em] w-[1.75em] rounded-full border-[3px] border-choco object-cover align-baseline"
              />{" "}
              Food.
            </motion.span>
            <motion.span variants={rise} className="block text-[15.5vw] sm:text-[13vw] lg:text-[6.4rem]">
              Great{" "}
              <motion.img
                src="img/waffles.jpg"
                alt=""
                aria-hidden
                animate={reduce ? {} : { rotate: [3, 6, 3] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                className="mx-0.5 inline-block h-[0.82em] w-[1.75em] rounded-full border-[3px] border-choco object-cover align-baseline"
              />{" "}
              Mood.
            </motion.span>
            <motion.span variants={rise} className="block text-[15.5vw] sm:text-[13vw] lg:text-[6.4rem]">
              <span className="relative">
                <span className="font-script normal-case text-burnt text-[0.62em] leading-none">All day.</span>
              </span>
              <span className="text-burnt"> â˜…</span>
            </motion.span>
          </h1>

          <motion.p variants={rise} className="mt-5 max-w-md text-[15px] leading-relaxed text-choco/70 sm:text-base">
            Retro diner energy meets Bandra street culture â€” smash burgers, freakshakes, filter
            kaapi and waffle towers, served loud and lovely from 8:30 am till late.
          </motion.p>

          <motion.div variants={rise} className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <motion.button
              whileTap={{ scale: 0.94 }}
              onClick={() => scrollToId("menu")}
              className="pressable group flex h-[54px] items-center justify-center gap-2 rounded-full bg-burnt px-8 font-display text-base uppercase tracking-[0.14em] text-cream shadow-hard transition-colors hover:bg-burnt-deep"
            >
              Order now
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </motion.button>
            <button
              onClick={() => scrollToId("offers")}
              className="pressable flex h-[54px] items-center justify-center rounded-full border-2 border-choco bg-cream px-7 font-display text-base uppercase tracking-[0.14em] text-choco transition-colors hover:bg-butter"
            >
              See the combos
            </button>
          </motion.div>

          <motion.div variants={rise} className="mt-6 flex items-center gap-3 pb-2">
            <span className="flex -space-x-1">
              {[0, 1, 2, 3, 4].map((i) => (
                <StarIcon key={i} className="h-5 w-5 text-butter" />
              ))}
            </span>
            <span className="text-[13px] font-semibold text-choco/80">
              {BRAND.rating} rating Â· {BRAND.ratingCount} very full humans
            </span>
          </motion.div>
        </div>

        {/* â”€â”€ collage column â”€â”€ */}
        <motion.div variants={rise} className="relative mt-9 lg:mt-0">
          <div className="relative grid grid-cols-[1.2fr_1fr] grid-rows-[150px_190px] gap-3 sm:grid-rows-[200px_230px]">
            <div className="span-2 relative row-start-1 col-start-1 col-end-2 overflow-hidden rounded-[2rem] border-[3px] border-choco shadow-hard">
              <img
                src="img/hero-interior.jpg"
                alt="Inside Sunday Social â€” plants, warm lights and a busy cafÃ© bar"
                fetchPriority="high"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="relative row-start-2 col-start-1 overflow-hidden rounded-[2rem] border-[3px] border-choco shadow-hard">
              <img
                src="img/shake-1.jpg"
                alt="Choco fudge bomb shake with cream and a cookie"
                fetchPriority="high"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="relative row-start-2 col-start-2 overflow-hidden rounded-[2rem] border-[3px] border-choco shadow-hard sm:mt-[-28px]">
              <img
                src="img/waffles.jpg"
                alt="Golden waffle with berries and melting butter"
                fetchPriority="high"
                className="h-full w-full object-cover"
              />
            </div>

            <span
              className="checker absolute -left-4 top-1/2 hidden h-16 w-16 -translate-y-1/2 rounded-2xl border-[3px] border-choco bg-cream sm:block"
              aria-hidden
            />

            <span className="absolute -right-2 -top-5 z-10 -rotate-6 rounded-full border-[3px] border-choco bg-butter px-4 py-1.5 font-display text-sm uppercase tracking-[0.12em] text-choco shadow-hard-sm">
              Open till late
            </span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
