import PropTypes from 'prop-types';

function Random (props) {
    const {min,max} = props;
    function randomNum (min,max){
        let rando;
        rando = Math.floor(min + Math.random()*(max-min+1));
        return rando;
    }
    return (
        <div>
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