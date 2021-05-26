import React from "react";
import { Wrapper, Container } from "./page-styles/CheckoutStyle";

import { Link } from "react-router-dom";

import Orders from "../components/Basket/Orders";

import Button from "../components/UI/Button";

const CheckOut = () => {
  return (
    <Wrapper>
      <Link to="/menu" className="back">
        <Button>Go Back</Button>
      </Link>
      <Container>
        <Orders />
      </Container>
    </Wrapper>
  );
};

export default CheckOut;
