import React from 'react';
import ReactCircleModal from 'react-circle-modal';
import { Discription, Popup } from '../Products/ProductsElements';
import { FeatureContainer, FeatureButton } from './FeatureElements';

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Article de jour</h1>
      <p>moquette 5x10m juste pour 500DT</p>
      
      <ReactCircleModal 
      backgroundColor="rgba(166, 174, 179, 0.61)  "
    
      display="flex"
      alignItems="center"
      justifyContent="center"

      toogleComponent={onClick => (
        <FeatureButton onClick={onClick}>Ajouter au panier</FeatureButton>
        
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
    </FeatureContainer>
  );
};

export default Feature;