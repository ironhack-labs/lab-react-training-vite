import "./RgbColorPicker.css";
import { useState } from "react";
import SingleColorPicker from "../single-color-picker/SingleColorPicker";

function RgbColorPicker() {

    const [ rValue, setRValue ] = useState(255);
    const [ gValue, setGValue ] = useState(255);
    const [ bValue, setBValue ] = useState(255);

    const handleChangeRColor = (event) => {
        setRValue(event.currentTarget.value);
    }

    const handleChangeGColor = (event) => {
        setGValue(event.currentTarget.value);
    }

    const handleChangeBColor = (event) => {
        setBValue(event.currentTarget.value);
    }

    return (
        <div className="rgb-main-container" >
            <div className="single-picker-container" >
                <SingleColorPicker color="R" value={rValue} onChange={handleChangeRColor} />
                <SingleColorPicker color="G" value={gValue} onChange={handleChangeGColor} />
                <SingleColorPicker color="B" value={bValue} onChange={handleChangeBColor} />
            </div>
            <div className="color-picker-container" >
                <div style={{backgroundColor: `rgb(${rValue}, ${gValue}, ${bValue})`}} ></div>
                <span>rgb({rValue},{gValue},{bValue})</span>
            </div>
        </div>
    );
}

export default RgbColorPicker;