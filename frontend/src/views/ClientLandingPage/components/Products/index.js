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
import Filter from '../filter/filter';



const Products = ({ heading, data }) => {
  const [serachTerms, setSerachTerms] = useState("");
  const [filter, setFilter] = useState("");

  const  updateFilter =(newFilter)=>{
    setFilter(newFilter);
    console.log(newFilter);
    
  }
  const updateSrachTerms= (newSearchTerm)=>{
    setSerachTerms(newSearchTerm);
   
  }

  return (


    <ProductsContainer>
     
      <ProductsHeading className="btn-shine" target="_blank">{heading}</ProductsHeading>

      <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '1rem 1rem' }}>
        <SearchFeature refreshFunction = {updateSrachTerms} />
        <Filter filter={updateFilter} />
      </div>

      <ProductWrapper>
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
