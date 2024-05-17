import PropTypes from 'prop-types';
import { useState } from 'react';

function ClickablePicture(props) {
    const {img,imgClicked} = props;
    // Declare a new state variable, which we'll call "isLoading"
    const [isClicked, setImage] = useState(false); 
    const toggleImages = () => {
        setImage(!isClicked);
      };
    const imgStyle = {
        width: '500px',
        position:'absolute',
        zIndex: '1'
    }

    const glassesStyle = {
        width: '150px',
        position:'relative',
        top: '75px',
        left: '185px',
        zIndex: '2',
        transform: 'rotate(-15deg)'
    }

      return (
        <div>
        <img src={img} style={imgStyle} onClick={toggleImages} />
        {isClicked && <img style={glassesStyle} src={imgClicked}/>}
        </div>
      );
  }

ClickablePicture.propTypes = {
    img: PropTypes.string,
    imgClicked: PropTypes.string
  };

export default ClickablePicture;