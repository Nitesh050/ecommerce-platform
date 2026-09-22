import { useState } from 'react';

export const useCart = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => setIsCartOpen((open) => !open);
  const closeCart = () => setIsCartOpen(false);

  const addToCart = (product) => {
    setCart((items) => {
      const existing = items.find((item) => item.id === product.id);
      if (existing) {
        return items.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...items, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((items) => items.filter((item) => item.id !== id));
  };

  const getTotalPrice = () => cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const getTotalItems = () => cart.reduce((total, item) => total + item.quantity, 0);

  return {
    cart,
    isCartOpen,
    toggleCart,
    closeCart,
    addToCart,
    removeFromCart,
    getTotalPrice,
    getTotalItems
  };
};
