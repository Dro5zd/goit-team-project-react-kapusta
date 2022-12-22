import { Backdrop, Content } from "./Modal.styled";
import { createPortal } from "react-dom";
import React, {MouseEvent, useEffect} from 'react';
const modalRoot = document.querySelector("#modal-root");

interface IModal {
  onClose: () => void,
  children: JSX.Element,
}

export const Modal = ({ onClose, children }: IModal) => {
  useEffect(() => {
    const handleKeyDown = (e: any) => {
      if (e.code === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <Content>{children}</Content>
    </Backdrop>,
  // @ts-ignore
    modalRoot
  );
};
