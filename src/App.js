import './App.css';
import Header from './assets/components/Header.js';
import { Outlet } from 'react-router-dom';

function App() {
  
  return (
    <>
      <Header logedin={true} />
      <Outlet />
    </>
  );
}

export default App;
