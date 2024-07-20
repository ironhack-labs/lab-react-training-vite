import PropTypes from "prop-types";

export default function BoxColor({r, g, b}) {
  return (
    <div className="w-1/4 h-20 text-white mb-4 border border-black border-solid flex items-center justify-center ml-3" style={{backgroundColor: `rgb(${r},${g},${b})`}}>
      rgb({r},{g},{b})
    </div>
  )
}
BoxColor.propTypes = {
  r: PropTypes.number,
  g: PropTypes.number,
  b: PropTypes.number
}

