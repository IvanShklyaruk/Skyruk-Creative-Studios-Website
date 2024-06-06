import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import HomePage from "./pages/HomePage";
import LibraryPage from "./pages/LibraryPage";
import WordlePage from "./pages/WordlePage";
import TestPage from "./pages/TestPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact Component={HomePage} />
          <Route path="/library" exact Component={LibraryPage} />
          <Route path="/library/wordle" exact Component={WordlePage} />
          <Route path="/library/test" exact Component={TestPage} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
