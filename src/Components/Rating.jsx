import React from 'react';

const Rating = ({ children }) => {
  const valorRating = Math.min(Math.max(parseFloat(children), 0), 5);

  const estrellasLlenas = Math.ceil(valorRating);

  const estrellas = Array.from({ length: 5 }, (_, index) => {
    if (index < estrellasLlenas) {
      return '★';
    } else {
      return '☆';
    }
  });

  return (
    <div>
      {estrellas.map((estrella, index) => (
        <span key={index}>{estrella}</span>
      ))}
    </div>
  );
};

export default Rating;
