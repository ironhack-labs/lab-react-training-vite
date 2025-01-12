
import profiles from "../../data/berlin.json";
import './FaceBook.css'


function FaceBook() {
   

    return(
        
        <div  >
            
            <div>
            {profiles.map((user) =>(
                <div className="containter5" key={`${user.firstName}-${user.lastName}`}>
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