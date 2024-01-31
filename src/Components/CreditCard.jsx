import React from 'react';

const CreditCard = ({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) => {
    return (
        <div className='creditCard'>

        <div className='number'>
         
        <h3>{number}</h3>

        </div>
       
        <div className='expiration'>
        {`${expirationMonth}/${expirationYear} ${bank}`}
       
        </div>
        <div className='owner'>
        {owner}
        </div>
        
        
        
            
        </div>
    );
};

export default CreditCard;