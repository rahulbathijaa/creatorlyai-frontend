import React from 'react';

const Features: React.FC = () => {
  return (
    <section className="features-container">
      <h2 className="features-header">Focus on content creation. We’ll handle the rest.</h2>
      <div className="feature-row">
        <div className="feature-content">
          <h3 className="feature-title">Thumbnails</h3>
          <p className="feature-body">Thumbnails made for the YouTube algorithm.</p>
          <ul className="feature-list">
            <li>Multiple options</li>
            <li>Editable</li>
            <li>Built for YT Algo</li>
            <li>Multiple options</li>
            <li>Editable</li>
            <li>Built for YT Algo</li>
          </ul>
        </div>
        <div className="feature-image">
          <img src="/path/to/thumbnail-image.png" alt="Thumbnails feature" />
        </div>
      </div>
      <div className="feature-row">
        <div className="feature-content">
          <h3 className="feature-title">Descriptions</h3>
          <p className="feature-body">With links and all that.</p>
          <ul className="feature-list">
            <li>Multiple options</li>
            <li>Editable</li>
            <li>Built for YT Algo</li>
            <li>Multiple options</li>
            <li>Editable</li>
            <li>Built for YT Algo</li>
          </ul>
        </div>
        <div className="feature-image">
          <img src="/path/to/description-image.png" alt="Descriptions feature" />
        </div>
      </div>
    </section>
  );
};

export default Features;
