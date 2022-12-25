import styled from "styled-components";
import { device } from "../../utils/mixins";
import { size } from "../../utils/mixins";
import { colors } from "../../utils/colors";
import { Link } from "react-router-dom";
import { ReactComponent as Calendar } from "../../assets/images/svg/calendar.svg";

export const BalanceContainer = styled.div`
  /* background-color: #f5f6fb;
  width: 100%;
  margin: 0 auto;
  border-bottom-left-radius: 100px;
  padding: 40px 0; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${device.mobile} {
    /* width: ${size.mobile}; */
  }
  ${device.tablet} {
    /* width: ${size.tablet}; */
    /* border-bottom-left-radius: 0; */
    /* padding: 40px 32px; */
    flex-direction: row;
    justify-content: space-between;
  }
  ${device.desktop} {
    /* width: ${size.desktop}; */
    /* padding: 40px 91px 48px; */
    /* padding: 40px 91px 0; */
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
  /* ${device.desktop} {
    margin-left: auto;
    justify-content: center;
  } */
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
  display: block;
  font-weight: 500;
  font-size: 12px;
  line-height: 12/14;
  letter-spacing: 0.02em;
  color: rgba(82, 85, 95, 0.7);
  ${device.tablet} {
    margin-right: 21px;
    display: inline-block;
    width: 83px;
    text-align: end;
    margin-bottom: 0;
  }
  ${device.desktop} {
    margin-right: 20px;
    width: auto;
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

export const InputWrap = styled.div`
  position: relative;
  ${device.tablet} {
    display: none;
  }
  ${device.desktop} {
    display: inline-block;
  }
`;

export const BalanceText = styled.span`
  position: absolute;
  right: 36px;
  top: 16px;
  font-weight: 700;
  font-size: 12px;
  line-height: 1;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: ${colors.black};
  /* right: 10px; */
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
  padding-right: 16px;
  width: 140px;
  height: 44px;
  text-align: end;
  font-weight: 700;
  font-size: 12px;
  line-height: 12/14;
  letter-spacing: 0.02em;
  ${device.tablet} {
    border-radius: 20px;
    padding: 12px 0;
    margin-right: 15px;
    justify-content: center;
    text-align: center;
    width: 125px;
  }
  ${device.desktop} {
    margin-right: 16px;
    width: 125px;
    height: 44px;
    padding: 12px 45px 12px 0;
    border-radius: 16px;
    text-align: end;
  }
  &:placeholder-shown {
    text-align: end;
    font-weight: 700;
    font-size: 12px;
    line-height: 12/14;
    letter-spacing: 0.02em;
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
  /* padding: 15px 39px 15px 16px; */
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
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  width: 94px;
  height: 40px;
  ${device.tablet} {
    display: none;
  }
  /* svg {
    color: #52555f;
    margin-right: 8px;
  } */
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
`