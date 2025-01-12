/* eslint-disable react/prop-types */
import './IdCard.css'

function IdCard ({lastName,firstName,gender,height,birth,picture}) {
    return (
        <>
            <div className='container3'>
                <img src={picture} alt="foto de perfil" />
                <div className='container2'>
                    <p>firstName:{firstName}</p>
                    <p>lastName:{lastName}</p>
                    <p>gender:{gender}</p>
                    <p>height:{height}</p>
                    <p>birth:{birth.toDateString()}</p>
                </div>
            </div>
        </>
    )
}
export default IdCard