import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { device } from "../../utils/mixins";

export const WrapperHeader = styled.div`
  display: flex;
  position: fixed;
  z-index: 10;
  top: 0;
  height: 56px;
  max-height: 56px;
justify-content: space-between;
  background-color: #fff;
  width: 100%;
  padding: 12px 20px;
  align-items: center;
  ${device.tablet} {
    padding: 12px 32px;
  }
`;

export const Logo = styled(NavLink)`
  display: block;
  width: 100%;
  margin-right: auto;
  cursor: pointer;
`;
export const UserInfo =styled.div`
  display: flex;
align-items: center;
`
export const BoxAvatar = styled.div`
  display: flex;
  font-size: 12px;
  border-radius: 50%;
  color: #52555f;
    margin-right: 16px;
  background-color: #f5f6fa;
  min-width: 32px;
  width: 32px;
  height: 32px;
  justify-content: center;
  text-align: center;
  align-items: center;
  font-weight: 700;

`;

export const UserName = styled.p`

  display: none;
  ${device.tablet} {

    display: block;
 text-align: center;
 white-space: nowrap;
  margin-right: 20px;
    color: #52555F;
    text-align: center;
    font-size: 12px;
line-height: 1.16;
text-align: right;
letter-spacing: 0.04em;
     border-right: 1px solid #E0E5EB;
    padding-right: 20px;
    height: 100%;
  }
`;

export const ExitButton = styled.button`
display: none;
  cursor: pointer;
  border: none;
   background: none;
   ${device.tablet} {
    color: #52555F;
    display: block;
   text-decoration: underline;
   font-size: 12px;
line-height: 1.16;
letter-spacing: 0.04em;
    
  }
  

`
export const ExitLogo = styled.img`
display: block;
  width: 22px;
  margin-left: 16px;
  color: #52555f;
   ${device.tablet} {
    display: none;
  }
    ${device.desktop} {
    display: none;

   }
  
`;

