// src/pages/FurtherReading/FurtherReading.js
import React from 'react';
import { Link } from 'react-router-dom';
import './FurtherReading.css';

const FurtherReading = () => {
  return (
    <div className="page-container further-reading-page">
      <h1>Further Reading and Resources</h1>
      
      <div className="intro-box">
        <p>
          This page will provide additional resources, references, and recommended reading 
          about wound care after Mohs surgery.
        </p>
      </div>

      <section className="info-section">
        <h2>Content Coming Soon</h2>
        <p>
          We're currently compiling a list of valuable resources and references. Check back 
          soon for detailed information about additional wound care resources.
        </p>
      </section>
      
      <div className="navigation-links">
        <Link to="/" className="back-link">← Back to Home</Link>
      </div>
    </div>
  );
};

export default FurtherReading;