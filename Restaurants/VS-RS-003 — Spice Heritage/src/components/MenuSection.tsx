import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { VegMark, SpiceMeter } from "./ui/MenuMarks";
import { menu, menuFilters } from "../data/content";
import { Ornament } from "./ui/Ornament";
import type { MenuFilter, MenuItem } from "../types";

const matches = (item: MenuItem, filter: MenuFilter): boolean => {
  switch (filter) {
    case "all":
      return true;
    case "vegetarian":
      return item.diet === "veg";
    case "non-vegetarian":
      return item.diet === "nonveg";
    default:
      return item.course === filter;
  }
};

export function MenuSection() {
  const [filter, setFilter] = useState<MenuFilter>("all");

  const filtered = useMemo(() => menu.filter((m) => matches(m, filter)), [filter]);
  const courseCount = filtered.filter((m) => m.course !== "desserts").length;

  return (
    <section id="menu" className="section-pad relative bg-ivory jali-light scroll-mt-20">
      <Reveal>
        <SectionHeading
          eyebrow="The Whispered Menu"
          title={
            <>
              Browse Our <em className="gold-gradient-text italic">Kitchens</em>
            </>
          }
          sub="Every preparation traces a handwritten line in the 1912 ledger. Filter by course or by kitchen style."
        />
      </Reveal>

      {/* Filter rail */}
      <Reveal delay={0.1} className="relative mt-9 md:mt-12">
        <nav
          aria-label="Menu filters"
          className="flex gap-2.5 overflow-x-auto pb-1 px-1 no-scrollbar sm:flex-wrap sm:justify-center sm:overflow-visible"
        >
          {menuFilters.map((f) => {
            const isActive = filter === f.id;
            return (
              <button
                key={f.id}
                type="button"
                onClick={() => setFilter(f.id)}
                aria-pressed={isActive}
                className={`chip ${isActive ? "chip-active" : "chip-idle"}`}
              >
                {f.label}
              </button>
            );
          })}
        </nav>
        <p className="mt-3 text-center text-[12px] font-light tracking-wide text-ink/45 sm:hidden">
          slide the filters →
        </p>
      </Reveal>

      {/* Dishes */}
      <div className="container-x mt-10 md:mt-12">
        <motion.ul
          layout
          className="grid gap-x-12 gap-y-9 sm:grid-cols-2 xl:grid-cols-3"
          aria-live="polite"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {filtered.map((item) => (
              <motion.li
                layout
                key={item.id}
                initial={{ opacity: 0, y: 18, scale: 0.985 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97, transition: { duration: 0.18 } }}
                transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex items-baseline gap-2.5">
                  <VegMark diet={item.diet} className="translate-y-[-2px]" />
                  <h3 className="font-display text-[1.28rem] font-medium text-burgundy-800 whitespace-nowrap">
                    {item.name}
                  </h3>
                  <SpiceMeter level={item.spice} className="translate-y-[-2px] shrink-0" />
                  <span className="min-w-5 flex-1 translate-y-[-4px] border-b border-dotted border-ink/25" />
                  <span className="font-display text-[1.28rem] font-medium text-gold-600 whitespace-nowrap">
                    {item.price}
                  </span>
                </div>
                <p className="mt-1.5 text-[13px] font-light leading-relaxed text-ink/60 pl-[26px] pr-1">
                  {item.desc}
                </p>
                {item.tag && (
                  <span className="ml-[26px] mt-2 inline-flex rounded-full border border-burgundy-700/15 bg-burgundy-700/[0.05] px-2.5 py-1 text-[9.5px] font-medium uppercase tracking-[0.18em] text-burgundy-700/70">
                    {item.tag}
                  </span>
                )}
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>

        <p className="mt-10 text-center font-display text-lg italic text-ink/40">
          {filtered.length} dishes · {courseCount} savoury, {filtered.length - courseCount} sweet ·
          prices in ₹, inclusive of taxes
        </p>

        <div className="mt-7 flex flex-col items-center gap-3">
          <Ornament className="opacity-70" width={190} />
          <p className="max-w-md text-center text-[11px] uppercase leading-loose tracking-[0.2em] text-ink/45">
            Jain, vegan & gluten-free preparations are a quick whisper away — the
            kitchen honours every request that reaches the pass.
          </p>
        </div>
      </div>
    </section>
  );
}
