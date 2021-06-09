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







export default function LoginForm (props) {




  const [formData, setformData] = useState(null);
  const userSignin =useSelector((state)=>state.userSignin);
  const {userInfo} = userSignin;

  const { switchToSignup } = useContext(AccountContext);
  
  
  const dispatch = useDispatch();
  const handleSubmit = (e)=>{
e.preventDefault();   
if(formData)
dispatch(signin(formData.email,formData.password));


  };
  const handleChange = (event)=>{
    setformData({ ...formData, [event.target.name]: event.target.value});
  };

useEffect(()=>{
  console.log(userInfo);
  if(userInfo){
  if(localStorage.getItem('userInfo')){
    console.log(JSON.parse(localStorage.getItem('userInfo')).payload.user.role);
    switch(JSON.parse(localStorage.getItem('userInfo')).payload.user.role){
      case 0 :return props.propsLogin.history.push('/acceuil');
      case 1 :return props.propsLogin.history.push('/fournisseur');
      case 2 :return props.propsLogin.history.push('/artisanAcceuil');
      case 3 :return props.propsLogin.history.push('/admin');
      default:;
    }
  }
  
     
  
    
  }
}, [props.propsLogin.history, userInfo]);



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