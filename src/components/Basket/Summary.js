import React, { useContext, useEffect } from "react";
import Title from "../UI/Title";
import {
  Wrapper,
  Container,
  Cost,
  Total,
  SumDetails,
  SummaryContainer,
} from "./SummaryStyle";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { CartContext } from "../../store/context";
import Button from "../UI/Button";

const Summary = ({ onClose }) => {
  const { totalAmount, items } = useContext(CartContext);
  const beforeConvertedValue = totalAmount.toFixed(2);
  const convertedValue = totalAmount + 2.5;
  const totalValue = convertedValue.toFixed(2);
  const allProductsLength = items.length;

  const hasError = items.length > 0;

  useEffect(() => {
    AOS.init({ duration: 500, once: true, delay: 200 });
  }, []);

  return (
    <Wrapper>
      <Title>Overview</Title>
      <Container data-aos="zoom-in" data-aos-delay="1000">
        <SummaryContainer>
          <h5>order summary</h5>
        </SummaryContainer>
        <SumDetails>
          <Cost>
            <p>{allProductsLength} products</p>
            <p>{beforeConvertedValue}</p>
          </Cost>
          <Cost>
            <p>Shipping</p>
            <p>£2.50</p>
          </Cost>
        </SumDetails>
        <Total>
          <p>Total</p>
          <p>£{!hasError ? beforeConvertedValue : totalValue}</p>
        </Total>
        {hasError ? (
          <Link to="/menu" className="checkout">
            CHECKOUT
          </Link>
        ) : (
          <Button onClick={onClose}>Close</Button>
        )}
      </Container>
    </Wrapper>
  );
};

export default Summary;
