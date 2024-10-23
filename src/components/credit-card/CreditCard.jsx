import React from 'react';
import './CreditCard.css';
import visa from '../../assets/images/visa.png';
import masterCard from '../../assets/images/master-card.svg';

function CreditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color} ) {
    
    const cardType = (type === 'Visa') ? visa : masterCard;

    return (
        <div className='credit-card' style={{ backgroundColor: `${bgColor}`, color: `${color}` }}>
            <div className='card-logo'><img src={cardType} alt='card-logo' /></div>
            <div className='card-number'>•••• •••• •••• {number.slice(-4)}</div>
            <div className='card-info'>Expires {expirationMonth.toString().padStart(2, '0')}/{expirationYear.toString().slice(-2)}<span>{bank}</span></div>
            <div className='card-owner'>{owner}</div>    
        </div>
    )
}

export default CreditCard;