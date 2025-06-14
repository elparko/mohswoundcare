// src/App.js
import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import './App.css';

// Import page components
import Home from './pages/Home';
import SecondIntention from './pages/SecondIntention';
import SteriStrips from './pages/SteriStrips';
import NonSteriStrip from './pages/NonSteriStrip';
import StapleCare from './pages/StapleCare';
import InfectionInfo from './pages/InfectionInfo';
import PainManagement from './pages/PainManagement';
import GeneralInfo from './pages/GeneralInfo/GeneralInfo';
import FurtherReading from './pages/FurtherReading/FurtherReading';
import AboutAuthor from './pages/AboutAuthor/AboutAuthor';

// Header component with navigation
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src="/logo192.png" alt="Mohs Wound Care" className="logo-image" />
            <span className="logo-text">Mohs Wound Care</span>
          </Link>
        </div>
        <input type="checkbox" id="nav-toggle" className="nav-toggle" />
        <label htmlFor="nav-toggle" className="nav-toggle-label">
          <span></span>
        </label>
        <nav className="main-nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/second-intention">Second Intention</Link></li>
            <li><Link to="/steri-strips">Steri Strips</Link></li>
            <li><Link to="/non-steri-strip">Non-Steri Strip</Link></li>
            <li><Link to="/staple-care">Staple Care</Link></li>
            <li><Link to="/infection-info">Infection Info</Link></li>
            <li><Link to="/pain-management">Pain Management</Link></li>
            <li><Link to="/general-info">General Info</Link></li>
            <li><Link to="/further-reading">Further Reading</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

// Footer component
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Mohs Wound Care. All rights reserved.</p>
        <p className="disclaimer">
          This website provides general information and is not a substitute for professional medical advice.
          Always consult your healthcare provider for specific medical concerns.
        </p>
      </div>
    </footer>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/second-intention" element={<SecondIntention />} />
            <Route path="/steri-strips" element={<SteriStrips />} />
            <Route path="/non-steri-strip" element={<NonSteriStrip />} />
            <Route path="/staple-care" element={<StapleCare />} />
            <Route path="/infection-info" element={<InfectionInfo />} />
            <Route path="/pain-management" element={<PainManagement />} />
            <Route path="/general-info" element={<GeneralInfo />} />
            <Route path="/further-reading" element={<FurtherReading />} />
            <Route path="/about" element={<AboutAuthor />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;