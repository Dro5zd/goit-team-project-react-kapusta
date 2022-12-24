import styled from "styled-components";
import { colors } from "../../utils/colors";
import { device } from "../../utils/mixins";

export const GrayBgMobil = styled.div`
  background-color: ${colors.grayBg};
  height: 30vh;
  height: 320px;
  border-radius: 0 0 0 110px;
  ${device.tablet} {
    display: none;
  }
`;
