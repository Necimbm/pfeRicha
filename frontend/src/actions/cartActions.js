import Axios from "axios"
import { CART_ADD_ITEM_FAIL } from "constants/cartConstants";
import { CART_REMOVE_ITEM } from "constants/cartConstants";
import { CART_ADD_ITEM } from "constants/cartConstants";
import product from '../data'

export const addToCart=(productId,qty)=> async(dispatch,getState)=>{
    const data = product.products.find(x=> x._id === productId);
    const {
      cart: { cartItems },
    } = getState();
    if (cartItems.length > 0 && data.seller._id !== cartItems[0].seller._id) {
      dispatch({
        type: CART_ADD_ITEM_FAIL,
        payload: `Can't Add To Cart. Buy only from ${cartItems[0].seller.seller.name} in this order`,
      });
    } else {
      dispatch({
        type: CART_ADD_ITEM,
        payload: {
          name: data.name,
          image: data.img,
          price: data.price,
          countInStock: data.countInStock,
          product: data._id,
          seller: data.seller,
          qty,
        },
      });
      localStorage.setItem(
        'cartItems',
        JSON.stringify(getState().cart.cartItems)
      );
    }
  };
  export const removeFromCart = (productId) => (dispatch, getState) => {
    dispatch({ type: CART_REMOVE_ITEM, payload: productId });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
  };