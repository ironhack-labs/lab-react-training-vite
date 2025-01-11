/* eslint-disable react/prop-types */
function IdCard({ lastName, firstName, gender, height, birth, picture }) {
    return (
      <div className="idCard">
        <img src={picture} alt="Profile" />
        <div>
          <p><strong>First name:</strong> {firstName}</p>
          <p><strong>Last name:</strong> {lastName}</p>
          <p><strong>Gender:</strong> {gender}</p>
          <p><strong>Height:</strong> {height} cm</p>
          <p><strong>Birth:</strong> {birth.toDateString()}</p>
        </div>
      </div>
    );
  }
  
  export default IdCard;
  