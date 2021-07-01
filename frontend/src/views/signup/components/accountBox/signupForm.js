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
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "actions/productActions";


export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);
  const { switchToAccountPro } = useContext(AccountContext);
  const [formData, setformData] = useState(null);

  const userSignup = useSelector((state) => state.userRegister);
  const { userInfo, loading, error } = userSignup;

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData)
      dispatch(signup(formData.email, formData.password, formData.name, formData.role));
      dispatch(listProducts({}));
  };
  const handleChange = (event) => {
    setformData({ ...formData, [event.target.name]: event.target.value, role: 0 });
  };
  useEffect(() => {

    if (localStorage.getItem('userInfo')) {
      switch (JSON.parse(localStorage.getItem('userInfo')).payload.user.role) {
        case 0: return props.propsLogin.history.push('/acceuil');
        case 1: return props.propsLogin.history.push('/fournisseur');
        case 2: return props.propsLogin.history.push('/artisanAcceuil');
        case 3: return props.propsLogin.history.push('/admin');
        default: ;
      }
    }
  }, [props.propsLogin.history, userInfo]);

  return (
    <BoxContainer2>
      <FormContainer2 onSubmit={handleSubmit}>
      {error && <div style={{color:"red",fontSize:"10px",textAlign:"center",position:"absolute",left:"0",top:"0",marginTop:"18rem",marginLeft:"4rem",opacity:"50%"}}>{error}</div>}
        <Input2 type="text" name="name" placeholder="Prénom" onChange={handleChange} />
        <Input2 type="email" name="email" placeholder="Email" onChange={handleChange} />
        <Input2 type="password" name="password" placeholder="Mot de passe" onChange={handleChange} />
        <Input2 type="password" placeholder="Confirmer le mot de passe" onChange={handleChange} />
        <FormControlLabel control={<Switch size="small" color="default" />} onClick={switchToAccountPro} label={<Box component="div" margin={0} fontSize={12} fontFamily="Arial" color="#766161"> pro </Box>} />
       
        <SubmitButton2 type="submit">s'inscrire</SubmitButton2>
        <Marginer direction="vertical" margin="1em" />
        <MutedLink2 href="#">
        Vous avez déja un compte ?
        <BoldLink href="#" onClick={switchToSignin}>
          Se connecter
        </BoldLink>
      </MutedLink2>
      <Marginer direction="vertical" margin="1em" />
      <Home2 href="/"  >
        Acceuil
        <Home />
      </Home2>
      </FormContainer2>


      
    </BoxContainer2>

  );
}