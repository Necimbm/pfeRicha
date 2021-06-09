import { createStore,compose,applyMiddleware, combineReducers } from 'redux';

import thunk from 'redux-thunk';
import { userSigninReducer } from 'reducers/userReducers';
import { productListReducer } from 'reducers/productReducer';
import { productDetailsReducer } from 'reducers/productReducer';
import { cartReducer } from 'reducers/cartReducers';
import { userSignupReducer } from 'reducers/userReducers';
const initialState = {
    userSignup:{
        signupInfo:localStorage.getItem('userInfo')
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
        :null,
    }
};
const reducer = combineReducers({
userSignup:userSignupReducer,
cart: cartReducer,    
userSignin: userSigninReducer,
productList: productListReducer,
productDetails: productDetailsReducer
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,initialState,composeEnhancer(applyMiddleware(thunk)));
export default store; 