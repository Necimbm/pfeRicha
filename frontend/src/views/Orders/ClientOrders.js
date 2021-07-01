import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createOrder, deleteOrder, listOrders } from '../../actions/orderActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { ORDER_DELETE_RESET } from '../../constants/orderConstants';

import { addToCart, removeFromCart } from '../../actions/cartActions';
import { Link } from 'react-router-dom';
import Navbar from 'views/ClientLandingPage/components/Navbar';

export default function OrderListScreen(props) {

  const orderList = useSelector((state) => state.orderList);
  const { loading, error, orders } = orderList;  
  const cart = useSelector((state) => state.cart);

  const userSignin = useSelector((state) => state.userSignin);
  const orderCreate = useSelector((state) => state.orderCreate);
  const { success, order } = orderCreate;
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: ORDER_DELETE_RESET });
    dispatch(listOrders());
  }, [dispatch]);




  return (
  <div >
  <Navbar/>
  <h1 style={{fontFamily:"montserrat",fontSize:"5rem",fontWeight:"1000",marginTop:"5rem"}}>COMMANDES<fa CartPlus/></h1>
      <div className="row top"></div>
      { loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="row top" style={{paddingTop:"5rem"}}>
          {orderList.orders.map((order) => (
            <div>
            {order.orderItems.map((commande) => (
            <div className="card">
            <div className="col-1">
              <ul>
                  <li key={commande._id}>
                    <div className="row">
                      <div className="min-30">
                      <img className="small " src={commande.image} alt={commande.name} ></img>
                      </div>
                      <div className="min-30">
                      {commande.name} 
                      </div>
                      <div className="min-30">{commande.price} DT</div>
                      <div>
                        <button className="primary block" onClick={()=>{ props.history.push(`/commandesdetails/${order._id}`);}}>
                    Détailles
                    </button>
                      </div>
                    </div>
                  </li>
                
              </ul>
          </div>
          
            </div>
            ))}
          
            </div>
            
             ))}
      </div>
      )}
   
       
      
  </div>
   
  );
}

