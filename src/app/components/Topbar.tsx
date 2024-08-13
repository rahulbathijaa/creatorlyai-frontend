"use client";

import React from "react";
import { Button } from "./button";
import '.././globals.css';

// TopBar props
export interface TopBarProps {
  onNewVideoClick: () => void; // New prop for handling New Video button click
}

const TopBar: React.FC<TopBarProps> = ({
  onNewVideoClick, // Destructure the new prop
}) => {
  return (
    <div className="top-bar flex justify-between items-center bg-white border-b border-gray-200">
      <div className="logo ml-6 text-black font-handjet font-bold text-xl">C</div>
      <div className="upload-section flex items-center space-x-8 pr-6">
        <Button
          onClick={onNewVideoClick}
          className="bg-black text-white mr-6 hover:bg-gray-800 font-inter"
        >
          New Video
        </Button>
      </div>
    </div>
  );
};

export default TopBar;