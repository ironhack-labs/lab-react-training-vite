/* eslint-disable react/prop-types */
import visaLogo from "../assets/images/visa.png";
import masterCardLogo from "../assets/images/master-card.svg";
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
    if (type === "Visa") {
      return visaLogo;
    }
    return masterCardLogo;
  };

  const hideCardNumber = (number) => {
    let hiddenNumber = "";

    for (let i = 0; i < number.length; i++) {
      if (i < number.length - 4) {
        hiddenNumber += "•";
      } else {
        hiddenNumber += number[i];
      }
      if ((i + 1) % 4 === 0 && i !== number.length - 1) {
        hiddenNumber += " ";
      }
    }
    return hiddenNumber;
  };

  const formattedExpirationMonth = (expirationMonth) => {
    const monthString = expirationMonth.toString();
    if (monthString.length === 1) {
      return `0${monthString}`;
    }
    return expirationMonth;
  };

  const formattedExpirationYear = (expirationYear) => {
    const yearString = expirationYear.toString();
    if (yearString.length > 2) {
      return yearString.slice(-2);
    }
    return yearString;
  };

  return (
    <div
      className="creditCard"
      style={{ backgroundColor: bgColor, color: color }}
    >
      <img className="cardType" src={getCard(type)} />
      <h2>{hideCardNumber(number)}</h2>
      <p className="textCard">
        Expires {formattedExpirationMonth(expirationMonth)}/
        {formattedExpirationYear(expirationYear)}{" "}
        <span className="bankName">{bank}</span>
      </p>
      <p className="textCard lastText">{owner}</p>
    </div>
  );
}

export default CreditCard;
