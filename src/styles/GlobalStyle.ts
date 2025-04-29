//src/styles/GlobalStyle.ts
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    min-height: 100vh;
    font-family: 'Arial', sans-serif;
    height: 100%;
    width: 100%;
    background: #f4f4f4;
  }
`;

export default GlobalStyle;