import styled from "styled-components";
// import { colors } from "../../utils/colors";
import { device } from "../../../utils/mixins";
import { colors } from "../../../utils/colors";

interface IBox {
  page: string;
}

export const StyledDiv = styled.div`
  margin: 0 auto 20px;
  //margin-left: auto;
  //margin-right: auto;
  //margin-bottom: 20px;

  .buttons-wrapper {
    display: flex;
    justify-content: center;
    gap: 15px;

    margin-top: 32px;

    ${device.tablet} {
      margin-top: 0;
      margin-bottom: 20px;
      gap: 16px;
    }
  }

  .arrow-btn {
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;

    cursor: pointer;
  }

  .expenses-title {
    width: 96px;
    text-align: center;
    font-size: 14px;
    line-height: 16/14;
    letter-spacing: 0.02em;
    color: ${colors.black};
  }

  .expenses-list {
    width: 280px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    ${device.tablet} {
      width: 623px;
    }

    /* svg {
      fill: #071f41;
    } */
  }
`;
export const CategoriesListWrapper = styled.div`
  /* flex-direction: column; */
  /* display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px; */

  width: 280px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  ${device.tablet} {
    width: 623px;
  }

  ${device.desktop} {
  }
`;

export const CategoriesTotalSum = styled.p`
  height: 20px;
  min-width: 84px;
  font-size: 12px;
  line-height: 1.1;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #52555f;

  ${device.tablet} {
  }

  ${device.desktop} {
  }
`;
export const CategoriesIcon = styled.img`
  width: 56px;
  height: 56px;
  ${device.tablet} {
  }
  ${device.desktop} {
  }
`;
export const CategoriesName = styled.p`
  min-width: 84px;
  height: 20px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.1;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;

  color: #52555f;
  ${device.tablet} {
  }
  ${device.desktop} {
  }
`;
