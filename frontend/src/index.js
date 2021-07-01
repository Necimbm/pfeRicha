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
import FournisseurAcceuil from "views/Fournisseur/index";
import profile from "./views/ProfilePage/ProfilePage";
import client from "./views/ClientLandingPage/index";
import ProductScreen from "./views/productView/productView";
import {Provider} from 'react-redux';
import store from './store';
import CartScreen from "./views/cartScreen/CartScreen";
import CartScreenArtisan from "./views/cartScreenArtisan/CartScreen";
import CheckoutSteps from './views/CheckoutSteps/ChekoutSteps'
import OrderScreen from './views/Orders/Order';
import OrderArtisanScreen from './views/Orders.artisan/Order';
import OrderClientScreen from './views/Orders/OrderClientDetails';
import ShippingScreen from "views/CheckoutSteps/ShippingScreen";
import CreditCardPayment from "views/CheckoutSteps/CreditCardPayment";
import OrderPlacement from "views/CheckoutSteps/OrderPlacement";
import PaymentMethodScreen from "views/CheckoutSteps/PaymentMethodScreen";
import AjoutAnnonce from "views/Annonces/AjouterAnnonce";

import CommandesScreen from "./views/Orders/ClientOrders";
var hist = createBrowserHistory();

window.store=store;

ReactDOM.render(
  <Provider store={store}>
  <Router history={hist}>
  <Switch>
  <Route path="/cart/:_id?" component={CartScreen}/>
  <Route path="/cartArtisan/:_id?" component={CartScreenArtisan}/>
  <Route path="/profile" component={profile}/>
  <Route path="/product/:_id" component={ProductScreen}/>
  <Route path="/matiere/:_id" component={MaterielPre}/>
  <Route path="/acceuil" component={client}/>
  <Route path="/artisanAcceuil" component={ArtisanAcceuil}/>
  <Route path="/fournisseurAcceuil" component={FournisseurAcceuil}/>
  <Route path="/signin" component={Signin}/>
  <Route path="/signup" component={Signup}/>
  <Route path="/custom" component={Custom}/>
   <Route path="/checkoutsteps" component={CheckoutSteps}/>
  <Route path="/order/:_id" component={OrderScreen}/>
  <Route path="/orders/:_id" component={OrderArtisanScreen}/>
  <Route path="/commandesdetails/:_id" component={OrderClientScreen}/>
  <Route path="/shipping" component={ShippingScreen}/>
  <Route path="/payment" component={PaymentMethodScreen}/>
  <Route path="/commandes" component={CommandesScreen}/>
  <Route path="/creditcard" component={CreditCardPayment}/>
  <Route path="/annonceAjout" component={AjoutAnnonce}/>
  <Route path="/placeorder" component={OrderPlacement}/>
  <Route path="/" component={acceuil}/>
  </Switch>
</Router>
</Provider>    
 ,document.getElementById("root")
);

