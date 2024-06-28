import React, { useState } from 'react';
import './css/Login.css';

function Login({ isVisible, onClose , accountStaus }) {

  const [hasAccount, setHasAccount] = useState(accountStaus);

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
          <button onClick={onClose} className="close-button">X</button>
        </div>

        {hasAccount ? (
          <div className="body">
            <div>
              <h2>Welcome to Thinker</h2>
              <h3>Slogan</h3>
            </div>
            <form>
              <div>
                <label>Email address</label>
                <input className='input-login' type="text" placeholder="Email" name="username" />
              </div>
              <div>
                <label>Password</label>
                <input className='input-login' type="password" placeholder="Password" name="password" />
              </div>
              <button className="forgot-button" type="button">Forgot Your Password?</button>
            </form>
            <button className="login-button" type="submit">Log in</button>
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
            <div>
              <h2>Welcome to Thinker</h2>
              <h3>Slogan</h3>
            </div>
            <form>
              <div>
                <label>Email address</label>
                <input className='input-login' type="text" placeholder="Email" name="username" />
              </div>
              <div>
                <label>Password</label>
                <input className='input-login' type="password" placeholder="Password" name="password" />
              </div>
              <div>
                <label>Date of birth</label>
                <input className='input-login' type="text" placeholder="dd/mm/yyyy" name="dob" />
              </div>
            </form>
            <button className="login-button" type="submit">Continue</button>
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
