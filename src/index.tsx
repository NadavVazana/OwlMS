// @ts-nocheck
import ReactDOM from "react-dom/client";
import React from "react";
import { App } from "./App";
import { HashRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Router>
    <App />
  </Router>
);
