import styled from "styled-components";
import { setFlex, sizes } from "../../components/globalstyles//helper";

export const Wrapper = styled.section`
  min-height: 100vh;
  padding: 8.4rem 4rem;
  ${setFlex({ x: "center", y: "space-around", d: "column" })};

  @media (max-width: ${sizes.s}) {
    margin: 0 auto;
    min-height: 100vh;
  }

  .back {
    display: flex;
    justify-self: flex-start;
    width: 100%;
    margin-bottom: 6.4rem;
  }
`;

export const Container = styled.section`
  width: 100%;
  min-height: 60vh;
  max-width: 1400px;
  margin: 0 auto;
  ${setFlex({ x: "space-between", y: "flex-start", d: "row" })};
  flex-wrap: wrap;

  @media (max-width: 1080px) {
    ${setFlex({ x: "center", y: "center", d: "column" })};
  }
`;
