import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './style.scss';
// import { GlobalStyle } from "./style";

ReactDOM.render(
  <React.StrictMode>
    {/* <GlobalStyle /> */}
      <App />
  </React.StrictMode>,
  document.getElementById("root")
);
