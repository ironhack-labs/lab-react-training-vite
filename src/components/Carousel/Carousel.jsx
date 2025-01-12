/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";

function Carousel({ images }) {
  const [imageOn, setImageOn] = useState(0);

  const imageLeft = () => {
    setImageOn((prevImg) => {
      if (prevImg === 0) {
        return images.length - 1;
      }
      return prevImg - 1;
    });
  };
  const imageRigth = () => {
    setImageOn((prevImg) => {
      if (prevImg === images.length - 1) {
        return 0;
      }
      return prevImg + 1;
    });
  };

  return (
    <div className="container1">
      <button onClick={imageLeft}>left</button>
      <img src={images[imageOn]} alt="foto de perfil" />
      <button onClick={imageRigth}>right</button>
    </div>
  );
}

export default Carousel;
