import React, { useContext } from "react";
import { Wrapper, Container, MainContainer } from "./OrderStyle";
import Title from "../UI/Title";
import Summary from "./Summary";
import Modal from "../Modal/Modal";
import { CartContext } from "../../store/context";
import SingleItemOrder from "./SingleItemOrder";

const Orders = ({ onClose }) => {
  const { items, addItem, deleteItem } = useContext(CartContext);

  const cartItemAddHandler = (item) => {
    addItem(item);
  };

  const cartItemRemoveHandler = (id) => {
    deleteItem(id);
  };

  const cartItems = items.map((item) => {
    return (
      <SingleItemOrder
        key={item.id}
        {...item}
        onRemove={cartItemRemoveHandler.bind(null, item.id)}
        onAdd={cartItemAddHandler.bind(null, item)}
      />
    );
  });

  return (
    <Modal onClose={onClose}>
      <Wrapper>
        <MainContainer>
          <Container>
            <Title>Your Basket</Title>
            <div className="scrolled">{cartItems}</div>
          </Container>
          <Summary onClose={onClose} />
        </MainContainer>
      </Wrapper>
    </Modal>
  );
};

export default Orders;
