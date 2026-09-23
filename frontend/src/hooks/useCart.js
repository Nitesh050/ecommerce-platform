import { useState, useEffect } from 'react';

const API_BASE = 'http://localhost:3001';

export const useCart = (token) => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => setIsCartOpen((open) => !open);
  const closeCart = () => setIsCartOpen(false);

  const fetchCart = async (authToken) => {
    const response = await fetch(`${API_BASE}/cart`, {
      headers: { Authorization: `Bearer ${authToken}` }
    });
    if (response.ok) {
      setCart(await response.json());
    }
  };

  // Covers the page-refresh case: already logged in, load the saved cart.
  useEffect(() => {
    if (token) {
      fetchCart(token);
    }
  }, [token]);

  const addToCart = async (product) => {
    if (!token) {
      setCart((items) => {
        const existing = items.find((item) => item.id === product.id);
        if (existing) {
          return items.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          );
        }
        return [...items, { ...product, quantity: 1 }];
      });
      return;
    }

    const response = await fetch(`${API_BASE}/cart`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ productId: product.id, quantity: 1 })
    });
    if (response.ok) {
      setCart(await response.json());
    }
  };

  const removeFromCart = async (id) => {
    if (!token) {
      setCart((items) => items.filter((item) => item.id !== id));
      return;
    }

    const response = await fetch(`${API_BASE}/cart/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` }
    });
    if (response.ok) {
      setCart(await response.json());
    }
  };

  // Called once, right at login: pushes whatever was added as a guest up to
  // the account's saved cart, then reloads the authoritative server copy.
  const mergeGuestCart = async (authToken) => {
    for (const item of cart) {
      await fetch(`${API_BASE}/cart`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`
        },
        body: JSON.stringify({ productId: item.id, quantity: item.quantity })
      });
    }
    await fetchCart(authToken);
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
    mergeGuestCart,
    getTotalPrice,
    getTotalItems
  };
};
