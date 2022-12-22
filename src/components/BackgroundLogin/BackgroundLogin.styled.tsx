import styled from "styled-components";
import { colors } from "../../utils/colors";
import { device } from "../../utils/mixins";
import CabbageDesc from "../../images/svg/cabbage-desc.svg";
import CabbageOne from "../../images/svg/cabbage-one.svg";
import CabbageTwo from "../../images/svg/cabbage-two.svg";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: calc(100vh - 56px);
  max-width: 100%;
  overflow-x: hidden;

  &::before {
    content: "";
    position: absolute;
    /* z-index: -1; */
    top: 104px;
    right: -25px;
    width: 83px;
    height: 89px;
    background-image: url(${CabbageOne});
    background-repeat: no-repeat;
    background-size: 83px 89px;
    transform: rotate(168deg);

    ${device.tablet} {
      top: 28px;
      left: 0;
      right: 0;
      width: 100%;
      height: 232px;
      transform: rotate(0);
      background-image: url(${CabbageDesc});
      background-size: contain;
      background-repeat: repeat;
    }
  }

  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    bottom: -10px;
    left: 38px;
    width: 83px;
    height: 89px;
    background-image: url(${CabbageOne});
    background-repeat: no-repeat;
    background-size: 83px 89px;

    ${device.tablet} {
      bottom: 56px;
      left: 103px;
      width: 183px;
      height: 142px;
      background-image: url(${CabbageTwo});
      background-size: 183px 142px;
    }

    ${device.desktop} {
      bottom: 50px;
      left: 163px;
      width: 183px;
      height: 142px;
      background-image: url(${CabbageTwo});
      background-size: 183px 142px;
    }
  }
`;
export const GrayBg = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  background-color: ${colors.grayBg};
  /* height: 30vh; */
  height: 320px;
  border-radius: 0 0 0 110px;

  ${device.tablet} {
    height: 56vh;
    border-radius: 0 0 0 106px;
  }
  ${device.desktop} {
    height: 57vh;
    border-radius: 0 0 0 110px;
  }
`;
