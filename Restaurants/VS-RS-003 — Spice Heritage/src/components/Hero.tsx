import { motion, type Variants } from "framer-motion";
import { Star } from "lucide-react";
import { img } from "../data/images";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.35 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

const stats = [
  { value: "1998", label: "Family kitchen opened" },
  { value: "12", label: "Master spice chefs" },
  { value: "4.9", label: "2,400+ guest reviews", star: true },
];

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] flex-col overflow-hidden bg-ink">
      {/* Cinematic backdrop */}
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src={img.hero}
          alt="Spread of royal Indian curries and breads in brass serving bowls"
          className="h-full w-full object-cover animate-kenburns"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy-900/75 via-ink/40 to-ink/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/45 via-transparent to-ink/30" />
      </div>

      {/* Faint rotating mandala, large screens only */}
      <Mandala className="absolute -right-40 -top-40 h-[520px] w-[520px] text-gold-400/10 animate-spin-slow hidden sm:block" />

      {/* Copy block */}
      <motion.div
        className="container-x relative z-10 flex flex-1 flex-col items-center justify-center pb-10 pt-32 text-center sm:pt-36"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p
          variants={fadeUp}
          className="eyebrow text-shadow-lux flex items-center gap-3 text-gold-300"
        >
          <span className="h-px w-8 bg-gold-400/60" />
          Udaipur · Since 1998
          <span className="h-px w-8 bg-gold-400/60" />
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="text-shadow-lux mt-5 max-w-4xl font-display text-[2.9rem] font-medium leading-[1.05] text-ivory sm:text-6xl md:text-7xl lg:text-[5.2rem]"
        >
          Where Tradition
          <br />
          Meets <em className="gold-gradient-text animate-shimmer font-display italic">Taste</em>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-xl text-[15px] font-light leading-relaxed text-ivory/75 sm:text-base md:text-lg"
        >
          Twelve centuries of royal kitchens, reduced to one unforgettable plate —
          dough-sealed biryanis, charcoal-shouldered kebabs and heritage thalis
          whispered over coal in the old city of Udaipur.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4">
          <a href="#menu" className="btn-gold text-[15px] sm:px-8">
            View Our Menu
          </a>
          <a href="#reserve" className="btn-outline-light text-[15px] sm:px-8">
            Reserve a Table
          </a>
        </motion.div>
      </motion.div>

      {/* Grounded stat strip */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.05, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="container-x relative z-10 pb-7 sm:pb-10"
      >
        <div className="mx-auto grid max-w-2xl grid-cols-3 divide-x divide-ivory/10 rounded-2xl border border-ivory/10 bg-ivory/[0.05] py-3.5 backdrop-blur-md sm:py-5">
          {stats.map((s) => (
            <div key={s.label} className="px-1 text-center sm:px-6">
              <div className="flex items-center justify-center gap-1 font-display text-[1.35rem] font-medium text-gold-300 sm:text-3xl">
                {s.value}
                {s.star && <Star size={16} className="fill-gold-400 text-gold-400" aria-hidden="true" />}
              </div>
              <p className="mt-1 text-[8.5px] uppercase tracking-[0.18em] text-ivory/55 sm:text-[11px] sm:tracking-luxe">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

/** Intricate low-opacity mandala for dark canvases. */
function Mandala({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" className={className} aria-hidden="true">
      {Array.from({ length: 24 }, (_, i) => (
        <g key={i} transform={`rotate(${i * 15} 100 100)`}>
          <path d="M100 22 L106 42 L100 62 L94 42 Z" stroke="currentColor" strokeWidth="1" fill="none" />
          <circle cx="100" cy="70" r="1.6" fill="currentColor" />
        </g>
      ))}
      <circle cx="100" cy="100" r="64" stroke="currentColor" strokeWidth="1" />
      <circle cx="100" cy="100" r="74" stroke="currentColor" strokeWidth="0.7" />
      <circle cx="100" cy="100" r="30" stroke="currentColor" strokeWidth="1" />
      <circle cx="100" cy="100" r="10" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}
