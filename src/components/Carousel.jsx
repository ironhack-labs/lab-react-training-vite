import { useState } from 'react';
import PropTypes from 'prop-types';

function Carousel (props) {
    const {images} = props;
    const [currentImg,setcurrentImg] = useState(images[0]);
    
    function handleImage (direction) {
        let imgCount = images.length;
        let currentIndex = images.indexOf(currentImg);
        if (0===currentIndex && direction==='left') {
            return setcurrentImg(images[imgCount-1]);
        }
        else if (currentIndex===imgCount-1 && direction==='right') {
            return setcurrentImg(images[0]);
        }
        else if (direction==='left') {
            return setcurrentImg(images[currentIndex-1]);
        }
        else if (direction==='right') {
            return setcurrentImg(images[currentIndex+1]);
        }
    }

    return (
        <div>
            <button onClick={() => handleImage('left')}>Left</button>
            <img src={currentImg}/>
            <button onClick={() => handleImage('right')}>Right</button>
        </div>
    )
};

 Carousel.propTypes = {
     images: PropTypes.arrayOf(PropTypes.string),
   };

export default Carousel;