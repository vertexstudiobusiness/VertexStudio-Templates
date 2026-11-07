import { motion, useReducedMotion } from "framer-motion";
import { BRAND } from "../config/site";
import { WhatsAppIcon } from "./icons";

/** Floating WhatsApp chat button, anchored bottom-right. */
export function WhatsAppFab() {
  const reduce = useReducedMotion();
  const href = `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(
    "Hi Sunday Social! 👋 (message sent from your demo website)",
  )}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Sunday Social on WhatsApp"
      initial={reduce ? { opacity: 0 } : { scale: 0, rotate: -24 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ delay: 0.7, type: "spring", stiffness: 280, damping: 18 }}
      whileTap={reduce ? undefined : { scale: 0.88 }}
      className="fixed bottom-4 right-4 z-40 grid h-14 w-14 place-items-center rounded-full border-[3px] border-choco bg-whatsapp text-choco shadow-hard sm:bottom-6 sm:right-6"
    >
      {!reduce && (
        <span
          className="pointer-events-none absolute inset-0 animate-ping rounded-full bg-whatsapp/50"
          aria-hidden
        />
      )}
      <span className="relative grid h-10.5 w-10.5 place-items-center rounded-full bg-cream">
        <WhatsAppIcon className="h-6.5 w-6.5 text-choco" />
      </span>
    </motion.a>
  );
}
