import React, {  useContext } from "react";
import * as Styling from "./NavStyles";
import { GiShoppingCart } from "react-icons/gi";
import { CartContext } from "../../store/context";

export const CartMobileIcon = ({ onShowCart }) => {
  const { items } = useContext(CartContext);

  const numberOfCartItems = items.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);

  return (
    <Styling.Basket className="mobile-checkout" onClick={onShowCart}>
      <GiShoppingCart />
      <span>{numberOfCartItems}</span>
    </Styling.Basket>
  );
};

const CartIcon = ({ onShowCart }) => {
  const { items } = useContext(CartContext);

  const numberOfCartItems = items.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);

  return (
    <Styling.Basket onClick={onShowCart}>
      <GiShoppingCart />
      <span>{numberOfCartItems}</span>
    </Styling.Basket>
  );
};

export default CartIcon;
