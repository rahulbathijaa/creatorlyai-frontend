'use client'; // This marks the component as client-side

import React, { useState, useEffect } from 'react';
import examplesData from '../examplesData';

const filteredExamples = examplesData.filter(example => example.id >= 1 && example.id <= 4);

const Header: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % filteredExamples.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const currentImage = filteredExamples[currentImageIndex].src;

  return (
    <div className="header-container">
      <h1 className="main-title">A Modern Way to Optimize YouTube Content</h1>
      <p className="subtitle">Generate YouTube thumbnails and descriptions in seconds</p>
      <div className="button-group">
        <button className="signup-button">Try it out</button>
        <button className="upload-button">Sign up</button>
      </div>
      <div
        className="upload-container"
        style={{ backgroundImage: `url(${currentImage})` }}
      >

      </div>
    </div>
  );
};

export default Header;
