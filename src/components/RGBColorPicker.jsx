import PropTypes from "prop-types";
import { useState } from "react";
import SingleColorPicker from "./SingleColorPicker";

function RGBColorPicker() {
  const [rValue, setRValue] = useState(0);
  const [gValue, setGValue] = useState(0);
  const [bValue, setBValue] = useState(0);
  const containerStyle = {
    display: 'flex',
    margin: '30px',
    padding:'0 10px',
    gap: '15px',
    alignItems: 'center'
}
const boxSizing = {
    width:'50px',
    height: '50px',
    backgroundColor: `rgb(${rValue},${gValue},${bValue})`
}
  return (
    <div>
      <SingleColorPicker
        color="r"
        value={rValue}
        onChange={(e) => {
          return setRValue(e.target.value);
        }}
      />

      <SingleColorPicker
        color="g"
        value={gValue}
        onChange={(e) => {
          return setGValue(e.target.value);
        }}
      />

      <SingleColorPicker
        color="b"
        value={bValue}
        onChange={(e) => {
          return setBValue(e.target.value);
        }}
      />
      <div style={containerStyle}>
        <div style={{ ...boxSizing }}></div>
        <p>rgb({rValue},{gValue},{bValue}):</p>
      </div>
    </div>
  );
}

export default RGBColorPicker;
