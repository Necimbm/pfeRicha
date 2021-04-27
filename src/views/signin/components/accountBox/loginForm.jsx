import React, { useContext } from "react";
import {
  SubmitButton,
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  BoldLink2,
  
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";




export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="email" placeholder="Email / Numéro de téléphone" />
        <Input type="password" placeholder="Mot de passe" />
      </FormContainer>
      <Marginer direction="vertical" margin={20} />
      <MutedLink href="#">Mot de passe oublié ?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit">Se connecter</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Vous n'avez pas de compte ?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Inscrivez-vous
        </BoldLink>
       
      </MutedLink>
      <BoldLink2 href="/" >
          Acceuil
        </BoldLink2>
    </BoxContainer>
  );
}