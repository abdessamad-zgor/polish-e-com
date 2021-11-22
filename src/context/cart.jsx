import React from "react";
import { createContext, useContext, useReducer } from "react";
import { cartInit } from "./states";
import cartReducer from "./reducers/cartReducer";

const CartContext = createContext();

function useCart() {
  const context = useContext(CartContext);
  return context;
}

function CartContextProvider({ children }) {
  const [cartState, cartDispatch] = useReducer(cartReducer, cartInit);
  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;

export { useCart };
