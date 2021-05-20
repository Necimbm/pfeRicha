import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaHome,FaFeather, FaFeatherAlt, FaSearch } from 'react-icons/fa';

export const Nav = styled.nav`
  background: transparent;
  height: 50px;
  width:100%;
  display: flex;
  justify-content: center;
  font-weight: 700;
  position:fixed;
  z-index:1;
  background-color:#373a40 ;
  
`;

export const NavLink = styled.div`
  color: #ebd8b7;
  font-size: 8rem;  
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  font-family: "Urdu Typesetting";

  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;
export const NavSearch = styled.div`
  display: flex;
  position: absolute;
  top:1em;
  cursor: pointer;
  color: #d9ecf2;
  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }

`;
export const NavIcon = styled.div`
  display: flex;
  position: absolute;
  top:1em;
  right: 0;
  cursor: pointer;
  color: #d9ecf2;
  p {
    transform: translate(-175%, 100%);
    font-weight: bold;
  }
`;

export const Bars = styled(FaFeatherAlt)`
  font-size: 2rem;
  transform: translate(-50%, -15%);
  margin-top: -0.25rem;
  margin-left:2rem;

`;
export const Bars2 = styled(FaFeatherAlt)`
  font-size: 2rem;
  @media screen and (max-width: 500px) {
    font-size: 1.5rem;
  }
`;
export const Search = styled(FaSearch)`
  font-size: 1.5rem;
  transform: translate(-50%, -90%);
  margin-top:1.25rem;
  color:#d9ecf2;
  margin-left:3rem;
  @media screen and (max-width: 500px) {
    position: absolute;
     right:10rem;
     top:0.01em;
  }
  
`;
export const Home = styled(FaHome) `
font-size: 1rem;
margin-left:15px;

`;