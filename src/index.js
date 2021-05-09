import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import "./index.css";
import Signin from "./views/signin/Signin";
import Signup from "./views/signup/Signup";
import acceuil from "./views/LandingPage/acceuil";
import contact from "./views/Contacter-nous/index";

var hist = createBrowserHistory();


ReactDOM.render(
    <Router history={hist}>
    <Switch>
    <Route path="/signin" component={Signin}/>
    <Route path="/contact" component={contact}/>
    <Route path="/signup" component={Signup}/>
    <Route path="/" component={acceuil}/>
    </Switch>
  </Router>
 ,document.getElementById("root")
);

