import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";
import productReducers from "./utils/redux/reducers/productReducers";
import App from "./routes";
import initialState from "./utils/redux/initializers/initialState";

const store = createStore(productReducers, initialState);

const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
