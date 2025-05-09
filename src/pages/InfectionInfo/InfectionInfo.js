// src/pages/InfectionInfo/InfectionInfo.js
import React from 'react';
import { Link } from 'react-router-dom';
import './InfectionInfo.css';

const InfectionInfo = () => {
  return (
    <div className="page-container infection-info-page">
      <h1>Recognizing and Preventing Wound Infections</h1>
      
      <div className="intro-box">
        <p>
          While infections after Mohs surgery are uncommon, it's important to know how to recognize 
          the signs of infection and take appropriate steps to prevent them. This page provides 
          information to help you monitor your wound healing process.
        </p>
      </div>

      <section className="info-section">
        <h2>Signs and Symptoms of Wound Infection</h2>
        
        <p>Content coming soon...</p>
      </section>
      
      <div className="navigation-links">
        <Link to="/" className="back-link">← Back to Home</Link>
      </div>
    </div>
  );
};

export default InfectionInfo;