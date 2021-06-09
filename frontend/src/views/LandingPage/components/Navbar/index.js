import React from 'react';
import { Nav, NavLink, NavIcon,Bars2, NavLink2 } from './NavbarElements';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to='/'>ريشة <Bars2/></NavLink>
        <NavLink2 to="/signin" >se connecter</NavLink2>
        <NavIcon to="/signup">
          S'inscrire
        </NavIcon>
       
      </Nav>
    </>
  );
};

export default Navbar;
