import styled, {createGlobalStyle} from 'styled-components';
import {colors} from './utils/colors';
import {device, device123} from './utils/mixins';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  }

  html {
    scroll-behavior: smooth;
  }

  ol,
  ul {
    list-style: none;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  body {
    background-color: ${colors.white};
    color: ${colors.black};
  }
`;

export const Container = styled.div`
  width: 100%;
  background-color: #fd5103;
  margin-left: auto;
  margin-right: auto;
  padding: 0 20px;

@include ${device123.mobile} {
  width: ${device.mobile};
} 
@include ${device123.mobile} {
  padding-left: 32px;
  padding-right: 32px;
  width: ${device.tablet};
} 
@include ${device123.mobile} {
  padding-left: 16px;
  padding-right: 16px;
  width: ${device.desktop};
}
`

export default GlobalStyle;