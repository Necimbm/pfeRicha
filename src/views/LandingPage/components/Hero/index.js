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
    {/* <div class="wrapper">
    <div class="typing-demo">
      Richa est un platform pour les jeunes artisans ....
    </div>
</div> */}
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


