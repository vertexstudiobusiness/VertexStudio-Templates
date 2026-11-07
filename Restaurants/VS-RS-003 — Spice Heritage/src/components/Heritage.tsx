import { Quote } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { heritageChapters } from "../data/content";
import { img } from "../data/images";

export function Heritage() {
  return (
    <section
      id="heritage"
      className="relative overflow-hidden bg-burgundy-900 py-16 text-ivory jali-dark sm:py-20 md:py-28 scroll-mt-20"
    >
      <div className="grain absolute inset-0" aria-hidden="true" />

      <div className="container-x relative grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-16">
        {/* Timeline */}
        <div className="lg:col-span-7">
          <Reveal>
            <SectionHeading
              align="left"
              tone="dark"
              eyebrow="The Heritage"
              title={
                <>
                  Recipes Older Than
                  <br />
                  the Restaurant
                </>
              }
            />
          </Reveal>

          <div className="relative mt-10 sm:mt-12">
            <span className="absolute bottom-2 left-[7px] top-2 w-px bg-gradient-to-b from-gold-400/50 via-gold-400/25 to-transparent" aria-hidden="true" />
            <ol className="space-y-9 sm:space-y-10">
              {heritageChapters.map((c, i) => (
                <Reveal as="li" key={c.year} delay={i * 0.08} className="relative pl-7 sm:pl-9">
                  <span
                    className="absolute left-0 top-[7px] block h-[15px] w-[15px] rotate-45 border-[1.5px] border-gold-400 bg-burgundy-900"
                    aria-hidden="true"
                  />
                  <p className="font-display text-2xl font-medium leading-none text-gold-300 sm:text-[1.7rem]">
                    {c.year}
                  </p>
                  <h3 className="mt-1.5 text-[12px] font-medium uppercase tracking-[0.22em] text-ivory/80">
                    {c.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-[14px] font-light leading-relaxed text-ivory/60 sm:text-[15px]">
                    {c.text}
                  </p>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>

        {/* Spice atelier visual */}
        <Reveal delay={0.15} className="lg:col-span-5">
          <div className="relative mx-auto max-w-sm lg:max-w-none">
            <div className="arch absolute -inset-2.5 border border-gold-400/35" aria-hidden="true" />
            <img
              src={img.spices}
              alt="Flat-lay of whole spices, chilies and curry leaves used in the heritage kitchen"
              className="arch relative aspect-[4/5] w-full object-cover shadow-lux"
              loading="lazy"
              decoding="async"
            />
            <span className="absolute right-5 top-16 rounded-full border border-gold-400/40 bg-burgundy-900/75 px-3 py-1.5 text-[9.5px] font-medium uppercase tracking-[0.2em] text-gold-300 backdrop-blur">
              The 1912 Ledger · Vol. II
            </span>

            <figure className="relative -mt-8 mx-4 rounded-2xl border border-gold-400/25 bg-burgundy-800/95 p-6 backdrop-blur sm:mx-8">
              <Quote size={22} className="text-gold-400" aria-hidden="true" />
              <blockquote className="mt-2 font-display text-xl italic leading-snug text-ivory/90 sm:text-[1.35rem]">
                "A recipe is a memory you can taste."
              </blockquote>
              <figcaption className="mt-2.5 text-[10.5px] uppercase tracking-[0.22em] text-gold-400/70">
                — Sharda Devi · ledger page 12
              </figcaption>
            </figure>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
