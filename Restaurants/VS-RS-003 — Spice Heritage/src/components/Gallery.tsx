import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { img } from "../data/images";

type Item = { image: string; title: string; span: string };

/** Explicit placement keeps the mosaic intact at every breakpoint. */
const items: Item[] = img.gallery.map((g, i) => ({
  image: g.image,
  title: g.title,
  span:
    i === 0
      ? "col-span-2 row-span-2"
      : i === 5
        ? "col-span-2 md:col-span-1"
        : "col-span-1",
}));

const titleSpan = "col-span-2 md:col-span-3 lg:col-span-2";

export function Gallery() {
  return (
    <section id="gallery" className="section-pad bg-ivory scroll-mt-20">
      <Reveal>
        <SectionHeading
          eyebrow="The Dining Experience"
          title={
            <>
              Inside <em className="gold-gradient-text italic">Spice Heritage</em>
            </>
          }
          sub="Forty candle-lit corners, one coal tandoor you can hear from the street, and a courtyard that smells of rain in July."
        />
      </Reveal>

      <Reveal delay={0.12} className="container-x mt-10 md:mt-14">
        <div className="grid grid-flow-row-dense grid-cols-2 auto-rows-[128px] gap-3 sm:auto-rows-[172px] sm:gap-4 md:grid-cols-3 lg:auto-rows-[212px] lg:grid-cols-4">
          {items.map((it) => (
            <GalleryTile key={it.title} item={it} />
          ))}

          {/* Closing quote tile */}
          <figure
            className={`relative overflow-hidden rounded-2xl border border-gold-500/30 bg-burgundy-800 text-ivory jali-dark ${titleSpan}`}
          >
            <div className="flex h-full flex-col items-center justify-center gap-2 px-6 text-center">
              <p className="font-display text-xl italic leading-snug text-ivory/90 sm:text-2xl">
                "Arrive at 7 PM and follow the coal."
              </p>
              <figcaption className="text-[10px] uppercase tracking-luxe text-gold-400/80">
                — a standing invitation
              </figcaption>
            </div>
          </figure>
        </div>
      </Reveal>
    </section>
  );
}

function GalleryTile({ item }: { item: Item }) {
  return (
    <figure
      className={`group relative overflow-hidden rounded-2xl border border-burgundy-700/10 ${item.span}`}
    >
      <img
        src={item.image}
        alt={item.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-luxe group-hover:scale-[1.06]"
        loading="lazy"
        decoding="async"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />
      <figcaption className="absolute bottom-3.5 left-4 right-4 flex items-center gap-2">
        <span className="text-gold-300/0 transition-colors duration-500 group-hover:text-gold-300">
          ✦
        </span>
        <span className="text-[10.5px] font-medium uppercase tracking-[0.2em] text-ivory/85 transition-colors duration-500 group-hover:text-ivory">
          {item.title}
        </span>
      </figcaption>
    </figure>
  );
}
