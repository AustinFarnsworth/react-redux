import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
// import allReducers from "./reducers";
import termSlice from "./slice/termSlice";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";

// STORE -> GLOBALIZED STATE

const store = configureStore({
  reducer: {
    inputTerm: termSlice.reducer,
  },
});

// const store = createStore(
//   allReducers,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
