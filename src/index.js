import React from "react";
import ReactDOM from "react-dom";
import LoginPage from "./Component/LoginPage";
import RegistrationPage from "./Component/RegistrationPage";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <Route exact path="/" component={LoginPage} />
    <Route path="/join" component={RegistrationPage} />
  </Router>,
  rootElement
);
