import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaFeather, FaFeatherAlt, FaSearch } from 'react-icons/fa';

export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  width:100%;
  display: flex;
  justify-content: center;
  font-weight: 700;
  position:fixed;
  z-index:0;
`;

export const NavLink = styled.a`
  color: #ebd8b7;
  font-size: 8rem;  
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  font-family: "Urdu Typesetting";
  margin-left:30rem;
  

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
  left:0;
  cursor: pointer;
  color: #fff;
  margin-top:0;

  p {
    transform: translate(-175%, 100%);
    font-weight: bold;
  }
`;
export const NavIcon = styled.div`
  display: flex;
  position: absolute;
  top:2em;
  right: 0;
  cursor: pointer;
  color: #fff;

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
  font-size: 4rem;
  transform: translate(-50%, -15%);
  margin-top:3rem;
  margin-left:3rem;
  
`;
export const Search = styled(FaSearch)`
  font-size: 1.5rem;
  transform: translate(-50%, -15%);
  margin-top:1rem;
  margin-left:3rem;
  
`;
