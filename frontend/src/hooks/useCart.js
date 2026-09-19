import { useState } from 'react';

export const useCart = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => setIsCartOpen((open) => !open);

  const addToCart = (product) => {
    setCart((items) => [...items, product]);
  };

  const removeFromCart = (index) => {
    setCart((items) => items.filter((_, i) => i !== index));
  };

  const getTotalPrice = () => cart.reduce((total, item) => total + item.price, 0);

  return {
    cart,
    isCartOpen,
    toggleCart,
    addToCart,
    removeFromCart,
    getTotalPrice
  };
};
