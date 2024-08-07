import React, { useState , useEffect} from 'react';
import './css/Header.css';
import placeholder from '../image/profile.png';
import Login from './Login';
import { Link , useLocation } from 'react-router-dom';

import { useMediaQuery } from 'react-responsive';

import { ReactComponent as HomeIcon } from '../image/home.svg';
import { ReactComponent as AddIcon} from '../image/add.svg';
import { ReactComponent as CategoryIcon} from '../image/category.svg';
import { ReactComponent as BellIcon} from '../image/bell.svg';

import NotificationModel from './NotificationModel.js';

function Header()  {
  const location = useLocation();
  const [Selected , setSelected] = useState(location);
  const [isLoggedIn] = useState(true);
  const [isLoginOverlayVisible, setIsLoginOverlayVisible] = useState(false);

  const [notificationBgPage , setNotificationBgPage] = useState();
  const [notificationOpened , setNotificationOpened] = useState(false);

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

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

  const handleNotification = () => {
    if(!notificationOpened){
      setNotificationBgPage(Selected);
      select('Notification');
      setNotificationOpened(true);
    }
    else{
      select(notificationBgPage);
      setNotificationOpened(false);
    }
  }

  return (
    <div className='header-root' >
      {!isMobile ? (
      <div className="header-container">
        <img className="logo" src="/logo192.png" alt="Logo" />
        <div className="nav-links">
          <Link className={`desktop-nav-link ${Selected === 'Home' ? 'nav-selected' : '' }`} to="/" onClick={()=>{select('Home')}}>Home</Link>
          <Link className={`desktop-nav-link ${Selected === 'Explore' ? 'nav-selected' : '' }`} to="explore" onClick={()=>{select('Explore')}}>Explore</Link>
          { isLoggedIn && (
          <Link className={`desktop-nav-link ${Selected === 'Create' ? 'nav-selected' : '' }`} to="create" onClick={()=>{select('Create')}}>Create</Link>)}
        </div>
        <div className="search-container">
          <input type="text" placeholder="Search" className="main-input search-input" />
        </div>
        <div className="header-user-container">
          {isLoggedIn ? (
            <div className='left-nav-links'>
              <BellIcon fill={Selected === 'Notification' ? 'black' : 'white'} stroke={Selected === 'Notification' ? 'white' :'#767676' } className='icon'
              onClick={handleNotification} />
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
      ):(
        <div className="header-container">
            <Link to="/" onClick={()=>{select('Home')}}>
              <HomeIcon fill={ Selected === 'Home' ? 
                'black' : 'white' } stroke={Selected === 'Home' ? 
                'white' : '#767676'} className='nav-icon' />
            </Link>
            <Link to="explore" onClick={()=>{select('Explore')}}>
              <CategoryIcon fill={ Selected === 'Explore' ? 
                'black' : 'white' } stroke={Selected === 'Explore' ? 
                'white' : '#767676'} className='nav-icon' />
            </Link>
            { isLoggedIn && (
              <Link to="create" onClick={()=>{select('Create')}}>
                <AddIcon fill={ Selected === 'Create' ? 
                'black' : 'white' } stroke={Selected === 'Create' ? 
                'white' : '#767676'} className='nav-icon' />
              </Link>
            )}
            {isLoggedIn ? (
            <>
              <BellIcon fill={Selected === 'Notification' ? 'black' : 'white'} stroke={Selected === 'Notification' ? 'white' :'#767676' } className='nav-icon'
              onClick={handleNotification} />
              <Link to='profile' onClick={()=>{select('Profile')}} >
                <img className= 'nav-icon' src={placeholder} alt="User" />
              </Link>
            </>
            ) : (
            <>
              <p className="main-button" onClick={openLogin} >Login</p>
            </>
            )}
        </div>
      )}    

      {Selected === 'Notification' && <NotificationModel />}
      
      <Login
        isVisible={isLoginOverlayVisible}
        onClose={closeLogin}
        accountStaus={false}
      />
    
    </div>
  );
}

export default Header;
