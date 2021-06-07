import React from 'react';
import { Nav, NavLink,Bars2, NavLink2 } from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>ريشة <Bars2/></NavLink>
        <NavLink2 href="/profile" >Mon profile</NavLink2>
      </Nav>
    </>
  );
};

export default Navbar;
