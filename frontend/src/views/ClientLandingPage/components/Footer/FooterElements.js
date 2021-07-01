import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
  background-color: transparent;
`;

export const FooterWrap = styled.div`
  position: relative;
  right:0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
`;

export const SocialMedia = styled.section`
  max-width: 1300px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex ;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 16px 0 0 0;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
color:#000;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
  font-family:"montserrat";
  position: absolute;
  left:0;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
  position: absolute;
  right:0;
  botttom:0;

`;

export const SocialIconLink = styled.a`
margin-left:2rem;
  color: #000;
  font-size: 24px;
  
`;
