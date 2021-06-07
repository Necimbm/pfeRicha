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
  ProductButton,
 Popup,
 Discription
  
} from './ProductsElements';
import "./styles.css";
import ReactCircleModal from 'react-circle-modal'

const Products = ({ heading, data }) => {
  return (
    <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductWrapper>
        {data.map((product, index) => {
          return (
            <ProductCard key={index} class="flip-card" >
              <ProductImg src={product.img} alt={product.alt} class="flip-card-front"/>
              <ProductInfo class="flip-card-back">
                <ProductTitle>{product.name}</ProductTitle>
                <ProductDesc>{product.desc}</ProductDesc>
                <ProductPrice>{product.price}</ProductPrice>
                <ReactCircleModal 
      backgroundColor="rgba(166, 174, 179, 0.61)  "
    
      display="flex"
      alignItems="center"
      justifyContent="center"

      toogleComponent={onClick => (
        <ProductButton onClick={onClick}>{product.button}</ProductButton>
      )}
     
    >
      {(onClick) => (
        <Popup>
          <Discription>
           Voulez-vous passer votre commande ? connecter à votre compte ou inscrivez-vous si vous n'avez pas de compte.
          </Discription>
          <div class="buttons">
          <button className="button" onClick={onClick}>non</button>
          <a className="button" href="/signin" >
            Se connecter
          </a>
          <a className="button" href="/signup" >
           s'inscrire
          </a >
          </div>
        
        </Popup>
      )}
    </ReactCircleModal>
              </ProductInfo>
            </ProductCard>
          );
        })}
      </ProductWrapper>
    </ProductsContainer>
  );
};

export default Products;
