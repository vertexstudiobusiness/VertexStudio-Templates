import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { BRAND } from "../config/site";
import { useCart } from "../context/CartContext";
import { scrollToId } from "../lib/format";
import { CartIcon, CloseIcon, InstagramIcon, PhoneIcon, WhatsAppIcon, XIcon } from "./icons";
import { Logo } from "./ui-bits";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "menu", label: "Menu" },
  { id: "offers", label: "Offers" },
  { id: "story", label: "About" },
  { id: "gallery", label: "Gallery" },
  { id: "visit", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { count, openCart } = useCart();
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    // let the overlay start closing before the scroll jump
    setTimeout(() => scrollToId(id), reduce ? 0 : 80);
  };

  return (
    <>
      <motion.header
        initial={{ y: -70 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b-2 border-choco/10 bg-cream/95 shadow-[0_2px_0_rgba(43,23,13,0.06)] backdrop-blur"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-[72px] sm:px-6">
          <button onClick={() => go("home")} className="pressable" aria-label="Sunday Social — home">
            <Logo />
          </button>

          {/* Desktop links */}
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {LINKS.map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className="group relative font-display text-[15px] uppercase tracking-[0.12em] text-choco/85 transition-colors hover:text-burnt"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-[3px] w-full origin-left scale-x-0 rounded-full bg-burnt transition-transform duration-300 group-hover:scale-x-100" />
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <button
              onClick={openCart}
              className="pressable relative flex h-10 min-w-[44px] items-center justify-center gap-1.5 rounded-xl border-2 border-choco bg-butter px-2.5 shadow-hard-sm text-choco sm:px-3"
              aria-label={`Open bag, ${count} item${count === 1 ? "" : "s"}`}
            >
              <CartIcon className="h-5 w-5" />
              <AnimatePresence>
                {count > 0 && (
                  <motion.span
                    key="badge"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ type: "spring", stiffness: 500, damping: 18 }}
                    className="grid h-5 min-w-5 place-items-center rounded-full bg-burnt px-1 font-display text-[11px] text-cream"
                  >
                    {count}
                  </motion.span>
                )}
              </AnimatePresence>
              <span className="hidden font-display text-[13px] uppercase tracking-wider md:inline">
                Bag
              </span>
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-label="Open menu"
              className="pressable grid h-10 w-10 place-items-center rounded-xl border-2 border-choco bg-cream shadow-hard-sm lg:hidden"
            >
              <span className="relative block h-4 w-5">
                <motion.span
                  animate={open ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
                  className="absolute left-0 top-0 h-[2.5px] w-full rounded bg-choco transition-colors"
                />
                <motion.span
                  animate={open ? {} : { scaleX: 0.66 }}
                  className="absolute left-0 top-1/2 h-[2.5px] w-full -translate-y-1/2 rounded bg-choco transition-colors"
                  style={{ transformOrigin: "left" }}
                />
                <motion.span
                  animate={open ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }}
                  className="absolute bottom-0 left-0 h-[2.5px] w-3/5 rounded bg-choco"
                />
              </span>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
            className="checker-fine fixed inset-0 z-[70] flex flex-col bg-choco lg:hidden"
          >
            <div className="pointer-events-none absolute inset-0 bg-choco/85" aria-hidden />
            <div className="relative z-10 flex h-full flex-col px-6 pb-8 pt-5">
              <div className="flex items-center justify-between">
                <span className="font-script text-2xl text-butter">hey you*</span>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="pressable grid h-11 w-11 place-items-center rounded-xl border-2 border-cream/30 text-cream"
                >
                  <CloseIcon className="h-5 w-5" />
                </button>
              </div>

              <nav className="mt-10 flex flex-col gap-1" aria-label="Mobile">
                {LINKS.map((l, i) => (
                  <motion.button
                    key={l.id}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.12 + i * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    onClick={() => go(l.id)}
                    className="group flex items-baseline gap-3 border-b border-cream/10 py-3 text-left"
                  >
                    <span className="font-display text-xs text-burnt">0{i + 1}</span>
                    <span className="font-display text-[clamp(2rem,9.5vw,3rem)] uppercase leading-none text-cream transition-colors group-active:text-burnt">
                      {l.label}
                    </span>
                  </motion.button>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="mt-auto space-y-4"
              >
                <div className="flex items-center gap-3">
                  <a
                    href={`https://wa.me/${BRAND.whatsappNumber}`}
                    target="_blank"
                    rel="noreferrer"
                    className="pressable flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-whatsapp font-display text-sm uppercase tracking-wider text-choco shadow-hard-sm"
                  >
                    <WhatsAppIcon className="h-5 w-5" /> WhatsApp us
                  </a>
                  <a
                    href={`tel:${BRAND.phone.replace(/\s/g, "")}`}
                    className="pressable grid h-12 w-12 place-items-center rounded-xl border-2 border-cream/30 text-cream"
                    aria-label={`Call ${BRAND.phone}`}
                  >
                    <PhoneIcon className="h-5 w-5" />
                  </a>
                  <a
                    href={BRAND.instagramUrl}
                    className="pressable grid h-12 w-12 place-items-center rounded-xl border-2 border-cream/30 text-cream"
                    aria-label="Instagram"
                  >
                    <InstagramIcon className="h-5 w-5" />
                  </a>
                  <a
                    href={BRAND.xUrl}
                    className="pressable grid h-12 w-12 place-items-center rounded-xl border-2 border-cream/30 text-cream"
                    aria-label="X (Twitter)"
                  >
                    <XIcon className="h-5 w-5" />
                  </a>
                </div>
                <p className="text-center text-xs uppercase tracking-[0.3em] text-cream/50">
                  {BRAND.address.split(",").slice(-2).join(",").trim()}
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
