import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { CART_CONFIG, COMBOS, PRODUCTS, type Product } from "../config/site";

export interface CartLine {
  id: string;
  name: string;
  price: number;
  image: string;
  qty: number;
  isCombo: boolean;
  meta?: string;
}

interface CartState {
  lines: CartLine[];
  count: number;
  subtotal: number;
  deliveryFee: number;
  total: number;
  isOpen: boolean;
  countOf: (id: string) => number;
  setCount: (id: string, qty: number) => void;
  add: (id: string) => void;
  dec: (id: string) => void;
  remove: (id: string) => void;
  clear: () => void;
  openCart: () => void;
  closeCart: () => void;
  lastAdded: { id: string; name: string; at: number } | null;
}

/** Catalog lookup that includes combos as purchasable pseudo-products. */
export const CATALOG: Record<string, Product & { isCombo?: boolean; meta?: string }> =
  Object.fromEntries([
    ...PRODUCTS.map((p) => [p.id, p]),
    ...COMBOS.map((c) => [
      c.id,
      {
        ...c,
        category: "desserts" as const,
        tags: ["veg" as const],
        isCombo: true,
        meta: c.time,
      },
    ]),
  ] as Array<[string, Product & { isCombo?: boolean; meta?: string }]>);

const CartContext = createContext<CartState | null>(null);

function readStorage(): Record<string, number> {
  try {
    const raw = localStorage.getItem(CART_CONFIG.storageKey);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as Record<string, number>;
    return Object.fromEntries(
      Object.entries(parsed).filter(
        ([id, qty]) => id in CATALOG && Number.isInteger(qty) && qty > 0,
      ),
    );
  } catch {
    return {};
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [isOpen, setOpen] = useState(false);
  const [counts, setCounts] = useState<Record<string, number>>(() => readStorage());
  const [lastAdded, setLastAdded] = useState<CartState["lastAdded"]>(null);

  useEffect(() => {
    try {
      localStorage.setItem(CART_CONFIG.storageKey, JSON.stringify(counts));
    } catch {
      /* storage unavailable — cart simply won't persist */
    }
  }, [counts]);

  const setCount = useCallback((id: string, qty: number) => {
    setCounts((c) => {
      const next = { ...c };
      if (qty <= 0) delete next[id];
      else next[id] = Math.min(qty, 20);
      return next;
    });
  }, []);

  const add = useCallback((id: string) => {
    const product = CATALOG[id];
    if (!product) return;
    setCounts((c) => ({ ...c, [id]: Math.min((c[id] ?? 0) + 1, 20) }));
    setLastAdded({ id, name: product.name, at: Date.now() });
  }, []);

  const dec = useCallback((id: string) => {
    setCounts((c) => {
      const next = { ...c };
      const q = (next[id] ?? 0) - 1;
      if (q <= 0) delete next[id];
      else next[id] = q;
      return next;
    });
  }, []);

  const remove = useCallback((id: string) => {
    setCounts((c) => {
      const next = { ...c };
      delete next[id];
      return next;
    });
  }, []);

  const clear = useCallback(() => setCounts({}), []);
  const openCart = useCallback(() => setOpen(true), []);
  const closeCart = useCallback(() => setOpen(false), []);

  const value = useMemo<CartState>(() => {
    const lines: CartLine[] = Object.entries(counts)
      .map(([id, qty]): CartLine | null => {
        const p = CATALOG[id];
        if (!p) return null;
        return {
          id,
          name: p.name,
          price: p.price,
          image: p.image,
          qty,
          isCombo: Boolean(p.isCombo),
          meta: p.meta,
        };
      })
      .filter((l): l is CartLine => l !== null);
    lines.sort((a, b) => (a.isCombo === b.isCombo ? a.name.localeCompare(b.name) : a.isCombo ? 1 : -1));

    const subtotal = lines.reduce((sum, l) => sum + l.price * l.qty, 0);
    const deliveryFee =
      subtotal === 0 || subtotal >= CART_CONFIG.freeDeliveryAbove ? 0 : CART_CONFIG.deliveryFee;

    return {
      lines,
      count: lines.reduce((sum, l) => sum + l.qty, 0),
      subtotal,
      deliveryFee,
      total: subtotal + deliveryFee,
      isOpen,
      countOf: (id: string) => counts[id] ?? 0,
      setCount,
      add,
      dec,
      remove,
      clear,
      openCart,
      closeCart,
      lastAdded,
    };
  }, [counts, isOpen, setCount, add, dec, remove, clear, openCart, closeCart, lastAdded]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartState {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
}
