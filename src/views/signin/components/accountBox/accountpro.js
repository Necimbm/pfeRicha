import React, { useContext } from "react";
import { Switch, Box } from "@material-ui/core";
import { FormControlLabel } from '@material-ui/core';
import "./accountpro.css";
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
import "../accountBox/";

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

export function Accountpro(props) {
  const { switchToSignup2 } = useContext(AccountContext);
  const { switchToSignin } = useContext(AccountContext);
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });
  const classes = useStyles();
  return (
    
    <BoxContainer>
    
      <FormContainer>
      <List className={classes.root} subheader={<li />}>
      {[0].map((sectionId) => (
        <li key={`section-${sectionId}`} className={classes.listSection}>
          <ul className={classes.ul}>
          <Input type="text" placeholder="Nom Complet" />
          </ul>
        </li>
      ))}
      {[0].map((sectionId) => (
        <li key={`section-${sectionId}`} className={classes.listSection}>
          <ul className={classes.ul}>
          <Input type="email" placeholder="Email/Numéro de téléphone" />
          </ul>
        </li>
      ))}
      {[0].map((sectionId) => (
        <li key={`section-${sectionId}`} className={classes.listSection}>
          <ul className={classes.ul}>
          <Input type="password" placeholder="Mot de passe" />
          </ul>
        </li>
      ))}
      {[0].map((sectionId) => (
        <li key={`section-${sectionId}`} className={classes.listSection}>
          <ul className={classes.ul}>
          <Input type="password" placeholder="Confirmer le mot de passe" />
          </ul>
        </li>
      ))}
      {[0].map((sectionId) => (
        <li key={`section-${sectionId}`} className={classes.listSection}>
          <ul className={classes.ul}>
          <Input type="password" placeholder="entrer votre numéro de batinde" />
          </ul>
        </li>
      ))}
      {[0].map((sectionId) => (
        <li key={`section-${sectionId}`} className={classes.listSection}>
          <ul className={classes.ul}>
         <tr>artisan ou fournisseur ?<Input2 type="checkbox" /></tr> 
          </ul>
        </li>
      ))}
    </List> 
    
      </FormContainer>
      <FormControlLabel control={<Switch checked={state.checkedA} size="small" color="default"/>} onClick={switchToSignup2} label={<Box component="div" fontSize={12} fontFamily="Arial" color="orange"> pro </Box>}/>
      <Marginer direction="vertical" margin={9} />
      <SubmitButton type="submit">s'inscrire</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Vous avez déja un compte ?
        <BoldLink href="#" onClick={switchToSignin}>
          Se connecter
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
