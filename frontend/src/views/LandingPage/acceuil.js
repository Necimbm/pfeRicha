import React,{ useState } from "react";
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData, productDataTwo } from './components/Products/data';
import FeatureSection from './components/Feature';
import Footer from './components/Footer';
import styled from "styled-components";
import Apropos from"./components/Apropos";
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: column;
`;
export default function Acceuil() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <AppContainer>
     <GlobalStyle/>
     <Navbar toggle={toggle}> </Navbar>
    <Sidebar isOpen={isOpen} toggle={toggle} />
      <Hero />
      <Products heading='Top Ventes ' data={productData} />
      <FeatureSection />
      <Products heading='Personnaliser votre commande' data={productDataTwo} />
      <Apropos />
      <Footer />
     

    </AppContainer>
      
  );
}
;
