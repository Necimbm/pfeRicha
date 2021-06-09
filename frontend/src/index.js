import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import "./index.css";
import Signin from "./views/signin/Signin";
import MaterielPre from "./views/matièrePremières/productView";
import Custom from "./views/Personnaliser/Custom";
import Signup from "./views/signup/Signup";
import acceuil from "./views/LandingPage/acceuil";
import ArtisanAcceuil from "./views/ArtisanLandingPage/index";
import profile from "./views/ProfilePage/ProfilePage";
import client from "./views/ClientLandingPage/index";
import ProductScreen from "./views/productView/productView";
import {Provider} from 'react-redux';
import store from './store';
import CartScreen from "./views/cartScreen/CartScreen";
var hist = createBrowserHistory();

window.store=store;

ReactDOM.render(
  <Provider store={store}>
  <Router history={hist}>
  <Switch>
  <Route path="/cart/:_id?" component={CartScreen}/>
  <Route path="/profile" component={profile}/>
  <Route path="/product/:_id" component={ProductScreen}/>
  <Route path="/matiere/:_id" component={MaterielPre}/>
  <Route path="/acceuil" component={client}/>
  <Route path="/artisanAcceuil" component={ArtisanAcceuil}/>
  <Route path="/signin" component={Signin}/>
  <Route path="/signup" component={Signup}/>
  <Route path="/custom" component={Custom}/>
  <Route path="/" component={acceuil}/>
  </Switch>
</Router>
</Provider>    
 ,document.getElementById("root")
);

