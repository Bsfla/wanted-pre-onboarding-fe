import React from "react";
import GlobalStyle from "./styles/globalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import Routing from "./routes/Routing";

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Routing />
      </ThemeProvider>
    </>
  );
}

export default App;
