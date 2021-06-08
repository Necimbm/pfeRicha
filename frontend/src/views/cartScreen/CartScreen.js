import { addToCart } from 'actions/cartActions';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';

export default function CartScreen(props) {
    const productId=props.match.params._id;
    const dispatch=useDispatch;
    const qty=props.location.search?Number(props.location.search.split('=')[1]):1;

    useEffect(() => {
        if (productId){
            dispatch(addToCart(productId,qty));   
              
        }
    },[dispatch, productId, qty])
    return (
        <div>
    <h1>Carte screen</h1>
        <p>ADD TO CART :   {productId} QTY: {qty}</p>
        </div>
    )
}
