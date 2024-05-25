import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header-container">
      <h1 className="main-title">A MODERN WAY TO OPTIMIZE CONTENT</h1>
      <p className="subtitle">Generate YouTube thumbnails and descriptions in seconds</p>
      <button className="signup-button">Sign up</button>
      <div className="upload-container">
        <button className="upload-button">Upload a video</button>
        <p className="upload-text">or drop a file</p>
      </div>
    </header>
  );
};

export default Header;
