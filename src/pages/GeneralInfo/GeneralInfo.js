// src/pages/GeneralInfo/GeneralInfo.js
import React from 'react';
import { Link } from 'react-router-dom';
import './GeneralInfo.css';

const GeneralInfo = () => {
  return (
    <div className="page-container general-info-page">
      <h1>General Wound Care Information</h1>
      
      <div className="intro-box">
        <p>
          This page will provide comprehensive information about general wound care principles 
          and best practices following Mohs surgery.
        </p>
      </div>

      <section className="info-section">
        <h2>Content Coming Soon</h2>
        <p>
          We're currently developing the content for this page. Check back soon for detailed 
          information about general wound care after Mohs surgery.
        </p>
      </section>
      
      <div className="navigation-links">
        <Link to="/" className="back-link">← Back to Home</Link>
      </div>
    </div>
  );
};

export default GeneralInfo;