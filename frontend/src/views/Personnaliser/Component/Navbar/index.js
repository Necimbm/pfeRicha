import React from 'react';
import { Nav, NavLink,Bars2, NavLink2 } from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>ريشة <Bars2/></NavLink>
        <NavLink2 href="/Profile" >Mon Profile</NavLink2>
      </Nav>
    </>
  );
};

export default Navbar;
