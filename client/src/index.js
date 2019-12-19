import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import cartReducer from "./components/reducers/reducer";

import "../node_modules/materialize-css/dist/css/materialize.min.css";
import "../node_modules/materialize-css/dist/js/materialize.min.js";

import "./index.css";

const middlewares = [thunk];

const store = createStore(cartReducer, applyMiddleware(...middlewares));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
