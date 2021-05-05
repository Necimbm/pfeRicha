import React, { useContext } from "react";
import { Switch, Box } from "@material-ui/core";
import { FormControlLabel } from '@material-ui/core';
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
  
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";



export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);
  const { switchToAccountPro } = useContext(AccountContext);
  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" placeholder="Nom Complet" />
        <Input type="email" placeholder="Email/Numéro de téléphone" />
        <Input type="password" placeholder="Mot de passe" />
        <Input type="password" placeholder="Confirmer le mot de passe" /> 
        <FormControlLabel control={<Switch size="small" color="default" />} onClick={switchToAccountPro} label={<Box component="div" fontSize={12} fontFamily="Arial" color="orange"> pro </Box>}/>
      </FormContainer>      
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit">s'inscrire</SubmitButton>
      <Marginer direction="vertical" margin="10em" />
      <MutedLink href="#">
        Vous avez déja un compte ?
        <BoldLink href="#" onClick={switchToSignin}>
          Se connecter
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}