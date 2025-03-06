import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Logo from './components/Logo';
import Navigation from './components/Navigation';
import Searchbar from './components/Searchbar';
import Home from './pages/Home';
import About from './pages/About';
import './index.scss'; // Fichier SCSS principal

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="header">
          <div className="logo-container">
            <Logo />
          </div>
          <div className="navbar-container">
            <Navigation />
          </div>
        </header>
        
        <div className="search-container">
          <Searchbar />
        </div>
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;