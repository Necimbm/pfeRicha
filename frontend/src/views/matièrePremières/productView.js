
import React, { useEffect, useState } from 'react'

import LoadingBox from 'views/components/LoadingBox';
import MessageBox from 'views/components/MessageBox';
import Rating from 'views/ClientLandingPage/components/Products/rating';
import { ProductCard, ProductImg } from './productViewElement';
import { Link } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { detailsProduct } from 'actions/productActions';
import data from '../ArtisanLandingPage/components/Products/data'


export default function Descrption(props) {
  const dispatch = useDispatch();
  const productlId = props.match.params._id;
  const [qty, setQty] = useState(1)
  const productlDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productlDetails;
  const productl = data.products.find(x => x._id === productlId);

  useEffect(() => {
    dispatch(detailsProduct(productlId));
  }, [dispatch, productlId]);

  const addToCarthandler = () => {
    props.history.push(`/cartArtisan/${productlId}?qty=${qty}`)
  }

  return <div >
    {/* {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (<div>
    
     </div>)} */}
    <a className="return" href='/artisanAcceuil'>Retourner à l'acceuil</a>
    <div className="row top">


      <div className="col-1">
        <ProductCard>
          <ProductImg classeName=" large " src={productl.img} alt={productl.name} ></ProductImg>
        </ProductCard>
      </div>
      <div className="col-1 ">
        <div className="col-3 ">
          <ul>
            <li >
              <h1>{productl.name}</h1>
            </li>
            <li >
              <Rating className="flex" rating={productl.rating} numReviews={productl.numReviews}></Rating>
            </li>
            <li className="row">Price:<p>{productl.price}</p> </li>
            <li className="row">Description:
              <p>{productl.desc}</p>
            </li>

          </ul>
        </div>

        <div className="col-3">
          <div className="card card-body ">
            <ul>
              <li>
                <div className="row">
                  <div>Price</div>
                  <div className="price">{productl.price}</div>
                </div>
              </li>
              <li>
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
              </li>
              {productl.countInStock > 0 && (
                <>
                  <li>
                    <div className="row">
                      <div>Qty</div>
                      <div>
                        <select
                          value={qty}
                          onChange={(e) => setQty(e.target.value)}
                        >
                          {
                            [...Array(productl.countInStock).keys()].map(x =>
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
  </div>

}


