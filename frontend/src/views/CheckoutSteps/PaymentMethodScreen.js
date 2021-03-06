import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { savePaymentMethod } from '../../actions/cartActions';
import CheckoutSteps from './ChekoutSteps';
import './styles.css'
import PaymentForm from './CreditCardPayment';
import ReactCircleModal from 'react-circle-modal';

export default function PaymentMethodScreen(props) {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  if (!shippingAddress.address) {
    props.history.push('/shipping');
  }
  const [paymentMethod, setPaymentMethod] = useState('Carte bancaire');
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    
    props.history.push('/placeorder');
    
  };
  return (
    <div>
      <CheckoutSteps step1 step2 /> 
      <div  style={{backgroundImage:"url(/images/paiement.jpg)",backgroundSize:"cover",paddingBottom:"30.4rem"}}>
      <form className="form card" onSubmit={submitHandler}>
        <div>
          <h1 style={{fontFamily:"montserrat"}}>Méthode De Paiement </h1>
        </div>
        <div>
          <div>
          <input
              type="radio"
              id="paypal"
              value="Carte Bancaire"
              name="paymentMethod"
              required
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></input>
            <label htmlFor="paypal">Carte Bancaire <i class="fas fa-credit-card"></i></label>
          </div>
        </div>
        <div>
          <div>
            <input
              type="radio"
              id="stripe"
              value="Paiement à la livraison"
              name="paymentMethod"
              required
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></input>
            <label htmlFor="stripe">Paiement à la livraison <i class="fas fa-shipping-fast"></i></label>
          </div>
        </div>
        
        <div>
          <div>
            <input
              type="radio"
              id="stripe"
              value="PayPal"
              name="paymentMethod"
              required
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></input>
            <label htmlFor="stripe">PayPal <i class="fab fa-cc-paypal"></i></label>
          </div>
        </div>
        <div>
          <label />
          <button  className="primary" type="submit">
            Continue
          </button>
        </div>
      </form>

      </div>
      
    </div>
  );
}