// Train.js
import React from 'react';
import './Train.css';

const Train = ({ position }) => {
  return (
    <div className="train" style={{ left: `${position}px` }}>
      <div className="train-body"></div>
      <div className="train-wheel"></div>
      <div className="train-wheel"></div>
      <div className="train-wheel"></div>
    </div>
  );
}

export default Train;
