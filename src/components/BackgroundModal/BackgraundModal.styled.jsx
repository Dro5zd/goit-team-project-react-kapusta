import styled from "styled-components";
import { colors } from "../../utils/colors";

export const Content = styled.div`
  position: absolute;
  top: 56px;
  left: 0;
  background-color: ${colors.white};
  width: 100%;
  min-height: calc(100vh - 56px);
`;

export const BoxModal = styled.div`
  position: relative;
`;
export const BackMod = styled.div`
  position: absolute;
  background-color: ${colors.grayBg};
  width: 100%;
  height: 251px;
  border-radius: 0 0 0 110px;
`;
