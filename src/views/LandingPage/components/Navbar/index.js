import React from 'react';
import { H1 } from '../Hero/HeroElements';
import SearchBar from '../Searchbar';
import { Nav,   NavSearch, NavIcon, Bars,Bars2, Search } from './NavbarElements';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <H1 href='/'>ريشة <Bars2/></H1>
        <NavSearch>
          <Search/>
          <SearchBar/>
          </NavSearch>        
        <NavIcon onClick={toggle}>
          Menu
          <Bars />
        </NavIcon>  
      </Nav>
    </>
  );
};

export default Navbar;
