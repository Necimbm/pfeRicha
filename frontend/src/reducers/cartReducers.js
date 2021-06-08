import { CARD_ADD_ITEM } from "../constants/cartConstatnts";

export const cartReducer = (state={cartItems:[] }, action)=>{
    switch (action.type){
        case  CARD_ADD_ITEM :
            const item=action.payload;
            const existeItem = state.cartItems.find(x=> x.product=== item.product);
            if(existeItem){
                return{
                    ...state,
                    cartItems:state.cartItems.map(x=>
                        x.product === existeItem.product ? item:x),
            };
        }else {
            return{ ...state, cartItems:[...state.cartItems,item]}
        }

        default:
                return state;
    }
};