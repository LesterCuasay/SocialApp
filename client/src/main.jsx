import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";

import reducers from "./reducers";

import App from "./App.jsx";

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
