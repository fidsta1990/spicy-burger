import React from "react";
import { CardItem, Image, Title, Link, BtnWrap } from "./CardStyle";

const Card = ({ name, price, img }) => {
  return (
    <CardItem>
      <Title>{name}</Title>
      <Image src={img} alt={name} />
      <p>£ {price}</p>
      <BtnWrap>
        <Link to="/menu">More Info</Link>
      </BtnWrap>
    </CardItem>
  );
};

export default Card;
