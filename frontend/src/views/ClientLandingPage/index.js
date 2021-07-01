
import React, { useEffect } from 'react';
import Filter from "./components/filter/filter"
import { useDispatch, useSelector} from 'react-redux';
import styled from "styled-components";
import Footer from './components/Footer';
import Navbar  from "./components/Navbar/index";
import img from "images/richabg.jpg"
import Products from './components/Products';
import { listProducts } from 'actions/productActions';
import LoadingBox from 'views/components/LoadingBox';
import MessageBox from 'views/components/MessageBox';
import ErreurBox from 'views/components/errorPage';

const AppContainer = styled.div` 
 background-color:#fff;
`;

function App(props) {
  const dispatch = useDispatch();
 
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
 
  useEffect(() => {
    dispatch(listProducts({}));
  }, [dispatch]);
  return (<div>
  { loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <ErreurBox variant="danger">{error}</ErreurBox>
      ) : (<div>
        <AppContainer>
        
        <Navbar props={props}/>
     <Products heading='Votre meilleur choix' data={products}/>
     <Footer/>
     </AppContainer>
     </div>)} 
     </div>
  );
}

export default App;