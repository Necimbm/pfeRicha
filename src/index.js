import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import "./index.css";
import Signin from "./views/signin/Signin";
import acceuil from "./views/LandingPage/acceuil";

var hist = createBrowserHistory();


ReactDOM.render(
    <Router history={hist}>
    <Switch>
    <Route path="/signin" component={Signin}/>
    <Route path="/" component={acceuil}/>
    </Switch>
  </Router>
 ,document.getElementById("root")
);

