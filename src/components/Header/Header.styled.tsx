import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { device } from '../../utils/mixins'

export const WrapperHeader = styled.div`
display: flex;
position:fixed;
z-index: 10;
top:0;

background-color: #fff;
width: 100%;
padding: 12px 20px;
align-items: center;
${device.tablet}{
 padding: 12px 32px;
}

`
export const Logo = styled(NavLink)`
display: block;
width: 100%;
margin-right: auto;
 cursor: pointer;
`
export const BoxAvatar = styled.div`
display: flex;
font-size: 12px;
border-radius: 50%;
color: #52555F;
background-color: #F5F6FA;
width: 32px;
height: 32px;
justify-content: center;
align-items: center;
font-weight:700;
`

export const UserName = styled.p`
display:none;
${device.tablet}{
 display: block;
}
`
export const LinkHeader = styled(NavLink)`
display: block;
margin-left: 16px;

list-style-type: none;
 cursor: pointer;
`
export const ExitLogo = styled.img`

width: 22px;
color:#52555F;
`

export const Exit = styled.p`

width: 22px;
color:#52555F;
`
// export const BoxUser = styled.div`
// display: flex;

// `