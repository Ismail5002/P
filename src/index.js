import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { store } from "./Store/store";
import { Provider } from "react-redux";
import "./style/index.css";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
