import PropTypes from 'prop-types';
import Visa from '../assets/images/visa.png';
import MasterCard from '../assets/images/master-card.svg';


function CreditCard (props) {
    const {type,number,expirationMonth,expirationYear
      ,bank,owner,bgColor,color} = props;
    let lastFour = number.slice(12,);
    let Link = type==='Visa' ? Visa : MasterCard;
    const divStyle = {
      width: '350px',
      height: '160px',
      border: '1px solid #000',
      padding: '10px',
      borderRadius: '10px',
      position: 'relative',
      display:'flex',
      flexDirection: 'column',
    };
    const logoDivStyle = {
      display: 'flex',
      justifyContent: 'flex-end',
      padding:'10px'
    };

    const logoStyle = {
      height: '20px',
      right:'20px',
      top:'20px',
      display: 'flex',
      alignItems: 'flex-end',
    };

    const cardNum = {
      height: '22px',
      fontSize: '1.7em',
      marginTop: '20px',
      textAlign: 'center'
    };

    const cardExtra = {
      height: '12px',
      fontSize: '0.8em',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      lineHeight: '0.02'
    };

    return (
        <div style={{...divStyle,backgroundColor:bgColor,color:color}}>
        <div style={logoDivStyle}><img src={Link} style={logoStyle}></img>
        </div>
            <div>
            <p style={cardNum}>•••• •••• •••• •••• {lastFour}</p>
            <div style={cardExtra}>
            <p>Expires {expirationMonth}/{expirationYear} {bank}</p>
            <p>{owner}</p>
            </div>
            </div> 
        </div>
    )
}

CreditCard.propTypes = {
    type: PropTypes.oneOf(['Visa', 'Master Card']),
    number: PropTypes.string,
    expirationMonth: PropTypes.oneOf(['1', '2', '3','4','5','6','7','8','9','10','11','12']),
    expirationYear: PropTypes.number,
    bank: PropTypes.string,
    owner: PropTypes.string,
    bgColor: PropTypes.string,
    color: PropTypes.string
  };

export default CreditCard;