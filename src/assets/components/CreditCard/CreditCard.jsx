import React from 'react';
import './CreditCard.css';
import visaLogo from '../../images/visa.png';
import masterCardLogo from '../../images/master-card.svg';

function CreditCard({
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
}) {
    const cardLogo = type === 'Visa' ? visaLogo : masterCardLogo;
    const lastFourDigits = number.slice(-4);

    return (
        <div className="credit-card-container">
            <div className="credit-card" style={{ backgroundColor: bgColor, color: color }}>
                <img src={cardLogo} alt="Card Logo" className="card-logo" />
                <div className="card-number">•••• •••• •••• {lastFourDigits}</div>
                <div className="card-info">
                    <div className="card-info-row">
                        <span className="info-label">Expires</span>
                        <span className="info-value">
                            {expirationMonth.toString().padStart(2, '0')}/{expirationYear.toString().slice(-2)}
                        </span>
                    </div>
                    <div className="card-info-row">
                        <span className="info-label">Bank</span>
                        <span className="info-value">{bank}</span>
                    </div>
                    <div className="card-info-row">
                        <span className="info-label">Owner</span>
                        <span className="info-value">{owner}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreditCard;

