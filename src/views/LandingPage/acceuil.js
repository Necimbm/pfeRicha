import React from 'react';

import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData, productDataTwo } from './components/Products/data';
import Feature from './components/Feature';
import Footer from './components/Footer';
import styled from "styled-components";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: column;

 
`;
function acceuil() {
  return (
    <AppContainer>
     <GlobalStyle/>
      <Hero />
      <Products heading='Votre meilleur choix' data={productData} />
      <Feature />
      <Products heading='Personnaliser votre commande' data={productDataTwo} />
      <Footer />
  

    </AppContainer>
      
  );
}

export default acceuil;
