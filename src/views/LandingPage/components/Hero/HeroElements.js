import styled from 'styled-components';
import ImgBg from '../../images/richabg.jpg';


export const HeroContainer = styled.div`
 
width: 100%; 
min-height: 100vh;


 
`;
export const HeroContainer2 = styled.div`
  height: 100vh;
  width : 100%;
  background-position: center;
  background-size: cover; 
  background: linear-gradient(to right,rgba(28, 22, 11, 0.5), rgba(1000,200, 100, 0.5)),
  url(${ImgBg});
  background-position: center;
  background-size: cover;
`;

export const HeroContent = styled.div`

`;


export const H1 = styled.a `
color: #ebd8b7;
text-align:center;
font-size: 8rem;  
display: flex;
justify-content:center;
align-items: center;
text-decoration: none;
cursor: pointer;
font-family: "Urdu Typesetting";
margin-left:40%;
width:200px;
height:200px;

`;

export const HeroItems = styled.div`
  display: flex;
  flex-direction: flex;
  justify-content: center;
  align-items: flex-start;
  height: 60vh;
  max-height: 100%;
  padding: 0 2rem;
  width:100%;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const HeroH1 = styled.h1`
  font-size: clamp(2.5rem, 10vw, 5rem);
  margin-bottom: 1rem;
  box-shadow: 3px 5px #e9ba23;
  letter-spacing: 3px;
  font-family:"Myriad Arabic";

 
`;

export const HeroP = styled.p`
 color:white;
  font-size: clamp(2rem, 2.5vw, 3rem);
  margin-bottom: 2rem;
  color: #fff;
  
`;

export const HeroBtn = styled.button`
  font-size: 1.4rem;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2s ease-out;
  

  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;
