import React from 'react';
import { Nav, NavLink, NavIcon, Bars,Bars2, NavLink2 } from './NavbarElements';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to='/'>ريشة <Bars2/></NavLink>
        <NavLink2 href="/signin" >se connecter</NavLink2>
        <NavIcon onClick={toggle}>
          <p>Menu</p> <Bars />
        </NavIcon>
       
      </Nav>
    </>
  );
};

export default Navbar;
