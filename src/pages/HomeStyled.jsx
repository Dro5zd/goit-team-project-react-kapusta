import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../utils/colors";
import { device } from "../utils/mixins";

export const BlockLink = styled.div`
  display: flex;
  margin-top: 60px;
  ${device.desktop} {
    margin-left: 75px;
  }
`;

export const ButtonLink = styled(NavLink)`
  text-decoration: none;
  ${device.tablet} {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 138px;
    height: 40px;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.02em;
    color: ${colors.black};
    background-color: #fafbfd;
    border-radius: 16px 16px 0 0;
  }

  &.active {
    color: ${colors.orange};
    background-color: #fefefe;
  }
`;
