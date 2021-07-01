
import React, { useEffect, useState } from 'react'
import './styles.css'
import LoadingBox from 'views/components/LoadingBox';
import MessageBox from 'views/components/MessageBox';
import Rating from 'views/ClientLandingPage/components/Products/rating';
import { ProductCard, ProductImg } from './productViewElement';
import { Link } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { detailsProduct } from 'actions/productActions';
import data from '../ClientLandingPage/components/Products/data'
import Navbar from 'views/ClientLandingPage/components/Navbar';




export default function Descrption(props) {
  const dispatch = useDispatch();
  const productlId = props.match.params._id;
  const [qty, setQty] = useState(1)
  const productlDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productlDetails;
  
  
 
  useEffect(() => {
    dispatch(detailsProduct(productlId));
  }, [dispatch, productlId]);

  const addToCarthandler = () => {
    props.history.push(`/cart/${productlId}?qty=${qty}`)
  } 
  return <div className="background" >
    { loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (<div>
    
     
     <Navbar/>
    <div className="row top" >
      <div className="col-1">
        <ProductCard>
          <ProductImg src={product.image} alt={product.name}/>
        </ProductCard>
      </div>
      <div className="col-1">
        <div className="col-3">
        <div className="card card-body ">
          <ul>
            <li >
              <h1 >{product.name}</h1>
            </li>
            <li >
              <Rating className="flex" rating={product.rating} numReviews={product.numReviews}></Rating>
            </li>
            <li className="row">Prix:<p>{product.price} DT</p> </li>
            <li className="row">Description:
              <p>{product.description}</p>
            </li>

          </ul>
          </div>
        </div>

        <div className="col-3">
          <div className="card card-body ">
            <ul>
              <li>
                <div className="row">
                  <div>Prix</div>
                  <div className="price">{product.price} DT</div>
                </div>
              </li>
              <li>
                <div className="row ">
                  <div>Status</div>
                  <div>
                    {product.countInStock > 0 ? (
                      <div className="success">DISPONIBLE</div>
                    ) : (
                      <div className="danger">NON DISPONIBLE</div>
                    )}
                  </div>
                </div>
              </li>
              {product.countInStock > 0 && (
                <>
                  <li>
                    <div className="row">
                      <div>Quantité</div>
                      <div>
                        <select
                          value={qty}
                          onChange={(e) => setQty(e.target.value)}
                        >
                          {
                            [...Array(product.countInStock).keys()].map(x =>
                            (
                              <option key={x + 1} value={x + 1}>
                                {x + 1}
                              </option>
                            ))
                          }
                        </select>
                      </div>

                    </div>
                  </li>
                  <li>
                    <button onClick={addToCarthandler} className="primary block" type="submit">
                      Ajouter au panier <i class="fas fa-cart-plus" />
                    </button>
                  </li>
                </>
              )}

            </ul>
          </div>
        </div>
      </div>

    </div>
    </div>)} 
  </div>

}


