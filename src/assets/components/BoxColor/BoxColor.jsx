import React from "react";
import '../Greetings/Greetings.css'

function BoxColor ({ r, g, b}) {
   
    const clamp = (value) => Math.min(255, Math.max(0, value));

    const backgroundColor = `rgb(${clamp(r)}, ${clamp(g)}, ${clamp(b)})`;

    return  (
        <div className="text-box" style={{ backgroundColor }}>
            <p>RGB: {r}, {g}, {b}</p>
        </div>
      );
}

export default BoxColor;
