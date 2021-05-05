import React, { useContext } from "react";
import { Switch, Box, Grid } from "@material-ui/core";
import { FormControlLabel } from '@material-ui/core';
import "./accountprostyle.css";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  MutedLink,
  SubmitButton,
  Input,
  Input2
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import "./";
import { makeStyles } from '@material-ui/core/styles';
import {List} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 259,
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 200,
  
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
}));

export function Accountpro() {
  const { switchToSignup2 } = useContext(AccountContext);
 
  const [state] = React.useState({
    checkedA: true,
    checkedB: true,
  });
 
  return (
    
    <BoxContainer>
    
      <FormContainer>
        <div className=" ">
         <div className="grid_item"><Input type="text" placeholder="Nom Complet" />
          <Input  type="email" placeholder="Email/Numéro de téléphone" />
          <Input  type="password" placeholder="Mot de passe" /> 
         </div> 
         <div className="grid_item"><Input type="text" placeholder="Nom Complet" />
          <Input  type="email" placeholder="Email/Numéro de téléphone" />
          <Input  type="password" placeholder="Mot de passe" /> 
          </div> 
          <div className="grid_item"><Input type="text" placeholder="Nom Complet" />
          <Input  type="email" placeholder="Email/Numéro de téléphone" />
          <Input  type="password" placeholder="Mot de passe" /> 
      </div> 
         </div>
         <FormControlLabel control={<Switch checked={state.checkedA} size="small" color="transparent"/>} onClick={switchToSignup2} label={<Box component="div" fontSize={12} fontFamily="Arial" color="orange"> pro </Box>}/>
      <Marginer direction="vertical" margin={0} />
      <SubmitButton type="submit">s'inscrire</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      </FormContainer>
      
    </BoxContainer>
  );
}
