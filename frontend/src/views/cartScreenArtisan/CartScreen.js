import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Navbar from 'views/ClientLandingPage/components/Navbar';
import { addToCart, removeFromCart } from '../../actions/cartActions';
import MessageBox from '../components/MessageBox';
import './styles.css'





export default function CartScreen(props) {
  const productId = props.match.params._id;
  const qty = props.location.search
    ? Number(props.location.search.split('=')[1])
    : 1;
  const cart = useSelector((state) => state.cart);
  const { cartItems, error } = cart;
  
  const dispatch = useDispatch();
  useEffect(() => {

    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    // delete action
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    props.history.push('/shipping');
  };
  return (<div>
<Navbar/>
<h1 style={{fontFamily:"montserrat",fontSize:"5rem",fontWeight:"1000",marginTop:"5rem"}}>Panier <fa CartPlus/></h1>
    <div className="row top" style={{paddingTop:"5rem"}}>
    
      <div className="col-2">
        
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        {cartItems.length === 0 ? (
          <MessageBox>
           Panier est vide. <Link to="/acceuil">Commencer vos achats</Link>
          </MessageBox>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.product}>
                <div className="row">
                  <div>
                    <img className="small"
                      src={item.image}
                      alt={item.name}
                    ></img>
                  </div>
                  <div className="min-30">
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </div>
                  <div>
                    <select
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>{item.price}</div>
                  <div>
                    <button
                      type="button"
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      Annuler
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="col-1">
        <div className="card card-body">
          <ul>
            <li>
              <h2>
                Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)} items) :
                {cartItems.reduce((a, c) => a + c.price * c.qty, 0)} DT
              </h2>
            </li>
            <li>
              <button
                type="button"
                onClick={checkoutHandler}
                className="primary block"
                disabled={cartItems.length === 0}
              >
                Continuer vers 
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  );
}