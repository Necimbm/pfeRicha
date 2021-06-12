import React from 'react';
import './styles.css'
export default function CheckoutSteps(props) {
  return (
    <div className="row checkout-steps">
      <div className={props.step1 ? 'active' : ''}>Adresse</div>
      <div className={props.step2 ? 'active' : ''}>Paiement</div>
      <div className={props.step3 ? 'active' : ''}>Passer la commande</div>
    </div>
  );
}