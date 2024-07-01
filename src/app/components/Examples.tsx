'use client'; // Ensure the file is a client-side component

import React, { useState } from 'react';
import examplesData from '../examplesData';

const Examples: React.FC = () => {
  const [selectedExample, setSelectedExample] = useState<null | number>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleOverlayClose = () => {
    setSelectedExample(null);
  };

  const selectedExampleData = selectedExample !== null 
    ? examplesData.find((example) => example.id === selectedExample) 
    : null;

  const handleScroll = (direction: 'left' | 'right') => {
    const container = document.getElementById('scroll-container');
    if (container) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      setScrollPosition(container.scrollLeft + scrollAmount);
    }
  };

  return (
    <div className="p-12 bg-[#FFFFF] lg:px-40">
      <h2 className="font-exo-2 text-left font-bold text-4xl mb-4 pb-6">
        See it in action
      </h2>
      <div className="relative">
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
          onClick={() => handleScroll('left')}
        >
          &lt;
        </button>
        <div id="scroll-container" className="flex overflow-x-scroll space-x-4 pb-6">
          {examplesData.map((example) => (
            <div
              key={example.id}
              className="relative w-80 h-80 flex-shrink-0 overflow-hidden cursor-pointer"
              onClick={() => setSelectedExample(example.id)}
            >
              <img
                src={example.src}
                alt={`Example ${example.id}`}
                className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
          onClick={() => handleScroll('right')}
        >
          &gt;
        </button>
      </div>

      {selectedExampleData && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 flex items-center justify-center" onClick={handleOverlayClose}>
          <div className="bg-white p-8 rounded-lg text-left relative max-w-[750px]" onClick={(e) => e.stopPropagation()}>
            <button className="absolute top-2 right-3 bg-none border-none text-lg cursor-pointer" onClick={handleOverlayClose}>
              Close
            </button>
            <img
              src={selectedExampleData.src}
              alt={`Example ${selectedExampleData.id}`}
              className="max-w-full rounded-lg h-auto"
            />
            {selectedExampleData.description.split('\n').map((paragraph, index) => (
              <p key={index} className="mt-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Examples;
