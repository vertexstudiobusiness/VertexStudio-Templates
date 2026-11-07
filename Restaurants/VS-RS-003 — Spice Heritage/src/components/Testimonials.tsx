import { Quote, Star } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { testimonials } from "../data/content";
import type { Testimonial } from "../types";

export function Testimonials() {
  return (
    <section id="reviews" className="section-pad relative overflow-hidden bg-sand/60 sm:bg-sand/40 scroll-mt-20">
      <span
        className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 font-serif text-[13rem] leading-none text-gold-600/10 select-none sm:text-[17rem]"
        aria-hidden="true"
      >
        ”
      </span>

      <Reveal className="container-x relative">
        <SectionHeading
          eyebrow="Guest Diaries"
          title={
            <>
              Words From Our <em className="gold-gradient-text italic">Tables</em>
            </>
          }
          sub="Unedited, unpaid and occasionally tearful — reviews collected from our guests between 2019 and last Tuesday."
        />
      </Reveal>

      <Reveal delay={0.12}>
        <div className="mt-10 flex gap-4 overflow-x-auto px-5 pb-3 no-scrollbar snap-x snap-mandatory sm:px-8 md:mx-auto md:grid md:max-w-6xl md:grid-cols-2 md:gap-4 md:overflow-visible md:px-10 md:pb-0 lg:px-8">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} t={t} index={i} />
          ))}
        </div>
        <p className="mt-3 text-center text-[11px] uppercase tracking-[0.22em] text-ink/35 md:hidden">
          swipe for more →
        </p>
      </Reveal>
    </section>
  );
}

function TestimonialCard({ t, index }: { t: Testimonial; index: number }) {
  return (
    <Reveal
      as="article"
      delay={index * 0.07}
      className="flex w-[84vw] max-w-[400px] shrink-0 snap-center flex-col rounded-2xl border border-burgundy-700/10 bg-cream p-6 shadow-card sm:w-[400px] md:w-auto md:max-w-none"
    >
      <div className="flex items-center justify-between">
        <div role="img" aria-label="Rated 5 out of 5" className="flex gap-0.5">
          {Array.from({ length: 5 }, (_, i) => (
            <Star key={i} size={14} className="fill-gold-500 text-gold-500" aria-hidden="true" />
          ))}
        </div>
        <Quote size={20} className="text-gold-600/40" aria-hidden="true" />
      </div>

      <blockquote className="mt-4 flex-1 font-display text-[1.22rem] leading-snug text-burgundy-800/90 sm:text-[1.32rem]">
        {t.quote}
      </blockquote>

      <div className="mt-5 flex items-center gap-3 border-t border-burgundy-700/10 pt-4">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-burgundy-700 font-display text-[15px] text-gold-300">
          {t.initials}
        </span>
        <span>
          <span className="block text-[13.5px] font-medium text-burgundy-800">{t.name}</span>
          <span className="block text-[10.5px] uppercase tracking-[0.16em] text-ink/45">{t.meta}</span>
        </span>
      </div>
    </Reveal>
  );
}
