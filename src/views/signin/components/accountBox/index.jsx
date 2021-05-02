import React, { useState } from "react";
import styled from "styled-components";
import { LoginForm } from "./loginForm";
import { motion } from "framer-motion";
import { AccountContext } from "./accountContext";
import { SignupForm } from "./signupForm";
import {Accountpro} from "./accountpro";
import { Bars } from "../../../LandingPage/components/Navbar/NavbarElements";

export const BoxContainer = styled.div`
  weight: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: absolute;
  overflow: hidden;
  margin-top:490px;
  
`;
export const BoxContainer2 = styled.div`
  
  width:800px;
  height: 450px;
  display: flex;
  align-items:center;
  justify-content:center;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
  margin:0;
`;
const TopContainer = styled.div`
  width: 300px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 3em ;
  
`;

const BackDrop = styled(motion.div)`
  width: 160%;
  height: 650px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 60%;
  transform: rotate(80deg);
  top: -350px;
  left: -70px;
  background: rgb(121,99,9);
background: linear-gradient(90deg, rgba(121,99,9,1) 0%, rgba(247,211,8,1) 100%);`;

const BackDrop2 = styled(motion.div)`
  width: 900px;
  height: 450px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 0 0 100% 100%;
  transform: rotate(-5deg);
  top: -300px;
background: linear-gradient(110deg, rgba(121,80,1,0.5) 0%, rgba(247,211,8,1) 100%);
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top:30px;
`;
const HeaderContainer2 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items:center;
  margin-top:50px;
  
  `;
  

const HeaderText = styled.h2`
 
  font-size: 30px;
  font-weight: 500;
  line-height: 1;
  color: #fff;
  z-index: 10;
  margin: 0;
  font-family: "montserrat";

`;
const HeaderText2 = styled.h2`
 
  font-size: 33px;
  font-weight: 500;
  line-height: 0;
  color: #fff;
  z-index: 10;

  font-family: "montserrat";

`;
const HeaderCheckmark = styled.h2`
padding-right: 0.5em;
  font-size: 30px;
  font-weight: 400;
  line-height: 1.20;
  color: #fff;
  z-index: 10;
  margin: 0;
  font-family: "montserrat";
  text-align: center;

`;

const SmallText = styled.h5`
  color: #fff;
  font-weight: 500;
  font-size: 11px;
  z-index: 10;
  margin: 0;
  margin-top: 7px;
`;
const SmallText2 = styled.h5`
  color: #191919;
  font-weight: 500;
  font-size: 15px;
  z-index: 10;
  margin: 0;
  text-align:center;
  margin-top: 0px;
  opacity:50%;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1.3em  ;
  padding-top: 4em;
  margin-bottom:1rem;
`;

const backdropVariants = {
  expanded: {
    width: "233%",
    height: "900px",
    borderRadius: "20%",
    transform: "rotate(60deg)",
  },
  collapsed: {
    width: "500px",
    height: "600px",
    borderRadius: "50%",
    transform: "rotate(10deg)",
  },
};
const backdropVariants2 = {
  expanded: {
    width: "1000px",
    height: "2000px",
    borderRadius: "0 0 100% 100% ",
    transform: "rotate(-10)",
  },
  collapsed: {
    width: "1000px",
    height: "450px",
    borderRadius: "0 0 100% 100%",
    transform: "rotate(-10deg)",
  },
};

const expandingTransition = {
  type: "spring",
  duration: 2.3,
  stiffness: 30,
};


export function AccountBox(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [active, setActive] = useState("signin");

  const playExpandingAnimation = () => {
    setExpanded(true);
    setTimeout(() => {
      setExpanded(false);
    }, expandingTransition.duration * 1000 - 1400);
  };

  const switchToSignup = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signup");
    }, 1100);
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
        {(active ==="signin" || active==="signup") && (
      <BoxContainer>
      <BackDrop
            initial={false}
            animate={isExpanded ? "expanded" : "collapsed"}
            variants={backdropVariants}
            transition={expandingTransition}
          />
         {active === "signin" && (
        <TopContainer>
            <HeaderContainer>
              <HeaderText>Bienvenue à</HeaderText>
              <HeaderText>Richa</HeaderText>
              <SmallText>Merci de se connecter !</SmallText>
            </HeaderContainer>
            </TopContainer>
            )}
           {active === "signup" && (
        <TopContainer>
            <HeaderContainer>
              <HeaderText>Créer</HeaderText>
              <HeaderText>votre compte</HeaderText>
              <SmallText>Merci de s'inscrire !</SmallText>
            </HeaderContainer>
            </TopContainer>
            )}

            <InnerContainer>
            {active === "signin" && <LoginForm />}
            {active === "signup" && <SignupForm />}  
        </InnerContainer>
        
            </BoxContainer>
            )};
          
          
          {active === "accountpro" && (
           <BoxContainer2>
             <BackDrop2   initial={false}
            animate={isExpanded ? "expanded" : "collapsed"}
            variants={backdropVariants2}
            transition={expandingTransition}/>
           <TopContainer>
             <HeaderContainer2>
               <HeaderCheckmark> <Bars/></HeaderCheckmark>
              <HeaderText2>Compte Pro </HeaderText2>
              <SmallText2> Merci de s'inscrire !</SmallText2>
            </HeaderContainer2>
            </TopContainer>
            <InnerContainer>
       <Accountpro />
        </InnerContainer>
            </BoxContainer2>
            )
          }
          
    </AccountContext.Provider>
  );
          }

