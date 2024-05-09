import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Library from './pages/Library';
import Games from './pages/Games';
import Riddler from './pages/Riddler';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/library' exact Component={Library} />
          <Route path='/library/games' exact Component={Games} />
          <Route path='/library/games/riddler' exact Component={Riddler} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
