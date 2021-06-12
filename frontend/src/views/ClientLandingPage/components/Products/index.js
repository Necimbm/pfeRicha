import React, { useState } from 'react';
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
import SearchFeature from '../searchfeature/search';
import Rating from './rating';
import { useDispatch, useSelector } from 'react-redux';
import LoadingBox from 'views/components/LoadingBox';
import MessageBox from 'views/components/MessageBox';



const Products = ({ heading, data }) => {
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  
console.log(data);

  return (


    <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>

      <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '1rem 1rem' }}>
        <SearchFeature  />

      </div>

      <ProductWrapper>
        {data.map((product, index) => {
            return (
              <ProductCard key={index} class="flip-card" >
                <ProductImg src={product.image} alt={product.alt} class="flip-card-front" />
                <ProductInfo class="flip-card-back">
                  <ProductTitle><h1>{product.name}</h1></ProductTitle>
                 
                  <Rating
                    rating={product.rating}
                    numReviews={product.numReviews}
                  ></Rating>
                  <ProductPrice>{product.price} DT</ProductPrice>

                  <ProductButton href={`/product/${product._id}`}> Ajouter au panier</ProductButton>

                </ProductInfo>
              </ProductCard>
            );
          })}
      </ProductWrapper>
    </ProductsContainer>
  
  );
};

export default Products;
