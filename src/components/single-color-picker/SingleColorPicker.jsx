import "./SingleColorPicker.css";

function SingleColorPicker({ color, value, onChange }) {

    return (
        <div className="rgb-picker-container">
            <div style={{backgroundColor: `rgb(${color === "R" ? value : 0}, ${color === "G" ? value : 0}, ${color === "B" ? value : 0})`}} ></div>
            <label>{color}:</label>
            <input type="number" value={value} onChange={onChange} min={0} max={255} />
        </div>
    );
}

export default SingleColorPicker;