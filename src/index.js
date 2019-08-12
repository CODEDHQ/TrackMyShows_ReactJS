import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";

//Design
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// import "./App.css";
// import $ from "jquery";
// import Popper from "popper.js";

// Store
import store from "./Store";
import { Provider } from "react-redux";

//Auth
import { checkForExpiredToken } from "./Store/actions/authentication";

store.dispatch(checkForExpiredToken());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
