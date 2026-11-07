import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { LIFESTYLE } from "../config/site";

export function LifestyleBreak() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.18, 1.06]);

  return (
    <section ref={ref} className="relative isolate">
      {/* marquee word band */}
      <div className="relative z-10 -mb-16 overflow-hidden py-4 sm:-mb-20">
        <div className="rotate-[-1.4deg]">
          <div className="border-y-[3px] border-choco bg-butter py-3">
            <div className="marquee-track" style={{ ["--marquee-duration" as string]: "22s" }}>
              {[0, 1].map((half) => (
                <span key={half} className="flex items-center" aria-hidden={half === 1}>
                  {[...LIFESTYLE.words, ...LIFESTYLE.words, ...LIFESTYLE.words].map((w, i) => (
                    <span
                      key={`${half}-${i}`}
                      className="mx-6 font-display text-[clamp(1.8rem,6vw,3.2rem)] uppercase tracking-wide text-choco"
                    >
                      {w} <span className="text-burnt">★</span>
                    </span>
                  ))}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* full-width photo */}
      <div className="relative h-[62vw] max-h-[620px] min-h-[380px] w-full overflow-hidden sm:h-[70vh]">
        <motion.img
          src={LIFESTYLE.images.main}
          alt="Warm, lamp-lit Sunday Social dining room in the evening"
          loading="lazy"
          decoding="async"
          style={reduce ? undefined : { y, scale }}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-choco/55" aria-hidden />
        <div className="checker-cream absolute h-16 w-72 -left-8 bottom-8 -rotate-2 opacity-80" aria-hidden />

        <div className="relative z-10 flex h-full items-end justify-center pb-14 sm:items-center sm:pb-0">
          <div className="px-4 text-center">
            <p className="font-script text-3xl text-butter drop-shadow-[0_2px_0_rgba(28,15,7,0.8)] sm:text-4xl">
              {LIFESTYLE.quote}
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-2">
              {["☕ Fresh daily", "🐾 Pet friendly", "🥐 Bakes at 8:30", "🎧 Vinyl sundays"].map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border-2 border-cream/80 bg-choco/40 px-3.5 py-1.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-cream backdrop-blur-sm"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* mid image card overlapping */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute -bottom-6 right-4 hidden w-36 rotate-3 overflow-hidden rounded-2xl border-[3px] border-cream shadow-hard sm:block md:right-14 md:w-44"
        >
          <img
            src={LIFESTYLE.images.mid}
            alt="Moody late-night seating, coffee in hand"
            loading="lazy"
            decoding="async"
            className="aspect-square w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
