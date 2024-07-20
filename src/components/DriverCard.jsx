import PropTypes from 'prop-types';
import Rating from './Rating';

export default function DriverCard({name, rating, img, car}) {
    return (
    <div className='flex bg-teal-600 mb-3 text-white w-1/2 rounded-xl justify-center'>
        <img className='w-16 h-16 rounded-full' src={img} alt="person photo" />
        <div className='flex flex-col'>
        <h1>{name}</h1>
        <Rating>{rating}</Rating>
        <h3>{car.model}-{car.licensePlate}</h3>
        </div>
    </div>
    )
}

DriverCard.propTypes = {
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    // ((rating) => {
    //     if(rating < 0 && rating > 5){
    //         return new Error();
    //     }
    // }),
    img: PropTypes.string.isRequired,
    car: PropTypes.object.isRequired
}