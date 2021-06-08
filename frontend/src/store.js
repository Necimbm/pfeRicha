import { createStore,compose,applyMiddleware, combineReducers } from 'redux';

import thunk from 'redux-thunk';
import { userSigninReducer } from 'reducers/userReducers';
import { productListReducer } from 'reducers/productReducer';
import { productDetailsReducer } from 'reducers/productReducer';
import { cartReducer } from 'reducers/cartReducers';
const initialState = {};
const reducer = combineReducers({
cart:cartReducer,    
userSignin: userSigninReducer,
productList: productListReducer,
productDetails: productDetailsReducer
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,initialState,composeEnhancer(applyMiddleware(thunk)));
export default store; 