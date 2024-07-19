import React, { useState , useEffect} from 'react';
import './css/Login.css';
import {ReactComponent as CloseImg} from '../image/close.svg';


function Login({ isVisible, onClose , accountStaus }) {

  const [hasAccount, setHasAccount] = useState(accountStaus);

  useEffect(() => {
    if (isVisible) {
      setHasAccount(true); // Reset to login screen when modal becomes visible
    }
  }, [isVisible]);

  if (!isVisible) {
    return null;
  }

  const alreadyHasAccount = () => {
    setHasAccount(true);
  };

  const dontHaveAccount = () => {
    setHasAccount(false);
  };

  return (
    <div className="overlay">
      <div className="overlay-content">
        <div className="overlay-header">
          <img src="./logo192.png" alt="logo" className="logo" />
          <CloseImg onClick={onClose} className="close-button" />
        </div>

        {hasAccount ? (
          <div className="body">
            <div className='login-appname-container'>
              <p className='login-model-welcome'>Welcome To</p>
              <p className='login-model-name'>Wise Men Said</p>
              <p className='login-model-slogan'>"Spark Minds, Share Moments"</p>
            </div>
            <form >
              <div>
                <label>Email address</label>
                <input className='main-input input-login' type="text" placeholder="Email" name="username" />
              </div>
              <div>
                <label>Password</label>
                <input className='main-input input-login' type="password" placeholder="Password" name="password" />
              </div>
              <button className="forgot-button" type="button">Forgot Your Password?</button>
            </form>
            <button className="main-button login-button" type="submit">Log in</button>
            <button
              className="signup-button"
              type="button"
              onClick={dontHaveAccount}
            >
              Not on Thinker yet? Sign up
            </button>
          </div>
        ) : (
          <div className="body">
            <div className='login-appname-container'>
              <p className='login-model-welcome'>Welcome To</p>
              <p className='login-model-name'>Wise Men Said</p>
              <p className='login-model-slogan'>"Spark Minds, Share Moments"</p>
            </div>
            <form>
              <div>
                <label>Email address</label>
                <input className='main-input input-login' type="text" placeholder="Email" name="username" />
              </div>
              <div>
                <label>Password</label>
                <input className='main-input input-login' type="password" placeholder="Password" name="password" />
              </div>
              <div>
                <label>Date of birth</label>
                <input className='main-input input-login' type="text" placeholder="dd/mm/yyyy" name="dob" />
              </div>
            </form>
            <button className="main-button login-button" type="submit">Continue</button>
            <button
              className="signup-button"
              type="button"
              onClick={alreadyHasAccount}
            >
              Already a member? Log in
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
