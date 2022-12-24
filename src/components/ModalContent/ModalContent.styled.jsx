import styled from "styled-components";
import { colors } from "../../utils/colors";
import { StyledButton } from "../Button/Button.styled";

export const ModalBtn = styled(StyledButton)`
  width: 125px;

  color: ${colors.grayTitle};
  background: ${colors.white};
  border: 2px solid ${colors.grayBg};
  box-shadow: none;
  filter: none;

  :hover {
    color: ${colors.white};
    background: ${colors.orange};
    box-shadow: none;
    border: none;
  }
`;
