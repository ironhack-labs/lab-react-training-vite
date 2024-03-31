import React from 'react';
import './DriverCard.css';

const DriverCard = (props) => {
    const { name, rating, img, car } = props;
    const value = Math.round(rating);
    const stars = [];

    for (let i = 0; i < 5; i++) {
        if (i < value) {
            stars.push('★');
        } else {
            stars.push('☆');
        }
    }

    return (
        <div className='driver-card'>
            <img src={img} alt={name} />
            <div className='info-driver'>
                <p><strong>{name}</strong></p>
                <div>
                    {stars.map((star, index) => (
                        <span key={index}>{star}</span>
                    ))}
                </div>
                <p>{car.model} - {car.licensePlate}</p>
            </div>
        </div>
    );
};

export default DriverCard;

