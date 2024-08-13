'use client';

import React, { useState, useEffect } from 'react';
import examplesData from '../examplesData';
import Link from 'next/link';
import '../globals.css';

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
    <div className="pt-8 bg-[#F0EAE0] text-black relative">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex justify-between items-center">
          <div className="max-w-[1000px]">
            <h1 className="font-exo-2 font-bold text-8xl mb-8 leading-tight tracking-tight text-left">
             CONTENT CREATION JUST GOT FASTER
            </h1>
            <p className="font-familjen-grotesk font-large text-xl mb-8 text-left">
            Simply upload a video, and we'll generate a thumbnail and description for you in seconds. 
            </p>
          </div>
          <Link href="/getStarted" className="font-familjen-grotesk font-bold py-5 px-9 text-2xl rounded-[10px] bg-[#000] text-white transition duration-300 hover:bg-[#fc2317] shadow-lg mt-52 ml-24">
            Get started →
          </Link>
        </div>
        <div className="relative mt-10 flex justify-center">
          <div
            className="w-full max-w-[1200px] h-[700px] rounded-[10px] bg-cover bg-center transition duration-1000 shadow-lg"
            style={{ backgroundImage: `url(${currentImage})` }}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
