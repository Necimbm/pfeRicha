
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Products from'./components/Products'
import data from './components/Products/data'
import { Nav } from './components/Navbar/NavbarElements';
import { NavLink } from './components/Navbar/NavbarElements';
import { Cart } from 'views/ClientLandingPage/components/Navbar/NavbarElements';
import { CartIcon } from 'views/ClientLandingPage/components/Navbar/NavbarElements';
import { NavLink2 } from 'views/Personnaliser/Component/Navbar/NavbarElements';
import { Bars2 } from 'views/signin/components/accountBox/common';
import { useDispatch } from 'react-redux';
import { signout } from 'actions/userActions';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

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

TabPanel.propTypes = {
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

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const userName=JSON.parse(localStorage.getItem('userInfo')).payload.user.name;
  const dispatch=useDispatch();
  const signOutHandler = ()=>{
    dispatch(signout());
  }
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Nav>
      <NavLink to='#'>ريشة <Bars2/></NavLink>
        <Cart to='/cart'>Cart<CartIcon/> </Cart>
        { userName ?(
        <div className="left-link"><ol class="main-menu">
           <li class="main-item">
    <NavLink2 to='/'>{userName}</NavLink2>
      <ol class="sub-menu">
      <li class="sub-item item-left"><a href="/"><span class="small" onClick={signOutHandler} ></span></a></li>
        <li class="sub-item item-left"></li>
        <li class="sub-item item-left"><a href="/Profile"><span class="big" ></span></a></li>
      </ol>
      
    </li>
  </ol></div>
        

):(null)
        }
        
        <Tabs style={{top:'0',position:'absolute'}}value={value} onChange={handleChange} aria-label="">
          <Tab style={{color:"white",fontSize:'20px',fontFamily:'montserrat',fontWeight:'bold'}} label="Acceuil" {...a11yProps(0)} />
          <Tab style={{color:"white",fontSize:'20px',fontFamily:'montserrat',fontWeight:'bold'}} label="Item Two" {...a11yProps(1)} />
          <Tab  style={{color:"white",fontSize:'20px',fontFamily:'montserrat',fontWeight:'bold'}}label="Item Three" {...a11yProps(2)} />
        </Tabs>
       
        </Nav> 
        
      <TabPanel value={value} index={0}>
        <Products heading='Trouver votre matière Première' data={data.products}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        
      </TabPanel>
      <TabPanel value={value} index={2}>
        
      </TabPanel>
    </div>
  );
}