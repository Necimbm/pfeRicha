
import { listProducts } from 'actions/productActions';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components";
import LoadingBox from 'views/components/LoadingBox';
import MessageBox from 'views/components/MessageBox';
import Footer from './components/Footer';
import Navbar  from "./components/Navbar/index";
import Products from './components/Products';
import data from './components/Products/data'

const AppContainer = styled.div` 
`;

function App(props) {
  const dispatch = useDispatch();
  const productList = JSON.parse(localStorage.getItem('productsList'))
  useEffect(() => {
    
  }, [dispatch]);

  return (
        <AppContainer>
        <Navbar props={props}/>
     <Products heading='Votre meilleur choix' data={productList}/>
     <Footer/>
     </AppContainer>
  );
}

export default App;