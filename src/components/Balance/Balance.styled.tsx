import styled from "styled-components";
import { device } from "../../utils/mixins";
import { colors } from "../../utils/colors";
import { Link } from "react-router-dom";
import { ReactComponent as Calendar } from "../../assets/images/svg/calendar.svg";

export const BackIcon = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.1;
  letter-spacing: 0.04em;
  color: rgba(82, 85, 95, 0.7);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  opacity: ${(props) => (props.hidden === true ? "0" : "1")};
  pointer-events: ${(props) => props.hidden === true && "none"};
  visibility: ${(props) => props.hidden === true && "hidden"};

  svg {
    fill: ${colors.orange};
    width: 18px;
    height: 12px;
    margin-right: 19px;
  }

  :hover {
    color: ${colors.orange};
  }
`;

// ----------- BALANCE CONTAINER -----------

export const BalanceContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;

  ${device.tablet} {
    flex-direction: row;
    justify-content: space-between;
  }

  ${device.desktop} {
    padding-right: 91px;
    padding-left: 91px;
  }

  .reports-link {
    margin-bottom: 40px;
    display: inline-flex;
    flex-direction: row;
    gap: 20px;
    text-decoration: none;
    font-size: 12px;
    line-height: 12/14;
    color: rgba(82, 85, 95, 0.7);

    ${device.tablet} {
      margin-bottom: 0;
    }

    ${device.desktop} {
      margin-left: auto;
    }

    span {
      display: inline-flex;
      align-items: center;
    }
  }
`;

export const BalanceForm = styled.form`
  position: relative;
  ${device.tablet} {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  ${device.desktop} {
    margin-left: auto;
    justify-content: center;
  }
`;

export const BalanceLabel = styled.label`
  margin-bottom: 8px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;

  font-weight: 500;
  font-size: 12px;
  line-height: 12/14;
  letter-spacing: 0.02em;
  color: rgba(82, 85, 95, 0.7);

  ${device.tablet} {
    margin-right: 21px;
    width: 83px;
    justify-content: end;
    margin-bottom: 0;
  }

  ${device.desktop} {
    margin-right: 20px;
    width: auto;
  }

  ::after {
    content: "UAH";
    pointer-events: none;
    position: absolute;
    bottom: 14px;
    left: 95px;
    width: 25px;

    font-weight: 700;
    font-size: 12px;
    line-height: 14/12;
    letter-spacing: 0.02em;
    color: ${colors.black};

    ${device.tablet} {
      left: 180px;
    }

    ${device.desktop} {
      left: 143px;
    }
  }
`;

export const DoubleDots = styled.span`
  ${device.tablet} {
    display: none;
  }
  ${device.desktop} {
    display: inline-block;
  }
`;

export const BalanceInput = styled.input`
  border: 2px solid ${colors.white};
  background-color: transparent;
  outline: none;
  border-bottom-left-radius: 20px;
  border-top-left-radius: 20px;

  display: inline-flex;
  align-items: center;
  justify-content: end;
  padding-right: 45px;
  width: 140px;
  height: 44px;

  text-align: end;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.16;
  letter-spacing: 0.02em;

  ${device.tablet} {
    border-radius: 20px;
    padding: 12px 50px 12px 0;

    margin-right: 15px;
    justify-content: end;
    width: 125px;
  }

  ${device.desktop} {
    margin-right: 16px;
    width: 125px;
    height: 44px;
    padding: 12px 50px 12px 0;
    border-radius: 16px;
  }

  :placeholder-shown {
    text-align: end;
    font-weight: 700;
    font-size: 12px;
    line-height: 12/14;
    letter-spacing: 0.02em;
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -moz-appearance: textfield;
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Count = styled.span`
  ${device.tablet} {
    display: inline-block;
    min-width: 105px;
  }
`;

export const BalanceBtn = styled.button`
  background-color: transparent;
  border: 2px solid ${colors.white};
  border-left-width: 1px;
  cursor: pointer;

  display: inline-flex;
  text-align: end;
  align-items: center;
  justify-content: start;

  padding-left: 18px;
  height: 44px;

  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  width: 140px;

  font-weight: 400;
  font-size: 12px;
  line-height: 12/14;
  letter-spacing: 0.02em;
  color: rgba(82, 85, 95, 0.7);

  ${device.tablet} {
    border-radius: 20px;
    padding: 12px 0;
    width: 125px;
    height: 44px;
    justify-content: center;
  }

  ${device.desktop} {
    border-radius: 16px;
  }

  &:hover,
  &:focus {
    border-color: ${colors.orange};
    background: ${colors.orange};
    color: ${colors.white};
  }
`;

export const DateSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px auto 0;
  width: 94px;
  height: 40px;

  ${device.tablet} {
    display: none;
  }

  span {
    font-weight: 900;
    font-size: 12px;
    line-height: 12/14;
    letter-spacing: 0.04em;
    color: #52555f;
  }
`;

export const CalendarSvg = styled(Calendar)`
  width: 20px;
  min-width: 20px;
  height: 20px;
`;
