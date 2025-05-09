// src/pages/NonSteriStrip/NonSteriStrip.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NonSteriStrip.css';

const NonSteriStrip = () => {
  return (
    <div className="page-container non-steristrip-page">
      <h1>Conventional Wound Care</h1>
      
      <div className="intro-box">
        <p>
          Your Mohs surgery wound requires conventional wound care with regular dressing changes.
          This page provides detailed instructions for properly caring for your wound to promote 
          optimal healing and minimize scarring.
        </p>
      </div>

      <section className="care-section">
        <h2>Daily Wound Care Instructions</h2>
        
        <p>Content coming soon...</p>
      </section>
      
      <div className="navigation-links">
        <Link to="/" className="back-link">← Back to Home</Link>
      </div>
    </div>
  );
};

export default NonSteriStrip;