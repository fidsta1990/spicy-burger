import styled from "styled-components";
import {
  setFlex,
  setColor,
  sizes,
  letterSpacing,
  transition,
} from "../../components/globalstyles//helper";

export const Wrapper = styled.section`
  width: 100%;
  ${setFlex({ x: "center", y: "center", d: "column" })};
  flex: 1;

  h5 {
    text-align: left;
    ${letterSpacing(2)}
  }

  @media (max-width: ${sizes.s}) {
    max-width: 90vw;
    margin: 0 auto;

    h5 {
      text-align: center;
    }
  }
`;

export const Container = styled.section`
  width: 80%;
  min-height: 17vh;
  margin: 0 auto;
  ${setFlex({ x: "center", y: "center", d: "column" })};

  .checkout {
    width: 80%;
    background: ${setColor.danger};
    color: ${setColor.mainWhite};
    text-align: center;
    border-radius: 0.8rem;
    font-size: 2.4rem;
    padding: 1.6rem 2.4rem;
    ${transition};

    &:active {
      transform: scale(0.95);
    }

    &:hover {
      background: ${setColor.mainDark};
    }
  }

  @media (max-width: ${sizes.s}) {
    .checkout {
      width: 100%;
    }
  }
`;

export const SummaryContainer = styled.div`
  border-bottom: 1px solid rgba(128, 128, 128, 0.316);
  width: 80%;

  @media (max-width: ${sizes.s}) {
    width: 100%;
  }
`;

export const SumDetails = styled.div`
  width: 80%;
  padding: 2.4rem 0.8rem;
  border-bottom: 1px solid rgba(128, 128, 128, 0.316);

  @media (max-width: ${sizes.s}) {
    width: 100%;
  }
`;

export const Cost = styled.div`
  ${setFlex({ x: "space-between", y: "center", d: "row" })};
`;

export const Total = styled.div`
  ${setFlex({ x: "space-between", y: "center", d: "row" })};
  width: 80%;
  padding: 1.6rem 0.8rem;

  p {
    font-size: 2.4rem;
  }

  p:nth-of-type(2) {
    color: ${setColor.mainWhite};
    background: ${setColor.danger};
    border-radius: 0.8rem;
    padding: 0.8rem;
  }

  @media (max-width: ${sizes.s}) {
    width: 100%;
  }
`;
