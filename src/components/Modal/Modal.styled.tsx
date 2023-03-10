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
  min-width: 380px;
  min-height: 194px;
  padding: 20px;
  background-color: ${colors.white};
  color: ${colors.black};

  box-shadow: 10px 10px 30px rgba(82, 85, 95, 0.4);
border-radius: 30px;
  /* max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px); */
`;

export const CloseBtn = styled.button`
position: absolute;
top: 0;
right: 0;
  padding: 2px;

  border: none;
  background-color: transparent;

  cursor: pointer;
`
export const Text = styled.p`
margin-bottom: 20px;
  font-weight: 500;
font-size: 14px;
line-height: 1.14;
letter-spacing: 0.02em;
text-align: center;
color: ${colors.grayTitle};
`