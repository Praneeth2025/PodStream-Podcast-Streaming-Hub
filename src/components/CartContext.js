
import React, { createContext, useState, useContext } from 'react';


const CartContext = createContext();

// Create a provider component
export const CartProvider = ({ children }) => {
  const [total, setTotal] = useState(0);
  const [list, setList] = useState([]);

  const addItem = (newItem, amount) => {
    setTotal((prevTotal) => prevTotal + amount);
    setList((prevList) => [...prevList, newItem]);
  };

  return (
    <CartContext.Provider value={{ total, list, addItem }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the CartContext
export const useCart = () => useContext(CartContext);
