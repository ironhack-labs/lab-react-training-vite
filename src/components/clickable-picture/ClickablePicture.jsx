import "./ClickablePicture.css";
import { useState } from "react";

function ClickablePicture({ img, imgClicked }) {

    const [ toggle, setToggle ] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    }

    return(
        <div className="div-clickable-container" >
            <div className="div-clickable-picture">
                <img className="picture" src={img} onClick={handleToggle} />
                { toggle && (<img className="glasses" src={imgClicked} onClick={handleToggle} />) }
            </div>
        </div>
    );
}

export default ClickablePicture;