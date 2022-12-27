import styled from "styled-components";
// import { colors } from "../../utils/colors";
import { device } from "../../../utils/mixins";

interface IBox {
  page: string;
}
export const CategoriesListWrapper = styled.div`
  display: flex;
  /* flex-direction: column; */
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  //width: 84px;
  ${device.tablet} {
  }
  ${device.desktop} {
  }
`;
export const CategoriesTotalSum = styled.p`
  height: 20px;
  width: 84px;
  font-size: 12px;
  line-height: 14px;
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
  width: 84px;
  height: 20px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
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
