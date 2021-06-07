import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index:3;
  width: 300px;
  height: 100%;
  background-color:#373a40 ;
  opacity:90%;
  display: column;
  align-items: center;
  justify-content: center;
  padding-top:5rem;
  transition: 0.3s ease-in-out;
  
  right: ${({ isOpen }) => (isOpen ? '0' : '-1000px')};

  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;

export const CloseIcon = styled(FaTimes)`
  color: #000;
  font-size:30px;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  border: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 80px);
  

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(3, 60px);
    
  }
`;

export const SidebarLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #000;
  cursor: pointer;

  &:hover {
    color:#fff;
    transition: 0.2s ease-in-out;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top:2rem;
  
`;

export const SidebarRoute = styled.a`
  background: #fff;
  white-space: nowrap;
  padding: 16px 44px;
  color: #373a40;
  font-size: 16px;
  outline: none;
  border: none;
  font-weight:bold;
  font-family: "montserrat";
  cursor: pointer;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  border-radius:50px;

  &:hover {
    transition: 0.2s ease-in-out;
    background: #fff;
    color: #000;
  }
`;
