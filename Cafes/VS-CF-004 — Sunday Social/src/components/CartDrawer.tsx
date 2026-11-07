import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { BRAND, CART_CONFIG, DEMO_NOTICE, MENU_NOTE } from "../config/site";
import { useCart, type CartLine } from "../context/CartContext";
import { inr, scrollToId } from "../lib/format";
import { CloseIcon, MinusIcon, PlusIcon, WhatsAppIcon } from "./icons";
import { Sticker } from "./ui-bits";

function lineLabel(l: CartLine) {
  return l.isCombo && l.meta ? `${l.name} (${l.meta} combo)` : l.name;
}

export function CartDrawer() {
  const cart = useCart();
  const { lines, count, subtotal, deliveryFee, total, isOpen, closeCart, setCount, add, remove, clear } =
    cart;
  const reduce = useReducedMotion();
  const [removingId, setRemovingId] = useState<string | null>(null);

  /* lock scroll + Escape to close */
  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeCart();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, closeCart]);

  /* gentle remove animation */
  const drop = (id: string) => {
    setRemovingId(id);
    window.setTimeout(() => {
      remove(id);
      setRemovingId(null);
    }, reduce ? 0 : 160);
  };

  const remaining = CART_CONFIG.freeDeliveryAbove - subtotal;
  const progress = Math.min(100, (subtotal / CART_CONFIG.freeDeliveryAbove) * 100);

  const waHref = useMemo(() => {
    const items =
      lines.map((l) => `• ${l.qty} × ${lineLabel(l)} — ${inr(l.price * l.qty)}`).join("\n") ||
      "• (bag empty)";
    const msg = [
      `Hi ${BRAND.name}! Order from the demo website:`,
      "",
      items,
      "",
      `Subtotal: ${inr(subtotal)}`,
      `Delivery: ${deliveryFee === 0 ? "Free" : inr(deliveryFee)}`,
      `Total to pay: ${inr(total)}`,
      "",
      "This is a demo checkout — nothing is charged here.",
      "Settle the details with the café on WhatsApp 🙌",
    ].join("\n");
    return `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  }, [lines, subtotal, deliveryFee, total]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* backdrop */}
          <motion.button
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeCart}
            aria-label="Close bag"
            className="fixed inset-0 z-[85] bg-choco-deep/70 backdrop-blur-[2px]"
          />

          {/* drawer panel */}
          <motion.aside
            key="panel"
            initial={reduce ? { opacity: 0 } : { x: "102%" }}
            animate={reduce ? { opacity: 1 } : { x: 0 }}
            exit={reduce ? { opacity: 0 } : { x: "102%" }}
            transition={{ type: "spring", stiffness: 300, damping: 32 }}
            role="dialog"
            aria-modal="true"
            aria-label="Your bag"
            className="fixed inset-y-0 right-0 z-[90] flex h-dvh w-full max-w-[420px] flex-col rounded-l-[1.5rem] border-l-[3px] border-choco bg-cream"
          >
            {/* header */}
            <div className="flex items-center justify-between gap-3 border-b-[3px] border-dashed border-choco/25 px-4 py-3.5 sm:px-5">
              <div className="flex items-baseline gap-2.5">
                <h2 className="font-display text-2xl uppercase leading-none text-choco">Your bag</h2>
                <span className="rounded-full bg-burnt px-2 py-0.5 font-display text-[12px] text-cream">
                  {count}
                </span>
              </div>
              <button
                onClick={closeCart}
                aria-label="Close bag"
                className="pressable grid h-10 w-10 place-items-center rounded-xl border-2 border-choco bg-butter text-choco shadow-hard-sm"
              >
                <CloseIcon className="h-5 w-5" />
              </button>
            </div>

            {/* free delivery meter */}
            {subtotal > 0 && (
              <div className="border-b-2 border-dashed border-choco/20 px-4 py-3 sm:px-5">
                {remaining > 0 ? (
                  <p className="text-[12.5px] font-semibold text-choco/75">
                    Add{" "}
                    <span className="font-display text-[14px] text-burnt">{inr(remaining)}</span> more
                    for free delivery 🛵
                  </p>
                ) : (
                  <p className="font-display text-[13.5px] uppercase tracking-wide text-choco">
                    Free delivery unlocked 🎉
                  </p>
                )}
                <div className="mt-1.5 h-2 overflow-hidden rounded-full border border-choco/20 bg-cream-deep">
                  <motion.div
                    className="h-full rounded-full bg-burnt"
                    initial={false}
                    animate={{ width: `${progress}%` }}
                    transition={{ type: "spring", stiffness: 120, damping: 20 }}
                  />
                </div>
              </div>
            )}

            {/* lines / empty state */}
            {lines.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
                <Sticker className="text-[13px]" rotate={-3}>
                  bag status: hungry
                </Sticker>
                <p className="mt-4 font-display text-[clamp(1.5rem,6vw,2rem)] uppercase leading-tight text-choco">
                  Nothing in here.
                  <br />
                  Not even a fry.
                </p>
                <p className="mt-2 text-[13.5px] text-choco/60">
                  Pat your thumbs loose on the menu — something crackly is waiting.
                </p>
                <button
                  onClick={() => {
                    closeCart();
                    setTimeout(() => scrollToId("menu"), 120);
                  }}
                  className="pressable mt-6 h-12 rounded-xl bg-choco px-6 font-display text-sm uppercase tracking-[0.14em] text-cream shadow-hard-sm transition-colors hover:bg-burnt"
                >
                  Open the menu
                </button>
              </div>
            ) : (
              <ul className="flex-1 space-y-3 overflow-y-auto px-4 py-4 sm:px-5">
                <AnimatePresence initial={false}>
                  {lines.map((l) => (
                    <motion.li
                      key={l.id}
                      layout
                      initial={reduce ? false : { opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={reduce ? { opacity: 0 } : { opacity: 0, x: 60 }}
                      transition={{ duration: 0.22 }}
                      style={removingId === l.id ? { opacity: 0.35, scale: 0.98 } : undefined}
                      className="flex gap-3 rounded-2xl border-2 border-choco/10 bg-white p-3 shadow-plate"
                    >
                      <img
                        src={l.image}
                        alt={l.name}
                        loading="lazy"
                        className="h-16 w-16 shrink-0 rounded-xl border-2 border-choco/15 object-cover"
                      />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="font-display text-[15px] uppercase leading-tight text-choco">
                            {l.name}
                          </h3>
                          <button
                            onClick={() => drop(l.id)}
                            aria-label={`Remove ${l.name} from bag`}
                            className="pressable -mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg text-choco/45 transition-colors hover:bg-tomato/15 hover:text-tomato"
                          >
                            <CloseIcon className="h-4 w-4" />
                          </button>
                        </div>
                        {l.isCombo && l.meta && (
                          <span className="mt-0.5 inline-block rounded-md bg-tomato px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-cream">
                            combo · {l.meta}
                          </span>
                        )}
                        <div className="mt-2 flex items-center justify-between">
                          <div className="flex h-9 items-center rounded-xl bg-choco text-cream">
                            <button
                              onClick={() => setCount(l.id, l.qty - 1)}
                              aria-label={`Reduce ${l.name} by one`}
                              className="pressable grid h-full w-9 place-items-center"
                            >
                              <MinusIcon className="h-4 w-4" />
                            </button>
                            <span className="w-7 select-none text-center font-display text-[14px] tabular-nums">
                              {l.qty}
                            </span>
                            <button
                              onClick={() => add(l.id)}
                              aria-label={`Add one more ${l.name}`}
                              className="pressable grid h-full w-9 place-items-center"
                            >
                              <PlusIcon className="h-4 w-4" />
                            </button>
                          </div>
                          <span className="font-display text-[15px] text-choco">
                            {inr(l.price * l.qty)}
                          </span>
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </AnimatePresence>
              </ul>
            )}

            {/* footer totals + checkout */}
            {lines.length > 0 && (
              <div className="border-t-[3px] border-dashed border-choco/25 bg-cream-deep px-4 py-4 sm:px-5">
                <dl className="space-y-1.5 text-[13.5px] text-choco/75">
                  <div className="flex justify-between">
                    <dt>Subtotal</dt>
                    <dd className="font-semibold tabular-nums text-choco">{inr(subtotal)}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt>Delivery</dt>
                    <dd className="font-semibold tabular-nums text-choco">
                      {deliveryFee === 0 ? "Free 🎉" : inr(deliveryFee)}
                    </dd>
                  </div>
                  <div className="flex items-baseline justify-between border-t border-choco/15 pt-1.5">
                    <dt className="font-display text-lg uppercase text-choco">Total</dt>
                    <dd className="font-display text-2xl tabular-nums text-choco">{inr(total)}</dd>
                  </div>
                </dl>

                <a
                  href={waHref}
                  target="_blank"
                  rel="noreferrer"
                  className="pressable mt-3.5 flex h-14 w-full items-center justify-center gap-2.5 rounded-xl border-2 border-choco bg-whatsapp font-display text-[15px] uppercase tracking-[0.12em] text-choco shadow-hard transition-colors hover:bg-[#1ebe5b]"
                >
                  <WhatsAppIcon className="h-6 w-6" />
                  Checkout on WhatsApp
                </a>
                <div className="mt-2.5 flex items-center justify-between">
                  <p className="text-[11px] leading-snug text-choco/50">Taxes included · tweak to taste</p>
                  <button
                    onClick={clear}
                    className="pressable text-[11.5px] font-bold uppercase tracking-wider text-tomato underline underline-offset-2"
                  >
                    Clear bag
                  </button>
                </div>
                <p className="mt-2 text-center text-[10.5px] leading-snug text-choco/45">{DEMO_NOTICE}</p>
              </div>
            )}

            <p className="border-t border-choco/10 px-4 py-1.5 text-center text-[10px] text-choco/35 sm:px-5">
              {MENU_NOTE}
            </p>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
