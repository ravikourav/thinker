import React, { useState , useEffect} from 'react';
import './css/Header.css';
import placeholder from '../image/profile.png';
import Login from './Login';
import { Link , useLocation } from 'react-router-dom';

import {HiMiniBell} from "react-icons/hi2";

function Header()  {
  const location = useLocation();
  const [Selected , setSelected] = useState(location);
  const [isLoggedIn] = useState(true);
  const [isLoginOverlayVisible, setIsLoginOverlayVisible] = useState(false);

  useEffect(() => {
    const path = location.pathname.substring(1) || 'Home';
    setSelected(path.charAt(0).toUpperCase() + path.slice(1));
  }, [location]);

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
    <div>
      <div className="header-container">
        <img className="logo" src="/logo192.png" alt="Logo" />
        <div className="nav-links">
          <Link className={Selected === 'Home' ? 'nav-selected' : '' } to="/" onClick={()=>{select('Home')}}>Home</Link>
          <Link className={Selected === 'Explore' ? 'nav-selected' : '' } to="explore" onClick={()=>{select('Explore')}}>Explore</Link>
          { isLoggedIn && (
          <Link className={Selected === 'Create' ? 'nav-selected' : '' } to="create" onClick={()=>{select('Create')}}>Create</Link>)}
        </div>
        <div className="search-container">
          <input type="text" placeholder="Search" className="main-input search-input" />
        </div>
        <div className="header-user-container">
          {isLoggedIn ? (
            <div className='left-nav-links'>
              <HiMiniBell className='icon' />
              <Link to='profile' onClick={()=>{select('Profile')}} >
                <img className= 'profile-picture' src={placeholder} alt="User" />
              </Link>
            </div>
          ) : (
            <div>
              <p className="main-button" onClick={openLogin} >Login</p>
            </div>
          )}
        </div>
      </div>

      <Login
          isVisible={isLoginOverlayVisible}
          onClose={closeLogin}
          accountStaus={false}
        />
    
    </div>
  );
}

export default Header;
