import './CreditCard.css'
import visa from '../../assets/images/visa.png'
import master from '../../assets/images/master-card.svg'

function CreditCard ({type,number,expirationMonth,expirationYear,bank,owner,bgColor,color}){
    const cardType = (card)=> {
        if (card === 'visa') {
            return visa;
        }
        return master
    } ;  
    const maskCreditCard = (cardNumber) => {
        const cardString = String(cardNumber);
        return cardString.slice(0, -4).replace(/./g, '*') + cardString.slice(-4);
    };
    const BgColorSelect = `${bgColor}`
    const colorSelect = `${color}`
    


    return(
        <div className="card" style={{ backgroundColor:BgColorSelect, color:colorSelect}}>
            <div className='tipo'>
                <img src={cardType(type)} alt="" />
            </div>
            <div className='numero'>
            <p>{maskCreditCard(number)}</p>
            </div> 
            <div className='info'>
                <p>{expirationMonth}</p>
                <p>{expirationYear}</p>
                <p>{bank}</p>
            </div>
            <div className='titular'>
                <p>{owner}</p>
            </div>
        </div>

    )
}
export default CreditCard