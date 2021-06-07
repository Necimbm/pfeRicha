
import React from 'react'

import './styles.css';
import LoadingBox from 'views/components/LoadingBox';
import MessageBox from 'views/components/MessageBox';
import Rating from 'views/ClientLandingPage/components/Products/rating';
import { ProductCard, ProductImg } from './productViewElement';
import { Link } from '@material-ui/core';
import { useSelector } from 'react-redux';


export default function descrption(props) {
  const productId = props.match.params.id;
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  
  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);



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
        <ProductImg classeName=" large " src={product.img} alt={product.name} ></ProductImg>
        </ProductCard>
        </div>
        <div className="col-1">
          <ul>
            <li>
              <h1>{product.name}</h1>
              </li>
              <li>
              <Rating rating={product.rating} numReviews={product.numReviews}></Rating>
              </li>
              <li>{product.price}</li>
              <li>Description:
                <p>{product.desc}</p>
              </li>

          </ul>
        </div>
        
        <div className="card card-body col-1">
                    <div className="row">
                      <div>Price</div>
                      <div className="price">{product.price}</div>
                    </div>
                    <div className="row ">
                      <div>Status</div>
                        <div>
                        {product.countInStock > 0 ? (
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


