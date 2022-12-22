import styled from "styled-components";
import { colors } from "../../utils/colors";
import { device } from "../../utils/mixins";

export const Box = styled.div`
  display: none;

  ${device.tablet} {
    display: block;
    margin: 40px 0;
    width: 230px;
    height: 278px;

    border-radius: 20px;
    border-bottom-left-radius: 0;
    background-color: ${colors.grayLight};
  }

  ${device.desktop} {
    width: 213px;
    height: 280px;
  }
`;

export const Title = styled.h2`
  padding: 12px 0;

  font-family: "Roboto";
  font-weight: 700;
  font-size: 12px;
  line-height: 1.16;
  letter-spacing: 0.02em;
  text-align: center;
`;

export const Item = styled.li`
  padding: 12px 22px;
  display: flex;
  justify-content: space-between;

  text-transform: uppercase;
  font-family: "Roboto";
  font-size: 12px;
  line-height: 1.16;
  letter-spacing: 0.04em;

  border-top: 2px solid ${colors.white};

  ${device.desktop} {
    padding: 12px;
  }
`;
