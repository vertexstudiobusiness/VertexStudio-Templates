import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { CartIcon } from "./icons";

/** Confirmation bubble that floats up after any "add to bag". */
export function Toast() {
  const { lastAdded, openCart, count } = useCart();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!lastAdded) return;
    setVisible(true);
    const t = window.setTimeout(() => setVisible(false), 2400);
    return () => window.clearTimeout(t);
  }, [lastAdded]);

  return (
    <AnimatePresence>
      {visible && lastAdded && (
        <motion.button
          key={lastAdded.at}
          initial={{ opacity: 0, y: 22, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          exit={{ opacity: 0, y: 14, x: "-50%" }}
          transition={{ type: "spring", stiffness: 320, damping: 26 }}
          onClick={() => {
            setVisible(false);
            openCart();
          }}
          className="fixed bottom-[5.25rem] left-1/2 z-[60] flex max-w-[86vw] items-center gap-2.5 rounded-2xl border-2 border-cream/25 bg-choco px-4 py-3 text-cream shadow-hard"
          aria-label={`Added ${lastAdded.name}. Open the bag`}
        >
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-butter text-choco">
            <CartIcon className="h-4.5 w-4.5" />
          </span>
          <span className="min-w-0 text-left">
            <span className="block text-[10.5px] font-bold uppercase tracking-[0.18em] text-cream/60">
              added to bag
            </span>
            <span className="block max-w-[52vw] truncate text-[13.5px] font-semibold sm:max-w-[280px]">
              {lastAdded.name}
              {count > 0 ? <span className="ml-1.5 text-butter">· {count} total</span> : null}
            </span>
          </span>
          <span className="ml-1 shrink-0 rounded-lg bg-burnt px-2 py-1 font-display text-[11px] uppercase tracking-wider text-cream">
            view
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
