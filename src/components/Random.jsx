import PropTypes from 'prop-types';

function Random (props) {
    const {min,max} = props;
    const divStyle = {
        border: '1px solid #000',
        margin: '10px'
      };

    function randomNum (min,max){
        let rando;
        rando = Math.floor(min + Math.random()*(max-min+1));
        return rando;
    }
    return (
        <div style={divStyle}>
        <p>
        Random value between {min} and {max} ={">"} {randomNum(min,max)}</p>
        </div>
    )
}

Random.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number
  };

export default Random;