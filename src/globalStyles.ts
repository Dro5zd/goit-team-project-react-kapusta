import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: var(--white);
    color: var(--black);
    margin: 0;

    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    font-family: 'Roboto', sans-serif;
  }

  main {
    padding-top: 54px;
    @include media-min($tablet) {
    padding-top: 63px;
  }
  }

  //.no-scroll {
  //  overflow: hidden;
  //}
  //
  //.is-hidden {
  //  opacity: 0;
  //  pointer-events: none;
  //  visibility: hidden;
  //}
  //
  //.text-truncate {
  //  white-space: nowrap;
  //  overflow: hidden;
  //  text-overflow: ellipsis;
  //}
  //
  //.visually-hidden {
  //  position: absolute;
  //  width: 1px;
  //  height: 1px;
  //  margin: -1px;
  //  border: 0;
  //  padding: 0;
  //
  //  white-space: nowrap;
  //  clip-path: inset(100%);
  //  clip: rect(0 0 0 0);
  //  overflow: hidden;
  //}
`;

export default GlobalStyle;