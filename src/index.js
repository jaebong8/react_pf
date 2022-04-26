import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import ScrollRe from "./components/common/ScrollRe";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <ScrollRe />
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
