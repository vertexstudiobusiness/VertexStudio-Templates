import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { business, waLink } from "../config/site";

/** Floating WhatsApp table-booking button — appears after the hero. */
export function WhatsAppFab() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 650);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          key="wa-fab"
          href={waLink(business.whatsappDefaultMessage)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Book a table on WhatsApp"
          className="fixed z-40 flex h-12 items-center gap-2.5 rounded-full bg-[#1FA855] pl-[13px] pr-[13px] text-white shadow-lux ring-1 ring-white/20 transition-transform hover:scale-[1.04] active:scale-95 md:h-13 md:pr-5 md:pl-4"
          style={{ bottom: "max(1.15rem, env(safe-area-inset-bottom))", right: "1.15rem" }}
          initial={{ opacity: 0, y: 24, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.85 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <MessageCircle size={21} strokeWidth={2} aria-hidden="true" />
          <span className="hidden text-[13.5px] font-medium md:inline">Book a table</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
