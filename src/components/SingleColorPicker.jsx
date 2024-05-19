import PropTypes from "prop-types";

function SingleColorPicker({color,value,onChange}) {
    const boxColorR={
        backgroundColor: `rgb(${value},0,0)`
    }
    const boxColorG={
        backgroundColor: `rgb(0,${value},0)`
    }
    const boxColorB={
        backgroundColor: `rgb(0,0,${value})`
    }
    function chosenStyle (color) {
        if(color === "r") {
    return boxColorR;
        }
        else if(color === "g") {
    return boxColorG;
        }
        else {
    return boxColorB;
        }
    }
    const boxSizing = {
        width:'50px',
        height: '50px'
    }
    const containerStyle = {
        display: 'flex',
        margin: '30px',
        padding:'0 10px',
        gap: '15px',
        alignItems: 'center'
    }

  return (
    <div style={containerStyle}>
    <div style={{...chosenStyle(color),...boxSizing}}></div>
    <p>{color.toUpperCase()}:</p>
    <input type="number" min="0" max="255" onChange={onChange}/>
    </div>
  );
}

SingleColorPicker.propTypes = {
    color: PropTypes.string,
    value: PropTypes.number,
    onChange: PropTypes.string
  };
export default SingleColorPicker;
