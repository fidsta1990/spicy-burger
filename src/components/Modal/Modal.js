import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { BackdropStyle, ModalStyle } from "./ModalStyle";

const BackDrop = ({ onClose }) => {
  return <BackdropStyle onClick={onClose} />;
};

const ModalOverlay = ({ children }) => {
  return (
    <ModalStyle>
      <div className="content">{children}</div>
    </ModalStyle>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = ({ children , onClose}) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<BackDrop onClose={onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
