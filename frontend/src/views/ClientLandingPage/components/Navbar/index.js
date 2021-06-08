import React from 'react';
import { Nav, NavLink,Bars2,Cart,CartIcon, NavLink2 } from './NavbarElements';

const Navbar = () => {
  
  return (
    <>
      <Nav>
        <NavLink to='/'>ريشة <Bars2/></NavLink>
        <Cart to='/cart'>Cart<CartIcon/> </Cart>
        <NavLink2 to='/profile' >Mon profile</NavLink2>
        
      </Nav>
    </>
  );
};

export default Navbar;
