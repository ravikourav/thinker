import './App.css';
import Header from './assets/components/Header.js';
import Layout from './assets/components/CardLayout.js';

function App() {
  return (
    <div>
      <Header logedin={true} />
      <Layout/>
    </div>
  );
}

export default App;
