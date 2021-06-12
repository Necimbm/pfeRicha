import Axios from "axios"
import { CART_SAVE_PAYMENT_METHOD } from "constants/cartConstants";
import { CART_SAVE_SHIPPING_ADDRESS } from "constants/cartConstants";
import { CART_ADD_ITEM_FAIL } from "constants/cartConstants";
import { CART_REMOVE_ITEM } from "constants/cartConstants";
import { CART_ADD_ITEM } from "constants/cartConstants";


export const addToCart=(productId,qty)=> async(dispatch,getState)=>{
    const data = await Axios.get(`/api/product/${productId}`);
   
    console.log(data);
    const {
      cart: { cartItems },
    } = getState();
   
      dispatch({
        type: CART_ADD_ITEM,
        payload: {
          name: data.data.name,
          image: data.data.image,
          price: data.data.price,
          countInStock: data.data.countInStock,
          product: data.data._id,
          seller: data.data.seller,
          qty,
        },
      });
      localStorage.setItem(
        'cartItems',
        JSON.stringify(getState().cart.cartItems)
      );
    
  };
  export const removeFromCart = (productId) => (dispatch, getState) => {
    dispatch({ type: CART_REMOVE_ITEM, payload: productId });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
  };
  export const saveShippingAddress = (data) => (dispatch) => {
    dispatch({ type: CART_SAVE_SHIPPING_ADDRESS, payload: data });
    localStorage.setItem('shippingAddress', JSON.stringify(data));
  };
  export const savePaymentMethod = (data) => (dispatch) => {
    dispatch({ type: CART_SAVE_PAYMENT_METHOD, payload: data });
    localStorage.setItem('PaymentMethod', JSON.stringify(data));
  };