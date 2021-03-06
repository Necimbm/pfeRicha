
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Products from'./components/Products'
import Products2 from'../ClientLandingPage/components/Products/index'
import data from './components/Products/data'
import data2 from '../ClientLandingPage/components/Products/data'
import { Nav } from 'views/ClientLandingPage/components/Navbar/NavbarElements';
import { NavLink } from 'views/ClientLandingPage/components/Navbar/NavbarElements';
import { Cart } from 'views/ClientLandingPage/components/Navbar/NavbarElements';
import { CartIcon } from 'views/ClientLandingPage/components/Navbar/NavbarElements';
import { Bars2 } from 'views/signin/components/accountBox/common';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from 'actions/userActions';
import './styles.css';
import { Link } from '@material-ui/core';
import { NavLink2 } from 'views/ClientLandingPage/components/Navbar/NavbarElements';
import OrderListScreen from 'views/Orders/OrdersList';
import Filter from './components/filter/filter';
import AnnoncesListScreen from 'views/Annonces/AnonnceList';
import { listProducts } from 'actions/matPrem';
import LoadingBox from 'views/components/LoadingBox';
import MessageBox from 'views/components/MessageBox';
import { listmatprod } from 'actions/matPrem';
import ErreurBox from 'views/components/errorPage';



function Acceuil(props) {
  
  const { children, value, index, ...other } = props;
  const dispatch = useDispatch();


  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


Acceuil.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs(props) {
   
  const productList = useSelector((state) => state.MatproductList);
  const { loading, error, products } = productList;
  const dispatch=useDispatch();
  useEffect(() => {
    dispatch(listmatprod({}));
  }, [dispatch]);
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const userName=JSON.parse(localStorage.getItem('userInfo')).payload.user.name;
 

  const signOutHandler = ()=>{
    props.history.push('/');
    dispatch(signout());
  }
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (<div>
    { loading ? (
      <LoadingBox></LoadingBox>
    ) : error ? (
      <ErreurBox variant="danger">{error}</ErreurBox>
    ) : (
    <div >
      <Nav>
      <NavLink to='#'>???????? <Bars2/></NavLink>
        <Cart to='/cart'>Cart<CartIcon/> </Cart>
        { userName ?(
         <div className="menu3">
         <ol class="main-menu">
         <li class="main-item"><span><NavLink2 to="/artisanAcceuil">{userName}</NavLink2></span>
             <ol class="sub-menu">
               <li class="sub-item item-right"><span class="premium" onClick={signOutHandler}></span></li>
               <li class="sub-item item-right"><span class="combo"></span></li>
               
               
             </ol>
           </li>
           
          
         </ol>
         </div>

):(null)
        }
        
        <Tabs style={{top:'0',position:'absolute',marginRight:"6rem"}}value={value} onChange={handleChange} aria-label="">
          <Tab style={{color:"#fdcc8d",fontSize:'15px',fontFamily:'montserrat',fontWeight:'bold'}} label="Mati??res Premi??res" {...a11yProps(0)} />
          <Tab  style={{color:"#fdcc8d",fontSize:'15px',fontFamily:'montserrat',fontWeight:'bold'}} label="Produit Artisanals" {...a11yProps(2)} />
          <Tab  style={{color:"#fdcc8d",fontSize:'15px',fontFamily:'montserrat',fontWeight:'bold'}} label="Annonces" {...a11yProps(2)} />
          <Tab  style={{color:"#fdcc8d",fontSize:'15px',fontFamily:'montserrat',fontWeight:'bold'}} label="Ordres" {...a11yProps(2)} />
        </Tabs>
       
        </Nav> 
        
      <Acceuil value={value} index={0} >
        <Products heading='Trouver votre mati??re Premi??re' data={data.products}/>
      </Acceuil>
      <Acceuil value={value} index={1}>
      <Products heading='Trouver les articles artisanaux' data={data2.products}/> 
      </Acceuil>
      <Acceuil value={value} index={2}>
        <AnnoncesListScreen />
      </Acceuil>
      <Acceuil style={{backgroundImage:"url(/images/order.png)",backgroundSize:"cover",paddingBottom:"30.4rem"}} value={value} index={3}>
        <OrderListScreen orderProps={props}/>
      </Acceuil>
    </div>
  )}
  </div>
  );
}