import { createStore,compose,applyMiddleware, combineReducers } from 'redux';
import { cartReducer } from './reducers/cartReducers';
import {
    orderCreateReducer,
    orderDeleteReducer,
    orderDeliverReducer,
    orderDetailsReducer,
    orderListReducer,
    orderMineListReducer,
    orderPayReducer,
    orderSummaryReducer,
  } from './reducers/orderReducers';
  import {
    productCategoryListReducer,
    productCreateReducer,
    productDeleteReducer,
    productDetailsReducer,
    productListReducer,
    productReviewCreateReducer,
    productUpdateReducer,
  } from './reducers/productReducer';
  import {



    userSignupReducer,
    userSigninReducer,

   
  } from './reducers/userReducers';
import thunk from 'redux-thunk';

const initialState = {
    productList:{
        productsList:localStorage.getItem('productsList')
        ? JSON.parse(localStorage.getItem('productsList'))
        :[],
    },
    userSignup:{
        userInfo:localStorage.getItem('userInfo')
        ? JSON.parse(localStorage.getItem('userInfo'))
        :null,
        
    },
    userSignin:{
        userInfo:localStorage.getItem('userInfo')
        ? JSON.parse(localStorage.getItem('userInfo'))
        :null,
        
    },
    cart:{
        cartItems:localStorage.getItem('cartItems')
        ? JSON.parse(localStorage.getItem('cartItems'))
        :[],
        shippingAddress: localStorage.getItem('shippingAddress')
        ? JSON.parse(localStorage.getItem('shippingAddress'))
        : {},
      paymentMethod:localStorage.getItem('paymentMethod')
      ? JSON.parse(localStorage.getItem('paymentMthod'))
      : {} ,
    }
};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignin: userSigninReducer,
    userRegister: userSignupReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderMineList: orderMineListReducer,
    productCreate: productCreateReducer,
    productUpdate: productUpdateReducer,
    productDelete: productDeleteReducer,
    orderList: orderListReducer,
    orderDelete: orderDeleteReducer,
    orderDeliver: orderDeliverReducer,
    productCategoryList: productCategoryListReducer,
    productReviewCreate: productReviewCreateReducer,
    orderSummary: orderSummaryReducer
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,initialState,composeEnhancer(applyMiddleware(thunk)));
export default store; 