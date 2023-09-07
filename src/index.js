import ReactDOM from "react-dom/client";
import React from "react";

import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import router from "./routes";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
