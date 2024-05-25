import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="header-container">
      <h1 className="main-title">A Modern Way to Optimize Content</h1>
      <p className="subtitle">Generate YouTube thumbnails and descriptions in seconds</p>
      <button className="signup-button">Sign up</button>
      <div className="upload-container">
        <button className="upload-button">Upload a video</button>
      </div>
    </div>
  );
};

export default Header;
