import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { VegMark } from "./ui/MenuMarks";
import { signatures } from "../data/content";
import type { SignatureDish } from "../types";

export function Signature() {
  return (
    <section
      id="signature"
      className="relative overflow-hidden bg-burgundy-800 py-16 text-ivory jali-dark sm:py-20 md:py-24 scroll-mt-20"
    >
      <div className="grain absolute inset-0" aria-hidden="true" />

      <Reveal className="relative">
        <SectionHeading
          tone="dark"
          eyebrow="From the Royal Kitchens"
          title={
            <>
              Signature <em className="text-gold-300">Plates</em>
            </>
          }
          sub="Five dishes that earned their place in the ledger — and refuse to leave it."
        />
      </Reveal>

      {/* Mobile: swipe rail · Desktop: five-up grid */}
      <div className="relative mt-10 md:mt-14">
        <div className="flex gap-4 overflow-x-auto px-5 pb-3 no-scrollbar snap-x snap-mandatory sm:px-8 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-5 lg:gap-5 lg:overflow-visible lg:px-10 lg:pb-0">
          {signatures.map((dish, i) => (
            <SignatureCard key={dish.id} dish={dish} index={i} />
          ))}
        </div>
        <p className="mt-4 text-center text-[11px] uppercase tracking-[0.22em] text-ivory/35 lg:hidden">
          swipe to explore →
        </p>
      </div>
    </section>
  );
}

function SignatureCard({ dish, index }: { dish: SignatureDish; index: number }) {
  return (
    <Reveal
      as="article"
      delay={index * 0.08}
      className="group relative flex shrink-0 snap-center flex-col overflow-hidden rounded-2xl border border-ivory/10 bg-ivory/[0.045] backdrop-blur-sm transition-colors duration-500 hover:border-gold-500/40 w-[78vw] max-w-[330px] sm:w-[330px] lg:w-auto lg:max-w-none lg:snap-none"
    >
      <div className="relative px-3.5 pt-3.5">
        <img
          src={dish.image}
          alt={dish.name}
          className="arch aspect-[4/4.4] w-full object-cover transition-transform duration-700 ease-luxe group-hover:scale-[1.04]"
          loading="lazy"
          decoding="async"
        />
        <span className="absolute left-6 top-6 rounded-full border border-gold-400/40 bg-burgundy-900/70 px-3 py-1 text-[9.5px] font-medium uppercase tracking-[0.2em] text-gold-300 backdrop-blur">
          {dish.tag}
        </span>
      </div>

      <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-[1.35rem] font-medium leading-tight">{dish.name}</h3>
          <span className="mt-0.5 font-display text-[1.2rem] leading-none text-gold-400 whitespace-nowrap">
            {dish.price}
          </span>
        </div>
        <p className="mt-0.5 font-body text-[11px] uppercase tracking-[0.24em] text-gold-500/60">
          {dish.hindi}
        </p>
        <p className="mt-2.5 flex-1 text-[13px] font-light leading-relaxed text-ivory/65">
          {dish.desc}
        </p>
        <div className="mt-4 flex items-center gap-2 border-t border-ivory/10 pt-3.5">
          <VegMark diet={dish.diet} />
          <span className="text-[11px] text-ivory/50">
            {dish.diet === "veg" ? "Vegetarian" : "Non-vegetarian"}
          </span>
          {index === 0 && (
            <span className="ml-auto text-[10px] uppercase tracking-[0.2em] text-gold-500/70">
              Lid cracked tableside
            </span>
          )}
        </div>
      </div>
    </Reveal>
  );
}
