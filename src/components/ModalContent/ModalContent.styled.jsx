import styled from "styled-components";
import { colors } from "../../utils/colors";
import { StyledButton } from "../Button/Button.styled";

export const ModalBtn = styled(StyledButton)`
  width: 125px;

  background: ${(p) => (p.color ? "#ff751d" : "#ffffff")};
  border: 2px solid ${colors.grayBg};
  box-shadow: none;
  filter: none;
`;
