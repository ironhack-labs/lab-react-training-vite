import PropTypes from "prop-types";

const maskCreditCard = (number) => {
  if (!number || number.length < 4) return number;
  const lastFourDigits = number.slice(-4);
  const maskedSection = number.slice(0, -4).replace(/\d/g, '*');
  return `${maskedSection}${lastFourDigits}`;
};

export default function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) {
  return (
    <div className="w-1/4 h-44 m-2 rounded" style={{ backgroundColor: bgColor, color: color }}>
      <div>
        <div className="flex justify-end" id="card-type">
          {type === "Visa" ? (
            <img className="w-12 h-5 mt-4 mr-4" src="/src/assets/images/visa.png" alt="Visa" />
          ) : (
            <img className="w-12 h-7 mt-4 mr-4" src="/src/assets/images/master-card.svg" alt="MasterCard" />
          )}
        </div>
      
      <div id="number" className="mb-7 flex justify-center">
        <h1 className="text-2xl">{maskCreditCard(number)}</h1>
      </div>
      <div className="ml-4" id="data">
        <div className="flex flex-row">
          <p className="pr-4">
            Expires: {expirationMonth}/{expirationYear}
          </p>
          <p>{bank}</p>
        </div>
        <p>{owner}</p>
      </div>
    </div>
    </div>
  );
}

CreditCard.propTypes = {
  type: PropTypes.oneOf(["Visa", "Master Card"]).isRequired,
  number: PropTypes.string,
  expirationMonth: PropTypes.number,
  expirationYear: PropTypes.number,
  bank: PropTypes.string,
  owner: PropTypes.string,
  bgColor: PropTypes.string,
  color: PropTypes.string,
};
