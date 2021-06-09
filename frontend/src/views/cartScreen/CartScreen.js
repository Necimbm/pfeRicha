// import { addToCart } from 'actions/cartActions';
// import React, { useEffect, useState } from 'react'
// import { useDispatch } from 'react-redux';
// import AppBar from '@material-ui/core/AppBar';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import { Box } from '@material-ui/core';
// import Typography from 'material-ui/styles/typography';

// export default function CartScreen(props) {
//     const productId=props.match.params._id;
//     const dispatch=useDispatch;
//     const qty=props.location.search?Number(props.location.search.split('=')[1]):1;
//    const [value, seTvalue] = useState('initialState')



//    function TabPanel(props) {
//     const { children, value, index, ...other } = props;
  
//     return (
//       <div
//         role="tabpanel"
//         hidden={value !== index}
//         id={`simple-tabpanel-${index}`}
//         aria-labelledby={`simple-tab-${index}`}
//         {...other}
//       >
//         {value === index && (
//           <Box p={3}>
//             <Typography>{children}</Typography>
//           </Box>
//         )}
//       </div>
//     );
//   }
  
//  ;
  
//    const handleChange = (e)=>{
//     seTvalue({...value,[e.target.name]: e.target.value})
//    };
   
// function a11yProps(index) {
//     return {
//       id: `simple-tab-${index}`,
//       'aria-controls': `simple-tabpanel-${index}`,
//     };
//   }
   
//    useEffect(() => {
     
//     },[dispatch, productId, qty])
//     return (
//     //     <div>
//     // <h1>Carte screen</h1>
//     //     <p>ADD TO CART :   {productId} QTY: {qty}</p>
//     //     </div>
//     <div>
//     <AppBar position="static">
//   <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
//     <Tab label="Item One" name="tab1" {...a11yProps(0)} />
//     <Tab label="Item Two"name="tab3" {...a11yProps(1)} />
//     <Tab label="Item Three"name="tab2" {...a11yProps(2)} />
//   </Tabs>
// </AppBar>
// <TabPanel value={value} index={0}>
//   Item One
// </TabPanel>
// <TabPanel value={value} index={1}>
//   Item Two
// </TabPanel>
// <TabPanel value={value} index={2}>
//   Item Three
// </TabPanel>
// </div>   )
// }
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Hero from 'views/LandingPage/components/Hero';
import App from 'views/ClientLandingPage';
import Products from'views/ArtisanLandingPage/components/Products'
import data from 'views/ArtisanLandingPage/components/Products/data'
import Navbar from 'views/ClientLandingPage/components/Navbar';
import { Nav } from 'views/ClientLandingPage/components/Navbar/NavbarElements';


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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Nav>
      
        <Tabs style={{top:'0',position:'absolute'}}value={value} onChange={handleChange} aria-label="">
          <Tab style={{color:"white",fontSize:'20px',fontFamily:'montserrat',fontWeight:'bold'}} label="Acceuil" {...a11yProps(0)} />
          <Tab style={{color:"white",fontSize:'20px',fontFamily:'montserrat',fontWeight:'bold'}} label="Item Two" {...a11yProps(1)} />
          <Tab  style={{color:"white",fontSize:'20px',fontFamily:'montserrat',fontWeight:'bold'}}label="Item Three" {...a11yProps(2)} />
        </Tabs>
       
        </Nav> 
        
      <TabPanel value={value} index={0}>
        <Products heading='Votre meilleur choix' data={data.products}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        
      </TabPanel>
      <TabPanel value={value} index={2}>
        
      </TabPanel>
    </div>
  );
}
