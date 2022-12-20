import styled from "styled-components";
import fon from "../../images/fon.png";

export const Box = styled.div`
  width: 320px;
  margin: 0 auto;
  padding-top: 58px;
  background-size: 320px 258px;
  background-repeat: no-repeat;
  background-image: url(${fon});
`;

export const FormGroup = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputProduct = styled.input`
  width: 280px;
  height: 44px;
  border: 2px solid #ffffff;
  border-radius: 25px 0 0 0;
  padding: 2px 20px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  background-color: #f5f6fb;
  outline: none;
  color: #c7ccdc;
  &::placeholder {
    color: #c7ccdc;
  }
`;

export const BlockButton = styled.div`
  margin-top: 80px;
  display: flex;
  gap: 20px;
`;

export const ButtonInput = styled.button`
  padding: 12px 35px;
  background: #ff751d;
  border-radius: 16px;
  border-color: transparent;
  outline: none;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  color: #ffffff;
`;

export const ButtonClear = styled.button`
  padding: 12px 30px;
  background: #f5f6fb;
  border-radius: 16px;
  border-color: transparent;
  outline: none;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  color: #52555f;
  box-shadow: 1px 2px 5px rgba(170, 178, 197, 0.4);
`;
