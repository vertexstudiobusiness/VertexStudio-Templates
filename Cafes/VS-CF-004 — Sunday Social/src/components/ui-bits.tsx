import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/* ── Scroll-reveal wrapper ───────────────────────────────── */

export function Reveal({
  children,
  delay = 0,
  y = 26,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ── Section heading: kicker sticker + oversized display ─── */

export function SectionHeading({
  kicker,
  title,
  sub,
  align = "left",
  tone = "light",
}: {
  kicker: string;
  title: ReactNode;
  sub?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <div className={align === "center" ? "text-center" : ""}>
      <Reveal>
        <span
          className={`sticker inline-block -rotate-3 rounded-full px-4 py-1.5 font-display text-[13px] uppercase tracking-[0.18em]
          ${dark ? "bg-butter text-choco" : "bg-choco text-cream"}`}
        >
          {kicker}
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className={`mt-4 font-display uppercase leading-[0.95] text-[clamp(2.1rem,8.4vw,4.2rem)] ${
            dark ? "text-cream" : "text-choco"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {sub ? (
        <Reveal delay={0.14}>
          <p
            className={`mt-3 max-w-md text-[15px] leading-relaxed ${
              dark ? "text-cream/70" : "text-choco/70"
            } ${align === "center" ? "mx-auto" : ""}`}
          >
            {sub}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}

/* ── Floating sticker label (rotating tags, badges) ─────── */

export function Sticker({
  children,
  className = "",
  rotate = -4,
}: {
  children: ReactNode;
  className?: string;
  rotate?: number;
}) {
  return (
    <span
      style={{ transform: `rotate(${rotate}deg)` }}
      className={`shadow-hard-sm inline-block rounded-full border-2 border-choco bg-butter px-3 py-1 font-display text-xs uppercase tracking-[0.14em] text-choco ${className}`}
    >
      {children}
    </span>
  );
}

/* ── Lightweight custom logo (wordmark + checker monogram) ─ */

export function Logo({ stacked = false }: { stacked?: boolean }) {
  return (
    <span className="flex items-center gap-2">
      <span className="relative grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-burnt shadow-hard-sm">
        <span className="checker-cream absolute inset-0 rounded-xl opacity-30" aria-hidden />
        <span className="relative font-display text-lg leading-none text-cream">SS</span>
      </span>
      <span className={stacked ? "hidden" : "flex flex-col leading-none"}>
        <span className="font-display text-[19px] uppercase tracking-wide text-choco">Sunday</span>
        <span className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.42em] text-burnt">
          Social
        </span>
      </span>
    </span>
  );
}
