import React, { Fragment, forwardRef } from "react";
import { InputField, Label } from "../MealItemForm/MealItemFormStyle";

const Input = forwardRef((props, ref) => {
  return (
    <Fragment>
      <Label>{props.label}</Label>
      <InputField {...props.input} ref={ref} />
    </Fragment>
  );
});

export default Input;
