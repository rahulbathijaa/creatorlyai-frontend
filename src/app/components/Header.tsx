'use client';

import React, { useState, useEffect } from 'react';
import examplesData from '../examplesData';

const filteredExamples = examplesData.filter(example => example.id >= 1 && example.id <= 4);

const Header: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('thumbnails');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % filteredExamples.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const currentImage = filteredExamples[currentImageIndex].src;

  return (
    <div className="pt-6 bg-[#F3ECFE] text-black">
      <div className="max-w-[1400px] mx-auto">
        <h1 className="font-['Apercu_Mono'] font-bold text-8xl mb-6 leading-tight tracking-tight text-left">
          A MODERN WAY TO<br />OPTIMIZE CONTENT
        </h1>
        <p className="font-familjen-grotesk font-normal text-xl mb-6 text-left">
          Generate YouTube thumbnails and descriptions in seconds
        </p>
        <div className="flex gap-4 mb-8">
          <button className="font-familjen-grotesk font-normal py-4 px-8 text-xl rounded-[5px] bg-[#FF3B30] text-white transition duration-300 hover:bg-[#fc2317]">
            Try it out
          </button>
        </div>
        <div className="flex justify-end mb-2">
          <button
            className={`px-4 py-2 ${activeTab === 'thumbnails' ? 'bg-blue-500 text-white' : 'bg-gray-200'} rounded-tl-md rounded-tr-md`}
            onClick={() => setActiveTab('thumbnails')}
          >
            Thumbnails
          </button>
          <button
            className={`px-4 py-2 ${activeTab === 'descriptions' ? 'bg-blue-500 text-white' : 'bg-gray-200'} rounded-tl-md rounded-tr-md`}
            onClick={() => setActiveTab('descriptions')}
          >
            Descriptions
          </button>
        </div>
        <div
          className="w-full max-w-[1200px] h-[600px] rounded-tl-[5px] rounded-bl-[5px] rounded-r-[5px] bg-cover bg-center transition duration-1000"
          style={{ backgroundImage: `url(${currentImage})` }}
        >
        </div>
      </div>
    </div>
  );
};

export default Header;
