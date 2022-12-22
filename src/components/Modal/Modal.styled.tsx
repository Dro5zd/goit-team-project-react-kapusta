import styled from "styled-components";
import { colors } from "../../utils/colors";

export const OverlayModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;

  &:hover {
    cursor: zoom-out;
  }
`;

export const ModalDiv = styled.div`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.03);
    cursor: default;
  }
`;

// ___________________________________

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1200;
`;
export const Content = styled.div`
  min-width: 450px;
  padding: 60px;
  background-color: rgba(250, 248, 248, 0.99);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  margin: 0;
  color: ${colors.black};
  /* max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px); */
`;
