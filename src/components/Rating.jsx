/* eslint-disable react/prop-types */
function Rating({ children }) {
  const roundedRate = Math.round(children);
  let rate = "";
  for (let i = 0; i < 5; i++) {
    if (i < roundedRate) {
      rate += "★";
    } else {
      rate += "☆";
    }
  }
  return <div>{rate}</div>;
}

export default Rating;
