import { Backdrop, Content } from "./Modal.styled";
import { createPortal } from "react-dom";
import { useEffect } from "react";

const modalRoot = document.querySelector("#modal-root");

export const Modal = ({ onClose, children }) => {
  useEffect(() => {
    document.querySelector("body").classList.add("no-scroll");

    return () => {
      document.querySelector("body").classList.remove("no-scroll");
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <Content>{children}</Content>
    </Backdrop>,
    modalRoot
  );
};
