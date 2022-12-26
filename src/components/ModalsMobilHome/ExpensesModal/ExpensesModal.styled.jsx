import styled from "styled-components";
import { ReactComponent as Backspace } from "../../../assets/images/svg/backspase.svg";

export const ContainerModal = styled.div`
  position: relative;
  padding: 16px 20px;
  z-index: 10;
`;

export const BackspaceButton = styled(Backspace)`
  margin-bottom: 16px;
  cursor: pointer;
`;
