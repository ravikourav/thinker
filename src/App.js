import './App.css';
import CardLayout from './assets/components/CardLayout.js';
import Header from './assets/components/Header.js';
import Profile from './assets/components/Profile.js';

function App() {
  return (
    <div>
      <Header logedin={false} />
      <CardLayout />
    </div>
  );
}

export default App;
