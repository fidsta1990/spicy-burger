import styled from "styled-components";
import { setColor, setFont } from "../globalstyles/helper";
import Button from "../../components/UI/Button";

export const FormGroup = styled.form`
  display: flex;
  align-items: center;
  margin: 0.5rem;
`;

export const InputField = styled.input`
  width: 3rem;
  border-radius: 5px;
  border: 1px solid ${setColor.danger};
  opacity: 0.6;
  ${setFont.main};
  padding: 0.4rem;
  margin: 0.5rem;
  margin-right: 1.6rem;

  &:focus {
    outline: none;
  }
`;

export const Label = styled.label`
  font-weight: 400;
  margin-left: 1rem;
`;

export const MenuBtn = styled(Button)`
  margin: 0;
  padding: 0.4rem 2rem;
  font-size: 1.6rem;
  height: 30px;
`;
