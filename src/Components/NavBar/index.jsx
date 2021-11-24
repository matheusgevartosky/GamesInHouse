import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu
} from './Navbar';
import logo from '../../Assets/images/Logo.jpg'


const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={ logo } alt='logo' />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/games' activeStyle>
            Games
          </NavLink>
          <NavLink to='/news' activeStyle>
            News
          </NavLink>
        </NavMenu>
        
      </Nav>
    </>
  );
};

export default Navbar;