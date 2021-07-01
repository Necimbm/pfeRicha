import styled from 'styled-components';
import ReactCircleModal from 'react-circle-modal'

export const ProductsContainer = styled.div`
  width: 100%; 
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  
 
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
 
`;

export const ProductCard = styled.div`

  margin: 5vh 1rem;
  line-height: 1;
  width: 300px;
  padding:1.5em;
  box-shadow: 0 0 10px 0  rgba(15, 15, 15, 0.50);
  background: #fff ;
  color: #000;
  `;

export const ProductImg = styled.img`
  height: 300px;
  width: 270px;
  padding: 5px;
`;

export const ProductsHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align:center ;
  margin-bottom: 5rem;
`;

export const ProductTitle = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 
  text-align: center;
`;

export const ProductDesc = styled.p`
  margin-bottom: 0.5rem;
`;

export const ProductPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 2rem;
`;

export const ProductButton = styled.a`
  font-size: 1rem;
  text-decoration: none;
  list-style: none;
  padding: 1rem 2rem;
  border: none;
  background: #373a40;
  color: #fff;
  transition: 0.2 ease-out;
  border-radius:15px;

  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;
export const Popup = styled.div `
width:150vmin,500hmin;
height:50vmin,10hmin;
justifyContent: center;
alignItems: center ;
display:flex;
padding:5rem;
font-size:3.5vmin;
background-color:white;
margin-top:2rem;
border-radius:50px;

`;
export const Discription = styled.p `
margin-right:2rem;

`;