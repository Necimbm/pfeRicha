
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

function App() {
  const dispatch = useDispatch();
  
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts({}));

  }, [dispatch]);

  return (
    <AppContainer>
      {/* {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (<div>
    
     </div>)} */}
      <Navbar/>
     <Products heading='Votre meilleur choix' data={data.products}/>
     <Footer/>

    </AppContainer>
  );
}

export default App;