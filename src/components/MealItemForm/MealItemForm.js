import React, { useRef } from "react";
import { FormGroup, MenuBtn } from "./MealItemFormStyle";
import Input from "../UI/Input";

const MealItemForm = (props) => {
  const amountInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    console.log(enteredAmount);

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      return;
    }

    props.addToCart(enteredAmountNumber);
  };

  return (
    <FormGroup onSubmit={submitHandler}>
      <Input
        label="Qty"
        ref={amountInputRef}
        input={{
          id: props.id,
          type: "number",
          step: "1",
          min: "1",
          max: "5",
          defaultValue: "1",
        }}
      />
      <MenuBtn>Order</MenuBtn>
    </FormGroup>
  );
};

export default MealItemForm;
