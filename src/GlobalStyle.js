import { createGlobalStyle } from "styled-components";

const styled = { createGlobalStyle };

const GlobalStyle = styled.createGlobalStyle`
  html {
    box-sizing: border-box;

    *,
    ::before,
    ::after {
      box-sizing: inherit;
    }
  }

  body {
    font-family: "Roboto", sans-serif;
    display: grid;
    place-items: center;
    background-image: linear-gradient(
      to right top,
      #051937,
      #004d7a,
      #008793,
      #00bf72,
      #a8eb12
    );
    height: 100vh;
  }
`;

export default GlobalStyle;
