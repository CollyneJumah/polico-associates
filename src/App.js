import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="container">
          <HomePage />
        </div>
      </div>
    </Router>
  );
}

export default App;
