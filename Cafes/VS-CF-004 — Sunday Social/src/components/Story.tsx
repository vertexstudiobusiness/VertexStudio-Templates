import { motion, useReducedMotion } from "framer-motion";
import { STORY } from "../config/site";
import { Reveal, Sticker } from "./ui-bits";
import { HeartIcon } from "./icons";

export function Story() {
  const reduce = useReducedMotion();
  const [imgA, imgB, imgC] = STORY.images;

  return (
    <section id="story" className="relative overflow-hidden bg-choco py-14 text-cream sm:py-16">
      <div className="dots-cream pointer-events-none absolute inset-0 opacity-60" aria-hidden />
      <div
        className="checker-cream pointer-events-none absolute -left-6 top-6 h-28 w-40 -rotate-3 opacity-[0.14]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="lg:grid lg:grid-cols-[1.1fr_1fr] lg:gap-12 lg:items-center">
          <div>
            <Reveal>
              <span className="sticker inline-block rounded-full bg-butter px-4 py-1.5 font-display text-[13px] uppercase tracking-[0.18em] text-choco -rotate-2">
                {STORY.kicker}
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-4 font-display uppercase leading-[0.95] text-[clamp(2.4rem,10vw,4.6rem)]">
                {STORY.headline.split(". ").map((line, i) => (
                  <span key={line} className="block">
                    {i === 1 ? <span className="stroke-cream">{line}</span> : line}
                  </span>
                ))}
              </h2>
            </Reveal>
            {STORY.paragraphs.map((p, i) => (
              <Reveal key={i} delay={0.16 + i * 0.06}>
                <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-cream/75">{p}</p>
              </Reveal>
            ))}

            <Reveal delay={0.3}>
              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {STORY.stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl border-2 border-cream/15 bg-cream/5 px-4 py-3"
                  >
                    <div className="font-display text-2xl text-butter sm:text-[26px]">{s.value}</div>
                    <div className="mt-0.5 text-[11px] uppercase tracking-[0.14em] text-cream/60">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* collage */}
          <Reveal delay={0.15} className="mt-10 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <motion.div
                animate={reduce ? {} : { rotate: [-1.5, 1.5, -1.5] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="relative overflow-hidden rounded-[2rem] border-[3px] border-cream/90 shadow-hard-sm"
              >
                <img
                  src={imgA}
                  alt="A busy evening inside the café"
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] w-full object-cover"
                />
              </motion.div>

              <motion.div
                animate={reduce ? {} : { rotate: [3, -2, 3] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-8 -left-2 w-2/5 overflow-hidden rounded-2xl border-[3px] border-cream/90 shadow-hard-sm sm:-left-6"
              >
                <img
                  src={imgC}
                  alt="Slow pour-over brewing on the bar"
                  loading="lazy"
                  decoding="async"
                  className="aspect-square w-full object-cover"
                />
              </motion.div>

              <motion.div
                animate={reduce ? {} : { rotate: [-6, -1, -6] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-3 -top-9 w-[38%] overflow-hidden rounded-2xl border-[3px] border-choco-deep shadow-hard-sm sm:-right-8 sm:-top-12"
              >
                <img
                  src={imgB}
                  alt="Sunlit street-side terrace tables"
                  loading="lazy"
                  decoding="async"
                  className="aspect-square w-full object-cover"
                />
              </motion.div>

              <span className="absolute bottom-3 right-4 grid h-16 w-16 rotate-12 place-items-center rounded-full border-[3px] border-choco bg-tomato text-cream shadow-hard-sm sm:h-20 sm:w-20">
                <HeartIcon className="h-8 w-8" />
              </span>

              <Sticker rotate={-8} className="absolute -left-1 top-4 sm:-left-5">
                est. 2021
              </Sticker>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
