'use client'; // Ensure the file is a client-side component

import React, { useState } from 'react';
import examplesData from '../examplesData';

const Examples: React.FC = () => {
  const [selectedExample, setSelectedExample] = useState<null | number>(null);

  const handleOverlayClose = () => {
    setSelectedExample(null);
  };

  const selectedExampleData = selectedExample !== null 
    ? examplesData.find((example) => example.id === selectedExample) 
    : null;

  return (
    <div className="examples-container">
      <h2 className="examples-title">Built for YouTube Creators</h2>
      <div className="grid">
        {examplesData.map((example) => (
          <div
            key={example.id}
            className="example-block"
            onClick={() => setSelectedExample(example.id)}
          >
            <img
              src={example.src}
              alt={`Example ${example.id}`}
              className="example-image"
            />
          </div>
        ))}
      </div>

      {selectedExampleData && (
        <div className="overlay" onClick={handleOverlayClose}>
          <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={handleOverlayClose}>
              Close
            </button>
            <img
              src={selectedExampleData.src}
              alt={`Example ${selectedExampleData.id}`}
              className="overlay-image"
            />
            <p className="overlay-description">
              {selectedExampleData.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Examples;
