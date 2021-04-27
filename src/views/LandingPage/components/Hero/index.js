import React, { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import {
  HeroContainer,
  HeroContainer2,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn
} from './HeroElements';
import {NavLink,Bars2} from '../Navbar/NavbarElements'

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    
    <HeroContainer2> <Navbar toggle={toggle} /><Sidebar isOpen={isOpen} toggle={toggle} /><HeroContainer>
    
    <HeroContent>
    <NavLink href='/'>ريشة<Bars2/></NavLink>
      <HeroItems>
        <HeroH1>صنعة الأجداد</HeroH1>
        <HeroP> من إيدين الأحفاد</HeroP>
      </HeroItems>
    </HeroContent>
  </HeroContainer></HeroContainer2>
    
  );
};

export default Hero;
