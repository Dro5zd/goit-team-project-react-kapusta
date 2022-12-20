import styled from "styled-components";

export const BlockNumber = styled.div`
  display: flex;

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }

  input {
    margin-top: 32px;
    width: 125px;
    height: 44px;
    background-color: #f5f6fb;
    border: 2px solid #ffffff;
    border-radius: 22px 0px 0px 22px;
    outline: none;
    text-align: center;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    color: #000000;
  }

  span {
    margin-top: 32px;
    margin-left: -1px;
    width: 60px;
    height: 44px;
    background-color: #f5f6fb;
    border: 2px solid #ffffff;
    border-radius: 0px 22px 22px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
