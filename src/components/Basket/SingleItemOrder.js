import React, { Fragment, useEffect } from "react";
import { Item, Image, Btn, Table } from "./OrderStyle";
import { ImBin } from "react-icons/im";
import AOS from "aos";
import "aos/dist/aos.css";
import { offerDetails } from "../Offers/offerDetails";

const SingleItemOrder = ({ price, name, amount, onAdd, onRemove }) => {
  const fixedPrice = price.toFixed(2);
  let newImage;

  const filterImage = offerDetails.find((item) => {
    if (item.name === name) {
      newImage = item.img;
    }
    return newImage;
  });

  useEffect(() => {
    AOS.init({ duration: 500, once: true, delay: 200 });
  }, []);

  return (
    <Fragment>
      <Table data-aos="zoom-in" data-aos-delay="1000">
        <h5>Item</h5>
        <h5>Description</h5>
        <h5>Quantity</h5>
        <h5>Price</h5>
        <h5>Delete</h5>
      </Table>
      <Item data-aos="zoom-in" data-aos-delay="1000">
        <Image src={filterImage.img} alt="burger" />
        <p className="name">{name}</p>
        <div>
          <Btn onClick={onRemove}>-</Btn>
          <span className="qty">{amount}</span>

          <Btn onClick={onAdd}>+</Btn>
        </div>
        <p>£{fixedPrice}</p>
        <Btn>
          <ImBin />
        </Btn>
      </Item>
    </Fragment>
  );
};

export default SingleItemOrder;
