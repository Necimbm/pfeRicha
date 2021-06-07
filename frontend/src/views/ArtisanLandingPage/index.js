
import React from 'react'
import styled from "styled-components";
import Footer from './components/Footer';
import Navbar  from "./components/Navbar/index";
import Products from './components/Products';
import data from './components/Products/data'

const AppContainer = styled.div` 
`;

function App() {
  return (
    <AppContainer>
     <Navbar/>
     <Products heading='Trouvez votre matière première' data={data.products}/>
     <Footer/>
    </AppContainer>
  );
}

export default App;