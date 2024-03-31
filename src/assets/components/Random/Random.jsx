import React from "react";
import '../Greetings/Greetings.css'
function Random ({ min, max }) {
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return  (
        <div className="text-box">
          <p>Random Number between {min} and {max} is {randomNum}</p>
        </div>
      );
}

export default Random;
