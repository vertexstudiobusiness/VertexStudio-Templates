import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Product, CartItem, CategoryType, OrderRecord, ProductColor } from '../types';
import { PRODUCTS } from '../data/products';

interface ToastItem {
  id: string;
  title: string;
  subtitle?: string;
  type?: 'cart' | 'wishlist' | 'info';
}

interface ShopContextType {
  products: Product[];
  filteredProducts: Product[];
  cart: CartItem[];
  wishlist: string[];
  activeCategory: CategoryType;
  setActiveCategory: (cat: CategoryType) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  sortBy: 'featured' | 'price-low' | 'price-high' | 'newest';
  setSortBy: (sort: 'featured' | 'price-low' | 'price-high' | 'newest') => void;
  selectedGender: 'All' | 'Women' | 'Men';
  setSelectedGender: (gender: 'All' | 'Women' | 'Men') => void;
  selectedProduct: Product | null;
  setSelectedProduct: (product: Product | null) => void;
  
  // Cart Actions
  addToCart: (product: Product, size: string, color: ProductColor, quantity?: number) => void;
  removeFromCart: (productId: string, size: string, colorHex: string) => void;
  updateCartQuantity: (productId: string, size: string, colorHex: string, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartSubtotal: number;
  shippingFee: number;
  discountAmount: number;
  cartTotal: number;
  promoCode: string;
  promoDiscountRate: number;
  applyPromoCode: (code: string) => { success: boolean; message: string };
  removePromoCode: () => void;

  // Wishlist Actions
  toggleWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;

  // Modals & Drawers
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isWishlistOpen: boolean;
  setIsWishlistOpen: (open: boolean) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (open: boolean) => void;
  isSizeGuideOpen: boolean;
  setIsSizeGuideOpen: (open: boolean) => void;
  isOrderSuccessOpen: boolean;
  setIsOrderSuccessOpen: (open: boolean) => void;
  lastOrder: OrderRecord | null;
  setLastOrder: (order: OrderRecord | null) => void;

  // Toast
  toast: ToastItem | null;
  showToast: (title: string, subtitle?: string, type?: 'cart' | 'wishlist' | 'info') => void;

  // WhatsApp Concierge
  sendWhatsAppOrder: (product?: Product, size?: string, colorName?: string) => void;
  sendWhatsAppCartCheckout: () => void;

  // Reset Filters
  resetFilters: () => void;
}

const FREE_SHIPPING_THRESHOLD = 10000;
const STANDARD_SHIPPING_FEE = 750;

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export const ShopProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products] = useState<Product[]>(PRODUCTS);
  const [activeCategory, setActiveCategory] = useState<CategoryType>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'newest'>('featured');
  const [selectedGender, setSelectedGender] = useState<'All' | 'Women' | 'Men'>('All');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // LocalStorage Cart
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('elan_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // LocalStorage Wishlist
  const [wishlist, setWishlist] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('elan_wishlist');
      return saved ? JSON.parse(saved) : ['elan-01', 'elan-07'];
    } catch {
      return ['elan-01', 'elan-07'];
    }
  });

  // Drawers & Modals
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [isOrderSuccessOpen, setIsOrderSuccessOpen] = useState(false);
  const [lastOrder, setLastOrder] = useState<OrderRecord | null>(null);

  // Promo Code State
  const [promoCode, setPromoCode] = useState('');
  const [promoDiscountRate, setPromoDiscountRate] = useState(0);

  // Toast
  const [toast, setToast] = useState<ToastItem | null>(null);

  const showToast = (title: string, subtitle?: string, type: 'cart' | 'wishlist' | 'info' = 'info') => {
    const id = Date.now().toString();
    setToast({ id, title, subtitle, type });
    setTimeout(() => {
      setToast((current) => (current?.id === id ? null : current));
    }, 3800);
  };

  // Sync with LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem('elan_cart', JSON.stringify(cart));
    } catch (e) {
      console.warn('Failed to save cart to localStorage', e);
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('elan_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.warn('Failed to save wishlist to localStorage', e);
    }
  }, [wishlist]);

  // Cart Management
  const addToCart = (product: Product, size: string, color: ProductColor, quantity = 1) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) =>
          item.product.id === product.id &&
          item.selectedSize === size &&
          item.selectedColor.hex === color.hex
      );

      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + quantity
        };
        return next;
      }

      return [...prev, { product, selectedSize: size, selectedColor: color, quantity }];
    });

    showToast(
      'Added to Atelier Bag',
      `${product.name} (${size} · ${color.name})`,
      'cart'
    );
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string, size: string, colorHex: string) => {
    setCart((prev) =>
      prev.filter(
        (item) =>
          !(
            item.product.id === productId &&
            item.selectedSize === size &&
            item.selectedColor.hex === colorHex
          )
      )
    );
  };

  const updateCartQuantity = (
    productId: string,
    size: string,
    colorHex: string,
    quantity: number
  ) => {
    if (quantity <= 0) {
      removeFromCart(productId, size, colorHex);
      return;
    }
    setCart((prev) =>
      prev.map((item) => {
        if (
          item.product.id === productId &&
          item.selectedSize === size &&
          item.selectedColor.hex === colorHex
        ) {
          return { ...item, quantity };
        }
        return item;
      })
    );
  };

  const clearCart = () => setCart([]);

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const cartSubtotal = cart.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  const discountAmount = Math.round(cartSubtotal * promoDiscountRate);
  const eligibleForFreeShipping = cartSubtotal >= FREE_SHIPPING_THRESHOLD || cartSubtotal === 0;
  const shippingFee = eligibleForFreeShipping ? 0 : STANDARD_SHIPPING_FEE;
  const cartTotal = Math.max(0, cartSubtotal - discountAmount + shippingFee);

  const applyPromoCode = (code: string) => {
    const formatted = code.trim().toUpperCase();
    if (formatted === 'ELAN10') {
      setPromoCode('ELAN10');
      setPromoDiscountRate(0.10);
      showToast('Privilege Code Applied', '10% atelier courtesy discount applied to your order.');
      return { success: true, message: '10% privilege discount applied' };
    }
    if (formatted === 'ROYAL15') {
      if (cartSubtotal >= 30000) {
        setPromoCode('ROYAL15');
        setPromoDiscountRate(0.15);
        showToast('VIP Salon Code Applied', '15% courtesy discount on royal tier orders.');
        return { success: true, message: '15% VIP discount applied' };
      } else {
        return { success: false, message: 'ROYAL15 requires a minimum cart value of ₹30,000' };
      }
    }
    return { success: false, message: 'Invalid or expired atelier invitation code' };
  };

  const removePromoCode = () => {
    setPromoCode('');
    setPromoDiscountRate(0);
  };

  // Wishlist
  const toggleWishlist = (productId: string) => {
    const product = products.find((p) => p.id === productId);
    if (wishlist.includes(productId)) {
      setWishlist((prev) => prev.filter((id) => id !== productId));
      showToast('Removed from Wishlist', product?.name || 'Item removed', 'wishlist');
    } else {
      setWishlist((prev) => [...prev, productId]);
      showToast('Saved to Atelier Wishlist', product?.name || 'Piece saved', 'wishlist');
    }
  };

  const isInWishlist = (productId: string) => wishlist.includes(productId);

  // WhatsApp Order
  const sendWhatsAppOrder = (product?: Product, size?: string, colorName?: string) => {
    const targetProduct = product || selectedProduct;
    if (!targetProduct) return;

    const phone = '919876543210';
    const message = encodeURIComponent(
      `Hello ÉLAN Studio Concierge,\n\nI am interested in acquiring the following atelier piece:\n\n• Product: ${targetProduct.name}\n• Price: ₹${targetProduct.price.toLocaleString('en-IN')}\n• Selected Size: ${size || targetProduct.sizes[0]}\n• Selected Color: ${colorName || targetProduct.colors[0]?.name}\n• Product Reference: ${targetProduct.id}\n\nPlease advise on styling guidance, private salon fitting, and expedited bespoke delivery.\n\nThank you.`
    );
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  const sendWhatsAppCartCheckout = () => {
    if (cart.length === 0) return;
    const phone = '919876543210';
    const itemsList = cart
      .map(
        (item, idx) =>
          `${idx + 1}. ${item.product.name} (Size: ${item.selectedSize}, Color: ${item.selectedColor.name}, Qty: ${item.quantity}) — ₹${(item.product.price * item.quantity).toLocaleString('en-IN')}`
      )
      .join('\n');

    const message = encodeURIComponent(
      `Hello ÉLAN Studio Concierge,\n\nI would like to place an order via WhatsApp for the following pieces:\n\n${itemsList}\n\n• Subtotal: ₹${cartSubtotal.toLocaleString('en-IN')}\n${discountAmount > 0 ? `• Courtesy Discount: -₹${discountAmount.toLocaleString('en-IN')}\n` : ''}• Shipping: ${shippingFee === 0 ? 'Complimentary White-Glove' : `₹${shippingFee}`}\n• Total Amount: ₹${cartTotal.toLocaleString('en-IN')}\n\nPlease confirm order creation and delivery address.\n\nThank you.`
    );
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  const resetFilters = () => {
    setActiveCategory('All');
    setSearchQuery('');
    setSortBy('featured');
    setSelectedGender('All');
  };

  // Filtered Products
  const filteredProducts = products.filter((p) => {
    // Category match
    if (activeCategory === 'Women' && p.gender !== 'Women' && p.gender !== 'Unisex') return false;
    if (activeCategory === 'Men' && p.gender !== 'Men' && p.gender !== 'Unisex') return false;
    if (
      activeCategory !== 'All' &&
      activeCategory !== 'Women' &&
      activeCategory !== 'Men' &&
      p.category !== activeCategory
    ) {
      return false;
    }

    // Gender subfilter
    if (selectedGender !== 'All') {
      if (p.gender !== selectedGender && p.gender !== 'Unisex') return false;
    }

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      const matchName = p.name.toLowerCase().includes(q);
      const matchSub = p.subtitle.toLowerCase().includes(q);
      const matchDesc = p.description.toLowerCase().includes(q);
      const matchCategory = p.category.toLowerCase().includes(q);
      const matchFabric = p.fabricDetails.composition.toLowerCase().includes(q);
      if (!matchName && !matchSub && !matchDesc && !matchCategory && !matchFabric) return false;
    }

    return true;
  }).sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'newest') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
    // 'featured'
    return (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0);
  });

  return (
    <ShopContext.Provider
      value={{
        products,
        filteredProducts,
        cart,
        wishlist,
        activeCategory,
        setActiveCategory,
        searchQuery,
        setSearchQuery,
        sortBy,
        setSortBy,
        selectedGender,
        setSelectedGender,
        selectedProduct,
        setSelectedProduct,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        cartCount,
        cartSubtotal,
        shippingFee,
        discountAmount,
        cartTotal,
        promoCode,
        promoDiscountRate,
        applyPromoCode,
        removePromoCode,
        toggleWishlist,
        isInWishlist,
        isCartOpen,
        setIsCartOpen,
        isWishlistOpen,
        setIsWishlistOpen,
        isSearchOpen,
        setIsSearchOpen,
        isMobileMenuOpen,
        setIsMobileMenuOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        isSizeGuideOpen,
        setIsSizeGuideOpen,
        isOrderSuccessOpen,
        setIsOrderSuccessOpen,
        lastOrder,
        setLastOrder,
        toast,
        showToast,
        sendWhatsAppOrder,
        sendWhatsAppCartCheckout,
        resetFilters
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
