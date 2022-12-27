import styled from "styled-components";
import { colors } from "../../../utils/colors";
import { device } from "../../../utils/mixins";
import { ReactComponent as products } from "../../../assets/images/svg/expenses/products.svg";
import { ReactComponent as Shadow } from "../../../assets/images/svg/shadow.svg";

interface IIcon {
  active: string;
}
export const CategoriesItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 84px;
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
export const CategoriesIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 56px;
    height: 56px;
    rect {
      fill: ${colors.lightOrange};
    }
  }
`;
export const ShadowStyled = styled(Shadow)`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 56px;
    height: 56px;
    rect {
      fill: ${colors.lightOrange};
    }
  }
`;

// export const CategoriesIcon = styled(products)`
//   width: 56px;
//   height: 56px;
//   fill: ${(p: IIcon) => (p.active === "true" ? `${colors.orange}` : `#071F41`)};
//   ${device.tablet} {
//   }
//   ${device.desktop} {
//   }
//   @media screen and (min-width: 768px) {
//     width: 306.52px;
//     height: 77.69px;
//   }

//   @media screen and (min-width: 1280px) {
//     width: 377px;
//     height: 120px;
//   }
// `;

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
