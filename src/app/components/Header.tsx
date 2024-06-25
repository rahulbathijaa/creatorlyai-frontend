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
    <div className="pt-12 text-center bg-[#ECF6FE]">
      <h1 className="font-syne max-w-[1000px] mx-auto font-bold text-4xl mb-8 leading-none tracking-tight">
        A Modern Way to Optimize YouTube Content
      </h1>
      <p className="font-familjen-grotesk font-normal text-xl mb-8">
        Generate YouTube thumbnails and descriptions in seconds
      </p>
      <div className="flex gap-4 justify-center mb-8">
        <button className="font-familjen-grotesk font-normal py-2 px-6 text-xl rounded-lg bg-[#FF3B30] text-white transition duration-300 hover:bg-[#fc2317]">
          Try it out
        </button>
        <button className="bg-[#f0f0f0] text-black py-2 px-6 text-xl rounded-lg transition duration-300 hover:bg-[#a5a5a5]">
          Sign up
        </button>
      </div>
      <div
        className="flex flex-col items-center mt-16 p-56 border-5 border-black border-b-0 max-w-[800px] mx-auto rounded-t-lg bg-cover bg-center transition duration-1000"
        style={{ backgroundImage: `url(${currentImage})` }}
      >
      </div>
      <div className="w-full h-1.25 bg-black mt-8"></div>
    </div>
  );
};

export default Header;
