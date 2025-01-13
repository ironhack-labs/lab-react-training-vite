/* eslint-disable react/prop-types */
import './DriverCard.css'
function DriverCard ({name,rating,img,car}){
    const { model, licensePlate } = car;
    return(
        <div className="profileCard">
            <div className=''>
                <img src={img} alt="Foto de perfil" />
            </div>
            <div>
                <p>{name}</p>
                <p>{rating}</p>
                <p>{model} - {licensePlate}</p>
            </div>
        </div>

    )
}
export default DriverCard