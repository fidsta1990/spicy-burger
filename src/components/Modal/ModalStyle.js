import styled, { keyframes } from "styled-components";
import { sizes } from "../globalstyles/helper";

const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-3rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const BackdropStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.75);
`;

export const ModalStyle = styled.div`
  position: fixed;
  top: 5%;
  left: 5%;
  width: 90%;
  min-height: 50vh;
  background-color: white;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
  animation: ${slideDown} 300ms ease-out forwards;

  .content {
    margin: 3.2rem 1.6rem;
  }

  @media (min-width: ${sizes.m}) {
    width: 90vw;
    margin: 0 auto;
  }
`;
