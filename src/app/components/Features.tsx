import React from 'react';

const Features: React.FC = () => {
  return (
    <section className="features-container">
      <h2 className="features-header">Focus on content creation. We’ll handle the rest.</h2>
      <div className="features-content-wrapper">
        <div className="feature-row">
          <div className="feature-content">
            <h3 className="feature-title">Thumbnails</h3>
            <p className="feature-body">Thumbnails made for the YouTube algorithm.</p>
            <ul className="feature-list">
              <li>Multiple thumbnail options</li>
              <li>Built for your video</li>
              <li>Made in seconds</li>
              <li>Add personal assets (coming soon)</li>
              <li>Editable</li>
              <li>Built for YT Algo</li>
            </ul>
          </div>
          <div className="feature-image">
            <img src="./youtubethumbnailexample.png" alt="Thumbnails feature" />
          </div>
        </div>
        <div className="feature-row">
          <div className="feature-image">
            <img src="./youtubethumbnailexample.png" alt="Descriptions feature" />
          </div>
          <div className="feature-content">
            <h3 className="feature-title">Descriptions</h3>
            <p className="feature-body">Create YouTube descriptions tailored for the algorithm without the work.</p>
            <ul className="feature-list">
              <li>Multiple description options</li>
              <li>CTAs & Links (coming soon)</li>
              <li>Built for your video</li>
              <li>Affiliate links (coming soon)</li>
              <li>Editable</li>
              <li>Built for YT Algo</li>
            </ul>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Features;
