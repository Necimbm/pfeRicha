import styled from 'styled-components';


export const ProductContainer = styled.div`
  width: 100%; 
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  display:flex;
  align-items:center;
  justify-content:center;
 
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
 
`;

export const ProductCard = styled.div`
margin-left:8rem;
  line-height: 2;
  width:60%;
  height:300px;
  display:flex;
  min-height:90vh;
  padding:1rem;
  box-shadow: 0 0 10px 0  rgba(15, 15, 15, 0.50);
  // background: #fff ;
  color: #000;
  `;

export const ProductImg = styled.img`
  min-height:50vh;
  width: 100%;
`;

export const ProductsHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align:center ;
  margin-bottom: 5rem;
`;

export const ProductTitle = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
  background-color:#fff;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;

export const ProductDesc = styled.p`
  margin-bottom: 1rem;
`;

export const ProductPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 2rem;
`;

export const ProductButton = styled.a`
  font-size: 1rem;
  text-decoration: none;
  list-style: none;
  padding: 0.5rem 2rem;
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