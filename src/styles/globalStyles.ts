import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;  
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.bgColors.main};
    font-family: 'Noto Sans KR', sans-serif;
  }
`;

export default GlobalStyle;
