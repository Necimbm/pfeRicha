import React, { useContext } from "react";
import {
  SubmitButton,
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  Home1,
  Home
  
} from "./common";

import { AccountContext } from "./accountContext";






export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer> 
        <Input id="email" type="email" placeholder="Email / Numéro de téléphone" />
        <Input id="password" type="password" placeholder="Mot de passe" />
        <MutedLink href="#">Mot de passe oublié ?</MutedLink>
      </FormContainer>
     
      <SubmitButton type="submit" >Se connecter</SubmitButton>
      <MutedLink href="#">
        Vous n'avez pas de compte ?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Inscrivez-vous
        </BoldLink>
      </MutedLink>
      <Home1 href="/"  >
          Acceuil 
          <Home/>
        </Home1> 
        
    </BoxContainer>
  );
}