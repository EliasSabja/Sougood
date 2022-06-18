import React, { createContext, useState, useEffect } from 'react';
import ICartItem from '../types/cart';

interface ICartItemsContext {
  cartItems: ICartItem[],
  getTotalItems: (items: ICartItem[]) => number,
  addToCart: (newItem: ICartItem) => void,
  removeFromCart: (id: string) => void,
}

export const CartItemsContext = createContext<ICartItemsContext>();

export const CartProvider: React.FC = ({ children }) => {
  const [cartItems, setCartItems] = useState<ICartItem[]>([]);

  useEffect(() => {
    if (localStorage.getItem('cartItems')) setCartItems(JSON.parse(localStorage.getItem('cartItems')!));
  }, []);

  useEffect(() => {
    if (cartItems.length > 0) localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const getTotalItems = (items: ICartItem[]) => items.reduce((acc: number, item) => acc + item.amount, 0);

  const addToCart = (newItem: ICartItem) => {
    setCartItems(prev => {
      const isItemInCart = prev.find(item => item.id === newItem.id);
      
      if (isItemInCart) {
        return prev.map(item => item.id === newItem.id ? { ...item, amount: item.amount + 1 } : item)
      }
      
      return [...prev, { ...newItem, amount: 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    if (cartItems.length == 1) localStorage.setItem('cartItems', []);
    setCartItems((prev) => {
      return prev.reduce((acc, item) => {
        if (item.id === id) {
          if (item.amount === 1) return acc;
          return [...acc, { ...item, amount: item.amount - 1 }];
        }

        return [...acc, item];

      }, [])
    });
  };

  return (
    <CartItemsContext.Provider value={{ cartItems, getTotalItems, addToCart, removeFromCart }}>
      {children}
    </CartItemsContext.Provider>
  );
};

