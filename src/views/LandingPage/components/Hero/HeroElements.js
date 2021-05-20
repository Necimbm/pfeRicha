import styled from 'styled-components';
import ImgBg from './bgricha.jpg';


export const HeroContainer = styled.div`
 
width: 100%; 
min-height: 100vh;
background:linear-gradient(to right,rgb(60, 71, 82, 0.6), rgb(131, 147, 161,0.1)),
url(${ImgBg});
background-size: cover;


`;
export const HeroContainer2 = styled.div`
  height: 100vh;
  width : 100%;
  background-position: center;
  background-size: cover; 
  background: #f1e9e3;
  background-position: center;
  background-size: cover;

`;


export const H1 = styled.div `
left:0;
padding-left:0.5em;
position: absolute;
color: #d9ecf2;
text-align:center;
font-size: 2rem;  
display: flex;
justify-content:center;
align-items: center;
text-decoration: none;
cursor: pointer;
font-family: 'Tajawal', sans-serif;
@media screen and (max-width: 500px) {
  position: absolute;
  right:25rem;
  top:0.5rem;
  font-size: 1.5rem; 
}

`;
export const HeroContent = styled.div `
margin:0;
`
;
export const HeroItems = styled.div`
  display: flex;
  flex-direction: flex;
  justify-content: center;
  align-items: flex-start;
  height: 60vh;
  max-weight:100%;
  max-height: 100%;
  width:100%;
  color: #fff;
  line-height: 1;
  font-weight: bold;
  
  @media screen and (max-width: 500px) {
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
