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
import Filter from 'views/ClientLandingPage/components/filter/filter';





const Products = ({ heading, data }) => {
  const [serachTerms, setSerachTerms] = useState("");
  const [filter, setFilter] = useState("");

  const  updateFilter =(newFilter)=>{
    setFilter(newFilter);
  
    
  }
  const updateSrachTerms= (newSearchTerm)=>{
    setSerachTerms(newSearchTerm);
   
  }
  return (
    <ProductsContainer>
      <ProductsHeading className="card">{heading}</ProductsHeading>

      <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '1rem 1rem' }}>
        <SearchFeature
          refreshFunction={updateSrachTerms}
        />
        <Filter filter={updateFilter} />
      </div>

      <ProductWrapper >
        {data.filter((val)=> {
          if(serachTerms===""){
            if(filter === ""){
            return val;
          }else if(val.category.toLowerCase().includes(filter.toLowerCase())){
            return val;
          }
          }else if(val.name.toLowerCase().includes(serachTerms.toLowerCase())){
            return val;}

          
        }).map((product, index) => {
          return (
            <ProductCard key={index} class="flip-card" >
              <ProductImg src={product.image} alt={product.alt} class="flip-card-front" />
              <ProductInfo class="flip-card-back">
                <ProductTitle>{product.name}</ProductTitle>
                <ProductDesc>{product.desc}</ProductDesc>
                <Rating
                  rating={product.rating}
                  numReviews={product.numReviews}
                ></Rating>
                <ProductPrice>{product.price} DT</ProductPrice>

                <ProductButton href={`/product/${product._id}`}>Ajouter au panier</ProductButton>

              </ProductInfo>
            </ProductCard>
          );
        })}
      </ProductWrapper>
    </ProductsContainer>
  );
};

export default Products;
