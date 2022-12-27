import styled from "styled-components";
import { device } from "../../../utils/mixins";

export const BlockNumberMobil = styled.div`
  display: flex;
  margin: 32px auto 0 auto;

  ${device.tablet} {
    display: none;
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }

  input {
    width: 125px;
    height: 44px;
    background-color: #f5f6fb;
    border: 2px solid #ffffff;
    border-radius: 22px 0 0 22px;
    outline: none;
    text-align: center;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
  }

  span {
    margin-left: -1px;
    width: 60px;
    height: 44px;
    background-color: #f5f6fb;
    border: 2px solid #ffffff;
    border-radius: 0 22px 22px 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const BlockNumber = styled.div`
  position: relative;
  display: none;
  ${device.tablet} {
    display: flex;
    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    input[type="number"] {
      -moz-appearance: textfield;
    }
  }

  input {
    margin-left: -1px;
    padding-left: 30px;
    width: 109px;
    height: 44px;
    background-color: #ffffff;
    border: 2px solid #f5f6fb;
    border-radius: 0 22px 22px 0;
    outline: none;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    color: #000000;
    ${device.tablet} {
      border-radius: 0 16px 16px 0;
    }
    ${device.desktop} {
      width: 119px;
    }
  }

  img {
    position: absolute;
    top: 12px;
    right: 20px;
  }
`;
