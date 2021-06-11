import React, {useState} from 'react';
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
  const [SearchTerms, setSearchTerms] = useState("")
  const [filters, setfilters] = useState({
    domaine: [],
    price:[]
  })
  const updateSearchTerms= (newSearchTerm) => {
    setSearchTerms(newSearchTerm)
  }


 
  return (
    <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      
      <div style={{ display:'flex', justifyContent:'flex-end', margin:'1rem 1rem'}}>
      <SearchFeature
      refreshFunction={updateSearchTerms}
      />
      </div>
     
      <ProductWrapper>
        {data.map((product, index) => {
          return (
            <ProductCard key={index} class="flip-card" >
              <ProductImg src={product.img} alt={product.alt} class="flip-card-front"/>
              <ProductInfo class="flip-card-back">
                <ProductTitle>{product.name}</ProductTitle>
                <ProductDesc>{product.desc}</ProductDesc>
                <Rating 
                rating={product.rating}
                numReviews={product.numReviews}
                ></Rating>
                <ProductPrice>{product.price}</ProductPrice>
               
        <ProductButton href={`/matiere/${product._id}`}> {product.button}</ProductButton>
    
              </ProductInfo>
            </ProductCard>
          );
        })}
      </ProductWrapper>
    </ProductsContainer>
  );
};

export default Products;
