"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { FiCopy, FiDownload } from "react-icons/fi";

export interface MainContentProps {
  imagesUrls: string[];
  descriptionText: string;
}

const MainContent: React.FC<MainContentProps> = ({
  imagesUrls,
  descriptionText,
}) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1000);
  }, []);

  const handleDownload = (src: string, alt: string) => {
    const link = document.createElement("a");
    link.href = src;
    link.download = alt;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); // Clean up the link element
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className={`main-content flex ${loaded ? "opacity-100" : "opacity-10"} p-8`}>
      <div className="description-section w-1/3 pr-8 border-r border-gray-300 relative">
        <h2 className="text-2xl font-inter font-bold mb-4">Your Description</h2>
        <div className="text-box-container w-full relative">
          <div
            className="text-box bg-white border font-inter border-gray-300 rounded w-full h-[630px] overflow-y-auto p-4"
          >
            {descriptionText}
            <button
              className="absolute bottom-4 right-4 p-2 bg-gray-200 rounded-full hover:bg-gray-300"
              onClick={() => handleCopy(descriptionText)}
            >
              <FiCopy />
            </button>
          </div>
        </div>
      </div>
      <div className="thumbnails-section w-2/3 pl-8">
        <h2 className="text-2xl font-inter font-bold mb-4">Your Thumbnails</h2>
        <div className="grid grid-cols-2 gap-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="thumbnail-container">
              <div className="relative group" style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */, position: 'relative', height: 0, border: '1px solid lightgray', borderRadius: '8px' }}>
                {imagesUrls[index] ? (
                  <img
                    src={imagesUrls[index]}
                    alt={`Thumbnail ${index + 1}`}
                    className="object-cover w-full h-full cursor-pointer rounded"
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '8px' }}
                    onClick={() => handleDownload(imagesUrls[index], `Thumbnail${index + 1}.png`)}
                  />
                ) : (
                  <div className="thumbnail-placeholder" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '8px', border: '1px solid lightgray' }}></div>
                )}
                {imagesUrls[index] && (
                  <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100">
                    <FiDownload />
                  </div>
                )}
              </div>
              <p className="text-center mt-2">Thumbnail {index + 1}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainContent;