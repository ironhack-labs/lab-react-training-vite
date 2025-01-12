
import profiles from "../../data/berlin.json";
import './FaceBook.css'
import { useState } from 'react'


function FaceBook() {
    const [isOn, setIsOn] = useState(null)

    const uniqueCountries = [...new Set(profiles.map((user) => user.country))];
    const handleClick = (country)=>{
        setIsOn(country)
    }
   

    return(
        
        <div>
        <div>
            {uniqueCountries.map((country)=>(
            <button className={`switch ${isOn === country ? 'color' : '' }`} onClick={() => handleClick(country)}key={country}>{country}</button>                
            ))}


        </div>
            
            <div>
            {profiles.map((user) =>(
                <div className={`containter5 switch ${user.country === isOn  ? 'color' : 'off'}`}  key={`${user.firstName}-${user.lastName}`}>
                <div>
                <img src={user.img} alt="imagen de perfil" />
                </div>
                <div>
                <p >First name: {user.firstName}</p>
                <p >Last name: {user.lastName}</p>
                <p >Country: {user.country}</p>
                {user.isStudent === true ? <p>type: Student</p>: <p>type: Teacher</p>}
                </div>
                </div>      
            ))}
            </div>
        </div>


    )
}

export default FaceBook