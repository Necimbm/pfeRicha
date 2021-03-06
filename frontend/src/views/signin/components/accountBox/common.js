import styled from "styled-components";
import { FaHome,FaFeather} from 'react-icons/fa';

export const BoxContainer = styled.div`
  weight: 100%;
  height:100%;
  display: column;
  justify-content:center;
  align-items: center;
 
 
`;
export const BoxContainer2 = styled.div`
  weight: 100%;
  height:100%;
  display: column;
  justify-content:center;
  align-items: center;
  margin-top:2rem;
  
`;
export const BoxContainer3 = styled.div`
  weight: 100%;
  height:100%;
  display: flex;
  flex-direction:column;
  align-items: center;
  

`;

export const FormContainer = styled.form`
  width: 100% ;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top:6rem;
`;

export const FormContainer2 = styled.form`
  width: 100% ;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top:30px;
`;
export const FormContainer3 = styled.form`
  width: 100% ;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom:5em;
  margin-top:1rem;
 
`;

export const MutedLink = styled.a`
  font-size: 11px;
  color: rgba(200, 200, 200, 1);
  font-weight: Bold;
  font-family: "montserrat";
  text-decoration: none;
  margin-top:3rem;
`;
export const MutedLink2 = styled.a`
  font-size: 11px;
  color: rgba(200, 200, 200, 0.8);
  font-weight: Bold;
  font-family: "montserrat";
  text-decoration: none;
 
`;

export const BoldLink = styled.a`
  font-size: 11px;
  color:#766162;
  font-weight: Bold;
  font-family: "montserrat";
  text-decoration: none;
  margin: 0 4px;
`;
export const BoldLink2 = styled.a`
  font-size: 11px;
  color: #feddbe;
  font-weight: Bold;
  font-family: "montserrat";
  text-decoration: none;
  margin: 0 4px;
`;
export const Home1 = styled.a`
  font-size: 1.5rem;
  color: #edadae;
  font-weight: bold;
  text-decoration: none;
  display :flex;
  jsutify-contnent: center;
  align-items: center;
  &:hover {
    color: #feddbe;
    
  }
  margin-top:2rem;
`;
export const Bars2 = styled(FaFeather)`
  font-size: 2rem;
  margin-top:0.5rem;
  margin-left:1.5rem;
  
`;
export const Home2 = styled.a`
font-size: 11px;
  color: #edadae;
  font-weight: bold;
 margin-top:1.5rem;
  text-decoration: none;
  display :flex;
  jsutify-contnent: center;
  align-items: center;
  &:hover {
    color: #feddbe;
    
  }
  margin-top:0.5rem;
`;
export const Input = styled.input`
  width: 230px;
  height: 40px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.75);
  padding: 0px 5px;
  font-weight:bold;font-family: "montserrat";
  transition: all 200ms ease-in-out;
  font-size: 12px;
  margin: 0.5rem 0.5rem;
 
  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }
  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  }
  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(241, 196, 15);
  }
`;
export const Input2 = styled.input`
  width: 230px;
  height: 35px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.75);
  padding: 0px 5px;

  transition: all 200ms ease-in-out;
  font-size: 12px;
  margin: 0.5rem 0.5rem;
  font-weight:bold;font-family: "montserrat";
  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }
  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  }
  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(241, 196, 15);
  }
`;

export const SubmitButton = styled.button`
width: 10em;
height: 40px;
text-decoration: none;
  color: #fff;
  font-size: 15px;
  font-weight: Bold;
  font-family: "montserrat";
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor:pointer;
  transition: all, 240ms ease-in-out;
  background:#feddbe;
  margin-top:2rem;

  &:hover {
    background:#766161;
   
  }`;

  export const SubmitButton2 = styled.button`
  width: 9rem;
  height: 40px;
  color: #fff;
  font-size: 15px;
  font-weight: Bold;
 font-family: "montserrat";
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor:pointer;
  transition: all, 240ms ease-in-out;
  background: #feddbe;
  &:hover {
    background:#766161;
  }`;

  export const SubmitButton3 = styled.button`
  width: 10em;
height: 40px;
text-decoration: none;
  color: #fff;
  font-size: 15px;
  font-weight: Bold;
  font-family: "montserrat";
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor:pointer;
  transition: all, 240ms ease-in-out;
  background:#feddbe;

  &:hover {
    background:#766161;
   
  }`;
    export const Home = styled(FaHome) `
    font-size: 2rem;
    margin-left:15px;
    
    `;