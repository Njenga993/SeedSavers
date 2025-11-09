// src/components/Loader.tsx

import React from 'react';
import '../styles/Loader.css'; // Make sure this path is correct

const Loader: React.FC = () => {
  return (
    <div className="loader-overlay">
      <div className="morphing-dots-container">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
      <p className="loader-text">Loading...</p>
    </div>
  );
};

export default Loader;