import styled from "styled-components";
import { device } from "../../../utils/mixins";

export const SelectCategory = styled.div`
  position: relative;
  margin-top: -1px;
  ${device.tablet} {
    margin-top: 0;
    margin-left: -1px;
    height: 44px;
  }
`;
export const SelectHeader = styled.div`
  padding: 2px 20px;
  position: relative;
  display: flex;
  align-items: center;
  width: 280px;
  height: 44px;
  border: 2px solid #ffffff;
  border-radius: 0 0 25px 0;
  background-color: #f5f6fb;
  cursor: pointer;
  ${device.tablet} {
    width: 186px;
    border-radius: 0;
    border-color: #f5f6fb;
    background-color: #ffffff;
  }
  ${device.desktop} {
    width: 169px;
  }

  span {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.02em;

    color: #c7ccdc;
  }

  img {
    position: absolute;
    top: 20px;
    right: 20px;
  }
`;

export const SelectBody = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: #ffffff;
  border: 2px solid #f5f6fb;
  border-radius: 0 0 25px 0;

  div {
    padding: 8px 20px;
    height: 32px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    cursor: pointer;

    color: #c7ccdc;
  }

  div:hover {
    color: #52555f;
    background-color: #f5f6fb;
  }
`;
