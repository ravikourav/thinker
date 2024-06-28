import React, { useState } from 'react';
import './css/Header.css';
import placeholder from '../image/profile.png';
import Login from './Login';

import { HiMiniChatBubbleOvalLeftEllipsis ,HiMiniBell} from "react-icons/hi2";

function Header( props)  {

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
        <a className={Selected === 'Home' ? 'selected' : '' } href="#home" onClick={()=>{select('Home')}}>Home</a>
        <a className={Selected === 'Explore' ? 'selected' : '' } href="#explore" onClick={()=>{select('Explore')}}>Explore</a>
        { isLoggedIn && (
        <a className={Selected === 'Create' ? 'selected' : '' } href="#create" onClick={()=>{select('Create')}}>Create</a>)}
      </div>
      <div className="search-container">
        <input type="text" placeholder="Search" className="search-input" />
      </div>
      <div className="user-container">
        {isLoggedIn ? (
          <div>
            <HiMiniBell className='icon' />
            <HiMiniChatBubbleOvalLeftEllipsis className='icon'/>
            <img className="profile-picture" src={placeholder} alt="User" />
          </div>
        ) : (
          <div>
            <a className="login-button" onClick={openLogin} href="#login">Login</a>
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
