import styled from "styled-components";
import {
  letterSpacing,
  setFlex,
  transition,
  setColor,
  shadows,
  sizes,
  setFont,
} from "../globalstyles//helper";


export const Nav = styled.nav`
  background: ${setColor.danger};
  ${shadows.dark};
  .links {
    height: 0;
    overflow: hidden;
    ${transition};
  }

  .show {
    height: 12rem;
  }

  @media (min-width: ${sizes.m}) {
    background: transparent;
    box-shadow: none;
    .links {
      height: auto;
    }
  }
`;

export const Center = styled.div`
  ${setFlex({ x: "center", y: "space-between", d: "column" })};

  @media (min-width: ${sizes.m}) {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1.6rem;
    ${setFlex({ x: "space-between", y: "center", d: "row" })};
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;

  @media (min-width: ${sizes.m}) {
    padding: 0;

    .mobile-checkout {
      display: none;
    }
  }
`;

export const Logo = styled.div`
  .chilli {
    color: ${setColor.mainDark};
    padding-top: 0.4rem;
  }

  a {
    font-size: 2.4rem;
    height: 40px;
    ${setFont.titled};
    color: ${setColor.mainWhite};
  }

  @media (min-width: ${sizes.m}) {
    a {
      color: ${setColor.mainDark};
      font-size: 3.2rem;
    }

    .chilli {
      color: ${setColor.danger};
    }
  }
`;

export const Bar = styled.button`
  font-size: 1.6rem;
  color: var(--primaryDark);
  background: transparent;
  border-color: transparent;
  transition: var(--transition);
  cursor: pointer;

  &:hover {
    color: #fff;
  }

  .menuIcon {
    font-size: 2.4rem;
  }

  @media (min-width: ${sizes.m}) {
    display: none;
  }
`;

export const Menu = styled.div`
  padding-top: 0.8rem;

  a {
    ${setFont.titled};
    color: ${setColor.mainDark};
    font-size: 2.4rem;
    text-transform: uppercase;
    ${letterSpacing}
    display: block;
    padding: 0.5rem 1rem;
    ${transition};
    cursor: pointer;

    &:hover {
      color: ${setColor.danger};
    }
  }

  @media (max-width: 799px) {
    padding-top: 0;
    ${setFlex({ x: "space-between", y: "center", d: "column" })};

    a {
      text-align: left;
      width: 100%;
      font-size: 1.6rem;
      padding-left: 4rem;

      &:hover {
        background: ${setColor.mainWhite};
        padding-left: 5.6rem;
      }
    }
  }
`;

export const OrderWrapper = styled.article`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 173px;
  background: ${setColor.mainDark};
  border-radius: 0.4rem;
  margin-right: 2.4rem;

  @media (max-width: ${sizes.m}) {
    display: none;
  }
`;

export const Order = styled.button`
  font-size: 2.4rem;
  background: ${setColor.danger};
  border:0;
  border-top-left-radius: 0.4rem;
  border-bottom-left-radius: 0.4rem;
  border-top-right-radius: 0rem;
  border-bottom-right-radius: 0rem;
  padding: 0.8rem 2.4rem;
  color: ${setColor.mainWhite};
  ${setFont.main};
  cursor: pointer;

  &:active {
    transform: scale(0.95);
  }
`;

export const Basket = styled.button`
  font-size: 2.3rem;
  background: ${setColor.mainDark};
  border:0;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 0.4rem;
  border-bottom-right-radius: 0.4rem;
  color: ${setColor.mainWhite};
  padding: 1.1rem 2.4rem;
  position: relative;
  margin: 0;
  cursor: pointer;

  span {
    top: 5px;
    right: 15px;
    border-radius: 50%;
    position: absolute;
    font-size: 0.8rem;
    width: 15px;
    height: 15px;
    display: grid;
    place-items: center;
    color: ${setColor.mainDark};
    background: ${setColor.mainWhite};
  }

  &:active {
    transform: scale(0.95);
  }
`;
