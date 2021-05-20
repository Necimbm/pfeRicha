import React, { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import {
  HeroContainer,
  HeroContainer2,
  HeroContent,
  HeroItems,

 
 
} from './HeroElements';

 import "./styles.css";
import styled  from 'styled-components';

export const Richa = styled.div`


 margin-left:40rem;
  background-color:black;
  opacity:40%;
  width:600px;
  height:300px;
  color:white;
  display:flex;
  align-items:center;
  justify-content: center;
  font-family: 'Work Sans', sans-serif;
  border-radius:50px;
  
`;

export const Richa2 = styled.div`
 position: absolute;
 margin-left:40rem;
  opacity:100%;
  width:400px;
  height:300px;
  color:white;
  display:flex;
  align-items:center;
  justify-content: center;
  font-family: 'Work Sans', sans-serif;
  font-size:35px;
  text-align:center;
  
  
  
`;

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    
    <HeroContainer2> 
    <Navbar toggle={toggle}> </Navbar>
    <Sidebar isOpen={isOpen} toggle={toggle} />
   
    
    <HeroContainer>
    
    <HeroContent>
      <HeroItems class="fade-in-text">
<div  class="animated-title ">
  <div class="text-top">
    <div >
      <span>صنعة الأجداد</span>
    </div>
  </div>
  <div class="text-bottom">
    <div>من إيدين الأحفاد</div>
  </div>
</div>
      </HeroItems>
    </HeroContent>
  </HeroContainer>

  </HeroContainer2>
    

  );
};

export default Hero;


