import styled from "styled-components";
import { setColor, setFlex } from "../../components/globalstyles//helper";

export const Wrapper = styled.article`
  padding: 0.8rem;
  ${setFlex({ x: "center", y: "center", d: "column" })};

  h4 {
    color: ${setColor.danger};
  }

  p {
    text-align: center;
    opacity: 0.9;
  }

  .form-wrap {
    ${setFlex({ x: "center", y: "center", d: "row" })};
    width: 35%;
  }
`;

export const MenuBtnWrapper = styled.article`
  ${setFlex({ x: "space-evenly", y: "center", d: "row" })};
`;
