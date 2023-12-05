import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// styled-components
import { GlobalStyles } from "./components/styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { ThemeStyles } from "./components/styles/ThemeStyles";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <ThemeProvider theme={ThemeStyles}>
    <App />
    <GlobalStyles />
  </ThemeProvider>,
);

interface IName {
  nameRe: number;
}
