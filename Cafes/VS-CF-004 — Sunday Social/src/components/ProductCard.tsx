import { motion } from "framer-motion";
import { CATALOG, useCart } from "../context/CartContext";
import { inr } from "../lib/format";
import { CartIcon, FlameIcon, LeafIcon, MinusIcon, PlusIcon } from "./icons";

export function TagBadges({ tags, compact = false }: { tags: string[]; compact?: boolean }) {
  const has = (t: string) => tags.includes(t);
  return (
    <span className="flex flex-wrap items-center gap-1.5">
      {has("nonveg") ? (
        <span
          title="Non-vegetarian"
          className={`grid place-items-center rounded-md bg-tomato/95 text-cream ${compact ? "h-4 w-4" : "h-5 w-5"}`}
        >
          <FlameIcon className={compact ? "h-2.5 w-2.5" : "h-3 w-3"} />
        </span>
      ) : (
        <span
          title="Vegetarian"
          className={`grid place-items-center rounded-md bg-[#1a8f4b] text-cream ${compact ? "h-4 w-4" : "h-5 w-5"}`}
        >
          <LeafIcon className={compact ? "h-2.5 w-2.5" : "h-3 w-3"} />
        </span>
      )}
      {has("spicy") && !compact && (
        <span className="rounded-md bg-burnt/15 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-burnt-deep">
          Spicy
        </span>
      )}
      {has("bestseller") && (
        <span className="rounded-md bg-butter px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-choco">
          Bestseller
        </span>
      )}
      {has("new") && (
        <span className="rounded-md bg-burnt px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-cream">
          New
        </span>
      )}
    </span>
  );
}

export function ProductCard({
  id,
  variant = "regular",
  className = "",
}: {
  id: string;
  variant?: "regular" | "big";
  className?: string;
}) {
  const product = CATALOG[id];
  const { add, dec, setCount, countOf } = useCart();
  if (!product) return null;

  const qty = countOf(id);
  const big = variant === "big";

  return (
    <motion.article
      layout
      className={`group relative flex flex-col overflow-hidden rounded-[1.5rem] border-2 border-choco/10 bg-white shadow-plate transition-transform duration-300 ease-out hover:-translate-y-1.5 ${className}`}
    >
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          decoding="async"
          className={`w-full object-cover transition-transform duration-500 group-hover:scale-[1.045] ${
            big ? "aspect-square" : "aspect-[4/3]"
          }`}
        />
        <span className="absolute left-3 top-3 flex items-center">
          <span className="flex items-center gap-1.5 rounded-full bg-cream/95 px-2 py-1 shadow-hard-sm">
            <TagBadges tags={product.tags} compact />
          </span>
        </span>
        {product.isCombo && product.meta && (
          <span className="absolute right-3 top-3 rounded-full bg-tomato px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-cream">
            {product.meta}
          </span>
        )}
        <span className="absolute bottom-3 right-3 rounded-full bg-butter px-3 py-1 font-display text-sm tracking-wide text-choco shadow-hard-sm">
          {inr(product.price)}
        </span>
      </div>

      <div className={`flex flex-1 flex-col ${big ? "p-5" : "p-4"}`}>
        <div className="flex items-start justify-between gap-3">
          <h3 className={`font-display uppercase leading-tight ${big ? "text-xl" : "text-[17px]"}`}>
            {product.name}
          </h3>
          {qty > 0 && (
            <span className="shrink-0 rounded-full bg-burnt px-2 py-0.5 text-[11px] font-bold text-cream">
              ×{qty}
            </span>
          )}
        </div>
        <p className="mt-1.5 flex-1 text-[13px] leading-snug text-choco/65">{product.desc}</p>

        <div className="mt-3.5 flex h-11 items-center justify-between gap-2">
          {qty === 0 ? (
            <>
              <motion.button
                whileTap={{ scale: 0.92 }}
                onClick={() => add(id)}
                className="pressable flex h-full min-w-[108px] items-center justify-center gap-1.5 rounded-xl bg-choco px-4 font-display text-[13px] uppercase tracking-[0.12em] text-cream transition-colors hover:bg-burnt"
              >
                <CartIcon className="h-4 w-4" />
                Add
              </motion.button>
              <span className="text-[13px] text-choco/45">
                {inr(product.price)}
              </span>
            </>
          ) : (
            <>
              <div className="flex h-full items-center rounded-xl bg-choco text-cream">
                <button
                  onClick={() => dec(id)}
                  aria-label={`Reduce quantity of ${product.name}`}
                  className="pressable grid h-full w-11 place-items-center"
                >
                  <MinusIcon className="h-4 w-4" />
                </button>
                <span className="w-8 select-none text-center font-display text-base tabular-nums">
                  {qty}
                </span>
                <button
                  onClick={() => add(id)}
                  aria-label={`Add one more ${product.name}`}
                  className="pressable grid h-full w-11 place-items-center"
                >
                  <PlusIcon className="h-4 w-4" />
                </button>
              </div>
              <span className="text-right text-[13px] font-semibold text-choco/85">
                {inr(product.price * qty)}
              </span>
            </>
          )}
        </div>
      </div>
    </motion.article>
  );
}
