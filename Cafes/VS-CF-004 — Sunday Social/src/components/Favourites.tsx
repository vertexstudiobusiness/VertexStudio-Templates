import { FAVOURITE_IDS } from "../config/site";
import { ProductCard } from "./ProductCard";
import { SectionHeading } from "./ui-bits";
import { scrollToId } from "../lib/format";
import { ArrowRight } from "./icons";

export function Favourites() {
  return (
    <section className="py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            kicker="Trending now"
            title={
              <>
                Signature <span className="font-script normal-case text-burnt text-[0.75em]">faves</span>
              </>
            }
            sub="The plates Bandra keeps reordering — a rolling hall of fame, picked weekly by our kitchen crew."
          />
          <button
            onClick={() => scrollToId("menu")}
            className="pressable mb-1 hidden h-12 items-center gap-2 rounded-full border-2 border-choco bg-cream px-6 font-display text-sm uppercase tracking-[0.14em] text-choco transition-colors hover:bg-butter sm:flex"
          >
            Full menu <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Mobile: horizontal snap row with peek. sm+: 3-col grid */}
      <div className="mt-7 sm:mt-9">
        <div className="no-scrollbar snap-x snap-mandatory flex gap-4 overflow-x-auto px-4 pb-3 sm:mx-auto sm:grid sm:max-w-7xl sm:grid-cols-3 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0 lg:gap-6">
          {FAVOURITE_IDS.map((id, i) => (
            <div
              key={id}
              className="snap-start shrink-0 basis-[76%] first:ml-2 last:mr-2 sm:ml-0 sm:mr-0 sm:basis-auto sm:first:ml-0"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <ProductCard id={id} variant="big" className="h-full" />
            </div>
          ))}
        </div>
        <p className="mt-2 px-4 text-center text-[11px] font-semibold uppercase tracking-[0.3em] text-choco/40 sm:hidden">
          swipe for more ·
        </p>
      </div>
    </section>
  );
}
