import styled from 'styled-components';
import {device} from '../../../utils/mixins';
import {colors} from '../../../utils/colors';

export const SelectCategory = styled.div`  position: relative;
  margin-top: -1px;

  ${device.tablet} {
    margin-top: 0;
    margin-left: -1px;
    height: 44px;
  }`;
export const SelectHeader = styled.div.attrs(props => ({className: props.className,}))`  padding: 2px 20px;
  position: relative;
  display: flex;
  align-items: center;
  width: 280px;
  height: 44px;
  border: 2px solid #FFFFFF;
  border-radius: 0 0 16px 0;
  background-color: #F5F6FB;
  cursor: pointer;

  ${device.tablet} {
    width: 186px;
    border-radius: 0;
    border-color: #F5F6FB;
    background-color: #FFFFFF;
  }

  ${device.desktop} {
    width: 169px;
  }

  span {
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.02em;
    color: #C7CCDC;
  }

  img {
    position: absolute;
    top: 17px;
    right: 20px;
  }

  & .activeSelect {
    color: ${colors.black}
  }`;
export const SelectBody = styled.div`  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: ${colors.white};
  border: 2px solid #F5F6FB;
  border-top: none;
  border-radius: 0 25px 25px 0;
  overflow: hidden;

  ${device.tablet} {
    border-radius: 0 0 25px 0;
  }

  div {
    padding: 8px 20px;
    height: 32px;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    cursor: pointer;
    color: #C7CCDC;
  }

  div:hover {
    color: #52555F;
    background-color: #F5F6FB;
  }  `;







