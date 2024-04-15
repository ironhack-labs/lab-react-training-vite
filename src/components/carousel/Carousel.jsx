import "./Carousel.css";
import { useState } from "react";

function Carousel({ images }) {

    const [ index, setIndex ] = useState(0);

    const handleLeft = () => {
        index ? setIndex(index - 1) : setIndex(images.length - 1);
    }

    const handleRight = () => {
        (index === images.length - 1) ? setIndex(0) : setIndex(index + 1);
    }

    return (
        <div className="carousel">
            <img src={images[index]} />
            <div className="btns">
                <button onClick={handleLeft} >Left</button>
                <button onClick={handleRight} >Right</button>
            </div>
        </div>
    );
}

export default Carousel;