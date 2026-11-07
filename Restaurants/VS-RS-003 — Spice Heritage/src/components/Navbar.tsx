import { useEffect, useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { business, navLinks, waLink } from "../config/site";
import { Logo } from "./ui/Logo";

const listVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.055, delayChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  /* Condense the bar after the hero begins to roll away. */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Scroll-spy for the desktop active link. */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    navLinks.forEach((l) => {
      const el = document.getElementById(l.href.slice(1));
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  /* Lock body scroll while the mobile menu is open. */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const ink = scrolled || open;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-luxe ${
          scrolled
            ? "border-b border-gold-500/25 bg-ivory/90 shadow-card backdrop-blur-lg"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="container-x flex h-16 items-center justify-between md:h-20">
          <a href="#home" className={`transition-colors duration-500 ${ink ? "text-burgundy-700" : "text-ivory"}`}>
            <Logo />
          </a>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-7 lg:flex xl:gap-9" aria-label="Primary">
            {navLinks.map((l) => {
              const isActive = active === l.href.slice(1);
              return (
                <a
                  key={l.href}
                  href={l.href}
                  className={`relative py-2 text-[12.5px] font-medium uppercase tracking-[0.16em] transition-colors duration-300 ${
                    ink
                      ? isActive
                        ? "text-burgundy-700"
                        : "text-ink/60 hover:text-burgundy-700"
                      : isActive
                        ? "text-gold-300"
                        : "text-ivory/75 hover:text-gold-300"
                  }`}
                >
                  {l.label}
                  <span
                    className={`absolute inset-x-0 -bottom-0.5 mx-auto h-[2px] rounded-full bg-gold-500 transition-all duration-300 ${
                      isActive ? "w-5 opacity-100" : "w-0 opacity-0"
                    }`}
                  />
                </a>
              );
            })}
            <a
              href="#reserve"
              className={`hidden rounded-full border px-5 py-2.5 text-[12.5px] font-medium uppercase tracking-[0.16em] transition-all duration-300 lg:inline-flex ${
                ink
                  ? "border-burgundy-700 bg-burgundy-700 text-ivory hover:bg-burgundy-600 hover:shadow-gold"
                  : "border-gold-400/70 text-gold-300 hover:bg-gold-400/10 hover:border-gold-300"
              }`}
            >
              Reserve
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className={`grid h-11 w-11 place-items-center rounded-full border transition-colors duration-300 lg:hidden ${
              ink
                ? "border-burgundy-700/20 text-burgundy-700"
                : "border-ivory/25 text-ivory"
            }`}
          >
            <Menu size={21} strokeWidth={1.8} />
          </button>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[70] flex flex-col bg-gradient-to-b from-burgundy-800 via-burgundy-900 to-ink jali-dark"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            role="dialog"
            aria-modal="true"
            aria-label="Restaurant menu navigation"
          >
            <div className="container-x flex h-16 items-center justify-between md:h-20">
              <span className="text-ivory">
                <Logo compact />
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="grid h-11 w-11 place-items-center rounded-full border border-gold-400/30 text-gold-300"
              >
                <X size={21} strokeWidth={1.8} />
              </button>
            </div>

            <motion.nav
              className="container-x mt-2 flex flex-1 flex-col justify-center pb-6"
              variants={listVariants}
              initial="hidden"
              animate="show"
              aria-label="Mobile"
            >
              <ul className="divide-y divide-ivory/10 border-y border-ivory/10">
                {navLinks.map((l, i) => (
                  <motion.li key={l.href} variants={itemVariants}>
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-baseline gap-4 py-3.5 active:opacity-60"
                    >
                      <span className="text-[10px] font-medium tracking-luxe2 text-gold-500/70">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-[1.7rem] font-medium text-ivory transition-colors group-active:text-gold-300">
                        {l.label}
                      </span>
                      <span className="ml-auto text-gold-500/60">→</span>
                    </a>
                  </motion.li>
                ))}
              </ul>

              <motion.div variants={itemVariants} className="mt-7 flex flex-col gap-3">
                <a
                  href="#reserve"
                  onClick={() => setOpen(false)}
                  className="btn-gold w-full text-[15px]"
                >
                  Reserve a Table
                </a>
                <div className="mt-1 flex gap-3">
                  <a
                    href={business.phoneHref}
                    className="btn-outline-light flex-1 text-sm"
                    aria-label={`Call ${business.phoneDisplay}`}
                  >
                    <Phone size={17} strokeWidth={1.8} />
                    Call us
                  </a>
                  <a
                    href={waLink(business.whatsappDefaultMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline-light flex-1 text-sm"
                  >
                    <MessageCircle size={17} strokeWidth={1.8} />
                    WhatsApp
                  </a>
                </div>
                <p className="mt-3 text-center text-[11px] uppercase tracking-luxe text-ivory/40">
                  {business.addressLines[0]} · {business.city}
                </p>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
