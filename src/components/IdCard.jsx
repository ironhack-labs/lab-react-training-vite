import PropTypes from 'prop-types';

function IdCard (props) {
    const {firstName,lastName,gender,birth,picture,height} = props;
    return (
        <div>
        <img src={picture}></img>
            <div>
            <p>First name: {firstName}</p>
            <p>Last name:{lastName} </p>
            <p>Gender: {gender}</p>
            <p>Height: {height}</p>
            <p>Birth: {birth.toDateString()}</p>
            </div> 
        </div>
    )
}

IdCard.propTypes = {
    lastName: PropTypes.string,
    firstName: PropTypes.string,
    gender: PropTypes.oneOf(['male', 'female']),
    height: PropTypes.number,
    birth: PropTypes.instanceOf(Date),
    picture: PropTypes.string
  };

export default IdCard;