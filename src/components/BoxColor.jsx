/* eslint-disable react/prop-types */
function BoxColor({ r, g, b }) {
  const bgColor = `rgb(${r}, ${g}, ${b})`;

  return (
    <div
      style={{
        backgroundColor: bgColor,
        width: "100%",
        height: "100px",
        color: r + g + b > 382 ? "black" : "white",
      }}
    >
      <p className="centerText">{bgColor}</p>
    </div>
  );
}

export default BoxColor;
