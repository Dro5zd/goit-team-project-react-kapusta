import styled from "styled-components";
import { colors } from "../../utils/colors";
import { device } from "../../utils/mixins";
import CabbageDesc from "../../images/svg/cabbage-main.svg";
import CabbageOne from "../../images/svg/cabbage-one.svg";
import CabbageTwo from "../../images/svg/cabbage-two.svg";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: calc(100vh - 56px);
  max-height: calc(100vh - 56px);
  overflow: hidden;
  max-width: 100%;

  &::after {
    content: "";
    position: absolute;
    z-index: -1;

    ${device.tablet} {
      bottom: 59px;
      right: 11vw;
      width: 183px;
      height: 146px;
      background-image: url(${CabbageTwo});
      background-repeat: repeat;
    }
    ${device.desktop} {
      bottom: -38px;
      left: 0;
      right: 0;
      width: 100%;
      height: 232px;
      background-image: url(${CabbageDesc});
      background-repeat: repeat;
    }
  }
`;
export const GrayBg = styled.div`
  display: none;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  /* background-color: ${colors.grayBg}; */
  /* height: 30vh; */
  height: 320px;
  border-radius: 0 0 0 110px;

  ${device.tablet} {
    background-color: ${colors.grayBg};
    display: block;
    height: 56vh;
    border-radius: 0 0 0 106px;
  }
  ${device.desktop} {
    height: 65vh;
    border-radius: 0 0 0 110px;
  }
`;
