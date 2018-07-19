import React from "react";
import ReactDOM from "react-dom";
import App from "./container/App";
import registerServiceWorker from "./registerServiceWorker";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();
const APP = (
  <Router history={history}>
    <App />
  </Router>
);

ReactDOM.render(APP, document.getElementById("root"));
registerServiceWorker();
