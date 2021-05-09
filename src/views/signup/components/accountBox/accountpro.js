import React, { useContext } from "react";
import { Switch, Box, Grid } from "@material-ui/core";
import { FormControlLabel } from '@material-ui/core';

import {
  BoldLink,
  BoxContainer3,
  FormContainer3,
  MutedLink,
  SubmitButton3,
  Input2,
  MutedLink2,
  Home2,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import ".";
import { Home } from "../../../LandingPage/components/Navbar/NavbarElements";


export function Accountpro() {
  const { switchToSignup2 } = useContext(AccountContext);
 
  const [state] = React.useState({
    checkedA: true,
    checkedB: true,
  });
  const { switchToSignin } = useContext(AccountContext);
  return (
    
    <BoxContainer3>
    
      <FormContainer3>
        <div className="grid_container">
         <div className="grid_item">
           <Input2 type="text" placeholder="Nom Complet" />
          <Input2  type="email" placeholder="Email/Numéro de téléphone" />
          <Input2  type="password" placeholder="Mot de passe" /> 
         </div> 
         <div className="grid_item">
           <Input2 type="text" placeholder="Nom Complet" />
          <Input2  type="email" placeholder="Email/Numéro de téléphone" />
          <Input2  type="password" placeholder="Mot de passe" /> 
          </div> 
          <div className="grid_item">
          <Input2 type="text" placeholder="Nom Complet" />
          <Input2  type="email" placeholder="Email/Numéro de téléphone" />
          <Input2  type="password" placeholder="Mot de passe" /> 
      </div> 
         </div>
         <FormControlLabel control={<Switch checked={state.checkedA} size="small" color="transparent"/>} onClick={switchToSignup2} label={<Box component="div" fontSize={12} fontFamily="Arial" color="orange"> pro </Box>}/>

      <SubmitButton3 type="submit">s'inscrire</SubmitButton3>
      <MutedLink href="#">
        Vous avez déja un compte ?
        <BoldLink href="#" onClick={switchToSignin}>
          Se connecter
        </BoldLink>
        
      </MutedLink>
      <Home2 href="/"  >
          Acceuil 
          <Home/>
        </Home2> 
      </FormContainer3>
      
    </BoxContainer3>
  );
}
