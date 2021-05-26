import React, { useReducer } from "react";
import cartReducer from "./reducer";

export const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  deleteItem: (id) => {},
});

const initialState = {
  items: [],
  totalAmount: 0,
};

const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, initialState);

  const addItemToCartHandler = (item) => {
    dispatch({ type: "ADD_ITEM", item: item });
  };

  const removeItemToCartHandler = (id) => {
    dispatch({ type: "REMOVE_ITEM", id: id });
  };

  const cartCtx = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    deleteItem: removeItemToCartHandler,
  };

  return (
    <CartContext.Provider value={cartCtx}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
