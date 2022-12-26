import styled from "styled-components";
import { colors } from "../../utils/colors";
import { device } from "../../utils/mixins";

export const ContentMob = styled.div`
  position: relative;
  ${device.tablet} {
    display: none;
  }
`;

export const GrayBgMobil = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  background-color: ${colors.grayBg};
  height: 30vh;
  width: 100%;
  height: 320px;
  border-radius: 0 0 0 110px;
`;
