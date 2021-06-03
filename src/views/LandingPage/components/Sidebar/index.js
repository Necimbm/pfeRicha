import React from "react";

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
        <SidebarLink >contacter-nous</SidebarLink>
        <SidebarLink >A propos</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
      <SidebarRoute href="/signup" >Créer un compte</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
