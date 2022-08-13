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
     background-color: ${theme.bgColors.main};
     font-family: 'Poppins', sans-serif;
  }
`;

export default GlobalStyle;
