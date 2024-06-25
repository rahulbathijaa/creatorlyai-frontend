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
    <div className="p-12 bg-[#ECFEEC] lg:px-40">
      <h2 className="font-syne text-center pt-6 mx-auto font-bold text-2xl mb-4 pb-6">
        See it in action
      </h2>
      <div className="grid grid-cols-1 gap-4 pb-6 sm:grid-cols-2 lg:grid-cols-4">
        {examplesData.map((example) => (
          <div
            key={example.id}
            className="relative pt-[56.25%] overflow-hidden cursor-pointer"
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
