/* eslint-disable react/prop-types */
import Rating from "./Rating";

function DriverCard({name, rating, img, car}) {
    return <div className="driverCard">
    <img className="imgIdCard" src={img} />
    <div className="driverData">
    <h2>{name}</h2>
    <Rating>{rating}</Rating>
    <h4>{car.model} - {car.licensePlate}</h4>
    </div>

    </div>
}

export default DriverCard