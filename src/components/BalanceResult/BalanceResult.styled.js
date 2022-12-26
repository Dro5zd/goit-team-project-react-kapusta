import styled from "styled-components";
import { device } from "../../utils/mixins";
import { colors } from "../../utils/colors";

export const WrapperBalanceResult = styled.div`
margin-bottom:32px;
margin: 0 auto;
${device.tablet} {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 102px;
}
${device.desktop}{
    margin-right: 0;
}
`

export const TitleBalance = styled.h2`
 display: block;
 margin: 0 auto;
 margin-bottom: 8px;
  text-align: center;
width: 84px;
    text-align: center;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.16;
  letter-spacing: 0.02em;
  color: rgba(82, 85, 95, 0.7);

  ${device.tablet} {
    display: inline-block;

    margin-bottom: 0;
  }

  ${device.desktop} {
    display: none;
  }
`

export const TextBalance = styled.p`
 border: 2px solid ${colors.white};
  background-color: transparent;
  outline: none;

  border-radius: 22px;

margin: 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 183px;
  height: 44px;
padding:  15px 30px;
  text-align: center;

  font-weight: 700;
  font-size: 12px;
  line-height: 1.16;
  letter-spacing: 0.02em;

  ${device.tablet} {
   
    border-radius: 16px;
    padding: 12px 20px;
    margin-left: 20px;
    justify-content: center;
    width: 125px;
  }
 ${device.desktop} {
    display: none;
 }
    /* ${device.desktop} {
      margin-left: 20px;
      width: 125px;
      height: 44px;
       padding: 12px 20px;
      border-radius: 16px;
  
    } */
  

` 