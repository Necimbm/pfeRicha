import "./signin.css";
import React from 'react'
import styled from "styled-components";
import { AccountBox } from "./components/accountBox";
import img from "./bg.jpg";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background:linear-gradient(to right,rgba(60, 71, 82, 0.6), rgba(131, 147, 161,0.1)),
  url(${img});
   background-size: cover;
   min-height: 100vh;


 
`;

function App(props) {
  return (
    <AppContainer>
      <AccountBox Login={props}  />
    </AppContainer>
  );
}

export default App;