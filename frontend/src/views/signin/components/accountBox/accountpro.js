import React, { useContext } from "react";
import { Switch, Box } from "@material-ui/core";
import { FormControlLabel } from '@material-ui/core';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {
  BoldLink,
  BoxContainer3,
  FormContainer3,
  MutedLink,
  SubmitButton3,
  Input2,
  Home2,
} from "./common";
import { AccountContext } from "./accountContext";
import "./accountprostyle.css";
import { Home } from "../../../LandingPage/components/Navbar/NavbarElements";


export function Accountpro() {
  const { switchToSignup2 } = useContext(AccountContext);
 
  const [state] = React.useState({
    checkedA: true,
    checkedB: true,
  });
  const { switchToSignin } = useContext(AccountContext);
  
    const [Act, setAct] = React.useState('');
    const [Gouv, setGouv] = React.useState('');
    
    const [taille, setTaille] = React.useState('');
  
    const handleAct = (event) => {
      setAct(event.target.value);
    };
    const handleGouv = (event) => {
      setGouv(event.target.value);
    };
   
    const handleTaille = (event) => {
      setTaille(event.target.value);
    };
  return (
    
    <BoxContainer3>
    
      <FormContainer3>
        <div className="grid_container">
         <div className="grid_item">
           <Input2 type="text" placeholder="Nom Complet" />
          <Input2  type="email" placeholder="Email/Numéro de téléphone" />
          <FormControl  id="input">
        <InputLabel id="label" >Activité</InputLabel>
        <Select id="select"
          value={Act}
          onChange={handleAct}
        >
          <MenuItem value="">
          non définie
          </MenuItem>
          <MenuItem id="select" value={"artisan"}>Artisan</MenuItem>
          <MenuItem id="select" value={"fournisseur"}>Fournisseur</MenuItem>
         
        </Select>
      </FormControl> 
         </div> 
         <div className="grid_item">
           <Input2 type="text" placeholder="Prenom" />
           <Input2  type="email" placeholder="N° de batinde" />
      <FormControl  id="input">
        <InputLabel id="label" >Gouvernement</InputLabel>
        <Select id="select"
          value={Gouv}
          onChange={handleGouv}
        >
          <MenuItem value="">
          non définie
          </MenuItem>
          <MenuItem id="select" value={"Tunis"}>Tunis</MenuItem>
          <MenuItem id="select" value={"Monastir"}>Monastir</MenuItem>
          <MenuItem id="select" value={"Mednine"}>Mednine</MenuItem>
        </Select>
      </FormControl>
          </div> 
          <div className="grid_item">
          <Input2 type="text" placeholder="Mot de passe" />
          <Input2 type="text" placeholder="Expérience" />
      <FormControl  id="input">
      <InputLabel id="label" >Taille de l'entreprise</InputLabel>
        <Select id="select"
          value={taille}
          onChange={handleTaille}
        >
          <MenuItem value="">
          ...
          </MenuItem>
          <MenuItem id="select" value={"-5"}> Moins que 5 </MenuItem>
          <MenuItem id="select" value={"entre 5 et 10"}> Entre 5 et 10 </MenuItem>
          <MenuItem id="select" value={"+10"}>Plus que 10 </MenuItem>
        </Select>
      </FormControl>
          
      </div> 
         </div>
         <FormControlLabel control={<Switch checked={state.checkedA} size="small" color="transparent"/>} onClick={switchToSignup2} label={<Box component="div" fontSize={12} fontFamily="Arial" color="#766161"> pro </Box>}/>

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
