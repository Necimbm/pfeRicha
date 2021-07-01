
import { signout } from 'actions/userActions';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Home } from 'views/signin/components/accountBox/common';
import { Nav, NavLink, Bars2, Cart, CartIcon, NavLink2 } from './NavbarElements';
import './styles.css'
const Navbar = (props) => {
  const userName = JSON.parse(localStorage.getItem('userInfo')).payload.user.name;
  const dispatch = useDispatch();

  const signOutHandler = () => {
    props.props.history.push('/');
    dispatch(signout());
  }
  const OrdersHandler = () => {
    props.props.history.push('/commandes');
  }

  return (
    <>
      <Nav>

        <NavLink to='/acceuil'>ريشة <Bars2 /><Home style={{fontSize:"40px"}} /> </NavLink>
        <Cart to='/cart'>Cart<CartIcon /> </Cart>
        {userName ? (
          <div className="menu2">
            <ol class="main-menu">
              <li class="main-item"><span><NavLink2 to="/">{userName}</NavLink2></span>
                <ol class="sub-menu">
                  <li class="sub-item item-right"><span class="premium" onClick={signOutHandler} ></span></li>
                  <li class="sub-item item-right"><span class="combo"></span></li>
                  <li class="sub-item item-right"><span class="special" onClick={OrdersHandler}></span></li>
                </ol>
              </li>


            </ol>
          </div>

        ) : (null)
        }


      </Nav>



    </>
  );
};

export default Navbar;
