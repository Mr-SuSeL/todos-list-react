import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 16px;
    background-color: #eee;
  }

  *, *::after, *::before {
    box-sizing: inherit;
  }
`;

export default GlobalStyle;