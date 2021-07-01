import React from 'react';
import Navbar from 'views/ClientLandingPage/components/Navbar';
import { Bars2 } from 'views/ClientLandingPage/components/Navbar/NavbarElements';
import './styles.css'
export default function CheckoutSteps(props) {
  return (<div>
  <Navbar/>
    <div className="row checkout-steps">
      <div className={props.step1 ? 'active' : ''}>Adresse<Bars2 /></div>
      <div className={props.step2 ? 'active' : ''}>Paiement<Bars2 /></div>
      <div className={props.step3 ? 'active' : ''}>Passer la commande<Bars2 /></div>
    </div>
    </div>
  );
}