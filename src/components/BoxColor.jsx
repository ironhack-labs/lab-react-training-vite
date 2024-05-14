import PropTypes from 'prop-types';


function BoxColor (props) {
    const {r,g,b,textcolor} = props;
    const divStyle = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
        width: '500px',
        height: '100px',
        border: '1px solid #000',
        margin: '10px auto',
        textAlign: 'center',
        padding: '10px',
        lineHeight: '2.5',
      };
    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
      }
      
    function rgbToHex(r, g, b) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
      }

    let hexVal= rgbToHex(r,g,b);
    return (
        <div style={{...divStyle,color:textcolor}}>
        rgb({r}, {g}, {b})<br />
        {hexVal}
        </div>
    )
}

BoxColor.propTypes = {
    r: PropTypes.number,
    g: PropTypes.number,
    b: PropTypes.number,
    textcolor: PropTypes.string
  };

export default BoxColor;