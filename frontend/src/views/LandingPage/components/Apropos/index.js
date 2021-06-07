import React from 'react';
import ReactCircleModal from 'react-circle-modal';
import { Bars } from '../Navbar/NavbarElements';
import { Discription, Popup } from '../Products/ProductsElements';
import { FeatureContainer, FeatureButton, Warper } from './FeatureElements';

const Apropos = () => {
  return (
    <FeatureContainer>
      <Warper>
      <h1 style={{fontFamily:"montserrat"}}>Richa <Bars style={{fontSize:"6rem",marginLeft:"3rem",paddingTop:"1rem"}}/></h1>
      <p style={{fontFamily:"montserrat"}}>Richa vous offre des produits artisanaux où la creativité et la haute qualité sont garantis. </p>
      </Warper>
    </FeatureContainer>
  );
};

export default Apropos;