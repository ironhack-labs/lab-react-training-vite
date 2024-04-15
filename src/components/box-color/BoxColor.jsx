import React from 'react';

function BoxColor({ r, g, b}) {
  return (
    <div style={{backgroundColor: `rgb(${r}, ${g}, ${b}`, margin: '0.5rem', padding: '2rem'}}>rgb({r},{g},{b})</div>
  )
}

export default BoxColor;