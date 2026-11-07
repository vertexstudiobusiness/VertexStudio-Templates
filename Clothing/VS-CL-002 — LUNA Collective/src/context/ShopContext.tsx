import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem, Coupon, CategoryId, CheckoutForm } from '../types';
import { PRODUCTS } from '../data/products';
import { COUPONS } from '../data/coupons';

interface OrderConfirmation {
  orderId: string;
  items: CartItem[];
  subtotal: number;
  discount: number;
  shipping: number;
  total: number;
  customer: CheckoutForm;
  placedAt: string;
}

interface ShopContextType {
  products: Product[];
  cart: CartItem[];
  wishlist: string[];
  activeCategory: CategoryId;
  activeView: 'home' | 'catalog' | 'festive' | 'lookbook';
  searchQuery: string;
  selectedProduct: Product | null;
  lightboxImage: string | null;
  isCartOpen: boolean;
  isWishlistOpen: boolean;
  isSearchOpen: boolean;
  isMobileMenuOpen: boolean;
  isSizeGuideOpen: boolean;
  isCheckoutOpen: boolean;
  appliedCoupon: Coupon | null;
  couponError: string | null;
  lastOrder: OrderConfirmation | null;
  
  // Actions
  setActiveView: (view: 'home' | 'catalog' | 'festive' | 'lookbook') => void;
  setActiveCategory: (cat: CategoryId) => void;
  setSearchQuery: (query: string) => void;
  addToCart: (product: Product, size: string, color: string, quantity?: number) => void;
  removeFromCart: (cartItemId: string) => void;
  updateCartQuantity: (cartItemId: string, newQuantity: number) => void;
  clearCart: () => void;
  toggleWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  applyCoupon: (code: string) => boolean;
  removeCoupon: () => void;
  openProductDetail: (product: Product) => void;
  closeProductDetail: () => void;
  openLightbox: (image: string) => void;
  closeLightbox: () => void;
  setIsCartOpen: (open: boolean) => void;
  setIsWishlistOpen: (open: boolean) => void;
  setIsSearchOpen: (open: boolean) => void;
  setIsMobileMenuOpen: (open: boolean) => void;
  setIsSizeGuideOpen: (open: boolean) => void;
  setIsCheckoutOpen: (open: boolean) => void;
  completeOrder: (checkoutData: CheckoutForm) => string;
  cartCount: number;
  cartSubtotal: number;
  cartDiscount: number;
  cartShipping: number;
  cartTotal: number;
  freeShippingThreshold: number;
  formatPrice: (amount: number) => string;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export const FREE_SHIPPING_THRESHOLD = 3999;

export const ShopProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products] = useState<Product[]>(PRODUCTS);
  const [activeCategory, setActiveCategory] = useState<CategoryId>('all');
  const [activeView, setActiveView] = useState<'home' | 'catalog' | 'festive' | 'lookbook'>('home');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Modals & Panels
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  
  // Checkout & Coupons
  const [appliedCoupon, setAppliedCoupon] = useState<Coupon | null>(null);
  const [couponError, setCouponError] = useState<string | null>(null);
  const [lastOrder, setLastOrder] = useState<OrderConfirmation | null>(null);

  // Cart LocalStorage
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('luna_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Wishlist LocalStorage
  const [wishlist, setWishlist] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('luna_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('luna_cart', JSON.stringify(cart));
    } catch (e) {
      console.warn('Unable to save cart to localStorage', e);
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('luna_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.warn('Unable to save wishlist to localStorage', e);
    }
  }, [wishlist]);

  // Cart Calculations
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartSubtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  let cartDiscount = 0;
  if (appliedCoupon) {
    if (appliedCoupon.discountType === 'percentage') {
      cartDiscount = Math.round((cartSubtotal * appliedCoupon.discountValue) / 100);
    } else {
      cartDiscount = appliedCoupon.discountValue;
    }
  }

  const cartShipping = cartSubtotal >= FREE_SHIPPING_THRESHOLD || cartSubtotal === 0 ? 0 : 250;
  const cartTotal = Math.max(0, cartSubtotal - cartDiscount + cartShipping);

  const formatPrice = (amount: number): string => {
    return '₹' + amount.toLocaleString('en-IN');
  };

  const addToCart = (product: Product, size: string, color: string, quantity = 1) => {
    setCart((prevCart) => {
      const cartItemId = `${product.id}-${size}-${color}`;
      const existing = prevCart.find((item) => item.id === cartItemId);
      if (existing) {
        return prevCart.map((item) =>
          item.id === cartItemId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        const newItem: CartItem = {
          id: cartItemId,
          productId: product.id,
          name: product.name,
          price: product.price,
          originalPrice: product.originalPrice,
          size,
          color,
          image: product.images[0] || '',
          quantity,
          category: product.category
        };
        return [...prevCart, newItem];
      }
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (cartItemId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== cartItemId));
  };

  const updateCartQuantity = (cartItemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(cartItemId);
    } else {
      setCart((prev) =>
        prev.map((item) =>
          item.id === cartItemId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const clearCart = () => {
    setCart([]);
    setAppliedCoupon(null);
  };

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const isInWishlist = (productId: string) => {
    return wishlist.includes(productId);
  };

  const applyCoupon = (code: string): boolean => {
    setCouponError(null);
    const cleanCode = code.trim().toUpperCase();
    const found = COUPONS.find((c) => c.code === cleanCode);

    if (!found) {
      setCouponError('Invalid coupon code. Try LUNA10 or FESTIVE500');
      return false;
    }

    if (found.minOrderValue && cartSubtotal < found.minOrderValue) {
      setCouponError(`Add items worth ₹${(found.minOrderValue - cartSubtotal).toLocaleString('en-IN')} more to use ${found.code}`);
      return false;
    }

    setAppliedCoupon(found);
    return true;
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    setCouponError(null);
  };

  const openProductDetail = (product: Product) => {
    setSelectedProduct(product);
  };

  const closeProductDetail = () => {
    setSelectedProduct(null);
  };

  const openLightbox = (image: string) => {
    setLightboxImage(image);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const completeOrder = (checkoutData: CheckoutForm): string => {
    const randomNum = Math.floor(10000 + Math.random() * 90000);
    const orderId = `LN-${randomNum}`;
    
    const newOrder: OrderConfirmation = {
      orderId,
      items: [...cart],
      subtotal: cartSubtotal,
      discount: cartDiscount,
      shipping: cartShipping,
      total: cartTotal,
      customer: checkoutData,
      placedAt: new Date().toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    setLastOrder(newOrder);
    clearCart();
    return orderId;
  };

  return (
    <ShopContext.Provider
      value={{
        products,
        cart,
        wishlist,
        activeCategory,
        activeView,
        searchQuery,
        selectedProduct,
        lightboxImage,
        isCartOpen,
        isWishlistOpen,
        isSearchOpen,
        isMobileMenuOpen,
        isSizeGuideOpen,
        isCheckoutOpen,
        appliedCoupon,
        couponError,
        lastOrder,
        setActiveView,
        setActiveCategory,
        setSearchQuery,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        toggleWishlist,
        isInWishlist,
        applyCoupon,
        removeCoupon,
        openProductDetail,
        closeProductDetail,
        openLightbox,
        closeLightbox,
        setIsCartOpen,
        setIsWishlistOpen,
        setIsSearchOpen,
        setIsMobileMenuOpen,
        setIsSizeGuideOpen,
        setIsCheckoutOpen,
        completeOrder,
        cartCount,
        cartSubtotal,
        cartDiscount,
        cartShipping,
        cartTotal,
        freeShippingThreshold: FREE_SHIPPING_THRESHOLD,
        formatPrice
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
