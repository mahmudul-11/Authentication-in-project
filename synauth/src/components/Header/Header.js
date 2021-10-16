import React from 'react';
import './Header.css'
import { BrowserRouter, Switch, Route, Link, NavLink } from 'react-router-dom'

import useAuth from '../../hooks/useAuth';
const Header = () => {
  const {user, logout} =useAuth()
    return (
        <div className='header'>
            <NavLink to='/home'
            activeStyle={{
                fontWeight: "bold",
                color: "red"
              }}>Home</NavLink>
            <NavLink to='/login'
            activeStyle={{
                fontWeight: "bold",
                color: "red"
              }}>Log in</NavLink>
            <NavLink to='/register'
            activeStyle={{
                fontWeight: "bold",
                color: "red"
              }}>Register</NavLink>
              <span> {user?.displayName} </span>
            {user?.displayName && <button onClick={logout}>Log out</button>}
        </div>
    );
};

export default Header;