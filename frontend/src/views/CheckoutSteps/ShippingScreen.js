import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAddress } from '../../actions/cartActions';
import CheckoutSteps from './ChekoutSteps';
import './styles.css'

export default function ShippingAddressScreen(props) {

  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  const [lat, setLat] = useState(shippingAddress.lat);
  const [lng, setLng] = useState(shippingAddress.lng);
 

  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
 
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    
      dispatch(
        saveShippingAddress({
          fullName,
          address,
          city,
          postalCode,
        })
      );
      props.history.push('/payment');
    }
 ;
 
  return (
  <div>
    <CheckoutSteps step1/>
    <div  style={{backgroundImage:"url(/images/livraison.jpg)",paddingBottom:"3.7rem"}}>
      <form className="form card" onSubmit={submitHandler}>
        <div>
          <h1 style={{fontFamily:"montserrat"}}>Addresse de livraison</h1>
        </div>
        <div>
          <label htmlFor="fullName">Nom complet</label>
          <input
            type="text"
            id="fullName"
            placeholder="Entrer votre nom complet"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="address">Addresse</label>
          <input
            type="text"
            id="address"
            placeholder="Entrer votre addresse"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="city">Ville</label>
          <input
            type="text"
            id="city"
            placeholder="Entrer votre ville"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="postalCode">Code Postal</label>
          <input
            type="text"
            id="postalCode"
            placeholder="Entrer votre code postal "
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            required
          ></input>
        </div>
        <div> <label/>
          <button className="primary" type="submit" >Continuer</button> </div>
      </form>
      </div>
   </div>
  );
}