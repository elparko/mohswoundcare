// src/pages/Quiz/Quiz.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Quiz.css';

const Quiz = () => {
  return (
    <div className="page-container quiz-page">
      <h1>Wound Care Knowledge Quiz</h1>
      
      <div className="intro-box">
        <p>
          This page will provide an interactive quiz to test your knowledge about proper 
          wound care after Mohs surgery.
        </p>
      </div>

      <section className="info-section">
        <h2>Content Coming Soon</h2>
        <p>
          We're currently developing an interactive quiz for this page. Check back soon to 
          test your knowledge about wound care after Mohs surgery.
        </p>
      </section>
      
      <div className="navigation-links">
        <Link to="/" className="back-link">← Back to Home</Link>
      </div>
    </div>
  );
};

export default Quiz;