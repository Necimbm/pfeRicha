import React, { useContext, useEffect, useState } from "react";
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
import { signup } from "actions/userActions";
import { useDispatch } from "react-redux";



export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);
  const { switchToAccountPro } = useContext(AccountContext);
  const [formData, setformData] = useState(null);

  
  const dispatch = useDispatch();
  const handleSubmit = (e)=>{
    e.preventDefault();   
    if(formData)
    dispatch(signup(formData.email,formData.password,formData.name,formData.role));
    
    
      };
      const handleChange = (event)=>{
        setformData({ ...formData, [event.target.name]: event.target.value,role:0});
      };
      useEffect(()=>{
        if(localStorage.getItem('signupInfo')){
          props.propsLogin.history.push('/acceuil')}
        }, [props.propsLogin.history]);

  return (
    <BoxContainer2>
      <FormContainer2 onSubmit={handleSubmit}>
        <Input2 type="text" name="name" placeholder="Prénom" onChange={handleChange} />
        <Input2 type="email" name="email" placeholder="Email/Numéro de téléphone"onChange={handleChange} />
        <Input2 type="password" name="password" placeholder="Mot de passe" onChange={handleChange}/>
        <Input2 type="password" placeholder="Confirmer le mot de passe"onChange={handleChange} /> 
        <FormControlLabel control={<Switch size="small" color="default" />} onClick={switchToAccountPro} label={<Box component="div" margin ={0} fontSize={12} fontFamily="Arial" color="#766161"> pro </Box>}/>
        <Marginer direction="vertical" margin={10} />
      <SubmitButton2 type="submit">s'inscrire</SubmitButton2>
      <Marginer direction="vertical" margin="2em" />
      </FormContainer2>      
     
      
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