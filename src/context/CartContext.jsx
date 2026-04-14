import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('mevlana_cart');
    return saved ? JSON.parse(saved) : [];
  });

  const [checkoutStep, setCheckoutStep] = useState(0); // 0: cart, 1: info, 2: success

  const openCart = () => { setIsCartOpen(true); setCheckoutStep(0); };
  const closeCart = () => setIsCartOpen(false);
  const toggleCart = () => {
    if (!isCartOpen) setCheckoutStep(0);
    setIsCartOpen(prev => !prev);
  };
  const goToCheckout = () => setCheckoutStep(1);
  const goToSuccess = () => setCheckoutStep(2);
  const resetCheckout = () => setCheckoutStep(0);

  useEffect(() => {
    localStorage.setItem('mevlana_cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.name === item.name);
      if (existing) {
        return prev.map((i) =>
          i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (name) => {
    setCart((prev) => prev.filter((i) => i.name !== name));
  };

  const updateQuantity = (name, quantity) => {
    if (quantity <= 0) {
      removeFromCart(name);
      return;
    }
    setCart((prev) =>
      prev.map((i) => (i.name === name ? { ...i, quantity } : i))
    );
  };

  const clearCart = () => setCart([]);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  
  const totalPrice = cart.reduce((acc, item) => {
    const priceNum = parseFloat(item.price.replace(',', '.').replace(' €', ''));
    return acc + priceNum * item.quantity;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
        isCartOpen,
        openCart,
        closeCart,
        toggleCart,
        checkoutStep,
        goToCheckout,
        goToSuccess,
        resetCheckout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
