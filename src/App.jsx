import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LibraryPage from "./pages/LibraryPage";
import AboutPage from "./pages/AboutPage";
import WordlePage from "./pages/WordlePage";
import TestPage from "./pages/TestPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="content">
          <Routes>
            <Route path="/" exact Component={HomePage} />
            <Route path="/library" exact Component={LibraryPage} />
            <Route path="/about" exact Component={AboutPage} />
            <Route path="/library/wordle" exact Component={WordlePage} />
            <Route path="/library/test" exact Component={TestPage} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
