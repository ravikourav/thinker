import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider , createBrowserRouter } from 'react-router-dom';

import App from './App';
import Home from './assets/layout/Home';
import Profile from './assets/layout/Profile.js';
import Explore from './assets/layout/Explore.js';
import Create from './assets/layout/Create.js';

const router = createBrowserRouter([{
  path: '/',
  element: <App/>,
  children: [
    {
      path : '',
      element : <Home />
    },
    {
      path: 'explore',
      element: <Explore />
    },
    {
      path: 'profile',
      element: <Profile />
    },
    {
      path: 'create',
      element: <Create />
    }
  ]
}])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
