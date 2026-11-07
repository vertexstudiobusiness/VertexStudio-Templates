import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem, PageView, OrderDetails, PromoCode } from '../types';
import { PRODUCTS, PROMO_CODES } from '../data/products';

interface ToastMessage {
  id: string;
  title: string;
  message?: string;
  type?: 'success' | 'info' | 'error';
}

interface ShopContextType {
  products: Product[];
  currentProduct: Product;
  activePage: PageView;
  selectedCategory: string;
  searchQuery: string;
  sortBy: string;
  filterFit: string;
  priceRange: [number, number];
  cart: CartItem[];
  cartCount: number;
  cartSubtotal: number;
  discountAmount: number;
  shippingFee: number;
  cartTotal: number;
  appliedPromo: PromoCode | null;
  promoError: string | null;
  wishlistIds: string[];
  wishlistCount: number;
  isCartOpen: boolean;
  isWishlistOpen: boolean;
  isMobileMenuOpen: boolean;
  quickViewProduct: Product | null;
  isSizeGuideOpen: boolean;
  lastOrder: OrderDetails | null;
  toasts: ToastMessage[];
  // Actions
  navigateTo: (page: PageView, productId?: string, category?: string) => void;
  setSelectedCategory: (cat: string) => void;
  setSearchQuery: (query: string) => void;
  setSortBy: (sort: string) => void;
  setFilterFit: (fit: string) => void;
  setPriceRange: (range: [number, number]) => void;
  addToCart: (product: Product, size: string, color: string, quantity?: number) => void;
  removeFromCart: (itemId: string) => void;
  updateCartQuantity: (itemId: string, delta: number) => void;
  clearCart: () => void;
  applyPromoCode: (code: string) => boolean;
  removePromoCode: () => void;
  toggleWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  setIsCartOpen: (open: boolean) => void;
  setIsWishlistOpen: (open: boolean) => void;
  setIsMobileMenuOpen: (open: boolean) => void;
  setQuickViewProduct: (product: Product | null) => void;
  setIsSizeGuideOpen: (open: boolean) => void;
  setLastOrder: (order: OrderDetails | null) => void;
  showToast: (title: string, message?: string, type?: 'success' | 'info' | 'error') => void;
  removeToast: (id: string) => void;
  openWhatsAppOrder: (product?: Product, size?: string) => void;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export const ShopProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products] = useState<Product[]>(PRODUCTS);
  const [activePage, setActivePage] = useState<PageView>('home');
  const [currentProductId, setCurrentProductId] = useState<string>('og-tee-01');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('featured');
  const [filterFit, setFilterFit] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([1000, 10000]);

  // Cart state
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('offgrid_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Promo code state
  const [appliedPromo, setAppliedPromo] = useState<PromoCode | null>(null);
  const [promoError, setPromoError] = useState<string | null>(null);

  // Wishlist state
  const [wishlistIds, setWishlistIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('offgrid_wishlist');
      return saved ? JSON.parse(saved) : ['og-tee-01', 'og-hoodie-01'];
    } catch {
      return ['og-tee-01', 'og-hoodie-01'];
    }
  });

  // Modals & Drawers
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [lastOrder, setLastOrder] = useState<OrderDetails | null>(null);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Local storage sync
  useEffect(() => {
    try {
      localStorage.setItem('offgrid_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('offgrid_wishlist', JSON.stringify(wishlistIds));
    } catch (e) {
      console.error(e);
    }
  }, [wishlistIds]);

  // Lock mobile body scroll when modals/drawers are open
  useEffect(() => {
    const isAnyModalOpen = isCartOpen || isWishlistOpen || isMobileMenuOpen || !!quickViewProduct || isSizeGuideOpen || !!lastOrder;
    if (isAnyModalOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [isCartOpen, isWishlistOpen, isMobileMenuOpen, quickViewProduct, isSizeGuideOpen, lastOrder]);

  // Current active product
  const currentProduct = products.find((p) => p.id === currentProductId) || products[0];

  // Navigation
  const navigateTo = (page: PageView, productId?: string, category?: string) => {
    if (productId) {
      setCurrentProductId(productId);
    }
    if (category) {
      setSelectedCategory(category);
    }
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  // Toast system
  const showToast = (title: string, message?: string, type: 'success' | 'info' | 'error' = 'success') => {
    const id = Date.now().toString() + Math.random().toString().slice(2, 5);
    setToasts((prev) => [...prev, { id, title, message, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 3500);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Cart operations
  const addToCart = (product: Product, size: string, color: string, quantity: number = 1) => {
    const itemId = `${product.id}-${size}-${color}`;
    setCart((prev) => {
      const existing = prev.find((item) => item.id === itemId);
      if (existing) {
        return prev.map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { id: itemId, product, selectedSize: size, selectedColor: color, quantity }];
    });

    showToast(`ADDED TO BAG // ${product.name}`, `Size: ${size} • Color: ${color}`);
    setIsCartOpen(true);
  };

  const removeFromCart = (itemId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== itemId));
    showToast('REMOVED FROM BAG', undefined, 'info');
  };

  const updateCartQuantity = (itemId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === itemId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  // Calculation
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartSubtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  // Discount calculation
  let discountAmount = 0;
  if (appliedPromo) {
    if (appliedPromo.discountType === 'percentage') {
      discountAmount = Math.round((cartSubtotal * appliedPromo.discountValue) / 100);
    } else {
      discountAmount = Math.min(appliedPromo.discountValue, cartSubtotal);
    }
  }

  // Shipping: Free if subtotal >= 1999, else ₹150. If cart is empty, 0.
  const shippingFee = cart.length === 0 ? 0 : cartSubtotal >= 1999 ? 0 : 150;
  const cartTotal = Math.max(0, cartSubtotal - discountAmount + shippingFee);

  // Apply promo
  const applyPromoCode = (inputCode: string): boolean => {
    const cleanCode = inputCode.trim().toUpperCase();
    setPromoError(null);

    const found = PROMO_CODES[cleanCode];
    if (!found) {
      setPromoError('INVALID PROMO CODE. Try OFFGRID10, FIRSTDROP or STREETCREW');
      showToast('INVALID CODE', 'Code does not exist or expired', 'error');
      return false;
    }

    if (found.minOrder && cartSubtotal < found.minOrder) {
      setPromoError(`Requires minimum order of ₹${found.minOrder.toLocaleString('en-IN')}`);
      showToast('MINIMUM ORDER NOT MET', `Cart must be at least ₹${found.minOrder}`, 'error');
      return false;
    }

    setAppliedPromo({
      code: cleanCode,
      discountType: found.discountType,
      discountValue: found.discountValue,
      description: found.description,
      minOrder: found.minOrder
    });

    showToast(`PROMO ${cleanCode} APPLIED!`, found.description, 'success');
    return true;
  };

  const removePromoCode = () => {
    setAppliedPromo(null);
    setPromoError(null);
    showToast('PROMO CODE REMOVED', undefined, 'info');
  };

  // Wishlist operations
  const toggleWishlist = (productId: string) => {
    setWishlistIds((prev) => {
      const exists = prev.includes(productId);
      const updated = exists ? prev.filter((id) => id !== productId) : [...prev, productId];
      const prod = products.find((p) => p.id === productId);
      const name = prod ? prod.name : 'ITEM';
      showToast(exists ? `REMOVED FROM WISHLIST` : `SAVED TO WISHLIST`, name, exists ? 'info' : 'success');
      return updated;
    });
  };

  const isInWishlist = (productId: string) => wishlistIds.includes(productId);
  const wishlistCount = wishlistIds.length;

  // WhatsApp 1-click Order
  const openWhatsAppOrder = (product?: Product, size?: string) => {
    const targetProduct = product || currentProduct;
    const selectedSz = size || (targetProduct.sizes.length > 0 ? targetProduct.sizes[0] : 'Standard');
    const msg = encodeURIComponent(
      `Hello OFFGRID team! I would like to order:\n\n*Product:* ${targetProduct.name}\n*Price:* ₹${targetProduct.price.toLocaleString('en-IN')}\n*Size:* ${selectedSz}\n*SKU:* ${targetProduct.id}\n\nPlease share delivery confirmation & UPI payment details.`
    );
    window.open(`https://wa.me/919820063347?text=${msg}`, '_blank');
  };

  return (
    <ShopContext.Provider
      value={{
        products,
        currentProduct,
        activePage,
        selectedCategory,
        searchQuery,
        sortBy,
        filterFit,
        priceRange,
        cart,
        cartCount,
        cartSubtotal,
        discountAmount,
        shippingFee,
        cartTotal,
        appliedPromo,
        promoError,
        wishlistIds,
        wishlistCount,
        isCartOpen,
        isWishlistOpen,
        isMobileMenuOpen,
        quickViewProduct,
        isSizeGuideOpen,
        lastOrder,
        toasts,
        navigateTo,
        setSelectedCategory,
        setSearchQuery,
        setSortBy,
        setFilterFit,
        setPriceRange,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        applyPromoCode,
        removePromoCode,
        toggleWishlist,
        isInWishlist,
        setIsCartOpen,
        setIsWishlistOpen,
        setIsMobileMenuOpen,
        setQuickViewProduct,
        setIsSizeGuideOpen,
        setLastOrder,
        showToast,
        removeToast,
        openWhatsAppOrder,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
};
