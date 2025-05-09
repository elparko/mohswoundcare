// src/pages/AboutAuthor/AboutAuthor.js
import React from 'react';
import { Link } from 'react-router-dom';
import './AboutAuthor.css';

const AboutAuthor = () => {
  return (
    <div className="page-container about-author-page">
      <h1>About the Author</h1>
      
      <div className="intro-box">
        <p>
          This page will provide information about the medical professional(s) who created 
          and contributed to this wound care resource.
        </p>
      </div>

      <section className="info-section">
        <h2>Content Coming Soon</h2>
        <p>
          We're currently developing the content for this page. Check back soon for information 
          about the author and contributors.
        </p>
      </section>
      
      <div className="navigation-links">
        <Link to="/" className="back-link">← Back to Home</Link>
      </div>
    </div>
  );
};

export default AboutAuthor;