
import { signout } from 'actions/userActions';
import React from 'react';
import { useDispatch} from 'react-redux';
import { Nav, NavLink,Bars2,Cart,CartIcon, NavLink2 } from './NavbarElements';
import './styles.css';

const Navbar = () => {
  const userName=JSON.parse(localStorage.getItem('userInfo')).payload.user.name;
  const dispatch=useDispatch();
  const signOutHandler = ()=>{
    dispatch(signout());
  }
  
  return (
    <>
      <Nav>
        
        <NavLink to='#'>ريشة <Bars2/></NavLink>
        <Cart to='/cart'>Cart<CartIcon/> </Cart>
        { userName ?(
      <div className="menu">
        <ol class="main-menu">
        <li class="main-item"><span><NavLink2 to="/">{userName} </NavLink2></span>
            <ol class="sub-menu">
              <li class="sub-item item-right"><span class="premium" href="/"onClick={signOutHandler} ></span></li>
              <li class="sub-item item-right"><span class="combo"></span></li>
              
            </ol>
          </li>
          
         
        </ol>
        </div>

):(null)
        }
        
           
      </Nav>
      


    </>
  );
};

export default Navbar;
