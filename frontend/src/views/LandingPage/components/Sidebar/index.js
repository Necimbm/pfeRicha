import React from "react";

import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarRoute,
  SideBtnWrap
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
     
      <SideBtnWrap>
      <SidebarRoute href="/signup" >Créer un compte</SidebarRoute>
      </SideBtnWrap>
      <SideBtnWrap>
      <SidebarRoute href="/contact" >contacter-nous</SidebarRoute>
      </SideBtnWrap>
      <SideBtnWrap>
      <SidebarRoute href="#" >A propos</SidebarRoute>
      </SideBtnWrap>
      
    </SidebarContainer>
  );
};

export default Sidebar;
