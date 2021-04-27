import React from 'react';
import SearchBar from '../Searchbar';
import { Nav,   NavSearch, NavLink, NavIcon, Bars,Bars2, Search } from './NavbarElements';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
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
