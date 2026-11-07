import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { CATEGORIES, MENU_NOTE, PRODUCTS } from "../config/site";
import { ProductCard } from "./ProductCard";
import { Reveal, SectionHeading } from "./ui-bits";

type Filter = "all" | "veg" | (typeof CATEGORIES)[number]["id"];

export function MenuSection() {
  const [filter, setFilter] = useState<Filter>("all");

  const items = useMemo(() => {
    if (filter === "all") return PRODUCTS;
    if (filter === "veg")
      return PRODUCTS.filter((p) => !p.tags.includes("nonveg"));
    return PRODUCTS.filter((p) => p.category === filter);
  }, [filter]);

  const pills: { id: Filter; label: string }[] = [
    { id: "all", label: "All" },
    ...CATEGORIES.map((c) => ({ id: c.id as Filter, label: `${c.emoji} ${c.label}` })),
    { id: "veg", label: "🌿 Veg only" },
  ];

  return (
    <section id="menu" className="relative py-10 sm:py-14">
      <div
        className="checker-butter pointer-events-none absolute right-0 top-8 h-24 w-24 opacity-70"
        aria-hidden
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          kicker="The menu board"
          title={
            <>
              Pick your <span className="stroke-burnt">poison</span> — nicely
            </>
          }
          sub={MENU_NOTE}
        />

        {/* Category filter pills — scrollable on mobile */}
        <div className="no-scrollbar relative mt-7 flex gap-2 overflow-x-auto pb-2 sm:flex-wrap sm:px-0">
          {pills.map((p) => {
            const active = filter === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setFilter(p.id)}
                aria-pressed={active}
                className={`pressable relative h-11 shrink-0 rounded-full border-2 border-choco px-4 font-display text-[13px] uppercase tracking-[0.1em] sm:h-12 ${
                  active
                    ? "bg-choco text-cream shadow-hard-sm"
                    : "bg-cream text-choco/80 hover:bg-butter hover:text-choco"
                }`}
              >
                {p.label}
                {active && (
                  <motion.span
                    layoutId="menu-pill-glow"
                    className="pointer-events-none absolute inset-0 rounded-full"
                    aria-hidden
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Items grid with animated filter transitions */}
        <motion.div
          layout
          className="mt-6 grid grid-cols-1 gap-4 min-[430px]:grid-cols-2 sm:mt-8 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {items.map((p, i) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, y: 24, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94, transition: { duration: 0.2 } }}
                transition={{ duration: 0.35, delay: Math.min(i * 0.035, 0.3), ease: [0.22, 1, 0.36, 1] }}
              >
                <ProductCard id={p.id} className="h-full" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {items.length === 0 && (
          <p className="py-16 text-center font-display text-xl uppercase text-choco/50">
            Nothing on this shelf yet — check back soon ♡
          </p>
        )}

        <Reveal className="mt-8">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 rounded-2xl border-2 border-dashed border-choco/25 bg-cream-deep/60 px-5 py-3 text-center">
            <span className="flex items-center gap-2 text-[13px] font-semibold text-choco/75">
              <span className="grid h-5 w-5 place-items-center rounded-md bg-[#1a8f4b] text-cream">
                <span className="h-2 w-2 rounded-full bg-cream" /> Veg
              </span>
              · green heart
            </span>
            <span className="flex items-center gap-2 text-[13px] font-semibold text-choco/75">
              <span className="grid h-5 w-5 place-items-center rounded-md bg-tomato text-cream">
                <span className="h-2 w-2 rounded-full bg-cream" /> Non-veg
              </span>
              · the flame mark
            </span>
            <span className="text-[13px] text-choco/55">
              WhatsApp orders move fastest · {items.length} items on board
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
