import React from "react";
import ReactDOM from "react-dom/client";
import { Normalize } from "styled-normalize";
import App from "./App/index.jsx";
import GlobalStyle from "./GlobalStyle.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Normalize />
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
