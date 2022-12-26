import styled, { createGlobalStyle } from "styled-components";
import { colors } from "./utils/colors";
import { device, size } from "./utils/mixins";

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

  input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
   border: 2px solid ${colors.white};
  ${device.tablet}{
    border: 2px solid ${colors.grayBg};
  }
  /* border: none; */
  -webkit-text-fill-color: #52555f;
  /* -webkit-box-shadow: 0 0 0 1000px #f6f7fb inset; */
  transition: background-color 5000s ease-in-out 0s;
}
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  /* min-height: calc(100vh - 56px); */
  margin-left: auto;
  margin-right: auto;
  /* padding: 104px 20px 0 20px; */
  padding: 0 20px 60px;

  ${device.mobile} {
    width: ${size.mobile};
  }

  ${device.tablet} {
    padding: 40px 32px 60px;
    width: ${size.tablet};
    background-size: 100% 582px;
  }

  ${device.desktop} {
    padding: 40px 16px 83px;
    width: ${size.desktop};
  }
`;

// export const ContainerMobilHome = styled.div`
// width: 100%;
// min-height: calc(100vh - 56px);
// display: flex;
// flex-direction: column;
// justify-content: space-between;
// padding: 40px 0 0 0;
//   ${device.tablet}{
//     display: none;
//   }
// `

export default GlobalStyle;
