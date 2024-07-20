import PropTypes from 'prop-types'

export default function Idcard({ lastName, firstName, gender, height, birth, picture }) {
  return (
    <div className="flex flex-row p-4 bg-white rounded border-zinc-950 border-solid border m-2">
      <img src={picture} alt={`${firstName} ${lastName}`} className="" />
      <div className="flex flex-col">
        <p className="font-bold"><strong>First Name:</strong> {firstName}</p>
        <p className="font-bold"><strong>Last Name:</strong> {lastName}</p>
        <p className="font-bold"><strong>Gender:</strong> {gender}</p>
        <p className="font-bold"><strong>Height:</strong> {height} cm</p>
        <p className="font-bold"><strong>Birth:</strong> {new Date(birth).toDateString()}</p>
      </div>
    </div>
  )
}
Idcard.propTypes = {
  lastName: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  gender: PropTypes.oneOf(['male', 'female']).isRequired,
  height: PropTypes.number.isRequired,
  birth: PropTypes.instanceOf(Date).isRequired,
  picture: PropTypes.string.isRequired,
};