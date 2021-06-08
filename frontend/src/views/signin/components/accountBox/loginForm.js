import React, { useContext,useEffect,useState } from "react";
import {
  SubmitButton,
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  Home1,
  Home
  
} from "./common";
import { AccountContext } from "./accountContext";
import { signin } from "actions/userActions";
import { useDispatch, useSelector } from "react-redux";


const initialState ={ };




export default function LoginForm (props) {




  const [formData, setformData] = useState(initialState);
  
  
  const { switchToSignup } = useContext(AccountContext);
  const redirect = props.propsLogin.location.search ? props.propsLogin.location.search.split('=')[1]:'#';
  const userSignin=useSelector((state) => state.userSignin);
  const {userInfo}=userSignin;
  
  const dispatch = useDispatch();
  const handleSubmit = (e)=>{
e.preventDefault();   
dispatch(signin(formData.email,formData.password));

  };
  const handleChange = (event)=>{
    setformData({ ...formData, [event.target.name]: event.target.value});
  };
useEffect(()=>{ 
  if(userInfo){
    props.propsLogin.history.push(redirect); 
  }
}, [props.propsLogin.history, redirect, userInfo]);



  return (
    <BoxContainer>
      <FormContainer onSubmit={handleSubmit}> 
        <Input id="email" type="email" name="email" placeholder="Email" onChange={handleChange} />
        <Input id="password" type="password" name="password" placeholder="Mot de passe" onChange={handleChange}  />
        <MutedLink href="#">Mot de passe oublié ?</MutedLink>
        <SubmitButton type="submit">Se connecter</SubmitButton>
        <MutedLink href="#">
        Vous n'avez pas de compte ?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Inscrivez-vous
        </BoldLink>
      </MutedLink>
      <Home1 href="/"  >
          Acceuil 
          <Home/>
        </Home1> 
      </FormContainer>
     
      
     
        
    </BoxContainer>
  );
}