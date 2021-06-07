
import React, { useEffect } from 'react'

import './styles.css';
import LoadingBox from 'views/components/LoadingBox';
import MessageBox from 'views/components/MessageBox';
import Rating from 'views/ClientLandingPage/components/Products/rating';
import { ProductCard, ProductImg } from './productViewElement';
import { Link } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { detailsProduct } from 'actions/productActions';
import data from '../ClientLandingPage/components/Products/data'


export default function Descrption(props) {
  const dispatch = useDispatch();
  const productlId = props.match.params.id;
  const productlDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productlDetails;
  const productl = data.products.find(x=> x.id === productlId);

  useEffect(() => {
    dispatch(detailsProduct(productlId));
  }, [dispatch, productlId]);



    return <div >
          {/* {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (<div>
    
     </div>)} */}
     <Link href='/acceuil'>Retourner à l'acceuil</Link>
      <div className="row top">
     
        <div className="col-2">
        <ProductCard>
        <ProductImg classeName=" large " src={productl.img} alt={productl.name} ></ProductImg>
        </ProductCard>
        </div>
        <div className="col-1">
          <ul>
            <li>
              <h1>{productl.name}</h1>
              </li>
              <li>
              <Rating rating={productl.rating} numReviews={productl.numReviews}></Rating>
              </li>
              <li>{productl.price}</li>
              <li>Description:
                <p>{productl.desc}</p>
              </li>

          </ul>
        </div>
        
        <div className="card card-body col-1">
                    <div className="row">
                      <div>Price</div>
                      <div className="price">{productl.price}</div>
                    </div>
                    <div className="row ">
                      <div>Status</div>
                        <div>
                        {productl.countInStock > 0 ? (
                          <span className="success">In Stock</span>
                        ) : (
                          <span className="danger">Unavailable</span>
                        )}
                        </div>
                    
                    </div>
                    <div className="row ">
                    <button className="primary block" type="submit">
                       Ajouter au panier <i class="fas fa-cart-plus"></i>
                       
                      </button>
                      </div>
                      </div>    
        </div>  
      </div>
    
}


