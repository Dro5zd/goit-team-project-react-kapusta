import styled from "styled-components";
import { device } from "../../../utils/mixins";
import { colors } from "../../../utils/colors";

export const SelectCategory = styled.div`
  position: relative;
  margin-top: -1px;
  ${device.tablet} {
    margin-top: 0;
    margin-left: -1px;
    height: 44px;
  }
`;
export const SelectHeader = styled.div.attrs((props) => ({
  className: props.className,
}))`
  padding: 2px 20px;
  position: relative;
  display: flex;
  align-items: center;
  width: 280px;
  height: 44px;
  border: 2px solid #ffffff;
  border-radius: 0 0 16px 0;
  background-color: #f5f6fb;
  cursor: pointer;
  ${device.tablet} {
    width: 186px;
    border-radius: 0;
    border-color: #f5f6fb;
    background-color: #ffffff;
  }
  ${device.desktop} {
    width: 169px;
  }

  span {
    font-weight: 400;
    font-size: 12px;
    line-height: 1.1;
    letter-spacing: 0.02em;

    color: #c7ccdc;
  }

  img {
    position: absolute;
    top: 17px;
    right: 20px;
  }
  & .activeSelect {
    color: ${colors.black};
  }
`;

export const SelectBody = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: ${colors.white};
  border: 2px solid #f5f6fb;
  border-top: none;
  border-radius: 0 0 25px 0;
  overflow: hidden;
  div {
    padding: 8px 20px;
    height: 32px;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.1;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    cursor: pointer;

    color: #c7ccdc;
  }

  div:hover {
    color: #52555f;
    background-color: #f5f6fb;
  }
`;

// export const SelectorBox =styled.div`
//   position: relative;

//   select{
//     padding: 2px 20px;
//   position: relative;
//   display: flex;
//   align-items: center;
//   width: 280px;
//   height: 44px;
//   border: 2px solid #ffffff;
//   border-radius: 0 0 16px 0;
//   background-color: #f5f6fb;
//   cursor: pointer;
//   ::placeholder{

//   }
//   ${device.tablet} {
//     width: 186px;
//     border-radius: 0;
//     border-color: #f5f6fb;
//     background-color: #ffffff;
//   }
//   ${device.desktop} {
//     width: 169px;
//   }
//   }

//   span{
//     position: absolute;
//     top: 2px;
//     right: 2px;
//     width: 40px;
//   height: 40px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: ${colors.white};

//   pointer-events: none;

//   }
//   option{
//     padding: 8px 20px;
//     height: 32px;
//     font-weight: 400;
//     font-size: 12px;
//     line-height: 1.1 ;
//     display: flex;
//     align-items: center;
//     letter-spacing: 0.02em;
//     cursor: pointer;

//     color: #c7ccdc;
//     :hover {
//     color: #52555f;
//     background-color: #f5f6fb;
//   }
//   }
// `
