import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { BRAND, GALLERY } from "../config/site";
import { ChevronLeft, ChevronRight, CloseIcon, HeartIcon } from "./icons";
import { SectionHeading } from "./ui-bits";

export function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (lightbox === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((v) => (v === null ? v : (v + 1) % GALLERY.length));
      if (e.key === "ArrowLeft")
        setLightbox((v) => (v === null ? v : (v - 1 + GALLERY.length) % GALLERY.length));
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox]);

  const shot = lightbox === null ? null : GALLERY[lightbox];

  return (
    <section id="gallery" className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            kicker="@sundaysocial in the wild"
            title={
              <>
                Insta-<span className="stroke-burnt">grade</span> gallery
              </>
            }
            sub="Latest from the floor: latte petals, waffle rain and the occasional cake flood."
          />
        </div>

        {/* masonry-ish grid */}
        <div className="mt-8 columns-2 gap-3 sm:columns-3 lg:gap-4 [&>*]:mb-3 sm:[&>*]:mb-4">
          {GALLERY.map((g, i) => (
            <motion.button
              key={g.src + i}
              onClick={() => setLightbox(i)}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.06 }}
              whileHover={{ scale: 0.99 }}
              className="group relative block w-full overflow-hidden rounded-2xl border-[3px] border-choco/80 shadow-hard-sm focus-visible:outline-none"
              aria-label={`Open photo: ${g.caption}`}
            >
              <img
                src={g.src}
                alt={g.caption}
                loading="lazy"
                decoding="async"
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                  [1, 3, 6, 8].includes(i) ? "aspect-[4/5]" : "aspect-square"
                }`}
              />
              <span className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 bg-burnt/0 opacity-0 transition-all duration-300 group-hover:bg-burnt/70 group-hover:opacity-100">
                <span className="font-display text-sm uppercase tracking-[0.2em] text-cream">
                  view
                </span>
                <span className="flex items-center gap-1 rounded-full bg-cream px-2.5 py-1 text-[11px] font-bold text-choco">
                  <HeartIcon className="h-3.5 w-3.5 text-burnt" /> {g.likes.toLocaleString("en-IN")}
                </span>
              </span>
            </motion.button>
          ))}
        </div>

        <a
          href={BRAND.instagramUrl}
          className="pressable mx-auto mt-8 flex h-12 w-fit items-center gap-2 rounded-full border-2 border-choco bg-cream px-6 font-display text-sm uppercase tracking-[0.16em] text-choco transition-colors hover:bg-butter"
        >
          Open the gram ↗ {BRAND.instagram}
        </a>
      </div>

      {/* lightbox */}
      <AnimatePresence>
        {shot && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-choco-deep/95 p-4 backdrop-blur-sm"
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`Photo: ${shot.caption}`}
          >
            <button
              onClick={() => setLightbox(null)}
              aria-label="Close photo"
              className="pressable absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-xl border-2 border-cream/40 text-cream"
            >
              <CloseIcon className="h-5 w-5" />
            </button>

            <motion.figure
              key={shot.src + String(lightbox)}
              initial={reduce ? false : { scale: 0.92, y: 14 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              className="max-h-full w-full max-w-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="overflow-hidden rounded-[2rem] border-[3px] border-cream shadow-hard">
                <img
                  src={shot.src}
                  alt={shot.caption}
                  className="max-h-[64vh] w-full object-cover"
                />
              </div>
              <figcaption className="mt-4 flex items-center justify-between gap-4">
                <span className="font-script text-2xl text-butter">{shot.caption}</span>
                <span className="flex items-center gap-1.5 rounded-full bg-cream px-3 py-1.5 text-xs font-bold text-choco">
                  <HeartIcon className="h-4 w-4 text-burnt" />
                  {shot.likes.toLocaleString("en-IN")}
                </span>
              </figcaption>

              <div className="mt-4 flex items-center justify-center gap-4">
                <button
                  onClick={() => setLightbox((v) => (v === null ? v : (v - 1 + GALLERY.length) % GALLERY.length))}
                  aria-label="Previous photo"
                  className="pressable grid h-12 w-12 place-items-center rounded-full border-2 border-cream/50 text-cream"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <span className="font-display text-sm tracking-[0.2em] text-cream/70">
                  {(lightbox ?? 0) + 1} / {GALLERY.length}
                </span>
                <button
                  onClick={() => setLightbox((v) => (v === null ? v : (v + 1) % GALLERY.length))}
                  aria-label="Next photo"
                  className="pressable grid h-12 w-12 place-items-center rounded-full border-2 border-cream/50 text-cream"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
