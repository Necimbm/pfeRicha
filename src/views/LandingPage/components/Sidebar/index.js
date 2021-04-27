import React from 'react';
import Feature from '../Feature/index'
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink href='/signin'> se connecter</SidebarLink>
        <SidebarLink href='/contact'>contacter-nous</SidebarLink>
        <SidebarLink >A propo</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
      <SidebarRoute>order</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
