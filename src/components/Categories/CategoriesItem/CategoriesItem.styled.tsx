import styled from "styled-components";
import { colors } from "../../../utils/colors";
import { device } from "../../../utils/mixins";
import { ReactComponent as Shadow } from "../../../assets/images/svg/shadow.svg";

export const CategoriesItemWrapper = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e0e5eb;
  flex-grow: 1;

  width: 93px;
  height: auto;

  text-decoration: none;
  color: ${colors.grayTitle};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  cursor: pointer;

  &:hover svg,
  &:focus svg {
    fill: ${colors.orange};
  }

  ${device.tablet} {
    flex-grow: 0;
    border-bottom: none;
  }
  ${device.tablet} {
  }
  ${device.desktop} {
  }
`;

export const CategoriesTotalSum = styled.p`
  color: #52555f;
  font-weight: 400;
  font-size: 12px;
  line-height: 12/14;
  text-align: center;
  letter-spacing: 0.02em;

  ${device.tablet} {
  }

  ${device.desktop} {
  }
`;
export const ShadowIcon = styled(Shadow)`
  width: 60px;
  height: 46px;
  position: absolute;
  z-index: 0;
  rect {
    fill: ${(p) =>
      p.active ? `${colors.lightOrange}` : `${colors.grayLight}`};
  }
`;
export const CategoriesIconWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  color: ${(p: any) => (p.active ? `${colors.orange}` : `#071F41`)};

  svg.category {
    position: relative;
    z-index: 1;
    width: 56px;
    height: 56px;
    fill: currentColor;
  }

  :hover {
    color: ${colors.orange};
    svg {
      rect {
        fill: ${colors.lightOrange};
      }
    }
  }
`;

export const CategoriesName = styled.p`
  text-transform: uppercase;
  font-weight: 400;
  font-size: 12px;
  line-height: 12/14;
  text-align: center;
  letter-spacing: 0.02em;

  color: #52555f;
  ${device.tablet} {
  }
  ${device.desktop} {
  }
`;
