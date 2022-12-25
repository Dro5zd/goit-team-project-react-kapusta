import { device } from "../../utils/mixins";
import styled from "styled-components";
import { colors } from "../../utils/colors";

import { ReactComponent as Calendar } from "../../assets/images/svg/calendar.svg";
import {StyledButton} from '../Button/Button.styled';

export const FormGroup = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  ${device.desktop} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;
export const BlockForm = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  ${device.tablet} {
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
  }
`;

export const BlockPicker = styled.div`
  display: none;
  ${device.tablet} {
    display: flex;
    align-items: center;
  }
`;

export const CalendarIcon = styled(Calendar)`
  width: 20px;
  min-width: 20px;
  height: 20px;
`;

export const InputProduct = styled.input`
  width: 280px;
  height: 44px;
  border: 2px solid ${colors.white};
  border-radius: 16px 0 0 0;
  padding: 2px 20px;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  background-color: ${colors.grayBg};
  outline: none;
  color: ${colors.black};

  &::placeholder {
    color: #c7ccdc;
  }
  ${device.tablet} {
    /* margin-left: 44px; */
    width: 186px;
    background-color:${colors.white};
    border-color: ${colors.grayBg};
  }
  ${device.desktop} {
    margin-left: 32px;
    width: 290px;
  }
`;

export const BlockButton = styled.div`
  margin-top: 80px;
  display: flex;
  gap: 20px;
  ${device.tablet} {
    margin-top: 32px;
    gap: 15px;
  }

  ${device.desktop} {
    margin-top: 0;
    margin-left: 32px;
    gap: 16px;
  }
`;

export const Button = styled(StyledButton)`
width: 130px;

  ${device.tablet} {
  width: 125px;
  }

  ${device.desktop} {
    width: 136px;
  }
`;

//  @media screen and (max-width: 479px) {
//     background-size: 100% 258px;
//     background-repeat: no-repeat;
//     background-image: url(${fon});
//   }

