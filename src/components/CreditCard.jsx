/* eslint-disable react/prop-types */
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
    const getCard = (type) => {
        if(type==="Visa"){
            return "./assets/images/visa.png"
        } 
        return "./assets/images/master-card.svg"
        
    }

  return <div className="creditCard" style={{ backgroundColor: bgColor , color: color }}>
    <img src={getCard()} />


  </div>;
}

export default CreditCard;
