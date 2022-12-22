
import React, { MouseEvent, useEffect } from "react";
import { ModalDiv, OverlayModal } from "./Modal.styled";

interface IModal {}

export function Modal({}: IModal) {
  const escHandler = (e: any) => {
    if (e.key === "Escape") {

    }
  };


  const closeModalOnBackdrop = (e: MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) {
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", escHandler);
    return () => {
      document.removeEventListener("keydown", escHandler);
    };
  }, []);
  return (
    <OverlayModal onClick={closeModalOnBackdrop}>
      <ModalDiv></ModalDiv>

    </OverlayModal>
  );
}
