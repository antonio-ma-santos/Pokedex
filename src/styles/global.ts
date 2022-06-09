import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --red: #F71616;
    --background: #DCDEE0;
    --shape: #FFF
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    position: relative;
    min-height: 100%;
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    height: 100%;
    margin: 0 0 12rem;
  }

  h1, h2 {
    font-weight: 600;
  }
`;