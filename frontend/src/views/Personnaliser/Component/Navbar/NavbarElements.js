import styled from 'styled-components';
import { NavLink  as Link} from 'react-router-dom';

import { FaHome,FaFeather } from 'react-icons/fa';

export const Nav = styled.nav`
  background: transparent;
  height: 50px;
  width:100%;
  display: flex;
  justify-content: center;
  font-weight: 700;
  position:relative;
  z-index:1;
  background-color:#373a40 ;
  
`;

export const NavLink = styled(Link)`
  color: #fff;
  font-size: 2rem;  
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  font-family: 'Tajawal', sans-serif;
  position: absolute;
  left: 20px;
  top: 0px;
  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;
export const NavLink2 = styled.a`
display: block;
position: absolute;
top: 1rem;
right:3rem;
cursor: pointer;
color: #fff;
text-decoration: none;
font-family: "montserrat";

p {
  transform: translate(-175%, 100%);
  font-weight: bold;
}
`;
export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: -0.25rem  ;
  right: -1rem;
  cursor: pointer;
  color: #fff;

  p {
    font-family: "montserrat";
    transform: translate(-175%, 100%);
    font-weight: bold;
    right:0;
  }
`;

export const Bars = styled(FaFeather)`
  font-size: 1.5rem;
  transform: translate(-50%, -15%);
  
 

`;
export const Bars2 = styled(FaFeather)`
  font-size: 2rem;
  transform: translate(-50%, -15%);
  margin-top:1rem;
  margin-left:1.5rem;
  
`;
export const Home = styled(FaHome) `
font-size: 1rem;
margin-left:15px;

`;