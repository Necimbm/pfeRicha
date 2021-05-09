import React, { useContext } from "react";
import { Switch, Box } from "@material-ui/core";
import { FormControlLabel } from '@material-ui/core';
import {
  BoldLink,
  BoxContainer2,
  FormContainer2,
  Home2,
  Input2,
  MutedLink2,
  SubmitButton2,
  
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import { Home } from "../../../LandingPage/components/Navbar/NavbarElements";



export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);
  const { switchToAccountPro } = useContext(AccountContext);
  return (
    <BoxContainer2>
      <FormContainer2>
        <Input2 type="text" placeholder="Nom Complet" />
        <Input2 type="email" placeholder="Email/Numéro de téléphone" />
        <Input2 type="password" placeholder="Mot de passe" />
        <Input2 type="password" placeholder="Confirmer le mot de passe" /> 
        <FormControlLabel control={<Switch size="small" color="default" />} onClick={switchToAccountPro} label={<Box component="div" margin ={0} fontSize={12} fontFamily="Arial" color="orange"> pro </Box>}/>
      
      </FormContainer2>      
      <Marginer direction="vertical" margin={10} />
      <SubmitButton2 type="submit">s'inscrire</SubmitButton2>
      <Marginer direction="vertical" margin="2em" />
      
      <MutedLink2 href="#">
        Vous avez déja un compte ?
        <BoldLink href="#" onClick={switchToSignin}>
          Se connecter
        </BoldLink>
        
      </MutedLink2>
      <Home2 href="/"  >
          Acceuil 
          <Home/>
        </Home2> 
    </BoxContainer2>
    
  );
}