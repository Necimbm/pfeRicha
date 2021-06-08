import React, { useState } from "react";
import styled from "styled-components";
import LoginForm  from "./loginForm";
import { motion } from "framer-motion";
import { AccountContext } from "./accountContext";
import { SignupForm } from "./signupForm";
import {Accountpro} from "./accountpro";
import { Bars2 } from "./common";
import "./styles.css";
export const BoxContainer = styled.div`
  height: 500px;
  width: 300px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(15, 15, 15, 0.58);
  position: relative;
  overflow: hidden; 
`;
export const BoxContainer2 = styled.div`
  width:795px;
  height: 450px;
  display: flex;
  align-items:center;
  justify-content:center;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(15, 15, 15, 0.58);
  position: relative;
  overflow: hidden; 
  margin-top:2rem;

`;

const BackDrop = styled(motion.div)`
width:800px;
height: 650px;
position: absolute;
display: flex;
flex-direction: column;
border-radius: 0 0 100% 100%;
transform: rotate(-5deg);
top: -300px;
background:#feddbe;
z-index: 10;
`;



const HeaderContainer = styled.div`
  width: 100%;
  display: column;
  margin-top:-1.5rem;
  align-items:center;
  justify-content: center;
  z-index: 10;
 
`;
const HeaderContainer2 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items:center;
  column-gap: 10px;
  `;
  

const HeaderText = styled.h2`
 
  font-size: 30px;
  font-weight: 500;
  line-height: 1;
  padding:0 2rem;
  color: #fff;
  font-family: "montserrat";
  font-weight: bold;

  
`;
const HeaderText2 = styled.h2`
 
  font-size: 33px;
  font-weight: 500;
  line-height: 0;
  color: #fff;
  z-index: 10;
  font-weight: bold;
  font-family: "montserrat";

`;
const HeaderCheckmark = styled.h2`
padding-right: 0.5em;
  font-size: 30px;
  font-weight: 400;
  color: #fff;
  z-index: 10;
  font-family: "montserrat";
  text-align: center;

`;

const SmallText = styled.h5`
  color: #fff;
  font-weight: 500;
  font-size: 11px;
  padding:0 2rem;

`;
const SmallText2 = styled.h5`
  color: #fff;
  font-weight: 500;
  font-size: 15px;
  z-index: 11;
  text-align:center;
  margin-top: 0px;
 
`;

const InnerContainer = styled.div`
  width: 100%;
  height:100%;
  display: flex;
  flex-direction: column;
  padding: 0 2 ;
  margin-bottom:5rem;
`;
const InnerContainer2 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 2 ;

`;
const backdropVariants2 = {
  expanded: {
    width: "1000px",
    height: "1100px",
    borderRadius: "0 0 100% 100% ",
    transform: "rotate(-10)",
  },
  collapsed: {
    right:"-200px",
    width: "1000px",
    height: "450px",
    borderRadius: "0 0 100% 100%",
    transform: "rotate(-10deg)",
  },
};

const expandingTransition = {
  type: "spring",
  duration: 2,
  stiffness: 30,
};


export function AccountBox(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [active, setActive] = useState("signin");

  const playExpandingAnimation = () => {
    setExpanded(true);
    setTimeout(() => {
      setExpanded(false);
    }, expandingTransition.duration * 1000 - 1200);
  };

  const switchToSignup = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signup");
    }, 500);
  };
  const switchToSignup2 = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signup");
    }, 500);
  };

  const switchToSignin = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signin");
    }, 400);
  }
  const switchToAccountPro = () => {
    playExpandingAnimation();
      setTimeout(() => {
        setActive("accountpro");
      }, 500);
  };

  const contextValue = { switchToSignup, switchToSignin, switchToAccountPro, switchToSignup2 };

  return (
    <AccountContext.Provider value={contextValue}>
        {(active==="signup"||active ==="signin") && (
      <BoxContainer>
      <BackDrop
            className="wave" 
            initial={false}
            animate={isExpanded ? "expanded" : "collapsed"}
            variants={backdropVariants2}
            transition={expandingTransition}
          />
         {active === "signin" && (
      
            <HeaderContainer>
              <div>
              <HeaderText>Bienvenue à Richa <Bars2 size="25px" /> </HeaderText>
              <SmallText>Merci de se connecter !</SmallText>
              </div>
              </HeaderContainer>
           
            )}
           {active === "signup" && (
      
            <HeaderContainer>
              <HeaderText>Créer votre compte</HeaderText>
              <SmallText>Merci de s'inscrire !</SmallText>
            </HeaderContainer>

            )}

            <InnerContainer>
            {active === "signin" && <LoginForm propsLogin={props.Login} />}
            {active === "signup" && <SignupForm />}  
        </InnerContainer>
        
            </BoxContainer>
            )}
          
          
          {active === "accountpro" && (
           <BoxContainer2>
             <BackDrop   initial={false}
            animate={isExpanded ? "expanded" : "collapsed"}
            variants={backdropVariants2}
            transition={expandingTransition}/>
   
             <HeaderContainer2>
               
              <HeaderText2><HeaderCheckmark> <Bars2 size="50"/></HeaderCheckmark>Compte Pro </HeaderText2>
              <SmallText2> Merci de s'inscrire !</SmallText2>
            </HeaderContainer2>
           
            <InnerContainer2>
       <Accountpro />
        </InnerContainer2>
            </BoxContainer2>
            )
          }
          
    </AccountContext.Provider>
  )
          }

