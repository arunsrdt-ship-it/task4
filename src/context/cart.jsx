import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isAdded, setIsAdded] = useState(false)

  const addToCart = (item) => {
    const isPresent = cartItems.find((cartItem) => cartItem.id === item.id);
    if (isPresent) {
      setCartItems(cartItems.map((cartItem) => (cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)));
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (item) => {
    const isPresent = cartItems.find((cartItem) => cartItem.id === item.id);
    if (isPresent.quantity === 1) {
      setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
    } else {
      setCartItems(cartItems.map((cartItem) => (cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem)));
    }
  };
  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const removeOne = (id) => {
    setCartItems((cartItems) => cartItems.filter((item) => item.id !== id))
  }
  

  return <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, getCartTotal, removeOne }}>{children}</CartContext.Provider>;
};
