import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux_setup/store";
import App from "./modules/App";
import "./index.css";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    background: #3E5151; 
    background: -webkit-linear-gradient(to right, #DECBA4, #3E5151);  
    background: linear-gradient(to right, #DECBA4, #3E5151); 
    box-sizing: border-box;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
`;

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById("root")
);
