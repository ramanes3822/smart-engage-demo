import './App.css';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import HomePage from './HomePage';
import LandingPage from './LandingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route path="/landing" element={<LandingPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
