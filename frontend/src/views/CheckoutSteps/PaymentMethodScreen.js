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
      <CheckoutSteps step1 step2 ></CheckoutSteps>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Méthode De Paiement</h1>
        </div>
        <div>
          <div>
            <ReactCircleModal
      backgroundColor="rgba(166, 174, 179, 0.61)  "
    
      display="flex"
      alignItems="center"
      justifyContent="center"

      toogleComponent={onClick => (
        <input
              type="radio"
              id="paypal"
              value="Carte Bancaire"
              name="paymentMethod"
              required
              onClick={onClick}
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></input>
            
      )}
     
    >
      {(onClick) => (
        <popup>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"center"}}>
         <div><PaymentForm/>
         <button style={{ width:"100%"}} className="primary" onClick={onClick}>confirmer</button>
         </div> 
         </div> 
          
          
        </popup>
      )}
    </ReactCircleModal>
            <label htmlFor="paypal">Carte Bancaire</label>
       
      
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
            <label htmlFor="stripe">Paiement à la livraison</label>
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
  );
}