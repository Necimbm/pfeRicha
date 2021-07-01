import Axios from 'axios';
import { PayPalButton } from 'react-paypal-button-v2';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deliverOrder, detailsOrder, payOrder } from '../../actions/orderActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import {
  ORDER_DELIVER_RESET,
  ORDER_PAY_RESET,
} from '../../constants/orderConstants';
import Navbar from 'views/ClientLandingPage/components/Navbar';
import './styles.css'


export default function OrderScreen(props) {
  const orderId = props.match.params._id;
  const [sdkReady, setSdkReady] = useState(false);
  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;

  const orderPay = useSelector((state) => state.orderPay);
  const {
    loading: loadingPay,
    error: errorPay,
    success: successPay,
  } = orderPay;
  const orderDeliver = useSelector((state) => state.orderDeliver);
  const {

    success: successDeliver,
  } = orderDeliver;
  const dispatch = useDispatch();
  useEffect(() => {
    const addPayPalScript = async () => {
      const { data } = await Axios.get('/api/config/paypal');
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = `https://www.paypal.com/sdk/js?client-id=${data}`;
      script.async = true;

      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };
    if (
      !order ||
      successPay ||
      successDeliver ||
      (order && order._id !== orderId)
    ) {
      dispatch({ type: ORDER_PAY_RESET });
      dispatch({ type: ORDER_DELIVER_RESET });
      dispatch(detailsOrder(orderId));
    } else {
      if (!order.isPaid) {
        if (!window.paypal) {
          addPayPalScript();
        } else {
          setSdkReady(true);
        }
      }
    }
  }, [dispatch, orderId, sdkReady, successPay, successDeliver, order]);

  const successPaymentHandler = (paymentResult) => {
    dispatch(payOrder(order, paymentResult));
  };
  const deliverHandler = () => {
    dispatch(deliverOrder(order._id));
  };
  const OnClick = ()=>{
    order.payementMethod="Paiement à la livraison";
    props.history.push(`/acceuil`);
  }

  return loading ? (
    <LoadingBox></LoadingBox>
    ) : error ? (
      <MessageBox variant="danger">{error}</MessageBox>
    ) : (
      <div style={{backgroundImage:"url(/images/place.png)",backgroundSize:"cover"}}>
      <Navbar/>
       <h1 style={{fontFamily:"montserrat",fontSize:"3rem",marginLeft:"1rem",fontWeight:"1000",marginTop:"0rem"}}>  <div className="card card-body">Commande {order._id}</div></h1>
        <div className="row top">
          <div className="col-2">
            <ul>
              <li>
                <div className="card card-body">
                  <h2>Livraison</h2>
                  <p>
                    <strong>Prénom:</strong> {order.shippingAddress.fullName} <br />
                    <strong>Addresse: </strong> {order.shippingAddress.address},
                    {order.shippingAddress.city},{' '}
                    {order.shippingAddress.postalCode},
                    {order.shippingAddress.country}
                  </p>
                  {order.isDelivered ? (
                    <MessageBox variant="success">
                     Délivré le {order.deliveredAt}
                    </MessageBox>
                  ) : (
                    <MessageBox variant="danger">Non Livré</MessageBox>
                  )}
                </div>
              </li>
              <li>
                <div className="card card-body">
                  <h2 >Paiement</h2>
                  <p>
                    <strong>Méthode de paiement:</strong> {order.payementMethod}
                  </p>
                  {order.isPaid ? (
                    <MessageBox variant="success">
                      Payé le {order.paidAt}
                    </MessageBox>
                  ) : (
                    <MessageBox variant="danger">Non Payé</MessageBox>
                  )}
                </div>
              </li>
              <li>
                <div className="card card-body">
                  <h2>Articles de la comande</h2>
                  <ul>
                    {order.orderItems.map((item) => (
                      <li key={item.product}>
                        <div className="row">
                          <div>
                            <img
                              src={item.image}
                              alt={item.name}
                              className="small"
                            ></img>
                          </div>
                          <div className="min-30">
                            <Link to={`/product/${item.product}`}>
                              {item.name}
                            </Link>
                          </div>
  
                          <div>
                            {item.qty} x {item.price} DT = {item.qty * item.price} DT
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-1">
            <div className="card card-body">
              <ul>
                <li>
                  <h2>Résumée</h2>
                </li>
                <li>
                  <div className="row">
                    <div>Articles</div>
                    <div>{order.itemsPrice.toFixed(2)} DT</div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div>Livraison</div>
                    <div>{order.shippingPrice.toFixed(2)} DT</div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div>Tax</div>
                    <div>{order.taxPrice.toFixed(2)} DT</div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div>
                      <strong> Prix Totale</strong>
                    </div>
                    <div>
                      <strong>{order.totalPrice.toFixed(2)}DT</strong>
                    </div>
                  </div>
                </li>
              {
                !order.isPaid &&  (
                <li>
                  {!sdkReady ? (
                    <LoadingBox></LoadingBox>
                  ) : (
                    <>
                      {errorPay && (
                        <MessageBox variant="danger">{errorPay}</MessageBox>
                      )}
                      {loadingPay && <LoadingBox></LoadingBox>}
                      <button onClick={OnClick} style={{backgroundColor:"orange", marginBottom:"1.5rem",width:"100% "}}>Payer à la livraison</button>
                      <PayPalButton
                        amount={order.totalPrice}
                        onSuccess={successPaymentHandler}
                      ></PayPalButton>
                    </>
                  )}
                </li>
                
              )}
            </ul>
            
          </div>
        </div>
      </div>
    </div>
  );
}