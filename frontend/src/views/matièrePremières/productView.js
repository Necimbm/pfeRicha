
import React from 'react'

import './styles.css';
import data from 'views/ArtisanLandingPage/components/Products/data';
import Rating from 'views/ArtisanLandingPage/components/Products/rating';
import { ProductCard, ProductImg } from './productViewElement';


export default function descrption(props) {
    const id =props.match.params.id; 
    const product = data.products.find(x => x.id === props.match.params.id);
    if(!product){
      
      return <div>Product Not Found</div>;
      
    } 
        



    return <div >
     
      
      <div className="row top">
      
        <div className="col-2">
        <ProductCard>
        <ProductImg classeName="flip-card-inner " src={product.img} alt={product.name} ></ProductImg>
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
                    <div className="row">
                    <div>Status</div>
                      <div>
                        {product.countInStock > 0 ? (
                          <span className="success">In Stock</span>
                        ) : (
                          <span className="danger">Unavailable</span>
                        )}
                      </div>
                    </div>
                    <button className="primary" type="submit">
                       Ajouter au panier <i class="fas fa-cart-plus"></i>
                      </button>
                      
                    </div>
        </div>  
      </div>
    
}


