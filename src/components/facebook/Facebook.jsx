import "./Facebook.css";
import profiles from "../../data/berlin.json";
import { useState } from "react";

function Facebook() {

    const [ selectedCountry, setSelectedCountry ] = useState("All countries");

    const countries = ["All countries", ...profiles
        .map(profile => profile.country)
        .filter((country, index, arr) => arr.indexOf(country) === index)];

    const handleClick = (event) => {
        setSelectedCountry(event.currentTarget.name);
    }

    return(
        <div className="fb-container">
            <div className="fb-btns">
                { countries.map((country, index) => (
                    <button key={index} name={country} onClick={handleClick} style={{backgroundColor: country === selectedCountry ? "lightgray" : "snow"}} >{country}</button>
                ))}
            </div>
            { profiles.map((profile, index) => (
                <div key={index} className="fb-card" style={{backgroundColor: profile.country === selectedCountry ? "lightgray" : "snow"}} >
                    <div className="fb-card-picture">
                        <img src={profile.img} />
                    </div>
                    <div className="fb-card-body" >
                        <p><b>First name: </b> {profile.firstName}</p>
                        <p><b>Last name: </b> {profile.lastName}</p>
                        <p><b>Country: </b> {profile.country}</p>
                        <p><b>Type: </b>{profile.isStudent ? "Student" : "Teacher"}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Facebook;