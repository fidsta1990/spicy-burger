import React, { useContext } from "react";
import MealItemForm from "../components/MealItemForm/MealItemForm";
import { CartContext } from "../store/context";
import { Wrapper } from "./page-styles/MenuItemStyle";

const MenuItem = ({ id, name, price, desc }) => {
  const fixPrice = price.toFixed(2);

  const { addItem } = useContext(CartContext);

  const addToCartHandler = (amount) => {
    addItem({
      id: "amount" + id,
      name,
      amount,
      price,
    });
  };

  return (
    <Wrapper>
      <h4>{name}</h4>
      <p>£{fixPrice}</p>
      <p>{desc}</p>
      <div className="form-wrap">
        <MealItemForm addToCart={addToCartHandler} />
        
      </div>
    </Wrapper>
  );
};

export default MenuItem;
