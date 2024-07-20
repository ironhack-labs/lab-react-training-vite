import PropTypes from 'prop-types'

export default function Random({min, max}) {
  return (
    <h1 className="text-lg border-solid border-black border max-w-80 m-2">Random value between {min} and {max} = {Math.floor(Math.random() * (max - min + 1)) + min}</h1>
  )
}
Random.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number
}
