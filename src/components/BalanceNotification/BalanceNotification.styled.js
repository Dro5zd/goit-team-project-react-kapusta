import styled from "styled-components";
import { colors } from "../../utils/colors";
import { device } from "../../utils/mixins";

export const Div = styled.span`
  color: ${colors.white};
  font-weight: 400;
  background: linear-gradient(117.84deg, #1d346a 2.84%, #031634 67.28%);

  /* display: none; */
  display: inline-flex;
  flex-direction: column;
  align-items: center;

  position: absolute;
  top: 85px;
  left: 0;
  z-index: 10;

  border-radius: 30px;
  padding: 30px 0;
  width: 288px;
  height: 152px;

  ${device.tablet} {
    top: 60px;
    left: 100px;
  }

  ${device.desktop} {
    top: 60px;
    left: 60px;
  }

  &::before {
    content: "";
    background: linear-gradient(117.84deg, #1d346a 2.84%, #031634 67.28%);
    /* width: 20px;
    height: 20px; */
    width: 0;
    height: 0;
    border: 15px solid transparent;
    border-top: 0;
    border-bottom: 15px solid #162c61;

    position: absolute;
    z-index: -1;
    top: -15px;
    left: 46px;
    /* transform: rotate(-45deg); */
  }

  &.show {
    display: inline-flex;
  }
`;

export const FirstText = styled.span`
  display: block;
  font-size: 14px;
  line-height: 14/20;
  margin-bottom: 20px;
  text-align: start;
  width: 231px;
`;

export const SecondText = styled.span`
  display: block;
  font-size: 12px;
  line-height: 16/12;
  text-align: start;
  width: 231px;
`;
