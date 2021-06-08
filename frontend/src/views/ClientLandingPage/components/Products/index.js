import React from 'react';
import {
  ProductsContainer,
  ProductWrapper,
  ProductsHeading,
  ProductTitle,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductDesc,
  ProductPrice,
  ProductButton
  
} from './ProductsElements';
import "./styles.css";
import SearchFeature from '../searchfeature/search';
import Rating from './rating';





const Products = ({ heading, data }) => {


  return (
  
    <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      
      <div style={{ display:'flex', justifyContent:'flex-end', margin:'1rem 1rem'}}>
      <SearchFeature/>
      </div>
     
      <ProductWrapper>
        {data.map((product, index) => {
          return (
            <ProductCard key={index} class="flip-card" >
              <ProductImg src={product.img} alt={product.alt} class="flip-card-front"/>
              <ProductInfo class="flip-card-back">
                <ProductTitle>{product.name}</ProductTitle>
                <ProductDesc>{product.desc}{product.seller}</ProductDesc>
                <Rating 
                rating={product.rating}
                numReviews={product.numReviews}
                ></Rating>
                <ProductPrice>{product.price}</ProductPrice>
               
        <ProductButton href={`/product/${product._id}`}> {product.button}</ProductButton>
    
              </ProductInfo>
            </ProductCard>
          );
        })}
      </ProductWrapper>
    </ProductsContainer>
  );
};

export default Products;
