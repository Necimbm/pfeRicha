import React, { useContext,useState } from "react";
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
  Home
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";


const initialState ={name:'', email: '', password: '', confirmPassword:''}

export function SignupForm(props) {
  const [formData, setformData] = useState(initialState);
  const { switchToSignin } = useContext(AccountContext);
  const { switchToAccountPro } = useContext(AccountContext);
 
  const handleSubmit = (e)=>{
    e.preventDefault();
  
      };

      const   handleChange = (e)=>{
        setformData({...formData, [e.target.name]: e.target.value});
          };


  return (
    <BoxContainer2>
      <FormContainer2 onSubmit={handleSubmit}>
        <Input2 type="text" name="name" placeholder="Nom Complet" onChange={handleChange}/>
        <Input2 type="email" name="email" placeholder="Email/Numéro de téléphone"  onChange={handleChange}/>
        <Input2 type="password" name="password" placeholder="Mot de passe" onChange={handleChange} />
        <Input2 type="password" name="confirmPassword" placeholder="Confirmer le mot de passe"  onChange={handleChange} /> 
        <FormControlLabel control={<Switch size="small" color="default" />} onClick={switchToAccountPro} label={<Box component="div" margin ={0} fontSize={12} fontFamily="Arial" color="#766161"> pro </Box>}/>
        <SubmitButton2 type="submit">s'inscrire</SubmitButton2>
      </FormContainer2>      
      <Marginer direction="vertical" margin={10} />
     
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