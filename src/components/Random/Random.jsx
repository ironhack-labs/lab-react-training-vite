import React from 'react';
import './Random.css';

function Random({ min, max }) {
  
    const random = Math.floor((Math.random() * max) + 1);
    return (
      <div className="div-random">Random value between {min} and {max} => {random}</div>
    )
}

export default Random;