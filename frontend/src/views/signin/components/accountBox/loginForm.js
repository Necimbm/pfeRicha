import React, { useContext,useEffect,useState } from "react";
import {
  SubmitButton,
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  Home1,
  
} from "./common";
import { AccountContext } from "./accountContext";
import { Home } from "../../../LandingPage/components/Navbar/NavbarElements";
import { signin } from "actions/userActions";
import { useDispatch, useSelector } from "react-redux";


const initialState ={ email:'test', password:'test' };




export default function LoginForm (props) {




  const [formData, setformData] = useState(initialState);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const { switchToSignup } = useContext(AccountContext);
  const redirect = props.propsLogin.location.search ? props.propsLogin.location.search.split('=')[1]:'/acceuil';
  const userSignin=useSelector((state) => state.userSignin);
  const {userInfo}=userSignin;
  
  const dispatch = useDispatch();
  const handleSubmit = (e)=>{
e.preventDefault();   
dispatch(signin(email,password));

  };
  const handleChange = (event)=>{
    setformData({ ...formData, [event.target.name]: event.target.value});
  };
useEffect(()=>{ 
  if(userInfo){
    props.propsLogin.history.push(redirect); 
  }
}, [props.propsLogin.history, redirect, userInfo]);

const userLogin= (e)=>{
  e.preventDefault(); 

  const user={
    email:'test@gmail.com',
    password:'test'
  }
  dispatch(userLogin(user));

}  

  return (
    <BoxContainer>
      <FormContainer onSubmit={handleSubmit}> 
        <Input id="email" type="email" name="email" placeholder="Email" onChange={handleChange} />
        <Input id="password" type="password" name="password" placeholder="Mot de passe" onChange={handleChange}  />
        <MutedLink href="#">Mot de passe oublié ?</MutedLink>
        <SubmitButton type="submit">Se connecter</SubmitButton>
      </FormContainer>
     
      
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
        
    </BoxContainer>
  );
}