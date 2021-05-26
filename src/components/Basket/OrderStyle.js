import styled from "styled-components";
import {
  setColor,
  setFlex,
  sizes,
  transition,
} from "../../components/globalstyles//helper";

export const Wrapper = styled.section`
  width: 90%;
  margin: 0 auto;
  ${setFlex({ x: "center", y: "center", d: "column" })};

  h2 {
    text-align: center;
    margin-bottom: 4rem;
  }

  /* @media (max-width: ${sizes.m}) {
    overflow: auto;
    ${setFlex({ x: "center", y: "center", d: "column" })};
    max-height: 70vh;
  } */

  @media (max-width: ${sizes.s}) {
    padding: 2.4rem;
    justify-content: flex-start;
    min-height: 40vh;
  }
`;

export const MainContainer = styled.section`
  width: 100%;
  min-height: 50vh;
  max-width: 1400px;
  margin: 0 auto;
  ${setFlex({ x: "space-between", y: "flex-start", d: "row" })};
  flex-wrap: wrap;

  section:nth-of-type(1) {
    width: 100%;
    max-width: 600px;
  }

  @media (max-width: 1080px) {
    ${setFlex({ x: "center", y: "center", d: "column" })};
  }
`;

export const Container = styled.section`
  width: 100%;
  flex: 1;
  margin: 0 auto;

  .scrolled {
    overflow: auto;
    max-height: 70rem;
  }

  @media (max-width: ${sizes.s}) {
    ${setFlex({ x: "center", y: "center", d: "column" })};
  }
`;

export const Table = styled.article`
  ${setFlex({ x: "space-between", y: "center", d: "row" })};
  width: 100%;

  h5:nth-of-type(2) {
    padding-left: 5.6rem;
  }

  h5:nth-of-type(2),
  h5:nth-of-type(3),
  h5:nth-of-type(4) {
    margin-left: 1.6rem;
    padding: 0 1.6rem;
    padding-left: 3.2rem;
  }

  @media (max-width: ${sizes.m}) {
    display: none;
  }
`;

export const Item = styled.article`
  ${setFlex({ x: "space-between", y: "center", d: "row" })};
  width: 100%;
  border-bottom: 1px solid rgba(128, 128, 128, 0.316);
  margin: 1.6rem 0;
  padding: 1.6rem 0;

  .qty {
    font-size: 1.6rem;
  }
`;

export const Image = styled.img`
  max-width: 90px;

  @media (max-width: ${sizes.m}) {
    max-width: 50px;
  }
`;

export const Btn = styled.button`
  padding: 0.8rem;
  margin: 0.8rem;
  font-size: 1.6rem;
  border: 0;
  background: ${setColor.danger};
  color: ${setColor.mainWhite};
  cursor: pointer;
  border-radius: 0.4rem;
  ${transition};
  &:hover {
    background: ${setColor.mainDark};
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: ${sizes.m}) {
    padding: 0.4rem;
  }
`;
