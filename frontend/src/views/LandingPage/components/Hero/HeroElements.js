import styled from 'styled-components';
import img from '../../images/richabg.jpg';


export const HeroContainer = styled.div`

width: 100%; 
min-height: 100vh;
 background:linear-gradient(to right,rgba(60, 71, 82, 0.6), rgba(131, 147, 161,0.1)),
 url(${img});
background-size: cover;

`;
export const HeroContainer2 = styled.div`
min-height: 100vh;
  height: 100vh;
  background-position: center;
  background-size: cover; 
  background: #f1e9e3;
  background-position: center;
  background-size:cover;
 

`;


export const H1 = styled.div `
left:0;
padding-left:0.5em;
position:absolute;
color:#feddbe;
text-align:center;
font-size:2rem;  
display:flex;
justify-content:center;
align-items:center;
text-decoration:none;
cursor:pointer;
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
min-height: 100vh;
width:100vmin;
`
;
export const HeroItems = styled.div`

  display: flex;
  flex-direction: flex;
  justify-content: center;
  align-items: flex-start;
  color: #fff;
  line-height: 1;
  font-weight: bold;
 
 
`;

export const HeroH1 = styled.h1`
  font-size: clamp(2.5rem, 10vw, 5rem);
  margin-bottom: 1rem;
  box-shadow: 3px 5px #e9ba23;
  letter-spacing: 3px;
  font-family:"Myriad Arabic";

 
`;



