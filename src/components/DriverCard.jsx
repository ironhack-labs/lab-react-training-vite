import PropTypes from 'prop-types';

function DriverCard (props) {
    const {name,rating,img,car} = props;
    const divStyle = {
        border: '1px solid #000',
        gap: '20px',
        margin: '15px',
        display: 'flex',
        justifyContent: 'center',
        padding: '25px',
        backgroundColor: 'rgb(53,71,166)',
        color: 'white',
      };
    const nameStyle = {
        fontWeight: '600',
        fontSize: 'x-large'
    }
      function stars (num) {
        let filled='★';
        let empty='☆';
        return filled.repeat(num)+empty.repeat(5-num);
    }
    let starNum=Math.floor(rating);

    const imgStyle = {
        padding: '5px',
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        objectFit: 'cover'
    };  

    const starSize= {
        fontSize: 'x-large'
    }

    return (
        <div style={divStyle}>
        <img src={img} style={imgStyle}></img>
            <div>
            <p style={nameStyle}>{name}</p>
            <p style={starSize}>{stars(starNum)} </p>
            <p>{car.model} - {car.licensePlate}</p>
            </div> 
        </div>
    )
}

DriverCard.propTypes = {
    name: PropTypes.string,
    rating: PropTypes.number,
    img: PropTypes.string,
    car: PropTypes.shape({
        model: PropTypes.string,
        licensePlate: PropTypes.string
      }),
  };

export default DriverCard;