import PropTypes from 'prop-types';

function IdCard (props) {
    const {firstName,lastName,gender,birth,picture,height} = props;

    const divStyle = {
        height: '200px',
        border: '1px solid #000',
        display: 'flex',
        gap: '35px',
        margin: '10px'
      };

      const imgStyle = {
        padding: '5px'
    };  

      const innerDivStyle = {
        textAlign: 'left'
    };  

    return (
        <div style={divStyle}>
        <img src={picture} style={imgStyle}></img>
            <div style={innerDivStyle}>
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