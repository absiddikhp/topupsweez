// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { BrowserRouter } from "react-router-dom";
require("./sass/style.css");

// optional configuration
const options = {
  // you can also just use 'bottom center'
  position: positions.TOP_CENTER,
  timeout: 1500,
  offset: "30px",
  // you can also just use 'scale'
  transition: transitions.FADE,
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AlertProvider template={AlertTemplate} {...options}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </AlertProvider>
);
