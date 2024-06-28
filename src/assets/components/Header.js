import React, { useState } from 'react';
import './css/Header.css';
import placeholder from '../image/profile.png';
import Login from './Login';
import { Link } from 'react-router-dom';

import {HiMiniBell} from "react-icons/hi2";

function Header(props)  {

  const [Selected , setSelected] = useState('Home');
  const [isLoggedIn] = useState(props.logedin);
  const [isLoginOverlayVisible, setIsLoginOverlayVisible] = useState(false);

  const openLogin = () => {
    setIsLoginOverlayVisible(true);
  };

  const closeLogin = () => {
    setIsLoginOverlayVisible(false);
  };

  const select = (clicked) => {
    setSelected(clicked);
  };

  return (
    <>
    <div className="header-container">
      <img className="logo" src="/logo192.png" alt="Logo" />
      <div className="nav-links">
        <Link className={Selected === 'Home' ? 'selected' : '' } to="/" onClick={()=>{select('Home')}}>Home</Link>
        <Link className={Selected === 'Explore' ? 'selected' : '' } to="explore" onClick={()=>{select('Explore')}}>Explore</Link>
        { isLoggedIn && (
        <Link className={Selected === 'Create' ? 'selected' : '' } to="create" onClick={()=>{select('Create')}}>Create</Link>)}
      </div>
      <div className="search-container">
        <input type="text" placeholder="Search" className="input-login search-input" />
      </div>
      <div className="user-container">
        {isLoggedIn ? (
          <div>
            <HiMiniBell className='icon' />
            <Link to='profile' onClick={()=>{select('profile')}} >
              <img className={`profile-picture ${Selected ==='profile' && 'profile-picture-selected' }`} src={placeholder} alt="User" />
            </Link>
          </div>
        ) : (
          <div>
            <p className="open-login-button" onClick={openLogin} >Login</p>
          </div>
        )}
      </div>
    </div>

    <Login
        isVisible={isLoginOverlayVisible}
        onClose={closeLogin}
        accountStaus={false}
      />
    
    </>
  );
}

export default Header;
