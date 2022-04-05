import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import App from "./App";
import { AppProvider } from "./Auth/ContextProvider";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);