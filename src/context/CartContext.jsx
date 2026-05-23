import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    console.log('click')
    setCartItems((prev) => {
      // Check if item is already in cart
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        // If it exists, just increase quantity
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      // If it's new, add it with quantity: 1
      return [...prev, { ...product, quantity: 1 }];
    });
  };
  // Example function to update quantity
const updateQuantity = (productId, amount) => {
  setCartItems(prevItems => 
    prevItems.map(item => 
      item.id === productId 
        ? { ...item, quantity: Math.max(1, item.quantity + amount) } 
        : item
    )
  );
};
const removeFromCart = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };
  return (
    <CartContext.Provider value={{ cartItems, addToCart,removeFromCart,updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);